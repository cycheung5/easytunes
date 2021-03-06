/** SEARCH LIST 
 * Component used within Search Screen 
 * Used to handle display the list of search results 
 */

import React, { Component } from 'react'
import SearchListCard from './SearchListCard.js'


class SearchList extends Component {

    
    render() {

        const items = this.props.searchList;
        const tracks = items.songs
        const artists = items.artists
        const users = items.users
        const playlists = items.playlists
        
        return (
            <div className='section'>
                {/* Display the tracks */}
                {tracks ? 
                    <>
                    <div className="row">
                        <h3 className="col s1">Songs</h3>
                    </div>
                    <div className='row'>
                        <div className='col s3'></div>
                        <div className='col s3'>Song</div>
                        <div className='col s3'>Artist</div>
                        <div className='col s3'>Duration</div>
                        <div className='col s3'></div>
                    </div>
                    {tracks && tracks.map(function(item) {
                        return (
                            <SearchListCard key = {item.id} item={item} type="track" username = {this.props.username} history = {this.props.history}
                            play = {this.props.play} 
                            onPlayChange = {this.props.onPlayChange} 
                            onPlaylistChange = {this.props.onPlaylistChange}
                            onSongChange = {this.props.onSongChange}
                            onShuffleChange = {this.props.onShuffleChange}
                            playlist = {this.props.uris}
                            current_song = {this.props.current_song}
                            access_token = {this.props.access_token}
                            offset = {this.props.offset}
                            shuffle= {this.props.shuffle}
                            shufflePlaylist = {this.props.shufflePlaylist}
                            needsUpdate = {this.props.needsUpdate}
                            updated = {this.props.updated}
                            canUpdate = {this.props.canUpdate}/>
                        );}, this)
                    }
                    </>
                    : null
                }

                {/* Display the artists */}
                {artists ? 
                <>
                <div className='row'>
                        <div className='col s3'>Artists</div>
                    </div>
                    {artists && artists.map(function(item) {
                    return (
                        <SearchListCard key = {item.id} item={item} type="artist" username = {this.props.username} history = {this.props.history}
                        play = {this.props.play} 
                            onPlayChange = {this.props.onPlayChange} 
                            onPlaylistChange = {this.props.onPlaylistChange}
                            onSongChange = {this.props.onSongChange}
                            onShuffleChange = {this.props.onShuffleChange}
                            playlist = {this.props.uris}
                            current_song = {this.props.current_song}
                            access_token = {this.props.access_token}
                            offset = {this.props.offset}
                            shuffle= {this.props.shuffle}
                            shufflePlaylist = {this.props.shufflePlaylist}
                            needsUpdate = {this.props.needsUpdate}
                            updated = {this.props.updated}
                            canUpdate = {this.props.canUpdate}/>
                    );} ,this)
                     }
                
                </>
                :
                null
                }

                {/* Display the playlists */}
                {
                    playlists ? 
                    <>
                    <div className="row">
                        <h3 className="col s1">Mixtapes</h3>
                    </div>
                    <div className='row'>
                        <div className='col s1'></div>
                        <div className='col s3'>Name</div>
                        <div className='col s3'>Username</div>
                        <div className='col s1'>Likes</div>
                        <div className='col s3'>Songs</div>
                        <div className='col s3'></div>
                    </div>
                    {playlists && playlists.map(function(item) {
                        console.log(item)
                    return (
                        <SearchListCard key = {item._id} item={item} type="playlist" username = {this.props.username} history = {this.props.history}
                        play = {this.props.play} 
                            onPlayChange = {this.props.onPlayChange} 
                            onPlaylistChange = {this.props.onPlaylistChange}
                            onSongChange = {this.props.onSongChange}
                            onShuffleChange = {this.props.onShuffleChange}
                            playlist = {this.props.uris}
                            current_song = {this.props.current_song}
                            access_token = {this.props.access_token}
                            offset = {this.props.offset}
                            shuffle= {this.props.shuffle}
                            shufflePlaylist = {this.props.shufflePlaylist}
                            needsUpdate = {this.props.needsUpdate}
                            updated = {this.props.updated}
                            canUpdate = {this.props.canUpdate}/>
                    );},this)
                    }
                    </> : 
                    null
                }

                {/* Display the Users */}
                {users ? 
                <>
                <div className="row">
                        <h3 className="col s1">Users</h3>
                    </div>
                    <div className='row'>
                        <div className='col s3'></div>
                        <div className='col s3'>User</div>
                        <div className='col s3'>Followers</div>
                        <div className='col s3'>Playlists</div>
                        <div className='col s3'></div>
                    </div>
                    {users && users.map(function(item) {
                    return (
                        <SearchListCard 
                            key = {item.user._id} 
                            item={item} 
                            type="user" 
                            username = {this.props.username} 
                            history = {this.props.history}
                            play = {this.props.play} 
                            onPlayChange = {this.props.onPlayChange} 
                            onPlaylistChange = {this.props.onPlaylistChange}
                            onSongChange = {this.props.onSongChange}
                            onShuffleChange = {this.props.onShuffleChange}
                            playlist = {this.props.uris}
                            current_song = {this.props.current_song}
                            access_token = {this.props.access_token}
                            offset = {this.props.offset}
                            shuffle= {this.props.shuffle}
                            shufflePlaylist = {this.props.shufflePlaylist}
                            needsUpdate = {this.props.needsUpdate}
                            updated = {this.props.updated}
                            canUpdate = {this.props.canUpdate}
                        />
                    );},this)
                    }
                </>
                :
                null
                }


            </div>
        );
    }
}
// const mapStateToProps = (state, ownProps) => {
//     const searchList = ownProps.searchList;
//     return {

//     };
// }
export default SearchList;