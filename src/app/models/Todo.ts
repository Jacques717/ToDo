export interface ITodo {
  title: string;
  date: Date;
  completed: boolean;
}

export class Todo {
  dateFull: string;

  constructor(
    public id: number,
    public title: string,
    public date: Date,
    public dateIncrementor: number,
    public completed: boolean
  ) {
    this.dateFull = date.toDateString(); //setDate(this.dateIncrementor).;
  }
}
