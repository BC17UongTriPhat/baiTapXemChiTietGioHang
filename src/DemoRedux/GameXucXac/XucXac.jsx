import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderKetQua = () =>{
    // 1 tính tổng điểm // vì props sài dc cho tất cả các phương thức 
    let tongDiem = this.props.mangXucXac.reduce((diem,xx,index) => {
      return diem += xx.diem;
    },0)
    // toán tử 3 ngôi
    let taiXiu = tongDiem > 11 ? 'Tài' : 'Xỉu';

    
    return <p>{tongDiem}-{taiXiu}</p>  
  }




  render() {
    console.log("this.props", this.props);
    return (
      <div className="container">
        <div className="row text-center mt-5">
          <div className="col-4">
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: true,
                };
                // Su dung this.props.dispatch de dua du lieu len reducer ( component phai connect voi redux moi co props nay)
                this.props.dispatch(action);
              }}
            >
              <div
                style={{ borderRadius: 10 }}
                className="bg-danger text-white display-4 p-5"
              >
                TÀI
              </div>
            </button>
          </div>
          <div className="col-4">
            {this.props.mangXucXac.map((xucXac, index) => {
              return (
                <img
                  key={index}
                  width={50}
                  height={50}
                  src={xucXac.img}
                  alt="..."
                />
              );
            })}
            <br />
            <div className='display-4 text-warning' >
                {/* <p>15 - Tài</p>  nháp */}
                {this.renderKetQua()}
            </div>
          </div>
          <div className="col-4">
            <button
              style={{ background: "none", border: "none" }}
              onClick={() => {
                const action = {
                  type: "DAT_CUOC",
                  banChon: false,
                };
                // Su dung this.props.dispatch de dua du lieu len reducer ( component phai connect voi redux moi co props nay)
                this.props.dispatch(action);
              }}
            >
              <div
                style={{ borderRadius: 10 }}
                className="bg-danger text-white display-4 p-5"
              >
                XỈU
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//Bước 2: Định nghĩa mapstatetoprops =>lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
  return {
    mangXucXac: rootReducer.gameXucXacReducer.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);

//rcredux
