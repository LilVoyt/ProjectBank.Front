export interface JwtPayloadUpgraded {
    nameid: string;
    role: string;
    unique_name: string;
    nbf: number;
    exp: number;
    iat: number;
  }