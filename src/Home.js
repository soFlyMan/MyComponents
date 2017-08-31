import React, { Component} from 'react'
import './home.scss'
import soFly from './soFly.jpg'
import { Link } from 'react-router-dom'

import NativeVersion from './NativeVersion/NativeVersion.js'
import ReactVersion from './ReactVersion/ReactVersion.js'
import ProcessLine from './ReactVersion/ProcessLine/ProcessLine.js'

import HomeTag from './home/HomeTag/HomeTag.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: "0"
    }
  }
  onPageScroll() {
    var st = document.body.scrollTop || document.documentElement.scrollTop
    var ch = document.body.clientHeight || document.documentElement.clientHeight
    var a = 1 / 2
    var lineWidth = (st / ch * a) * 100 + "%"
    this.setState({
      width: lineWidth
    })

  }
  render() {
    var { width } = this.state
    return (
      <div className="home-container" onWheel={this.onPageScroll.bind(this)}>
        <ProcessLine width={width} color={"#afffc2"}/>
        <div className="home-page1">
          <div className="home-nav">
            <div className="home-layer"></div>
            <div className="home-tag">
              <Link to="/"><HomeTag /></Link>
              <Link to="/"><HomeTag name={"portfolio"} color={"#E3C4F7"} /></Link>
              <Link to="/"><HomeTag name={"TM"} color={"#95FCF5"} /></Link>
              <Link to="/"><HomeTag name={"Components"} color={"#73B1E1"} /></Link>
            </div>
            <Link to="/">
              <div className="home-avater">
                <img src={soFly} />
              </div>
            </Link>
          </div>
          <div className="home-desc">
            <div className="words">
              <h1>Hi, I’m soFly, a man who aims on Design and Technology.<span></span></h1>
            </div>
          </div>
        </div>

        <div className="home-page2">

        </div>

        <div className="home-page3">

        </div>

      </div>

    )
  }
}

export default Home
