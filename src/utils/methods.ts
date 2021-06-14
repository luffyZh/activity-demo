/**
 * 剩余时间格式化
 * @param {number} milliseconds 毫秒
 * @return {object}
 */
export const formatRemainTime = (milliseconds: number) => {
  if (!milliseconds) return {};

  const ONE_MINUTE = 60 * 1e3;
  const day = ~~(milliseconds / (ONE_MINUTE * 60 * 24));
  const hours = ~~(milliseconds / (ONE_MINUTE * 60));
  const minutes = ~~(milliseconds / ONE_MINUTE - 60 * hours);
  const seconds = ~~((milliseconds / 1000) % 60);
  const ms = ~~((milliseconds % 1000) / 100);

  return {
      day,
      hour: hours.toString().padStart(2, '0'),
      minute: minutes.toString().padStart(2, '0'),
      second: seconds.toString().padStart(2, '0'),
      ms: ms.toString().padStart(1, '0')
  };
};