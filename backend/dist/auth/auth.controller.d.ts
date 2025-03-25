import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
    }>;
    verify(body: {
        email: string;
        code: string;
    }): Promise<{
        message: string;
        token: string;
    }>;
}
