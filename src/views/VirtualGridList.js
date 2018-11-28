import {GridListImageItem} from '@enact/moonstone/GridListImageItem';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
import Region from '@enact/moonstone/Region';
import ri from '@enact/ui/resolution';
import ToggleButton from '@enact/moonstone/ToggleButton';
import {VirtualGridList} from '@enact/moonstone/VirtualList';

const imgsrc = ['https://movie-phinf.pstatic.net/20181031_68/1540952503496fNRsF_JPEG/movie_image.jpg',
'https://movie-phinf.pstatic.net/20181029_21/1540774701820gU85o_JPEG/movie_image.jpg',
'https://movie-phinf.pstatic.net/20181031_241/1540950975705Bac4v_JPEG/movie_image.jpg',
'https://movie-phinf.pstatic.net/20181106_289/1541478936071tmadh_JPEG/movie_image.jpg',
'https://movie-phinf.pstatic.net/20181031_264/1540949415228uy0j3_JPEG/movie_image.jpg',
'https://movie-phinf.pstatic.net/20181109_286/1541743345207CtoXg_JPEG/movie_image.jpg',
'https://movie-phinf.pstatic.net/20181126_296/1543195305541TXc6u_JPEG/movie_image.jpg',
'https://movie-phinf.pstatic.net/20181022_106/1540170285123a57tG_JPEG/movie_image.jpg',
'https://movie-phinf.pstatic.net/20181026_40/1540518904460lgFIb_JPEG/movie_image.jpg',
'https://movie-phinf.pstatic.net/20181101_6/15410499053179Yp7F_JPEG/movie_image.jpg']

const movieName = ["보헤미안 랩소디", "신비한 동물들과 그린델왈드의 범죄", "성난황소", "완벽한 타인",
"베일리 어게인", "번 더 스테이지: 더 무비", "바울", "출국", "너의 췌장을 먹고 싶어", "택시 5"]

const
	items = [],
	// eslint-disable-next-line enact/prop-types, enact/display-name
	renderItem = ({index, ...rest}) => {
		const
			{text, subText} = items[index];

		return (
			<GridListImageItem
				{...rest}
				caption={text}
				subCaption={subText}
				source={items[index].source}
			/>
		);
	};

for (let i = 0; i < 10; i++) {
	const
		text = movieName[i],
		subText = (i+1)+"위",
		source = imgsrc[i];

	items.push({text, subText, source});
}

class VirtualGridListView extends React.Component {
	constructor () {
		super();
		this.state = {
			isHorizontalList: false
		};
	}

	onClickChangeDirectionButton = () => {
		this.setState((state) => ({isHorizontalList: !state.isHorizontalList}));
	}

	render () {
		const
			{isHorizontalList} = this.state;

		return (
			<Layout orientation="vertical">
				<Cell shrink>
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
			</Layout>
		);
	}
}

export default VirtualGridListView;
