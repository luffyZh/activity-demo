import { useEffect } from 'react'
import swal from 'sweetalert'
import Pendant from "../components/Pendant"
import Coupon from "../components/Coupon"
import LottieWebBtn from "../components/LottieWebBtn"
import SVGAnimation from "../components/SVGAnimation"
import PullRefresh from '../utils/pull-refresh'
import FixedButton from '../components/FixedButton'

const IndexPage = () => {

  useEffect(() => {
    function _refreshListener() {
      swal("This modal will disappear soon!", {
        // @ts-ignore
        buttons: false,
        timer: 1000,
        title: '',
        text: '页面刷新成功， 刷新接口数据',
      });
    }
    const pl = new PullRefresh({
      refreshListener: _refreshListener,
      refreshStyleConfig: {
        color: '#fff',
        fontSize: '14px',
        backgroundColor: 'dodgerblue',
      }
    });
    // pl.setEnabled(false);
  }, [])

  return (
    <>
      <h1 className="title">活动页</h1>
      <Pendant />
      <Coupon />
      <LottieWebBtn />
      <SVGAnimation />
      <FixedButton />
    </>
  )
}

export default IndexPage;
