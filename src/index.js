import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import Env from './Env';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
 
class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos: [], 
			selectedVideo: null 
		};

		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: Env.youtubeAPI, term: term}, (videos) => {
			this.setState({
			 videos: videos,
			 selectedVideo: videos[0]
			});
			// whenever the key and value are the same, can use { videos } for es6 syntax
		});
	}

	render() {
		// debounce - throttle search
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		return(
			<div>
				<SearchBar onSearchTermChange = {videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					videos={this.state.videos}
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
				/>
			</div>
		);
	}
}

// Tell React to take the component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

// ReactDOM wants some component and target container

// Make one component per file

// Top level data should fetch the data and trickle down

// <VideoList videos={this.state.videos} /> is an example of passing props

// render tries to do things while constructor is running and fetching YTSearch