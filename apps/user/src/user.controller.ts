import {
  Body,
  Controller,
  Get,
  Put,
  Query,
  Request,
  UseFilters,
  UseGuards,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { HttpExceptionFilter } from "opt/simsim/common/http-exception.filter";
import { GetUserDTO, GetUsersDTO, UpdateUserDTO } from "../utils/user.dto";

import { UserRole } from "opt/simsim/common/interfaces";

// Mongo
import { PaginateResult } from "mongoose";
import { User } from "opt/simsim/schemas/user.schema";

@Controller("user")
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/user")
  getUser(@Query() { userId }: GetUserDTO): Promise<User> {
    const role = "staff";

    if (role === UserRole.STAFF) {
      return this.userService.getUser(userId);
    } else {
      return this.userService.getUser("req.user._id");
    }
  }

  @Get("/users")
  getUsers(
    @Query() { page, role, searchTerm, status }: GetUsersDTO,
  ): Promise<PaginateResult<User>> {
    return this.userService.getUsers(role, page, searchTerm, status);
  }

  @Put("/user")
  editUser(
    @Query() { userId }: GetUserDTO,
    @Body() updateUserDto: UpdateUserDTO,
  ): Promise<any> {
    const role = "staff";

    if (role === UserRole.STAFF) {
      return this.userService.editUser(
        "req.user.username",
        userId,
        updateUserDto,
      );
    } else if (role === UserRole.CUSTOMER) {
      return this.userService.editUser(
        "req.user.username",
        "req.user._id",
        updateUserDto,
      );
    }
  }
}
