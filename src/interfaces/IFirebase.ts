export interface IError {
  a: any;
  code: string;
  message: string;
}

export interface IFireLanguage {
  Language: string;
}

export interface IFireBoard {
  Day: string;
  DayTrueOrFalse: boolean;
  EmailWhoChecked: string;
  KeyId: string;
  LastNameWhoChecked: string;
  FirstNameWhoChecked: string;
  ListId: string;
  Time: string;
  UserId: string;
}

export interface IFireBoardObject {
  [key: string]: IFireBoard
}

export interface IFireNameObject {
  firstName: string;
  lastName: string;
}

export interface IFireTotalLists {
  TotalLists: number;
}

export interface IFireUserInfo {
  Email: string;
  FirstName: string;
  Joined: string;
  LastName: string;
  UserId: string;
}

export interface IFireBoardInfo {
  Avatar: string;
  ListCreated: string;
  NameOfList: string;
  ReadAccess: boolean;
  TypeOfList: string;
  UserId: string;
  WriteAccess: boolean;
}
