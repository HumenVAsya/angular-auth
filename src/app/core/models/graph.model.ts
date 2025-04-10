export interface GraphData {
  Agreeableness: number;
  Drive: number;
  Luck: number;
  Openess: number;
}

export interface GraphResponse {
  data: GraphData;
  type: 'bar' | string;
}
