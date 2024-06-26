export type chartDataType = {
  duration: string;
  item: chartDataItemType[];
};

export type chartDataItemType = {
  id: number;
  color: string;
  title: string;
  value: number;
};

export type legendDataType = {
  id: number;
  title: string;
  amount: string;
  color: string;
};

export type YAxisDataType = {
  min: number;
  max: number;
  diff: number;
};
