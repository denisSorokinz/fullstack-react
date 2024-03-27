import { AbstractObject } from "../types/utilities";

class Lens {
  source;
  destination;

  constructor(source: string | readonly string[], destination = source) {
    this.source = source;
    this.destination = destination;
  }
  static from(source: string, destination?: typeof source) {
    return new Lens(source, destination);
  }
  get(obj: AbstractObject) {
    return typeof this.source === 'string' ? obj[this.source] : { ...obj };
  }
  set(val: any, obj: AbstractObject) {
    return typeof this.source === 'string' ? { ...obj, [this.destination as typeof this.source]: val } : { ...obj };
  }
}

class OnlyPropertiesLens {
  source;

  constructor(source: string[]) {
    this.source = source;
  }
  static from(source: string[]) {
    return new OnlyPropertiesLens(source);
  }
  view(obj: AbstractObject) {
    const res = { ...obj };

    for (let key in res) {
      if (!this.source.includes(key)) delete res[key];
    }

    return res;
  }
}

class ExcludeLens extends Lens {
  static override from(source: string | readonly string[], destination?: string) {
    return new ExcludeLens(source, destination);
  }
  view(obj: AbstractObject) {
    if (typeof this.source === 'string' || Array.isArray(this.source))
      return Object.fromEntries(
        Object.entries(obj).filter(([key]) => {
          if (typeof this.source === 'string') return key !== this.source;

          return !this.source.includes(key);
        })
      );

    return { ...obj };
  }
}

export const noParamsLens = ExcludeLens.from('params');

export { OnlyPropertiesLens, ExcludeLens };
