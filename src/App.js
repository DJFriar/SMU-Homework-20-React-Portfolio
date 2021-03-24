import React from "react";
import Project from './components/Projects';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        {/* Desktop Navigation */}
        <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
          <div class="gradientbar"></div>
          <nav class="uk-navbar-container" uk-navbar="mode: click" id="master-topnav">
            <div class="uk-navbar-left">
              <a class="uk-navbar-item uk-logo uk-hidden@s" href="/">TC</a>
              <a class="uk-navbar-item uk-logo uk-visible@s" href="/">Tommy Craft</a>
            </div>
            <div class="uk-navbar-center">
              <ul class="uk-navbar-nav uk-visible@m">
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/resume">Resume</Link></li>
              </ul>
            </div>
            <div class="uk-navbar-right">
              <a href="#" class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon uk-toggle="target: #mobilenav"></a>
              <ul class="uk-navbar-nav uk-visible@m ">
                <li>
                  <a href="https://www.github.com/djfriar" class="hidden-link" rel="noreferrer" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/djfriar" class="hidden-link" rel="noreferrer" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/djfriar" class="hidden-link" rel="noreferrer" target="_blank">
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/djfriar/" class="hidden-link" rel="noreferrer" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* Mobile Navigation */}
        <div id="mobilenav" uk-offcanvas="flip: true" class="uk-offcanvas">
          <div class="uk-offcanvas-bar">
            <ul class="uk-nav">
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/resume">Resume</a></li>
              <hr />
              <div class="social-links">
                <a href="https://www.github.com/djfriar" class="hidden-link" rel="noreferrer" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="https://www.instagram.com/djfriar" class="hidden-link" rel="noreferrer" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.twitter.com/djfriar" class="hidden-link" rel="noreferrer" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/djfriar/" class="hidden-link" rel="noreferrer" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const project = [
  {
    id: '1',
    name: 'Outdoor Adventures',
    description: 'This was a group project that I worked on with two other students. We were to come up with a site that utilized at least one external 3rd party API, leveraged Express and NodeJS, and introduced at least one new framework we had not worked with before. We decide to build a site that used National Park Service data to allow for users to view details about the various parks and then add them to a list of either parks they had visited already, or parks that they would like to visit.',
    keyTech: 'Axios, Bootstrap, Express, Handlebars, Heroku, MySQL, Passport, Sequlize'
  },
  {
    id: '2',
    name: 'Reverse Engineering Code',
    description: 'In this assignment we were to review a sample site and describe what was going on with the code. While we could have done this with a simple Word doc, I chose to make a website that leveraged PrismJS to stylize the code and have my notes next to it.',
    keyTech: 'Express, PrismJS, UIKit'
  },
  {
    id: '3',
    name: 'Code Quiz',
    description: 'This was the 4th homework assignment I was assigned. The goal here was to create an app that allowed the user to take a timed multiple choice quiz test and then would score the user at the end.',
    keyTech: 'Bootstrap, CSS, HTML5, jQuery'
  },
  {
    id: '4',
    name: 'Password Generator',
    description: 'A password generator site that allows you to set your complexity requirements and then generate randomized passwords that meet those requirements. This was the 3rd homework project in the Full Stack Web Dev course.',
    keyTech: 'teBootstrap, CSS, HTML5, jQuerych'
  },
  {
    id: '5',
    name: 'Tour of Honor Mobile',
    description: 'The Tour of Honor is a motorcycle rally that uses various military and first responder memorials as rally locations. Starting out using physical pictures and snail mail, they recently started to allow for emailed in submissions that had specific subject formatting and such. So I volunteered to make them an app that made submitting easier for participants and this is the result of that. The iOS version came out first, followed by an Android version. The iOS version has since been rewritten from scratch using SwiftUI and is currently on version 2.',
    keyTech: 'Xcode, Android Studio, Swift, SwiftUI, Java'
  },
];

function Home() {
  return (
    <div>
      <h2 class="uk-text-center">Tommy Craft</h2>
      <Link to="/portfolio">Portfolio</Link><br />
      <Link to="/resume">Resume</Link>
    </div>
  )
}

function Resume() {
  return <h2>Resume</h2>
}

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      {project.map(row => (
        <Project name={row.name} description={row.description} keyTech={row.keyTech} />
      ))}
    </div>
  )
}