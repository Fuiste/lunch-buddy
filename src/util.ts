import { SessionState } from "./store/state";

export type WithSession = {
  session: SessionState;
};

type PromiseContents<T extends Promise<any>> = T extends Promise<infer R>
  ? R
  : never;

export type AsyncReturnType<
  T extends (...args: any[]) => Promise<any>
> = PromiseContents<ReturnType<T>>;
