import React from 'react'
import Video from './Video'
import './stylesheets/home.css'
import Data from './data.json'

class Home extends React.Component {
    constructor() {
        super()
        this.state={
            data: Data
        }
    }

    render() {
        return (
            <div className='home-container'>
                {this.state.data.map(video => 
                    <Video 
                        key={video.id} 
                        video={video}
                    />
                )}
            </div>
        )
    }
}
 
export default Home;