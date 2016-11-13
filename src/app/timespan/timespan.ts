export class Timespan {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
  // months?
  years: number;
  decades: number;
  centuries: number;
  millennia: number;

  totalMilliseconds: number;

  static fromMilliseconds(milliseconds: number): Timespan {
    return {
      milliseconds: milliseconds % 1000,
      seconds: Math.floor(milliseconds / 1000),
      minutes: Math.floor(milliseconds / 60000),
      hours: Math.floor(milliseconds / 3.6e6),
      days:  Math.floor(milliseconds / 8.64e7),
      weeks: Math.floor(milliseconds / 6.048e+8),
      years: Math.floor(milliseconds / 3.154e10),
      decades: Math.floor(milliseconds / 3.154e11),
      centuries: Math.floor(milliseconds / 3.154e12),
      millennia: Math.floor(milliseconds / 3.154e13),
      totalMilliseconds: milliseconds
    };
  }

  static fromMinutes(minutes: number): Timespan {
    return this.fromMilliseconds(minutes * 6e4);
  }

  static fromHours(hours: number): Timespan {
    return this.fromMilliseconds(hours * 3.6e6);
  }
}