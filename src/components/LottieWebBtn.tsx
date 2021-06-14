import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

export default function LW() {
  const [playing, setPlaying] = useState<boolean>(false)
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    lottieRef.current = lottie.loadAnimation({
      container: document.getElementById('lottie') as HTMLElement,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json'
    })
  }, [])

  function togglePlay() {
    if (!playing) {
      setPlaying(true);
      lottieRef.current.play();
      return;
    }
    setPlaying(false);
    lottieRef.current.pause();
  }

  return (
    <div className="lw-container">
      <button onClick={togglePlay}>
        {playing ? '点我暂停 Lottie 动画' : '点我开始 Lottie 动画'}
      </button>
      <div id='lottie'></div>
    </div>
  )
}