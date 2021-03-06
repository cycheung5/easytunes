/** SONG LIST
 * Component within Playlist
 * Handles displaying the list of songs in a playlist 
 */

import React, { Component } from 'react'

import './Songlist.css'
import Song from './Song'
class Songlist extends Component {
    state = {
        songs : this.props.songs,
        playlist_id: this.props.playlist_id,
        editing: this.props.editing,
    }

    // Handles when the user clicks play 
    handlePlayClick = (event) =>{
        console.log(event)
    }

    // Remove song from the playlist 
    removeSong = (song, index) => {
        console.log(song, index)
        let songs = this.state.songs
        songs.splice(index, 1)
        this.setState({songs : songs})
    }
    
    handleMoveUp = (song, index) => {
        console.log(song, index)
        let songs = this.state.songs

        let temp = songs[index]
        songs[index] = songs[index-1]
        songs[index-1] = temp

        this.setState({songs : songs})
    }
    
    handleMoveDown = (song, index) => {
        console.log(song, index)
        let songs = this.state.songs

        let temp = songs[index]
        songs[index] = songs[index+1]
        songs[index+1] = temp


        this.setState({songs : songs})
    }

    render() {
        let songs = this.state.songs.map(function(song, i){
            return (
                <Song  key = {song.name + song.song_id} 
                    song={song} 
                    index={i}
                    editing={this.state.editing} 
                    playlist_id = {this.state.playlist_id} 
                    removeSong={this.removeSong} 
                    handleMoveUp={this.handleMoveUp} 
                    handleMoveDown={this.handleMoveDown} 
                    playlist_length={this.props.songs.length}
                    play = {this.props.play}
                    onPlayChange = {this.props.onPlayChange}
                    onPlaylistChange = {this.props.onPlaylistChange}
                    onSongChange = {this.props.onSongChange}
                    current_playlist = {this.props.current_playlist}
                    current_song = {this.props.current_song}
                />
            );
        }, this)

        return (
            <>
                {songs}
            </>
        )
    }

}
 
export default Songlist;