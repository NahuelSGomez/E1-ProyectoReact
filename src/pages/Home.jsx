import React from 'react';
import { Hero } from '../components/Hero';
import { Featured } from '../components/Featured';
import { Categories } from '../components/Categories';

export const Home = () => {
    return(
        <>
            <Hero />
            <Featured />
            <Categories />
        </>
    )
}