declare type DataObject<T = any> = { [P in keyof T]: T[P] };

declare type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[K] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T[K] extends Record<string, unknown>
    ? DeepPartial<T[K]>
    : T[K];
};

declare type ReactSVGComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;
