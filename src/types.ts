import { DateTime } from 'luxon';

export type Note = {
  content: string;
  created: DateTime;
  id: string;
  title: string;
  updated: DateTime;
};
