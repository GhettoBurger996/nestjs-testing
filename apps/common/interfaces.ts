export enum UserRole {
  MERCHANT = "merchant",
  CUSTOMER = "customer",
  STAFF = "staff",
  DRIVER = "driver",
  GUEST = "guest",
}

export enum UserStatus {
  ENABLE = "enable",
  DISABLE = "disable",
}

export interface HttpErrorInterface {
  statusCode: number;
  timestamp: string;
  path: string;
  uncaughtError: boolean;
  description: string;
  detailedDescription: any;
}

const routes = {
  "/simsimACL": [],
  "/simsimAuth": [],
  "/simsimUser": [],
};

export const simsimRoutes = {
  GET: {
    ...routes,
  },
  POST: {
    ...routes,
  },
  PUT: {
    ...routes,
  },
  DELETE: {
    ...routes,
  },
};
