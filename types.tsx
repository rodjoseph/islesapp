export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  AboutContact: undefined;
  Mortgage: undefined;
  Budget: undefined;
  Debt: undefined;
  Homebuying: undefined;
  Foreclosure: undefined;
  MemberUpdate: undefined;
  PrivacyPolicy: undefined;
  Credit: undefined;
  HowCreditScoresCalculated: undefined;
  WebViewScreen: {url: string};
  PdfReaderScreen: {uri: string, documentTitle?: string};
  CardGameScreen: undefined;
  ExpensesScreen: undefined;
  SavingsScreen: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
