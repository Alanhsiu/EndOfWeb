/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CFormCheck, CButton } from '@coreui/react'
import MatchForm from './MatchForm'

const OpenMatching = ({ setOpened }) => {
  const [identity, setIdentity] = useState('')
  let tempIdentity = ''
  return (
    <div>
      {identity === '' ? (
        <div className="matching p-5 rounded bg-white text-black mt-5">
          <h2>
            歡迎使用留學交流（原EE Chain）功能！
            <br />
            您是第一次開通，所以請選擇您的身份
          </h2>
          <br />
          <div className="d-flex">
            <div className="col-6 h4 px-3">
              <CFormCheck
                type="radio"
                name="identity"
                value="senior"
                id="senior"
                label="我是學長姊"
                className="my-1 d-flex justify-content-center align-items-center"
                onChange={(e) => (tempIdentity = e.target.value)}
              />
              已有申請學校或在國外工作等等的經驗，願意回來幫助學弟妹出國、與其他已畢業學長姐交流。
            </div>
            <div className="col-6 h4 px-3 left-part">
              <CFormCheck
                type="radio"
                name="identity"
                value="junior"
                id="junior"
                label="我是學弟妹"
                className="my-1 d-flex justify-content-center align-items-center"
                onChange={(e) => (tempIdentity = e.target.value)}
              />
              想申請出國希望能多得到學長姊的經驗，未來出國後將再把經驗流傳給下一屆！
            </div>
          </div>
          <br />
          <CButton onClick={() => setIdentity(tempIdentity)}>下一步</CButton>
        </div>
      ) : (
        <MatchForm identity={identity} setIdentity={setIdentity} setOpened={setOpened} />
      )}
    </div>
  )
}
OpenMatching.propTypes = {
  setOpened: PropTypes.func,
}
export default OpenMatching
