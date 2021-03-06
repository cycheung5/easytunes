import mongoose from 'mongoose'

const Schema = mongoose.Schema

const PlaylistSchema = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User', required:true},
    username: {type: String, required: true},
    name: {type:String, required:true},
    playlist_img: {type:String, required: true},
    date_created: {type: Date, required:true},
    total_duration: {type: Number, default: 0},
    public: {type: Boolean, default: false},
    likes: {type: Number, default: 0},
    comments: [
        {
            user_id: {type: Schema.Types.ObjectId, ref: 'User', required:true},
            //profile_img: {type: String, required: true},
            date: {type: Date, required: true},
            message: {type: String, required: true},
            replies: [
                {
                    user_id: {type: Schema.Types.ObjectId, ref: 'User', required:true},
    
                    //profile_img: {type: String, required: true},
                    date: {type: Date, required: true},
                    message: {type: String, required: true},
                }
            ]
        }
    ],
    songs: [
        {
            song_id : {type: String, required: true},
            song_uri : {type: String, required: true},
            name: {type: String, required: true},
            artists: [{type: String, required: true}],
            uploaded: {type: Boolean, required: true},
            duration: {type: Number, required: true},
            song_img: {type: String, required: true},
        }
    ]
})

const Playlist = mongoose.model('Playlist', PlaylistSchema);
export default Playlist