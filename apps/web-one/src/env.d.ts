// declare var process: {
//   env: {
//     NG_APP_ENV: string;
//     [key: string]: any;
//   };
// };

declare interface Env {
  readonly NODE_ENV: string;
  [key: string]: string;
}

declare interface ImportMeta {
  readonly env: Env;
}
