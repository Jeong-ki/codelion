import React from 'react';
import Header from './Body_Component/Header';
import Main from './Body_Component/Main';
import Product from './Body_Component/Product';
import Footer from './Body_Component/Footer';

function Body(props) {
    return(
        <div>
            <h1>body h1이다!</h1>
            <Header/>
            <Main/>
            <Product/>
            <Footer/>
        </div>
    )
}

export default Body;