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
  ListId: string;
  Time: string;
  UserId: string;
}

export interface IFireBoardObject {
  [key: string]: IFireBoard
}
