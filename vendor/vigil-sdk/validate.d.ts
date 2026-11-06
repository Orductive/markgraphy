export type TagKey = "client" | "site" | "env" | "service";
export type Tags = Record<string, string>;
export declare const ALLOWED_TAG_KEYS: ReadonlySet<string>;
export declare function isPlainObject(value: unknown): value is Record<string, unknown>;
export declare function validateName(name: unknown): string;
export declare function normalizeValue(value: number | boolean): number;
export declare function validateTags(tags: unknown): Tags;
export declare function formatTs(ts?: Date | string): string;
