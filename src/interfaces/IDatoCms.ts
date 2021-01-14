export interface IHardcodedStrings {
  cancel: string;
  createList: string;
  createNewList: string;
  logger: string;
  logout: string;
  multiple: string;
  single: string;
  typeOfList: string;
  yourBoards: string;
  loginHeadline: string;
  loginButton: string;
  emailPlaceholder: string;
  forgotPassword: string;
  passwordPlaceholder: string;
  createAccount: string;
}

export interface ILanguage {
  language: string;
}

export interface IFlagLinks {
  icelandicFlagLink: string;
  swedishFlagLink: string;
  englishFlagLink: string;
}

export interface ILangFlag {
  allLanguages: ILanguage[];
  languageFlagIcon: IFlagLinks;
}
