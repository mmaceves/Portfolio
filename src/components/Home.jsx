import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './styles/style.css';

function Home() {
  return (
    <div>
      <Header />
      <section class="hero-banner">
            <h2>Full Stack Developer!</h2>
        </section>

        <section  class="page-section" id="about">
            <h2>About Me</h2>
            <div>
            <p>Hi, my name is Matt I'm currently in a coding bootcamp course learning to code. I like looking at open source projects on Github. I look forward to learning more and changing career fields to become a full stack developer.</p>
            </div>
        </section>
      <Footer />
    </div>
  );
}

export default Home;
