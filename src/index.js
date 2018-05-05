import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBsYSBR6olmekttoDeww3IkV12W4-OMDm0';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

// Use state if you want data to persist throughout the app
// Create new component. This component should produce HTML.
// The first App component is a functional component, 
// the bottom one is a Class component to use state
// const App = () => { // "const" is ES6 syntax. const is final, it's constant
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            seleectedVideo: null
         };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
            // same as this.setState({ videos: videos }); - when key and variable have same name
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        ); 
    }
}
// Add this component's generated HTML and add it to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));