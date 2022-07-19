import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Mayukhmali Das's personal website. Jadavpur University undergraduate, "}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Mayukhmali Das Portfolio</Link></h2>
          <p>
            An elegant react based website written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Hello !! Welcome to my website. 
        Please feel free to read more <Link to="/about">about me</Link>
        Here you can learn about how I developed interest in AI and Electronics. Also you will find in this page, my articles and publications, my hobbies,
        my travelling pictures and last but not the least some of my favourite books.
        You can also check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">statistics</Link>, {' '}
        Here you will find my statistics (for eg Which karate belt do I have or a google map of all the places I have visited😀) 
        or you can <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
