import { Test, TestingModule } from "@nestjs/testing";
import { RoleController } from "../src/role/role.controller";
import { RoleService } from "../src/role/role.service";

describe("RoleController", () => {
  let roleController: RoleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [RoleService],
    }).compile();

    roleController = app.get<RoleController>(RoleController);
  });

  // describe("root", () => {
  //   it('should return "Hello World!"', () => {
  //     expect(roleController.getHello()).toBe("Hello World!");
  //   });
  // });
});
