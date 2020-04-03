import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeasModule } from './idea/idea.module';

@Module({
  imports: [
    HttpModule,
    IdeasModule,
    MongooseModule.forRoot('mongodb://localhost/ideas',
    { useNewUrlParser: true },
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
