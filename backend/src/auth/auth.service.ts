import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  private generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Código de 6 dígitos
  }

  private async sendVerificationEmail(email: string, code: string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'luang8006@gmail.com', 
        // Substitua pelo email do usuário
        pass: 'nbqh vvzk gbwd gfyb', 
        // para definir senha do Nodemailer:
        //1. Ativar 2FA da conta do Google
        //2. Barra de pesquisa : "Senhas de app"
        //3. Escrever "Nodemailer" e clicar em criar
        //4. Copiar a senha gerada e colar no campo pass
      },
    });

    await transporter.sendMail({
      from: '"Sistema" <seuemail@gmail.com>',
      to: email,
      subject: 'Código de Verificação',
      text: `Seu código de verificação é: ${code}`,
    });
  }

  async register(email: string, password: string) {
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) throw new BadRequestException('Usuário já cadastrado.');

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationCode = this.generateCode();

    const user = await this.userModel.create({
      email,
      password: hashedPassword,
      verificationCode,
    });

    await this.sendVerificationEmail(email, verificationCode);
    return { message: 'Código enviado para o e-mail.' };
  }

  async verifyCode(email: string, code: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) throw new BadRequestException('Usuário não encontrado.');

    if (user.verificationCode !== code)
      throw new BadRequestException('Código incorreto.');

    user.isVerified = true;
    user.verificationCode = null;
    await user.save();

    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

    return { message: 'Conta verificada!', token };
  }
}
