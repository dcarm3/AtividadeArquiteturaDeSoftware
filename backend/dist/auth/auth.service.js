"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../user.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
let AuthService = class AuthService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    generateCode() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    async sendVerificationEmail(email, code) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'luang8006@gmail.com',
                pass: 'nbqh vvzk gbwd gfyb',
            },
        });
        await transporter.sendMail({
            from: '"Sistema" <seuemail@gmail.com>',
            to: email,
            subject: 'Código de Verificação',
            text: `Seu código de verificação é: ${code}`,
        });
    }
    async register(email, password) {
        const existingUser = await this.userModel.findOne({ email });
        if (existingUser)
            throw new common_1.BadRequestException('Usuário já cadastrado.');
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
    async verifyCode(email, code) {
        const user = await this.userModel.findOne({ email });
        if (!user)
            throw new common_1.BadRequestException('Usuário não encontrado.');
        if (user.verificationCode !== code)
            throw new common_1.BadRequestException('Código incorreto.');
        user.isVerified = true;
        user.verificationCode = null;
        await user.save();
        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });
        return { message: 'Conta verificada!', token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map