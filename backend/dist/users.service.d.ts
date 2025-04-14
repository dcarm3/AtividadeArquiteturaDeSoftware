import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './create-user.dto';
import { Logger } from './logger/logger';
export declare class UsersService {
    private userModel;
    private logger;
    constructor(userModel: Model<UserDocument>, logger: Logger);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
}
