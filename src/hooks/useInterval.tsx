import { useState, useEffect } from 'react'
import { formatRemainTime } from '../utils/methods'

export default function useInterval(countdown: number, delay = 1000) {
  const [time, setTime] = useState(countdown)

  useEffect(() => {
    countdown && setTime(countdown)
    function clock() {
      setTime(time => {
        if ((time - delay) < delay) {
          // 倒计时结束，刷新页面
          return 0
        }
        return time - delay
      })
    }
    let timer = setInterval(clock, delay)
    return () => clearInterval(timer)
  }, [countdown])

  return formatRemainTime(time)
}