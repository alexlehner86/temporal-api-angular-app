import { Component, computed, OnInit, Signal, signal, ViewEncapsulation } from '@angular/core';
import type { Temporal as TemporalType } from "@js-temporal/polyfill";
import { TemporalApiTestData } from './models/form.interface';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [FormField],
  templateUrl: './app.html',
  encapsulation: ViewEncapsulation.None,
})
export class App implements OnInit {
    // Form setup
    protected readonly availableDateUnits = signal<(keyof TemporalType.DurationLike)[]>(["days", "weeks", "months", "years"]);
    protected readonly availableTimeZones = signal<string[]>([]);
    protected readonly temporalApiTestModel = signal<TemporalApiTestData>({
        amount: 1,
        dateUnit: "days",
        timeZone: Temporal.Now.timeZoneId(),
    });
    protected readonly temporalApiTestForm = form(this.temporalApiTestModel);

    // Date/Time calculations
    protected readonly calculatedDate = signal(Temporal.Now.plainDateISO());
    protected readonly currentTime = computed(() => {
        const zonedDateTime = this._now().toZonedDateTimeISO(this.temporalApiTestModel().timeZone);
        return zonedDateTime.toLocaleString(this.locale());
    });
    protected readonly locale: Signal<TemporalType.LocalesArgument> = signal('en-UK');
    
    // Initialize with current time zone
    private readonly _now = signal(Temporal.Now.instant());

    public ngOnInit(): void {
        setInterval(() => this._now.set(Temporal.Now.instant()), 1000);

        // Add time zone options
        const timeZones = ["Europe/Berlin", "Africa/Nairobi", "America/New_York", "Australia/Brisbane", "Europe/London", "Europe/Sofia", "Japan"];
        const currentTimeZone = Temporal.Now.timeZoneId();
        if (!timeZones.includes(currentTimeZone)) {
            timeZones.push(currentTimeZone);
        }
        this.availableTimeZones.set(timeZones.sort());
    }

    protected onAddToDate(): void {
        const calculatedDate = this.calculatedDate();
        const amount = this.temporalApiTestModel().amount;
        const dateUnit = this.temporalApiTestModel().dateUnit;
        this.calculatedDate.set(calculatedDate.add({ [dateUnit]: amount }));
    }

    protected onSubtractFromDate(): void {
        const calculatedDate = this.calculatedDate();
        const amount = this.temporalApiTestModel().amount;
        const dateUnit = this.temporalApiTestModel().dateUnit;
        this.calculatedDate.set(calculatedDate.subtract({ [dateUnit]: amount }));
    }
}
