// custom-types.d.ts

import { RouteRecordRaw } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    guard?: string;
    title?: string;
    // Outras propriedades meta, se houver
  }

  interface RouteRecordRaw {
    query?: {
      [key: string]: string | (string | null)[] | null | undefined;
    };
  }
}
