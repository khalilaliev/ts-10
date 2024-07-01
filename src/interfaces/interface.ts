export interface IReadonlyObj {
  key1: string;
  key2: number;
  key3: {
    key4: string;
    key5: boolean;
    key6: {
      key7: number;
    };
  };
}

export interface IRequireReadonlyObj {
  key1?: string;
  key2?: number;
  key3?: {
    key4?: string;
    key5?: boolean;
    key6?: {
      key7?: number;
    };
  };
}

export interface IToUppercase {
  key1: string;
  key2: number;
  key3: {
    key4: string;
    key5: boolean;
  };
}
