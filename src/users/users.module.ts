import { Module } from '@nestjs/common';

import { RolesController } from './controllers/roles.controller';
import { UsersController } from './controllers/users.controller';
import { RolesService } from './services/roles.service';
import { UsersService } from './services/users.service';

@Module({
  controllers: [RolesController, UsersController],
  providers: [RolesService, UsersService],
})
export class UsersModule {}
