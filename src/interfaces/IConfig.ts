/* eslint-disable @typescript-eslint/ban-types */
export interface ISession {
  user: string;
}

export interface Query {
  id: string;
}

export interface IPage {
  host: string;
  params: {} | Query;
  path: string;
  query: Query;
}
