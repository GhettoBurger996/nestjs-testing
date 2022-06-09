export enum UpdateRulesOfRole {
  ADD = "add",
  REMOVE = "remove",
}

export enum UpdateRulesOfACL {
  ADD = "add",
  REMOVE = "remove",
}

export enum UpdateRuleTypesOfACL {
  INLINE = "inlineRules",
  DENY = "denyRules",
}

// Common interface between ACL and Role
export enum RequestType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

// Common interface between ACL and Role
export enum SimsimServices {
  ACL = "simsimACL",
  AUTH = "simsimAuth",
  USER = "simsimUser",
}
