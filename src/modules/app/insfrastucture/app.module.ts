import { Module } from '@nestjs/common';
import { HealthModule } from 'src/modules/health';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
