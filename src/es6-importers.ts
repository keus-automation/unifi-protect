import type * as IAdobeFetch from "@adobe/fetch";

export class ES6Imports {

  static AdobeFetch: typeof IAdobeFetch;

  static async start(): Promise<void> {

    ES6Imports.AdobeFetch = await import("@adobe/fetch");
  }
}
