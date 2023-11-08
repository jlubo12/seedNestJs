import { Controller, Get, HttpCode, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  path: 'health',
  version: VERSION_NEUTRAL,
})
export class HealthController {
  /** Get the liveness probe response */
  @Get('liveness')
  @HttpCode(200)
  getLivenessProbe(): string {
    return 'OK';
  }

  /** Get the readiness probe response */
  @Get('readiness')
  @HttpCode(200)
  getReadinessProbe(): string {
    return 'OK';
  }
}
