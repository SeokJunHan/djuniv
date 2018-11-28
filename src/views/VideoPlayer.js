import Button from '@enact/moonstone/Button';
import React from 'react';

const VideoPlayerView = (props) => (		
	<div >
		<iframe width="1200" height="630" src="https://www.youtube.com/embed/o15QWxrCHgU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
		</iframe>
		<Button onClick={() => {
			props.movePage();
		}}>영화순위로</Button>
	</div>
		);

/*

class VideoPlayerView extends React.Component {
	handle = () => {
	
	}
	render () {
		return(		
	<div style={{width: ri.scale(1280) + 'px', height: ri.scale(800) + 'px'}}>
		<iframe width="1280" height="720" src="https://www.youtube.com/embed/o15QWxrCHgU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
		</iframe>
		<Button>영화순위로</Button>
		<Button onClick={this.handle}>홈</Button>
	</div>
		);
	}
}
*/

export default VideoPlayerView;
