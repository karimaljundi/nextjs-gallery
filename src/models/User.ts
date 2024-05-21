import { Schema, model, models } from "mongoose";


export interface UserDocument {
    email: string;
    password: string;
    username: string;
    isArtist: boolean;
    followingArtists: string[];
    likedPosts: string[];
    reviews: string[];
    artworks: Object[];
    notifications: string[];
    workshops: string[];
    enrolledWorkshops: string[];
    _id: string;

}


let userSchema = new Schema<UserDocument>({
    username: {type: String ,required:true, unique: true},
    email: {type: String ,required:true, unique: true},
    password: {type: String ,required:true},
    isArtist: {type: Boolean, require: true, default: false},
    followingArtists : {type: [String], default: []},
    likedPosts: {type: [String], default: []},
    reviews: {type: [String], default: []},
    artworks: [{
        type: Object
    }],
    notifications: {type: [String], default: null},
    workshops: {type: [String], default: []},
    enrolledWorkshops: {type: [String], default: []}
}, {strict: false});

const User = models?.User || model<UserDocument>('User', userSchema);

export default User;