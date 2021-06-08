// transform the http query & params
export const filterObject = (o: Record<string, string>, filter: Function) => {
  const res: Record<string, string> = {};
  Object.keys(o).forEach(k => {
    if (filter(o[k], k)) {
      res[k] = o[k];
    }
  });
  return res;
};

export async function sleep(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}