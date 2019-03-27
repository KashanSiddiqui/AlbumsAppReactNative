import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './albumDetails';

class AlbumList extends React.Component {

    state = {
      albums: [],
    }


    componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
    console.log('here');        
    }

    renderAlbums() {
      return this.state.albums.map(album => 
      <AlbumDetails key={album.title} album={album} />
      );
    }

    render() {
      console.log(this.state);
    return (
      <ScrollView >
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
export default AlbumList;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
