export interface GraphData {
  agreeableness: number;
  drive: number;
  luck: number;
  openness: number;
}

export interface GraphResponse {
  data: GraphData;
  type: 'bar' | string;
}
