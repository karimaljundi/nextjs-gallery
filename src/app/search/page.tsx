'use client';
import React from 'react';
import { useSession } from 'next-auth/react';

const SearchPage = () => {
    const { status } = useSession();
    const {data: session} = useSession();
    console.log("sesion log:",session, status);
    return (
        <div>
        <h1>Search Page</h1>
        </div>
    );
}
export default SearchPage;