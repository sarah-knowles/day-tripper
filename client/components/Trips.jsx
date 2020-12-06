import React from 'react'
import { connect } from 'react-redux'


export class Trips extends React.Component {
  render() {
    return (
      <>
        <h3>things to do ...</h3>


        <div className="wrapper">
          <div className="item">
            <a className='link-class' href="{}">
              <div className="frame">
                <img className="image" src="https://dds-cdn.datascape.cloud/public/aucklandcouncil/0ed0834c-8ab1-4621-b6e6-5954aa16b1c5"/>
                <div className="caption"><a className="link" href="https://www.aucklandlibraries.govt.nz/pages/library.aspx?library=45">Library</a>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a className='link-class' href="">
              <div className="frame">
                <img className="image" src="https://www.actioncentre.co.nz/wp-content/uploads/2020/02/MCF-pic-of-Bowling.jpg" />
                <div className="caption"><a className="link" href="https://www.archiebrothers.co.nz/locations/newmarket">TenPin Bowling</a>
                </div>
              </div>
            </a>
          </div>
          <div className="item">
            <a className='link-class' href="">
              <div className="frame">
                <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Wu03tghqMoALSCiSOIWidsJRy7UnBUk0qw&usqp=CAU" />
                <div className="caption"><a className="link" href="https://www.bridgeway.co.nz/">Movies</a>
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


