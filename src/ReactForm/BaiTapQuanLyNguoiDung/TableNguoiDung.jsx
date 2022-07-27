import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNguoiDung extends Component {
  render() {
    return (
      <table className='table'>
        <thead className='bg-dark text-white font-weight-bold'>
          <tr>
            <th>Tài khoản</th>
            <th>Mật khẩu</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Loại người dùng</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
                <td>Tài khoản</td>
                <td>Mật khẩu</td>
                <td>Họ tên</td>
                <td>Email</td>
                <td>Số điện tdoại</td>
                <td>Loại người dùng</td>
                <td>
                    <button className='btn btn-danger'>Xoá</button>
                    <button className='btn btn-primary ml-2'>Sửa</button>
                </td>
            </tr> */}
          {this.props.mangNguoiDung.map((nguoiDung, index) => (
            <tr key={index}>
              <td>{nguoiDung.taiKhoan}</td>
              <td>{nguoiDung.matKhau}</td>
              <td>{nguoiDung.hoTen}</td>
              <td>{nguoiDung.email}</td>
              <td>{nguoiDung.soDienThoai}</td>
              <td>{nguoiDung.loaiNguoiDung}</td>
              <td>
                <button onClick={()=>{
                  const action = {
                    type: 'XOA_NGUOI_DUNG',
                    taiKhoan: nguoiDung.taiKhoan
                  };
                  // Đưa dữ liệu lên redux
                  this.props.dispatch(action);
                }} className='btn btn-danger'>Xoá</button>
                <button className='btn btn-primary ml-2' onClick={()=>{
                  const action ={
                    type:'SUA_NGUOI_DUNG',
                    nguoiDung:nguoiDung
                  };
                  // Saukhi bấm nút sửa tạo ra action và đưa lên redux để thay đổi giá trị state.nguoiDungSua
                  this.props.dispatch(action);
                }}>Sửa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
// { + return = ();
const mapStateToProps = (rootReducer) => 

  // cách viết t2
  ({ mangNguoiDung: rootReducer.quanLyNguoiDungReducer.mangNguoiDung })



export default connect(mapStateToProps)(TableNguoiDung);