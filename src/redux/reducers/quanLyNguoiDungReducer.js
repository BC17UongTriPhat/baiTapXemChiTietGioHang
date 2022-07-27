

const stateDefault = {
    mangNguoiDung :[
        {taiKhoan: 'NguyenVanA',hoTen:'Nguyễn Van A',matKhau:'123123',email:'nguyenvana@gmail.com',loaiNguoiDung:'QuanTri',soDienThoai:'0909090909'},
        {taiKhoan: 'TranThiB',hoTen:'Trần Thị B',matKhau:'123123',email:'tranthib@gmail.com',loaiNguoiDung:'NguoiDung',soDienThoai:'0808080808'},
    ],
    nguoiDungSua: 
        {taiKhoan: '',
        hoTen:'',
        matKhau:'',
        email:'',
        loaiNguoiDung:'',
        soDienThoai:''},

    
}

export const quanLyNguoiDungReducer = (state = stateDefault,action)=>{

    switch(action.type){    
    case 'XOA_NGUOI_DUNG' :{
        // Sao chép mảng người dùng
        let mangNguoiDung = [...state.mangNguoiDung];
        // Xử lý xóa
        // c1
        mangNguoiDung = mangNguoiDung.filter(nd=>nd.taiKhoan !== action.taiKhoan);
        // let index = mangNguoiDung.findIndex(nd=>nd.taiKhoan !== action.taiKhoan);
        // if (index !=1){
        //     mangNguoiDung.splice(index,1)
        // }
        // Sau khi xoa set lại giá trị cho mangNguoiDung
        state.mangNguoiDung = mangNguoiDung;
        // immutable : tính chất bất biến của redux đối với object và array 
        return {...state};
    }
    case 'THEM_NGUOI_DUNG' :{
        //c1
        let mangNguoiDung = [...state.mangNguoiDung,action.nguoiDung];
       
        // state.mangNguoiDung = mangNguoiDung;
        
        return {...state,mangNguoiDung};
        // c2
        // let mangNguoiDung = [...state.mangNguoiDung,action.nguoiDung];     
        // return {...state,mangNguoiDung:mangNguoiDung}; 
    }
    case 'SUA_NGUOI_DUNG':{
        state.nguoiDungSua = action.nguoiDung;

        return {...state};
    }    

        default : return state;
    }
}