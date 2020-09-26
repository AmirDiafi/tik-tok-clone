import React from 'react'
import './stylesheets/video.css'
import * as Icons from 'react-icons/all'

class Video extends React.Component {
    constructor(props) {
        super(props)
        this.video = React.createRef()
        this.state = {
            isPlaying: false
        }
    }

    componentDidMount() {
        this.video.current.ontimeupdate = () => {
            this.setState({isPlaying: !this.video.current.paused})
            this.video.current.onended = () => {
                this.setState({isPlaying: false})
            }
        }
    }

    handleElse = () => {
        !this.state.isPlaying
        ?this.video.current.play()
        :this.video.current.pause()
        this.setState({isPlaying: !this.video.current.paused})
    }

    handlePlay = (event) => {
        console.log('target: ',event.target)
        console.log('currentTarget: ',event.currentTarget)
        // Set The Position
        if(event.target.dataset.type==='parent-play-pause') {
            event.target.parentNode.parentNode
            .scrollTop = event.target.parentNode.offsetTop;
            // Make pause to all videos
            let videos = event.target.parentNode.parentNode.querySelectorAll('video')
            for (const video of videos) {
                if(video.played&&video.src!==event.target.parentNode.querySelector('video').src) {
                    video.pause()
                    this.setState({isPlaying: false})
                } else {
                    // then play the one that clicked at
                    this.handleElse()
                }
            }
        } else if(event.currentTarget.dataset.type==='parent-play-pause') {
            event.currentTarget.parentNode.parentNode
            .scrollTop = event.currentTarget.parentNode.offsetTop;
            // Make pause to all videos
            let videos = event.currentTarget.parentNode.parentNode.querySelectorAll('video')
            for (const video of videos) {
                if(video.played&&video.src!==event.currentTarget.parentNode.querySelector('video').src) {
                    video.pause()
                    this.setState({isPlaying: false})
                } else {
                    // then play the one that clicked at
                    this.handleElse()
                }
            }
        }
    }

    render() {
        return(
            <div className="video">
                <div 
                    data-type='parent-play-pause'
                    className='play-pause'
                    onClick={this.handlePlay}
                >
                    {!this.state.isPlaying
                    ?<Icons.FiPlay />:<Icons.FiPause />}
                </div>
                <div className='icons'>
                    <div className="image">
                        <img src="media/defaultUser.jpeg" alt=""/>
                        <span>
                            <Icons.BsPlus />
                        </span>
                    </div>
                    <div className='like'>
                        <Icons.BsHeartFill />
                        <span>{this.props.video.likes}</span>
                    </div>
                    <div className='comment'>
                        <Icons.FaCommentDots />
                        <span>{this.props.video.comments}</span>
                    </div>
                    <div className='share'>
                        <Icons.RiShareForwardLine />
                        <span>{this.props.video.shares}</span>
                    </div>
                </div>
                <div className='the-video'>
                    <video 
                        src={"media/videos/"+this.props.video.videoURL}
                        ref={this.video}
                    >Your Browser Does Not Support Video Element!
                    </video>
                </div>
            </div>
        )
    }
}

export default Video