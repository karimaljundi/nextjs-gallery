"use server";
import  User from '@/models/User';
import Artwork from '@/models/artwork';
import { connectDB } from './mongodb';

export async function getArtworks()  {
    try{
        connectDB();
        const artworks = await Artwork.find();
        return artworks;
    }catch(err){
        console.log(err);
        throw new Error('Error getting artworks');
    }

}
export async function saveArtwork(artworkData: any){
       await connectDB();
       const artwork = new Artwork(artworkData);
       return artwork.save();
};
export async function getArtworkById(id: string){
    connectDB();
    const artwork = await Artwork.findById(id);
    return artwork;    
}



export async function getUserById(id: string) {
    connectDB();    
    const user = await User.findById(id);
    return user;
}
export async function getUserByEmail(email: string){
    connectDB();
    const user = await User.findOne({email: email});
    return user ? user.toObject() : null;
};
