interface Ui {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}

interface ExtendedProps {
  firstName: string;
  lastName: string;
  time: string;
  listId: string;
  email: string;
  day: string;
}

export interface IEventObject {
  title: string;
  groupId: string;
  publicId: string;
  url: string;
  defId: string;
  sourceId: string;
  allDay: boolean;
  hasEnd: boolean;
  ui: Ui;
  extendedProps: ExtendedProps;
}

export interface IInfo {
  firstName: string;
  lastName: string;
  time: string;
  listId: string;
  email: string;
  day: string;
}
