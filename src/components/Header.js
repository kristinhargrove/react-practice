import React from 'react';
import Nav from 'react-bootstrap/Nav'


export default (props) => (
    <>
        <header style = {{ backgroundColor : "lightgray", display: "flex",
        justifyContent: "space-between", alignItems: "center" }}>
        <h3 style = {{ textAlign : "left", padding: 10  }}>header</h3>
            <nav style = {{ textAlign : "right" }}>
                <a href="#home" style = {{padding: 10}}>home</a>
                <a href="#feed" style = {{padding: 10}}>feed</a>
                <a href="#faq" style = {{padding: 10}}>faq</a>
            </nav>
        </header>
    </>
)