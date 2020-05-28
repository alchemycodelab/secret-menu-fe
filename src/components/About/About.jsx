import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import styles from './About.css';
import chris from '../../assets/chris.jpeg';
import jenna from '../../assets/jenna.jpeg';
import hannah from '../../assets/hannah.jpeg';
import josh from '../../assets/josh.jpeg';

const About = () => {

  return (
    <div className={styles.About}>
      <section className={styles.Title}>
        <h1>About the Developers</h1>
      </section>
      <section className={styles.Cards}>
        <div className={styles.Card}> 
          <img src={chris} className={styles.Avatar}/>
          <h3 className={styles.Name}>Chris Ficht</h3>
          <div className={styles.SummaryContainer}>
          <p className={styles.Summary}>Software developer who thrives in collaborative work environments and enjoys challenging experiences that provide opportunities for growth. Looks forward to applying creative and practical problem-solving techniques learned in the music industry to diverse teams.</p></div>
          <a className={styles.Icons} href="https://www.linkedin.com/in/chrisficht/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.Icons} /></a>
          <a className={styles.Icons} href="https://github.com/cficht" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.Icons} /></a>
          </div>
        <div className={styles.Card}>
          <img src={jenna} className={styles.Avatar}></img>
          <h3 className={styles.Name}>Jenna Goldman</h3>
          <div className={styles.SummaryContainer}>
          <p className={styles.Summary}>Full-stack software developer and creative problem-solver who loves to code beautiful, well-organized applications. I thrive in collaborative environments, and draw on my previous experience as a customer-facing software project manager to deeply connect with both people and technology. </p></div>
          <a className={styles.Icons} href="https://www.linkedin.com/in/jennagoldman/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.Icons} /></a>
          <a className={styles.Icons} href="https://github.com/jennagoldman" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.Icons} /></a>
          </div>
        <div className={styles.Card} >
          <img src={hannah} className={styles.Avatar}></img>
          <h3 className={styles.Name}>Hannah Riley</h3>
          <div className={styles.SummaryContainer}>
          <p className={styles.Summary}>Full-stack developer with a particular passion for solving human-facing problems. I thrive in environments where collaboration is key to building elegant and clean projects. I strongly value companies that support career growth and professional development.</p></div>
          <a className={styles.Icons} href="https://www.linkedin.com/in/hannah-m-riley/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.Icons} /></a>
          <a className={styles.Icons} href="https://github.com/hannahriley33" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.Icons} /></a>
          </div>
        <div className={styles.Card}>
          <img src={josh} className={styles.Avatar}></img>
          <h3 className={styles.Name}>Josh Ford</h3>
          <div className={styles.SummaryContainer}>
          <p className={styles.Summary}>17 year IT veteran who made a big leap into the underground glass art world. Solitary studio environment work drained some of my creative juices and left me wanting more in terms of collaboration. I made another leap of faith back into the tech world, though this time in a more stimulating and challenging role.   </p></div>
          <a className={styles.Icons} href="https://www.linkedin.com/in/thisisjoshford/" target="_brel=" rel="noopener noreferrer"><FaLinkedinIn className={styles.Icons} /></a>
          <a className={styles.Icons} href="https://github.com/thisisjoshford" target="_brel=" rel="noopener noreferrer"><FaGithub className={styles.Icons} /></a>
          </div>
      </section>
    </div>
  )
}
export default About;
