import { type Tags } from "./validate.js";
export interface Point {
    name: string;
    value: number;
    ts: string;
    tags: Tags;
}
export interface VigilOptions {
    url?: string;
    apiKey?: string;
    defaultTags?: Tags;
    batchSize?: number;
    flushIntervalMs?: number;
    maxQueue?: number;
    timeoutMs?: number;
    onError?: (message: string) => void;
    fetch?: typeof fetch;
}
export interface VigilStats {
    queued: number;
    sent: number;
    dropped: number;
    failed: number;
}
export declare class Vigil {
    private readonly url;
    private readonly apiKey;
    private readonly defaultTags;
    private readonly batchSize;
    private readonly flushIntervalMs;
    private readonly maxQueue;
    private readonly timeoutMs;
    private readonly onError;
    private readonly customFetch;
    private readonly queue;
    private sentCount;
    private droppedCount;
    private failedCount;
    private stopTimerFn;
    private inFlightFlush;
    constructor(options?: VigilOptions);
    record(name: string, value: number | boolean, tags?: Tags, ts?: Date | string): boolean;
    flush(): Promise<void>;
    close(): Promise<void>;
    stats(): VigilStats;
    private requeueFront;
    private reportError;
    private runFlush;
}
