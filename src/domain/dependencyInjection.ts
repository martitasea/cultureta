const bindings: Record<string, object> = {};

export const bind = (key: string, value: object) => {
  bindings[key] = value;
};

export const inject = <T>(key: string) => {
  return bindings[key] as T;
};
