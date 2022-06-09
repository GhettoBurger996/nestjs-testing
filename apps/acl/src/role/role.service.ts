import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { simsimRoutes } from "opt/simsim/common/interfaces";
import { Role, RoleDocument } from "opt/simsim/schemas/roles.schema";

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  getRole = async (title: string): Promise<any> => {
    try {
      return this.roleModel.findOne({ title }).exec();
    } catch (error) {
      console.log(error);

      throw new HttpException({ error }, HttpStatus.FORBIDDEN);
    }
  };

  getRoles = async (): Promise<any> => {
    try {
      return this.roleModel.find();
    } catch (error) {
      console.log(error);

      throw new HttpException({ error }, HttpStatus.FORBIDDEN);
    }
  };

  createRole = async (username: string, title: string): Promise<any> => {
    try {
      const userRole = new this.roleModel({
        title,
        rules: simsimRoutes,
        author: username,
        editor: username,
      });

      return userRole.save();
    } catch (error) {
      console.log(error);

      throw new HttpException({ error }, HttpStatus.FORBIDDEN);
    }
  };

  deleteRole = async (title: string): Promise<any> => {
    try {
      return this.roleModel.deleteOne({ title });
    } catch (error) {
      console.log(error);
      throw new HttpException({ error }, HttpStatus.FORBIDDEN);
    }
  };
}
