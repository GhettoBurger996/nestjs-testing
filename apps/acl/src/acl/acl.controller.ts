import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { HttpExceptionFilter } from "opt/simsim/common/http-exception.filter";
import { GetUserAclDTO, PostUserAclDTO } from "../../utils/acl/acl.dto";
import { AclService } from "./acl.service";

@Controller("acl")
@UseFilters(HttpExceptionFilter)
export class AclController {
  constructor(private readonly aclService: AclService) {}

  @Get("/userAcl")
  getUserAcl(@Query() { username }: GetUserAclDTO): Promise<any> {
    return this.aclService.getUserAcl(username);
  }

  @Post("/userAcl")
  createUserAcl(@Body() { username, roleId }: PostUserAclDTO): Promise<any> {
    return this.aclService.createUserAcl("req.user.username", username, roleId);
  }
}
