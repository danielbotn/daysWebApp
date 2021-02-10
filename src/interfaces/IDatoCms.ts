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
  registerTerms: string;
  signupButton: string;
  signupHeadline: string;
  firstnamePlaceholder: string;
  lastnamePlaceholder: string;
  alreadyHaveAccount: string;
  passwordError: string;
  emailError: string;
  lastnameError: string;
  firstnameError: string;
  termsOfService: string;
  and: string;
  privacyPolicy: string;
  listnamePlaceholder: string;
  information: string;
  day: string;
  time: string;
  checkedBy: string;
  email: string;
  save: string;
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
