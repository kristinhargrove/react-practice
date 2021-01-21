import React from 'react';
import {
    Link,
} from 'react-router-dom';


export default (props) => (
    <>
        <header style = {{ backgroundColor : "lightgray", display: "flex",
        justifyContent: "space-between", alignItems: "center" }}>
        <h3 style = {{ textAlign : "left", padding: 10  }}>header</h3>
            <nav style = {{ textAlign : "right" }}>
                <Link to="/" style = {{padding: 10}}>home</Link>
                <Link to="/blog" style = {{padding: 10}}>blog</Link>
                <Link to="/faqs" style = {{padding: 10}}>faq</Link>
            </nav>
        </header>
    </>
)