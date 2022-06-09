import {
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsString,
} from "class-validator";
import {
  RequestType,
  SimsimServices,
  UpdateRulesOfRole,
} from "./role.interface";

export class GetRoleDTO {
  @IsNotEmpty()
  @IsString()
  roleTitle: string;
}

export class PutRulesOfRoleDTO {
  @IsNotEmpty()
  @IsString()
  roleTitle: string;

  @IsNotEmpty()
  @IsEnum(UpdateRulesOfRole)
  condition: UpdateRulesOfRole;

  @IsNotEmpty()
  @IsEnum(RequestType)
  requestType: RequestType;

  @IsNotEmpty()
  @IsEnum(SimsimServices)
  service: SimsimServices;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayUnique()
  routes: string[];
}

export class PostRoleDTO {
  @IsNotEmpty()
  @IsString()
  roleTitle: string;
}

export class DeleteRoleDTO {
  @IsNotEmpty()
  @IsString()
  roleTitle: string;
}
