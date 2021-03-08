import React from 'react'
import classes from './styles.module.scss'

// images
import avatar from 'assets/images/avatar.png'
import twitch from 'assets/images/twitch.png'
import steam from 'assets/images/steam.png'
import upcoming from 'assets/images/upcoming.png'
import library from 'assets/images/library.png'
import controller from 'assets/images/controller.png'

const GlassUi: React.FC = (): React.ReactElement => {
  return (
    <main className={classes.container}>
      <section className={classes.glass}>
        <div className={classes.dashboard}>
          <div className={classes.user}>
            <img src={avatar} alt="Avatar" />
            <h3>Florian Bühler</h3>
            <p>Pro Member</p>
          </div>
          <ul className={classes.links}>
            <li className={classes.link}>
              <img src={twitch} alt="Twitch" />
              <h2>Streams</h2>
            </li>
            <li className={classes.link}>
              <img src={steam} alt="Steam" />
              <h2>Games</h2>
            </li>
            <li className={classes.link}>
              <img src={upcoming} alt="Upcoming" />
              <h2>New</h2>
            </li>
            <li className={classes.link}>
              <img src={library} alt="Library" />
              <h2>Library</h2>
            </li>
          </ul>
          <div className={classes.pro}>
            <h2>Join pro for free games.</h2>
            <img src={controller} alt="Controller" />
          </div>
        </div>
        <div className={classes.games} />
      </section>
      <div className={classes.circle1} />
      <div className={classes.circle2} />
    </main>
  )
}

export default GlassUi
