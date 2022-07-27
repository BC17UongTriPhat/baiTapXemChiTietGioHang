//Tạo ra 1 react class component sử dụng:  rcc
import React, { Component } from 'react'

export default class HandleEvent extends Component {

    // 1 phương thức
    handleClick = () => {
        alert('Xin chào các bạn');
    }
    // 1 phương thức
    showMess = (name) => {
        alert('Xin chào ! ' + name);
    }

    render() {
        return (
            <div className='container'>
                <h3>Handle event</h3>
                {/* muốn nút tạo ra 1 hành động thì phải tạo 1 hàm hay 1 phương thức cho nó */}
                {/* không có dấu đóng mở ngoặc () nếu không nó sẽ gọi ngay khi bật web */}
                <button onClick={this.handleClick}>Show message</button> 
                {/* dưới đây là coppy phương thức trên gán vào nó cũng hoạt động */}
                {/*   <button onClick={ }>Click me!</button> */}
                <button onClick={() => {
                    alert('Xin chào các bạn');
                }}>Click me!</button>
                <hr />
                <h3>Handle event param</h3>
                <button onClick={this.showMess.bind(this,'Dũng')}>Show mess</button>
                <button onClick={()=>{
                    this.showMess('Dũng đẹp trai!');
                }}>show mess param</button>
            </div>
        )
    }
}

// function main () {

//     return function (name) {
//         console.log(name);
//     }
// }

// let result = main();
// result('a');

// main()('a');
//  bằng cách sử dụng 1 arrow function hoặc chèn 1 callback function bên trong