import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "./user.controller";
import { UsersService } from "./users.service";
import { User, UserSchema } from "./user.schema";
import { InMemoryLogger } from "./logger/in-memory-logger";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, InMemoryLogger],
})
export class UsersModule {}
