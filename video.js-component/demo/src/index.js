import React, {Component} from 'react'
import {render} from 'react-dom'

import VideoPlayer from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>VideoPlayer Demo</h1>
      <VideoPlayer
        autoplay
        controls
        sources={[{
          src: 'https://vjs.zencdn.net/v/oceans.mp4',
          type: 'video/mp4'
        }]}
      />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
