export class Timespan {
  milliseconds: number;
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  weeks: number;
  // months?
  years: number;
  centuries: number;
  millennia: number;

  totalMilliseconds: number;

  // TODO: this is all kinds of wrong, figure it out and write tests later
  static fromMilliseconds(milliseconds: number): Timespan {
    return {
      milliseconds: milliseconds % 1000,
      seconds: (milliseconds % 1000) / 1000,
      minutes : (milliseconds % 60000) / 1000,
      hours: (milliseconds % 3.6e6) / 1000,
      days:  (milliseconds % 8.64e7) / 1000,
      weeks: (milliseconds % 6.048e+8) / 1000,
      years: (milliseconds % 3.154e10) / 1000,
      centuries: (milliseconds % 3.154e12) / 1000,
      millennia: (milliseconds % 3.154e13) / 1000,
      totalMilliseconds: milliseconds
    };
  }
}