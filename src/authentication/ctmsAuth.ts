import { Auth } from "..";

export interface CtmsAuth extends Auth {
    grant_type: string
    scope: string
}