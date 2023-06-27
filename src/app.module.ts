import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchModule } from './match/match.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'goal',
    entities: [],
    synchronize: true,
  }), MatchModule,
],],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
