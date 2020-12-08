import React from 'react'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      time: new Date()
    }
  }

  componentDidMount () {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.intervalID)
  }

  tick () {
    this.setState({
      time: new Date()

    })
  }

  render () {
    const h = this.state.time.getHours()
    const m = this.state.time.getMinutes()

    return (
      <div className='clockdiv' style={{ float: 'right', width: '100%', marginLeft: '45%' }}>
        <p className="clock">
          {h % 12}:{(m < 10 ? '0' + m : m)} {h < 12 ? 'am' : 'pm'}
        </p>
      </div>
    )
  }
}
