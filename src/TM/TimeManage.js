import React, { Component } from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import './TimeManage.scss'
import soFly from '../soFly.jpg'

import Plan from './container/Plan.js'
import List from './container/List.js'


class TimeManage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebar: true,
      sIcon: true,
      bodyMargin: true,
      list: [
                { name: "List", key: "1", active: true },
                { name: "Plan", key: "2", active: false },
                { name: "History", key: "3", active: false },
                { name: "Skills", key: "4", active: false },
             ]
    }

  }
  componentDidMount() {

  }
  packUp() {
    const { sidebar, sIcon, bodyMargin } = this.state
    this.setState({
      sidebar: !sidebar,
      sIcon: !sIcon,
      bodyMargin: !bodyMargin
    })
  }
  handleActive(key) {
    const { list } = this.state
    for (var i of list) {
      i.active = false
      if(i.key == key) {
        i.active = true
      }
    }
    this.setState({
      list: list
    })

  }
  render(){
    const { sidebar, sIcon, bodyMargin, list } = this.state
    const { match } = this.props
    const classActive = {
      color: "#848383",
      backgroundColor: "rgba(147 ,255 ,255, .2)",
      borderRight: "2px #288ad6 solid",
    }
    const normal = {}
    return (
      <div className="tm">
        <div className={sidebar?'tm-sidebar':'tm-sidebar-packup'}>
          <Link to="/">
            <img className='tm-avater' src={soFly} />
            <div className="tm-avater-z">soFly</div>
            <div className="tm-soFly">soFly</div>
          </Link>
          <div className="tm-packup" onClick={this.packUp.bind(this)}>{sIcon?'⬅︎':'➔'}</div>
          <ul className="tm-sidebar-ul">
            {
              list.map( val => {
                        return (
                          <Link to={`${match.url}/${val.name}`}
                                key={val.key}
                                onClick={this.handleActive.bind(this, val.key)}>
                              <li style={ val.active?classActive:normal }>{val.name}</li>
                          </Link>
                        )
                      })
            }
          </ul>
        </div>
        <div className="tm-body" style={{marginLeft: bodyMargin?300:120}}>
          <h1>TimeManagement</h1>
          <Route path="/tm" render={() => (
              <Redirect to="/tm/list" />
            )}/>
          <Route path="/tm/list" component={List}/>
          <Route path="/tm/plan" component={Plan}/>
          <Route path="/tm/history" render={() => (<div style={{marginLeft: 400}}>history</div>)}/>
          <Route path="/tm/skills" render={() => (<div style={{marginLeft: 400}}>skills</div>)}/>
        </div>
      </div>
    )
  }
}

export default TimeManage
