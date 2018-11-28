import {GridListImageItem} from '@enact/moonstone/GridListImageItem';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Region from '@enact/moonstone/Region';
import ri from '@enact/ui/resolution';
import ToggleButton from '@enact/moonstone/ToggleButton';
import {VirtualGridList} from '@enact/moonstone/VirtualList';
import Input from '@enact/moonstone/Input';
import Scroller from '@enact/moonstone/Scroller';
import Button from '@enact/moonstone/Button';
import Notification from '@enact/moonstone/Notification';
import Iframe from 'react-iframe';

const imgsrc = [
	'https://movie-phinf.pstatic.net/20181101_6/15410499053179Yp7F_JPEG/movie_image.jpg', //액션
	'https://movie-phinf.pstatic.net/20181029_21/1540774701820gU85o_JPEG/movie_image.jpg', //판타지
	'https://movie-phinf.pstatic.net/20181031_68/1540952503496fNRsF_JPEG/movie_image.jpg', //뮤지컬
'https://movie-phinf.pstatic.net/20181031_241/1540950975705Bac4v_JPEG/movie_image.jpg', //마동석
'https://movie-phinf.pstatic.net/20181106_289/1541478936071tmadh_JPEG/movie_image.jpg', //로맨스
'https://movie-phinf.pstatic.net/20181026_40/1540518904460lgFIb_JPEG/movie_image.jpg'] //애니메이션

const movieName = ["액션", "판타지", "뮤지컬", "마동석", "로맨스", "애니메이션"]

const inputColumn = {
	display: 'inline-block',
	width: '50%',
	verticalAlign: 'top'
};

const InputView = () => (
	<Layout orientation="vertical">
		<Cell component={Scroller} focusableScrollbar>
			<div style={inputColumn}>
				<Divider>Default</Divider>
				<Input />
			</div>
		</Cell>
	</Layout>
);



const
	items = [],
	// eslint-disable-next-line enact/prop-types, enact/display-name
	renderItem = ({index, ...rest}) => {
		const
			{text} = items[index];

		return (
			<GridListImageItem
				{...rest}
				caption={text}
				source={items[index].source}
			/>
		);
	};

	for (let i = 0; i < 6; i++) {
		const
			text = movieName[i],
			source = imgsrc[i];
	
		items.push({text, source});
	}

class VirtualList extends React.Component {
	constructor () {
		super();
		this.state = {
			isHorizontalList: true,
			open: false
		};
	}

	onClickChangeDirectionButton = () => {
		this.setState((state) => ({isHorizontalList: !state.isHorizontalList}));
	}

	handleOpen = () => {
		this.setState({
			open: true
		});
	}

	handleClose = () => {
		this.setState({
			open: false
		});
	}
	
	render () {
		
		const {isHorizontalList} = this.state; 
			
		return (
			<Layout orientation="vertical">
				<Cell shrink>
					<Button onClick={this.handleOpen}>검색</Button>
				
				</Cell>

				<Cell
					component={VirtualGridList}
					dataSize={items.length}
					direction={'horizontal'}
					focusableScrollbar
					itemRenderer={renderItem}
					itemSize={{
						minWidth: 300,
						minHeight: 600
					}}
					
				/>

				<Notification
					open={this.state.open}
				>
					<Iframe url="http://www.youtube.com/tv/"
						width="450px"
						height="450px"
						id="myId"
						className="myClassname"
						display="initial"
						position="relative"
						X-Frame-Options="sameorigin"
						allowFullScreen/>
					<Button onClick={this.handleClose}>닫기</Button>
				</Notification>
			</Layout>
		);
	}
}

export default VirtualList;
