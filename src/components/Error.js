import React from 'react';
import {
    Link,
} from 'react-router-dom';

 const Error = (props) => 
     (
    <>
        <h2>404 Page Not Found</h2>
        <Link to = "/">Go to the Home Page</Link>
    </>
    );

 export default Error;