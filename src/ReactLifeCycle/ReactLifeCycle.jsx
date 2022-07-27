import React, { Component } from 'react';
import ChildComponent from './ChildComponent';


export default class ReactLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            number: 1,
            like :1,
            object:{
                number : 1
            }
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //Trả về state trước khi render
        console.log('getDerivedStateFromProps');

        return currentState;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate')
        return true;
    }


    render() {
        console.log('render');
        return (
            <div className='container'>
                <h3>React Life Cycle</h3>
                {/* <h3>Number : {this.state.number}</h3> */}
                <h3>Number : {this.state.object.number}</h3>
                <button className='mt-2 btn btn-success' onClick={() => {
                    // chung 1
                    // this.setState({
                    //     number: this.state.number + 1
                    // })
                    let objectNumber = this.state.object;
                    objectNumber.number += 1;
                    this.setState({
                        object : {...objectNumber}
                    })
                }}> + </button>
                
                <hr/>
                <h3>Like : {this.state.like}</h3>

                <button className='mt-2 btn btn-danger' onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}> Like </button>
                   
                    {/* chung 1 */}
                {/* <ChildComponent objectNumber= {this.state.object} number= {this.state.number}/> */}
                {this.state.like > 3 ?'':
                   <ChildComponent objectNumber= {this.state.object} /> }
            </div>
        )
    }

    componentDidMount() {
        console.log('DidMount')
    }
}