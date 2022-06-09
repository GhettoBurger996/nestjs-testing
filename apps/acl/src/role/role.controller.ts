import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseFilters,
} from "@nestjs/common";
import { HttpExceptionFilter } from "opt/simsim/common/http-exception.filter";
import {
  DeleteRoleDTO,
  GetRoleDTO,
  PostRoleDTO,
} from "../../utils/roles/role.dto";
import { RoleService } from "./role.service";

@Controller("role")
@UseFilters(HttpExceptionFilter)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get("/role")
  getRole(@Query() { roleTitle }: GetRoleDTO): Promise<any> {
    return this.roleService.getRole(roleTitle);
  }

  @Get("/roles")
  getRoles(): Promise<any> {
    return this.roleService.getRoles();
  }

  @Post("/role")
  createRole(@Body() { roleTitle }: PostRoleDTO): Promise<any> {
    return this.roleService.createRole("req.user.username", roleTitle);
  }

  @Delete("/role")
  deleteRole(@Query() { roleTitle }: DeleteRoleDTO): Promise<any> {
    return this.roleService.deleteRole(roleTitle);
  }
}
