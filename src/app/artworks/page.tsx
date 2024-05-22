
import Artwork from '@/components/artwork/artwork';
import React from 'react';
import { getArtworks } from '@/lib/data';



const Artworks = async() =>{
    const getArtworksdata = await getArtworks();

    return(
        <div>
            {getArtworksdata.map((artwork) => (
                <Artwork key={artwork.id} artwork={artwork} />
            ))}
        </div>
    )
}
export default Artworks;