export interface JwtPayloadUpgraded {
    certserialnumber: string,
    nameid: string;
    role: string;
    unique_name: string;
    nbf: number;
    exp: number;
    iat: number;
  }