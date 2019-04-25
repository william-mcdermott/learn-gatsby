import React from 'react';
import { Link } from 'gatsby';

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>My name is William and I live in Austin, TX. <Link to="/contact">Contact me</Link> to say hi!</p>
    </div>
  )
}

export default AboutPage
