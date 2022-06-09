import { UserRole, UserStatus } from "opt/simsim/common/interfaces";
import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { UserGender } from "./user.interface";
import { Type } from "class-transformer";

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  fullName: string;

  @IsOptional()
  @IsEnum(UserGender)
  gender: UserGender;

  @IsOptional()
  @IsDateString()
  birthdate: string;
}

export class GetUserDTO {
  @IsOptional()
  @IsString()
  userId: string;
}

export class GetUsersDTO {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @IsInt()
  @Type(() => Number)
  page: number;

  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;

  @IsOptional()
  @IsString()
  searchTerm: string;

  @IsOptional()
  @IsEnum(UserStatus)
  status: UserStatus;
}

export class GetUsersNoPaginationDTO {
  @IsNotEmpty()
  @IsEnum(UserRole)
  role: UserRole;
}
