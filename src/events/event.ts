import { Subjects } from '../enums/subjects';

export interface Event {
  subject: Subjects;
  data: any;
}