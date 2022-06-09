import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { simsimRoutes } from "opt/simsim/common/interfaces";
import { ACL, ACLDocument } from "opt/simsim/schemas/acl.schema";
import { Role, RoleDocument } from "opt/simsim/schemas/roles.schema";

@Injectable()
export class AclService {
  constructor(
    @InjectModel(ACL.name) private aclModel: Model<ACLDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
  ) {}

  getUserAcl = async (username: string): Promise<any> => {
    try {
      return this.aclModel
        .findOne({ username })
        .select({ _id: 0, inlineRules: 1, denyRules: 1 })
        .populate("role", { _id: 0, title: 1, rules: 1 });
    } catch (error) {
      console.log(error);

      throw new HttpException({ error }, HttpStatus.FORBIDDEN);
    }
  };

  createUserAcl = async (
    author: string,
    username: string,
    roleId: string,
  ): Promise<any> => {
    try {
      if (roleId) {
        await this.roleModel.findOne({ _id: roleId }).orFail();
      }

      const userAcl = new this.aclModel({
        username,
        role: roleId,
        inlineRules: simsimRoutes,
        denyRules: simsimRoutes,
        author: author,
        editor: author,
      });

      return userAcl.save();
    } catch (error) {
      console.log(error);
      if (error.filter) {
        throw new HttpException(
          { type: "app", description: error.message },
          HttpStatus.FORBIDDEN,
        );
      }

      throw new HttpException({ error }, HttpStatus.FORBIDDEN);
    }
  };
}
