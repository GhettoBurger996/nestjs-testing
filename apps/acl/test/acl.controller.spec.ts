import { Test, TestingModule } from "@nestjs/testing";
import { AclController } from "../src/acl/acl.controller";
import { AclService } from "../src/acl/acl.service";

describe("AclController", () => {
  let aclController: AclController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AclController],
      providers: [AclService],
    }).compile();

    aclController = app.get<AclController>(AclController);
  });

  // describe("root", () => {
  //   it('should return "Hello World!"', () => {
  //     expect(aclController.getHello()).toBe("Hello World!");
  //   });
  // });
});
