export class Timespan {
  milliseconds: number = 0;
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  days: number = 0;
  weeks: number = 0;
  // months?
  years: number = 0;
  decades: number = 0;
  centuries: number = 0;
  millennia: number = 0;

  totalMilliseconds: number = 0;

  static fromMilliseconds(milliseconds: number): Timespan {
    milliseconds = milliseconds || 0;

    return {
      milliseconds: milliseconds % 1000,
      seconds: Math.floor(milliseconds / 1000),
      minutes: Math.floor(milliseconds / 60000),
      hours: Math.floor(milliseconds / 3.6e6),
      days: Math.floor(milliseconds / 8.64e7),
      weeks: Math.floor(milliseconds / 6.048e+8),
      years: Math.floor(milliseconds / 3.154e10),
      decades: Math.floor(milliseconds / 3.154e11),
      centuries: Math.floor(milliseconds / 3.154e12),
      millennia: Math.floor(milliseconds / 3.154e13),
      totalMilliseconds: milliseconds
    };
  }

  static from(hours?: number, minutes?: number, seconds?: number) {
    return this.fromMilliseconds(
      this.fromHours(hours).totalMilliseconds +
      this.fromMinutes(minutes).totalMilliseconds +
      this.fromSeconds(seconds).totalMilliseconds
    );
  }

  static fromSeconds(seconds: number): Timespan {
    return this.fromMilliseconds((seconds || 0) * 1000);
  }

  static fromMinutes(minutes: number): Timespan {
    return this.fromMilliseconds((minutes || 0) * 6e4);
  }

  static fromHours(hours: number): Timespan {
    return this.fromMilliseconds((hours || 0) * 3.6e6);
  }
}