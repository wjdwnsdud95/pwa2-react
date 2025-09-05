// useEffect 사용할 때 import에 추가
import { useState } from 'react';
import './ProductDetail.css'

function PoductDetail(props) {
  const { product, setModalFlg } = props;
  const [cnt, setCnt] = useState(0);

  // Lifecycle Hooks
  // mount에서 최초 1회만 실행(빈배열로 보내면)
  // Mount
  // useEffect(() => {
  //   console.log('Mount!!');
  // }, []);

  // unmount 전에 실행: Clean up Function 작성
  // Unmount
  // useEffect(() => {
  //   console.log('Mount!!');

  //   // Clean up Function
  //   return () => {
  //     console.log('UnMount!!');
  //   }
  // }, []);

  // state가 변할때마다 실행, mount 후 최초 1회 실행
  // Update
  // useEffect(() => {
  //   console.log('test');
  // }, [cnt]);

  return (
    <>
      <div className="detail-modal" onClick={() => { setModalFlg(false) }}>
      {/* <div className="detail-modal"> */}
        <div className="detail-box">
          <div className="detail-img" style={{backgroundImage: `url('${product.img}')`}}></div>
          <p className="detail-title">{product.title}</p>
          <p className="detail-info">{product.info}</p>
          <p className="detail-prise">{product.price}</p>
          <p>{cnt}</p>
          <button type="button" onClick={() => { setCnt((prev) => prev + 1) }}>+</button>
        </div>
      </div>
    </>
  )
}

export default PoductDetail;