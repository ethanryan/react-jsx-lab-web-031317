import React from 'react' // import react
import ReactDOM from 'react-dom'
import FillerText from './FillerText'

class Webpage extends React.Component {
  render() {
    return (
      <div>
      <title>"The world's coolest webpage"</title>
      < FillerText />
      < FillerText />
      </div>
    )
  }
}

export default Webpage

// export a function that returns a JSX element
