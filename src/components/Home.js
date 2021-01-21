import React from 'react';

const Home = (props) => (
    <>
        <body>
            <h2 style= {{ margin : 25, textAlign : "center", color: "purple" }}>Kristin's Blog</h2><br />
                <h3 style = {{ margin: 10 }}>{props.blogTitle}</h3>
                <p style = {{ padding: 25 }}>{props.blogContent}</p>
        </body>
    </>
)

export default Home;