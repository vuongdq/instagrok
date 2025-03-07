import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HastagModule } from 'src/modules/hastags/hastag.module';

@Module({
  imports: [HastagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
