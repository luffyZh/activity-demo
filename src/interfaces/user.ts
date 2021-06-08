export interface IUserStruct {
  id: number;
  name: string;
  age: number;
}

export interface IUserListResStruct {
  list: IUserStruct[];
  total: number;
}
