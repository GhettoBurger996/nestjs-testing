import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "../src/user.controller";
import { UserService } from "../src/user.service";
import { userStub } from "./stubs/user.stub";
import { createMock } from "@golevelup/ts-jest";
import { Response } from "express";

jest.mock("../src/user.service");

describe("UserController", () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = moduleRef.get<UserController>(UserController);
    userService = moduleRef.get<UserService>(UserService);

    afterEach(() => jest.clearAllMocks());
  });

  // describe("getUser", () => {
  //   describe("when getUser is called", () => {
  //     beforeEach(async () => {
  //       await userController.getUser(
  //         {
  //           req,
  //         },
  //         userStub()._id,
  //       );
  //     });
  //   });
  // });
});
