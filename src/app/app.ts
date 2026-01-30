import { Component, computed, Signal, signal } from '@angular/core';
import type { Temporal as TemporalType } from "@js-temporal/polyfill";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
    // Initialize with current time zone
    private readonly _now = signal(Temporal.Now.instant());
    protected readonly locale: Signal<TemporalType.LocalesArgument> = signal('de-AT');
    protected readonly timeZone = signal(Temporal.Now.timeZoneId());
    protected readonly currentTime = computed(() => {
        const zonedDateTime = this._now().toZonedDateTimeISO(this.timeZone());
        return zonedDateTime.toLocaleString(this.locale());
    });
}
