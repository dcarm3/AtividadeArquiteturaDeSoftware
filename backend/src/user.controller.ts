import { Controller, Post, Body, Get } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.schema";
import { InMemoryLogger } from "./logger/in-memory-logger";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly logger: InMemoryLogger
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get("log")
  getLogs() {
    return this.logger.getLogs();
  }
}
