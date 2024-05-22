import Artpeice from '@/components/Artpiece/Artpiece';
import React from 'react';
import { getArtworkById, getUserById } from '@/lib/data';

const SingleArtwork = async({params}) =>{
    const {id} = params;
    const getArtworkdata = await getArtworkById(id);
    const getUserName = await getUserById(getArtworkdata.Artist);
    return(
        <div>
            <Artpeice key={getArtworkdata.id} artwork={getArtworkdata} Artist={getUserName.username} />
        </div>
    )
}

export default SingleArtwork;