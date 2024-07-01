// task 1 //

import {
  IReadonlyObj,
  IRequireReadonlyObj,
  IToUppercase,
} from "./interfaces/interface";

type DeepReadonly<T> = T extends object
  ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
  : T;

const readonlyObj: DeepReadonly<IReadonlyObj> = {
  key1: "Key1",
  key2: 2024,
  key3: {
    key4: "Key 4",
    key5: true,
    key6: {
      key7: 2022,
    },
  },
};

// task 2 //

type DeepRequireReadonly<T> = T extends object
  ? { readonly [P in keyof T]-?: DeepRequireReadonly<T[P]> }
  : T;

const requireReadonlyObj: DeepRequireReadonly<IRequireReadonlyObj> = {
  key1: "Key1",
  key2: 2024,
  key3: {
    key4: "Key 4",
    key5: true,
    key6: {
      key7: 2022,
    },
  },
};

// task 3 //

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<K & string>]: T[K];
};

const toUppercase: UpperCaseKeys<IToUppercase> = {
  KEY1: "Key1",
  KEY2: 2024,
  KEY3: {
    key4: "Key 4",
    key5: true,
  },
};

// task 4 //

type Descriptor<T> = {
  configurable?: boolean;
  enumerable?: boolean;
  writable?: boolean;
  value?: T;
  get?(): T;
  set?(value: T): void;
};

type ObjectToPropertyDescriptor<T> = {
  [K in keyof T]: Descriptor<T[K]>;
};
