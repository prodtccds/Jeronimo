import React from 'react';
import SearchBar from './components/SearchBar';
import CardBit from "./components/CardBit";
import "./styles/Blog.css";




export default function Blog() {
        return (
                <div className=' home__container'>


                        <div className='content'>
                                <SearchBar />
                                <br></br>
                                <br></br>
                                <br></br>
                                <CardBit />
                        </div>

                </div>
        );
}

