import { User } from "opt/simsim/schemas/user.schema";
import { Types } from "mongoose";

export const userStub = (): User => {
  return {
    // _id: new Types.ObjectId(),
    username: "test mo",
    sub: "8094d359-b61a-477b-bd10-47e9c0370860",
    fullName: "test mo",
    email: "testmo@gmail.com",
    phoneNumber: "0678273940",
    gender: "male",
    birthdate: "19960-05-18",
    address: [
      {
        city: "cairo",
        nearestLocation: "Ads faded",
        street: "Afdsfads",
      },
    ],
    role: "customer",
    status: "enable",
    author: "test.mo",
    editor: "test.mo",

    staffDetails: "",
    vehicleDetails: [],
  };
};
