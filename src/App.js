import React from 'react';
import './App.css';

const NavLink = (props) => {
  return (
    <a className="navbar-item" href={`#${props.link}`}>
      {props.link}
    </a>
  );
};

const Nav = () => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item is-hidden-tablet" href="#top">Damien Lucchese</a>
        <a className="navbar-item is-hidden-mobile" href="#top"><code>
          &lt;dev id="
          <span className="is-size-5 has-text-black">damien</span>
          " class="<span className="is-size-5 has-text-black">lucchese</span>
          "&gt;<span className="is-size-3 has-text-black has-text-weight-semibold">Me</span>&lt;/dev&gt;
        </code></a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <NavLink link="cat" />
          <NavLink link="games" />
          <NavLink link="hire" />
        </div>
      </div>
    </nav>
  );
};

const Hero = (props) => {
  return (
    <section id={props.id} className="hero is-link is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div class="columns">
            <div className={`column ${props.columnType}`}>
              <p className="title">{props.title}</p>
              <p className="subtitle">{props.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <a name="top"></a>
      <Nav />

      <Hero
        id="intro"
        columnType="is-5 is-offset-7 box has-background-success has-shadow-t-r"
        title="Hi, I'm Damien."
        subtitle="I hope you're doing well, today. Let's get something cooking."
      />

      <Hero
        id="cat"
        columnType="is-5 box has-background-dark has-shadow-t-l"
        title="Professor Wasabi"
        subtitle="He's a very handsome little guy but this charmer isn't just eye-candy, he 's a professor of cute-ology. He also has his own legal practice, the Pawfirm of Bubby, Wubby, & Wubbystein. That's not all, he's not one to brag but he is a superhero. That's right, the one and only StatiCat to the rescue! With electric powers he dashes to danger, helping those in need of assistance. My cat has many nicknames..."
      />

      <Hero
        id="games"
        columnType="is-three-fifths is-offset-one-fifth box has-background-tan has-shadow-b-l"
        title="Games are fun."
        subtitle="Video games are a cool medium for interactive storytelling. I especially like retro style games. Tabletop games are great too because you spend time and interact with others WITHOUT technology (for the most part), like board games and D&D."
      />

      <Hero
        id="hire"
        columnType="is-5 box has-background-success has-shadow-b-l"
        title="Let's get something cooking."
        subtitle="If you or your company are in need of a Web Developer, reach out."
      />
    </div>
  );
}

export default App;
