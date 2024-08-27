import { env } from "process";

export const PORT: number = Number(env.PORT || '3000');
export const MONGODB_URI: string = env.MONGODB_URI || '';