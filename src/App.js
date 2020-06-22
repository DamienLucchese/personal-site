import React, { useState } from 'react';
import './App.css';

const NavLink = (props) => {
  return (
    <React.Fragment>
      <a className={`navbar-item ${props.color}`} href={`#${props.link}`}>
        {props.link}
      </a>

      {props.hr && <hr className="navbar-divider" />}
    </React.Fragment>
  );
};

const Nav = () => {
  const [showMobileNav, toggleShowMobileNav] = useState(false);

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#top">
          <span className="is-hidden-tablet">Damien Lucchese</span>

          <code className="is-hidden-mobile">
            &lt;dev id="
            <span className="is-size-5 has-text-black">damien</span>
            " class="<span className="is-size-5 has-text-black">lucchese</span>
            "&gt;<span className="is-size-3 has-text-black has-text-weight-semibold">Me</span>&lt;/dev&gt;
          </code>
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${showMobileNav ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => toggleShowMobileNav(!showMobileNav)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${showMobileNav ? "is-active" : ""}`}>
        <div className="navbar-end">

          <div className="navbar-item has-dropdown is-hoverable">
            <a id="navbar-link-family" className="navbar-link has-text-primary">family</a>
            <div className="navbar-dropdown">
              <NavLink link="dad" hr={true} />
              <NavLink link="husband" hr={true} />
              <NavLink link="cat" />
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a id="navbar-link-work" className="navbar-link has-text-info">work</a>
            <div className="navbar-dropdown">
              <NavLink link="development" hr={true} />
              <NavLink link="design" hr={true} />
              <NavLink link="comics" />
            </div>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <a id="navbar-link-leisure" className="navbar-link has-text-danger">leisure</a>
            <div className="navbar-dropdown">
              <NavLink link="cooking" hr={true} />
              <NavLink link="archery" hr={true} />
              <NavLink link="games" />
            </div>
          </div>

          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-success" href="#contact"><strong>contact</strong></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = (props) => {
  return (
    <section id={props.id} className={`hero ${props.sectionColor} is-fullheight`}>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
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
        sectionColor= "is-primary"
        columnType="is-5 is-offset-7 box has-background-success has-shadow-t-r"
        title="Hi, I'm Damien"
        subtitle="I hope you're doing well, today."
      />

      <Hero
        id="dad"
        sectionColor= "is-fall"
        columnType="is-5 box has-background-warning-light has-shadow-b-l"
        title="Being a Dad is Great!"
        subtitle="My kid amazes me, everyday. Watching her grow, and helping her along the way, is a beautiful blessing that I am so thankful for. She's sharp as a tack and I couldn't be more proud."
      />

      <Hero
        id="husband"
        sectionColor= "is-primary"
        columnType="is-5 is-offset-7 box has-background-success has-shadow-t-r"
        title="Happily Married"
        subtitle=""
      />

      <Hero
        id="cat"
        sectionColor= "is-primary"
        columnType="is-5 box has-background-dark has-shadow-t-l"
        title="Professor Wasabi"
        subtitle="He's a very handsome little guy but this charmer isn't just eye-candy, he 's a professor of cute-ology. He also has his own legal practice, the Pawfirm of Bubby, Wubby, & Wubbystein. That's not all, he's not one to brag but he is a superhero. That's right, the one and only StatiCat to the rescue! With electric powers he dashes to danger, helping those in need of assistance. My cat has many nicknames..."
      />

      <Hero
        id="development"
        sectionColor= "is-info"
        columnType="is-5 is-offset-7 box has-background-link has-shadow-t-r"
        title="Web Development"
        subtitle="For the passed seven years I have been a professional Front End Web Developer."
      />

      <Hero
        id="design"
        sectionColor= "is-light"
        columnType="is-three-fifths is-offset-one-fifth box has-background-warning has-shadow-b-r"
        title="Graphic Design"
        subtitle="I kind of fell into it, as a profession but later discovered it was something I always enjoyed without really recognizing it. As a kid, I always really enjoyed art projects, making cards for my parents on holidays, writing in different styles, etc. Most of my interests have a very heavy visual component, I really appreciate art and beauty that can be found all around us. Being able to arrange different visual elements in a way that is aesthetically pleasing is fun and powerful."
      />

      <Hero
        id="comics"
        sectionColor= "is-dark"
        columnType="is-5 box has-background-tan has-shadow-t-l"
        title="Sequential Art"
        subtitle="When I was a kid, I thought comics floated down from Heaven. I was in love from the start. I couldn't read them, yet, but Masters of the Universe figures came with mini-comics and they were special. I got a little older and my uncle gave me an X-Factor comic, which I carried around till my collection grew. Later, I realized it was the medium, itself, that ensnared me. I got older and I wanted to be a part of the process that brought these special gems to life."
      />

      <Hero
        id="cooking"
        sectionColor= "is-danger"
        columnType="is-three-fifths is-offset-one-fifth box has-background-danger has-shadow-t-r"
        title="Playing in the Kitchen"
        subtitle="I'm really happy and free in my kitchen. I feel closest to my grandparents, there. There's no pressure, I don't have to follow recipes, I can do what I feel like at the moment. During a symphony of music, sizzling pans & boiling water, I listen closely to my tastebuds & stomach. This best part is that at the end of my creative experiments, I get to eat!"
      />

      <Hero
        id="archery"
        sectionColor= "is-warning"
        columnType="is-5 box is-offset-7 has-background-warning-light has-shadow-b-r"
        title="Let 'Em Fly"
        subtitle="Instinctive traditional archery is one of my favorite hobbies. Only at targets, I shoot a PSE Nighthawk. It's a #35 take-down recurve. As for my arrows, I use Easton Axis 400 with weighted target tips & feather fletchings. For me, it's about the relationship with the bow, it's about relaxing and letting those arrows fly. It's a challenge but it calms me. Landing tight clusters of bullseyes, time after time, is not my concern. Testing what I can do without sights, stabalizers, & tension assist, is why I got into traditional archery."
      />

      <Hero
        id="games"
        sectionColor= "is-primary"
        columnType="is-three-fifths is-offset-one-fifth box has-background-tan has-shadow-b-l"
        title="Games Are Fun"
        subtitle="Video games are a cool medium for interactive storytelling. I especially like retro style games. Tabletop games are great too because you spend time and interact with others WITHOUT technology (for the most part), like board games and D&D."
      />

      <Hero
        id="contact"
        sectionColor= "is-info"
        columnType="is-5 box has-background-success has-shadow-b-l"
        title="Let's Get Something Cooking"
        subtitle="If you or your company are in need of a Web Developer, reach out."
      />
    </div>
  );
}

export default App;
