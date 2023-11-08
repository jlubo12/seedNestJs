import { Controller, Get, HttpCode, VERSION_NEUTRAL } from '@nestjs/common';

@Controller({
  path: '',
  version: VERSION_NEUTRAL,
})
export class HealthController {
  /** Get the liveness probe response */
  @Get()
  @HttpCode(200)
  getLivenessProbe(): string {
    return 'OK';
  }
}
