export type DatabaseEntry = {
  key: string;
  icon: string;
  value: string;
  lastUpdate: string;
};

export type DatabaseData = Record<string, DatabaseEntry>;
