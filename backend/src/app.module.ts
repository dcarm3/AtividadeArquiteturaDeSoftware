import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from "./user.module";
import { AuthModule } from "./auth/auth.module";
import { InMemoryLogger } from "./logger/in-memory-logger";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/rafaGaey"),
    UsersModule,
    AuthModule,
  ],
  providers: [InMemoryLogger],
})
export class AppModule {}
