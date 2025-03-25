import { Model } from 'mongoose';
import { UserDocument } from '../user.schema';
export declare class AuthService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    private generateCode;
    private sendVerificationEmail;
    register(email: string, password: string): Promise<{
        message: string;
    }>;
    verifyCode(email: string, code: string): Promise<{
        message: string;
        token: string;
    }>;
}
