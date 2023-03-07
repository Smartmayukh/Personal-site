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
      <p> Hello !!!  Welcome to my website.
      </p>
      <p>
        Please feel free to read more <Link to="/about">about me</Link>. You can
        learn about how I developed my interest in AI and Electronics.
        Also you will find my articles and publications, some of my achivements and 
        last but not the least; pictures 📷 of my exhibitions and techfests.
      </p>
      <p>
        You can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        and my <Link to="/projects">projects</Link>. {' '}
      </p>
      <p>
        You can also view <Link to="/stats">site statistics</Link>, {' '}
        Here you will find my statistics (for e.g. Which karate belt 🥋 do I have
        or a google map of all the places I have visited😀)
      </p>
      <p>
        Thank you for your visit to my website. Feel free to <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
