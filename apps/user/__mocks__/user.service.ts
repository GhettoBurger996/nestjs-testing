import { userStub } from "../test/stubs/user.stub";

export const UserService = jest.fn().mockReturnValue({
  getUser: jest.fn().mockResolvedValue(userStub()),
  getUsers: jest.fn().mockResolvedValue([userStub()]),
  editUser: jest.fn().mockResolvedValue(userStub()),
});
