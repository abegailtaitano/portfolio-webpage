import * as React from 'react'
import { Link } from 'gatsby'


const Homepage = () => {
  return (
    <>
    <h1>Hello Abby!</h1>
    <p>How are you?</p>
    <Link to="/about">About page</Link>
    </>
  );
};


export default Homepage;
