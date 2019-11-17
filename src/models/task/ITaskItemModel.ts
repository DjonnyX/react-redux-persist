export default interface ITaskItemModel {
    _id?: number;
    number: number;
    name: string;
    description: string;
    priority: number;
    startDateTime: Date;
    finishedDateTime: Date;
  }
  