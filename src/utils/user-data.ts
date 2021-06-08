import { IUserStruct, IUserListResStruct } from '../interfaces'

const ARRAY_LEN: number = 1000;
let arrIndex: number[] = [];
for (let i = 0; i < ARRAY_LEN; i++) arrIndex.push(i);

const mockList: IUserStruct[] = Array.from(
  arrIndex,
  x => ({ id: x, name: `luffyZh${x}`, age: Math.ceil(Math.random() * 100) })
);

export function generateUserList(page: number | undefined, pageSize?: number): IUserListResStruct {
  const total = mockList.length;
  if (!page) {
    return {
      list: mockList,
      total
    };
  }
  return {
    list: mockList.slice(((pageSize || 10) * (page - 1)), ((pageSize || 10) * page)),
    total
  };
}