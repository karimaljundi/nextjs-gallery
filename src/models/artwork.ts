import {Schema, model, models} from "mongoose";

export interface ArtworkDocument {
    Title: string;
    Artist: string;
    Year: string;
    Category: string;
    Medium: string;
    Description: string;
    Poster: string;
    Likes: number;
    Reviews: Array<string>;
    _id: string;
}

const artworkSchema =new Schema<ArtworkDocument> ({
    Title:     { type: String, required:true},
    Artist:      { type: String, required:true},
    Year: { type: String, required:true},
    Category: { type: String, required:true},
    Medium : { type: String, required:true},
    Description: { type: String, required:false},
    Poster: { type: String, required:true},
    Likes: {type: Number, default:0},
    Reviews: {type: [String], default: []}
});
const artwork = models?.Artwork || model<ArtworkDocument>('Artwork', artworkSchema);

export default artwork;