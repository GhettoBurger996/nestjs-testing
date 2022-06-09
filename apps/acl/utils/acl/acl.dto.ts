import {
  ArrayMinSize,
  ArrayUnique,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";
import {
  RequestType,
  SimsimServices,
  UpdateRulesOfACL,
  UpdateRuleTypesOfACL,
} from "../roles/role.interface";

export class GetUserAclDTO {
  @IsNotEmpty()
  @IsString()
  username: string;
}

export class PostUserAccessDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  requestType: string;

  @IsNotEmpty()
  @IsString()
  service: string;

  @IsNotEmpty()
  @IsString()
  route: string;
}

export class PutRulesOfAclDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEnum(UpdateRulesOfACL)
  condition: UpdateRulesOfACL;

  @IsNotEmpty()
  @IsEnum(UpdateRuleTypesOfACL)
  policy: UpdateRuleTypesOfACL;

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

export class PostUserAclDTO {
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  roleId: string;
}
