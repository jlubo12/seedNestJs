import { Module } from '@nestjs/common';
import { HealthModule } from 'src/modules/health';

@Module({
  imports: [HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
