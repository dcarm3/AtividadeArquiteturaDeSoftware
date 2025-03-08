import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/rafaGaey'), UsersModule ],
    

})
export class AppModule {}
