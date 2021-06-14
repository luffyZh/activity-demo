import { useEffect } from 'react';
import { showCoupon, hideCoupon } from '../utils/animateCoupon';

export default function Coupon() {

  // const timeObj = useInterval(18760000, 100)

  useEffect(() => {
    const pendantDom = document.getElementById('pendant');
    const couponDom = document.getElementById('coupon');
    showCoupon(couponDom, pendantDom);
  }, [])

  function hide() {
    const pendantDom = document.getElementById('pendant');
    const couponDom = document.getElementById('coupon');
    hideCoupon(couponDom, pendantDom);
  }

  return (
    <div
      id='coupon_wrap'
      className='coupon-container'
    >
      <div
        id='coupon'
        className="coupon-wrap
        red__packet_rotate"
      >
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5662" width="280" height="280"><path d="M836.7 960.3H181.4c-6.3 0-11.5-5.1-11.5-11.5V212.7c0-6.2 5-11.2 11.2-11.2h655.8c6.2 0 11.2 5 11.2 11.2v736.1c0.1 6.3-5.1 11.5-11.4 11.5z" fill="#F25A25" p-id="5663"></path><path d="M170 349.5c60.2 63.1 192.8 106.9 346.8 106.9 141.9 0 265.6-37.2 331.3-92.4v-81.9c0-44.5-36.1-80.6-80.6-80.6h-517c-44.5 0-80.6 36.1-80.6 80.6v67.4z" fill="#CE3604" p-id="5664"></path><path d="M802.3 556.5H236c-3.1 0-5.6-2.5-5.6-5.6V69.4c0-3.1 2.5-5.6 5.6-5.6h566.3c3.1 0 5.6 2.5 5.6 5.6v481.5c0 3.1-2.5 5.6-5.6 5.6z" fill="#FAB001" p-id="5665"></path><path d="M705.5 103.2H238.8c-2.1 0-4.1 0.1-6.1 0.4-1.5 5-2.3 10.2-2.3 15.7v381.8c0 30.6 24.8 55.4 55.4 55.4h466.7c2.1 0 4.1-0.1 6.1-0.4 1.5-5 2.3-10.2 2.3-15.7V158.6c0-30.6-24.8-55.4-55.4-55.4z" fill="#FECE0A" p-id="5666"></path><path d="M516.8 456.4c-154 0-286.6-43.8-346.8-106.9v496.6c0 19.3 4.8 37.5 13.3 53.4 17.6 11 38.3 17.5 60.6 17.5h449.9c63 0 114.1-51.1 114.1-114.1V391.6c-70 39.6-174.3 64.8-291.1 64.8z" fill="#F25A25" p-id="5667"></path><path d="M230.4 394.1v507.4c0 5 0.4 9.9 1 14.8 4.1 0.5 8.2 0.8 12.4 0.8h449.9c63 0 114.1-51.1 114.1-114.1V391.6c-70 39.7-174.3 64.9-291 64.9-114.2-0.1-216.5-24.2-286.4-62.4z" fill="#F24500" p-id="5668"></path><path d="M484.8 348.8h-53c-6.9 0-12.4-5.6-12.4-12.4 0-6.9 5.6-12.4 12.4-12.4h53v-21.8h-53c-6.9 0-12.4-5.6-12.4-12.4 0-6.9 5.6-12.4 12.4-12.4h41.6l-56.1-88.5c-9.9-15.6 1.3-35.9 19.7-35.9h1.2c8.8 0 16.9 5 20.9 12.8l24 47.5c12.4 25.5 16.8 34.2 25.8 52.3h1.7c9.7-18.1 14.1-27.8 25.8-52.3l23.7-47.4c4-7.9 12.1-12.9 20.9-12.9 18.4 0 29.6 20.4 19.7 35.9l-56.3 88.5h41.9c6.9 0 12.4 5.6 12.4 12.4 0 6.9-5.6 12.4-12.4 12.4h-52.7V324h52.7c6.9 0 12.4 5.6 12.4 12.4 0 6.9-5.6 12.4-12.4 12.4h-52.7V376c0 13.5-11 24.5-24.5 24.5s-24.5-11-24.5-24.5v-27.2z" fill="#FFFFFF" p-id="5669"></path></svg>
        <div className="receive-btn" onClick={hide}>点击领取红包</div>
        {/* <div className="time-container">
          <span>{timeObj.hour}:</span>
          <span>{timeObj.minute}:</span>
          <span>{timeObj.second}:</span>
          <span>{timeObj.ms}</span>
        </div> */}
      </div>
    </div>
  )
}