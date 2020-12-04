import React from 'react'
import { connect } from 'react-redux'

export class Trips extends React.Component {
  render() {
    return (
      <>
        <h3>things to do ...</h3>


        <div className="wrapper">
          <div className="item">
            <a href="">
              <div className="frame">
                <img className="image" src=""/>
                <div className="caption"><a className="link" href="">Trip 1</a>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div className="frame">
                <img className="image" src="" />
                <div className="caption"><a className="link" href="">Trip 2</a>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div className="frame">
                <img className="image" src="" />
                <div className="caption"><a className="link" href="">Trip 3</a>
                </div>
              </div>
            </a>
          </div>
        </div>  
      </>
    )
  }

}


function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Trips)


