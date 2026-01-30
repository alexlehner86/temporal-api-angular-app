import type { Temporal as TemporalType } from "@js-temporal/polyfill";

export interface TemporalApiTestData {
    amount: number;
    dateUnit: keyof TemporalType.DurationLike;
    timeZone: string;
}