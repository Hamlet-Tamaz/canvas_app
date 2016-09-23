import React from 'react'
import CampBox from './CampBox.jsx'
import Toolbar from './Toolbar.jsx'

var data = [
		{
			title:'Campaign 01',
			logo:'Campaign01.png',
			text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse maiores quis, omnis aspernatur est. Maiores officiis eos, incidunt odio assumenda non ipsum totam, sequi excepturi vel id, recusandae at maxime.'
		},
		{
			title:'Campaign 02',
			logo:'Campaign01.png',
			text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, repellendus officia, deleniti modi inventore numquam reiciendis magni odio, eligendi ipsa maiores, perferendis esse dolores ex. Autem maxime, dolores aspernatur! Voluptatibus.'
		},
		{
			title:'Campaign 03',
			logo:'Campaign01.png',
			text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis error aspernatur porro iste rerum quam consectetur numquam fugiat aliquid rem, reiciendis, maiores explicabo enim cumque culpa, totam accusamus eligendi harum.'
		},
		{
			title:'Campaign 04',
			logo:'Campaign01.png',
			text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et libero debitis cupiditate ex voluptas doloribus nihil eaque error dolore at animi veniam quaerat labore, esse consequatur id alias, dicta laudantium.'
		},
	];

export default React.createClass({

	getUserList(){
		// API to DB for user campaign
		return data
	},

	renderList(){
		return this.getUserList().map(function(campaign,idx){
			return <CampBox key={idx} title={campaign.title} image={campaign.logo} text={campaign.text} />
		});
	},

	render() {
		return (
			<div>
				<div className="test_container">
					<Toolbar/>
					
				</div>
			</div>
			);
	}
})
