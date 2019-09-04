import React from 'react'
import './index.css'

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            img: 'image-src1',
            dot:'dot'
        }
    }

    imgChange1(){
        this.setState({
            img:'image-src1',
        })
        document.getElementById('1').style.backgroundColor='grey'
        document.getElementById('2').style.backgroundColor='#bbb'
        document.getElementById('3').style.backgroundColor='#bbb'
        document.getElementById('4').style.backgroundColor='#bbb'
        document.getElementById('5').style.backgroundColor='#bbb'


    }
    imgChange2(){
        this.setState({
            img:'image-src2'
        })
        document.getElementById('1').style.backgroundColor='#bbb'
        document.getElementById('2').style.backgroundColor='grey'
        document.getElementById('3').style.backgroundColor='#bbb'
        document.getElementById('4').style.backgroundColor='#bbb'
        document.getElementById('5').style.backgroundColor='#bbb'
    }
    imgChange3(){
        this.setState({
            img:'image-src3'
        })
        document.getElementById('1').style.backgroundColor='#bbb'
        document.getElementById('2').style.backgroundColor='#bbb'
        document.getElementById('3').style.backgroundColor='grey'
        document.getElementById('4').style.backgroundColor='#bbb'
        document.getElementById('5').style.backgroundColor='#bbb'
    }
    imgChange4(){
        this.setState({
            img:'image-src4'
        })
        document.getElementById('1').style.backgroundColor='#bbb'
        document.getElementById('2').style.backgroundColor='#bbb'
        document.getElementById('3').style.backgroundColor='#bbb'
        document.getElementById('4').style.backgroundColor='grey'
        document.getElementById('5').style.backgroundColor='#bbb'
    }
    imgChange5(){
        this.setState({
            img:'image-src5'
        })
        document.getElementById('1').style.backgroundColor='#bbb'
        document.getElementById('2').style.backgroundColor='#bbb'
        document.getElementById('3').style.backgroundColor='#bbb'
        document.getElementById('4').style.backgroundColor='#bbb'
        document.getElementById('5').style.backgroundColor='grey'
    }


    render() {
        return (
            <div className='wrapper'>
                <div className='image-empty'></div>
                <div className = 'image-class' className={this.state.img}>
                    <div>
                        <span id='1' onClick={this.imgChange1.bind(this)} className={this.state.dot}></span>
                        <span id='2' onClick={this.imgChange2.bind(this)} className={this.state.dot}></span>
                        <span id='3' onClick={this.imgChange3.bind(this)} className={this.state.dot}></span>
                        <span id='4' onClick={this.imgChange4.bind(this)} className={this.state.dot}></span>
                        <span id='5' onClick={this.imgChange5.bind(this)} className={this.state.dot}></span>
                    </div>
                </div>
                <div className='image-empty'></div>
            </div>
        )
    }
}