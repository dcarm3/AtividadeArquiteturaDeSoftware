import { Model } from "mongoose";
import { User, UserDocument } from "./user.schema";
import { CreateUserDto } from "./create-user.dto";
import { InMemoryLogger } from "./logger/in-memory-logger";
export declare class UsersService {
    private userModel;
    private logger;
    constructor(userModel: Model<UserDocument>, logger: InMemoryLogger);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
}
