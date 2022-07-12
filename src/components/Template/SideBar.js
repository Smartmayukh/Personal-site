import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Mayukhmali Das</h2>
        <p><a href="mailto:mayukhmalidas322@gmail.com">mayukhmalidas322@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Mayukhmali.
        I am a <a href="https://icme.stanford.edu/">Jadavpur University</a> undergraduate and
        the CEO of Faltung Logic Technology
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy;Mayukhmali Das<Link to="/">https://smartmayukh.github.io/Personal-site/</Link>.</p>
    </section>
  </section>
);

export default SideBar;
