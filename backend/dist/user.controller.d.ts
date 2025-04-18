import { UsersService } from "./users.service";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.schema";
import { InMemoryLogger } from "./logger/in-memory-logger";
export declare class UsersController {
    private readonly usersService;
    private readonly logger;
    constructor(usersService: UsersService, logger: InMemoryLogger);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    getLogs(): string[];
}
