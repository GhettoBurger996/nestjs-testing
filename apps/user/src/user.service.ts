import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UpdateUserDTO } from "../utils/user.dto";

// Mongo
import { PaginateModel, PaginateResult } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "opt/simsim/schemas/user.schema";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: PaginateModel<UserDocument>,
  ) {}

  getUser = async (userId: string): Promise<User> => {
    try {
      return this.userModel.findOne({ _id: userId });
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.FORBIDDEN);
    }
  };

  getUsers = async (
    role: string,
    page: number,
    searchTerm?: string,
    status?: string,
  ): Promise<PaginateResult<User>> => {
    const query = { role };

    if (searchTerm) {
      Object.assign(query, { username: searchTerm, fullName: searchTerm });
    }
    if (status) {
      Object.assign(query, { status });
    }

    try {
      const users = await this.userModel.paginate(query, {
        page,
        limit: 10,
      });

      return users;
    } catch (error) {
      throw new HttpException({ error }, HttpStatus.FORBIDDEN);
    }
  };

  editUser = async (
    editor: string,
    userId: string,
    { fullName, birthdate, gender }: UpdateUserDTO,
  ): Promise<any> => {
    try {
      const user = await this.userModel.updateOne(
        { _id: userId },
        { editor, fullName, birthdate, gender },
      );

      return user;
    } catch (error) {
      console.log(error);

      throw new HttpException({ error }, HttpStatus.FORBIDDEN);
    }
  };
}
