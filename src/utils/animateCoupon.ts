export function showCoupon(redPacketDom: any, pendantDom: any) {
  // 为元素添加事件监听，阻止穿透
  (document.getElementById('coupon_wrap') as any).addEventListener(
    'touchmove',
    function(e: any) {
      e.preventDefault()
    },
    { passive: false } // //  禁止 passive 效果
  );
  return new Promise((resolve) => {
    redPacketDom.parentNode.style.zIndex = 1001;
    redPacketDom.classList.remove('red__packet_rotate')
    redPacketDom.classList.add('red__packet_rotate_active')
    resolve()
  }).then(() => {
    if (pendantDom.classList.contains('animate__fadeIn')) {
      pendantDom.classList.remove('animate__fadeIn')
      pendantDom.classList.add('animate__fadeOut')
    }
    setTimeout(() => {
      (window as any).__pull_refresh_enabled = false;
      redPacketDom.parentNode.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
    }, 800)
  })
}

export function hideCoupon(redPacketDom: any, pendantDom: any) {
  (window as any).__pull_refresh_enabled = true;
  return new Promise((resolve) => {
    const targetPos = pendantDom.getBoundingClientRect()
    const curPos = redPacketDom.getBoundingClientRect()
    const offsetX = (targetPos.width / 2 + targetPos.left) - (curPos.width / 2 + curPos.left);
    const offsetY = (targetPos.height / 2 + targetPos.top) - (curPos.height / 2 + curPos.top);
    Object.assign(redPacketDom.style, {
      transform: `translate3d(${offsetX}px, ${offsetY}px, 0) scale(0.18)`,
      transition: 'all 0.55s linear'
    })
    redPacketDom.classList.remove('red__packet_rotate_active')
    redPacketDom.classList.add('red__packet_rotate')
    redPacketDom.parentNode.style.backgroundColor = ''
    resolve()
  }).then(() => {
    setTimeout(() => {
      pendantDom.classList.remove('animate__fadeOut')
      pendantDom.classList.add('animate__fadeIn')
      redPacketDom.parentNode.style.zIndex = -1
      redPacketDom.style.transform = ''
      redPacketDom.style.transition = ''
    }, 600)
  })
} 