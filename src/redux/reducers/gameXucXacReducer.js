const stateGameDefault = {
  banChon: true, // true là tài, false là xỉu
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { diem: 6, img: "./img/gameXucXac/6.png" },
    { diem: 6, img: "./img/gameXucXac/6.png" },
    { diem: 6, img: "./img/gameXucXac/6.png" },
  ],
};

export const gameXucXacReducer = (state = stateGameDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }
    case "PLAY_GAME": {
       let arrXucXacNN = [];

      // xử lý tạo ra 1 mảng xuc xac ngau nhien để thay thế state.mangXucXac

      // lấy hàm ramdom js
      for (let i = 1; i <= 3; i++) {
        // mỗi lần lặp sẽ tạo ra 1 con số ngẫu nhiên từ 1 đến 6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // từ số ngẫu nhiên tạo ra 1 object ngẫu nhiên
        let xxnn = { diem: soNgauNhien, img: `./img/gameXucXac/${soNgauNhien}.png` }
        // đưa object ngẫu nhiên vào mảng
        arrXucXacNN.push(xxnn);
      }
        // Cập nhật mangXucXac= arrXucXac Ngẫu Nhiên
        state.mangXucXac = arrXucXacNN;
        // tính tổng điểm mảng ngẩu nhiên hàm reduce của es6
        let tongDiem = arrXucXacNN.reduce((diem,xx,index)=>{
            return diem += xx.diem
        },0);

        // Nếu tổng điểm bé hơn 11 và người chơi chọn false thì thắng || tổng điểm lớn hơn  = 11 và người chơi chọn true
        if((tongDiem < 11 && !state.banChon) || ((tongDiem >11 ) && state.banChon)){
            state.soBanThang += 1;
        }
      state.tongSoBanChoi = state.tongSoBanChoi + 1;

      return { ...state };
    }

    default:
      return state;
  }
};
