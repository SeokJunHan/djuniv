import Group from '@enact/ui/Group';
import Item from '@enact/moonstone/Item';
import Layout, {Cell} from '@enact/ui/Layout';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import React from 'react';
import ScrollerComponent from '@enact/moonstone/Scroller';
import ViewManager from '@enact/ui/ViewManager';
import Button from '../views/Button';
import VideoPlayer from '../views/VideoPlayer';
import VirtualGridList from '../views/VirtualGridList';
import VirtualList from '../views/VirtualList';
import css from './App.less';
import Home from './Home';
import View from './View';

const views = [
	{title: '영화 순위', view: VirtualGridList},
	{title: '장르', view: VirtualList},
	{isAriaHidden: true, title: '유튜브 재생', view: VideoPlayer},

];

class AppBase extends React.Component {
	/*propTypes: {
		index: PropTypes.number,
		onChange: PropTypes.func
	}*/

	constructor () {
		super();

		this.state = {
			index: 0
		}
	}

	render () {
		// delete rest.onChange;

		const {onChange, ...rest} = this.props;

		const handleChange = ({selected}) => {
			this.setState({index: selected});
		};

		return (
			<Layout {...rest} className={css.app} style={{height: '100%'}}>
				<Cell component={ScrollerComponent} size="25%" >
					<Group childComponent={Item} itemProps={{className: css.navItem}} onSelect={handleChange} select={'radio'} selected={this.state.index}>
						{views.map((view) => view.title)}
					</Group>
				</Cell>
				<Cell component={ViewManager} index={this.state.index}>
					{views.map((view, i) => (
						<View {...view} 
						movePage={() => {
							// onChange(3)
							this.setState({index: 3})
						}}
						findPage={
							() =>
							{
								this.setState({index: 0})
							}
						}
						
						
						key={i} />
					))}
				</Cell>
			</Layout>
		);
	}
}

const App = MoonstoneDecorator(AppBase);

export default App;
