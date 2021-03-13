import React from 'react'
import classes from './styles.module.scss'

// images
import avatar from 'assets/images/avatar.png'
import twitch from 'assets/images/twitch.png'
import steam from 'assets/images/steam.png'
import upcoming from 'assets/images/upcoming.png'
import library from 'assets/images/library.png'
import controller from 'assets/images/controller.png'
import assassinsCreed from 'assets/images/assassins.png'

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
              <a href="#">Streams</a>
            </li>
            <li className={classes.link}>
              <img src={steam} alt="Steam" />
              <a href="#">Games</a>
            </li>
            <li className={classes.link}>
              <img src={upcoming} alt="Upcoming" />
              <a href="#">New</a>
            </li>
            <li className={classes.link}>
              <img src={library} alt="Library" />
              <a href="#">Library</a>
            </li>
          </ul>
          <div className={classes.pro}>
            <h2>Join pro for free games.</h2>
            <img src={controller} alt="Controller" />
          </div>
        </div>
        <div className={classes.games}>
          <div className={classes.status}>
            <h1>Active Games</h1>
            <input type="text" />
          </div>
          <ul className={classes.cards}>
            <li className={classes.card}>
              <img src={assassinsCreed} alt="Assassins Creed" />
              <div className={classes.cardInfo}>
                <h2>Assassins Creed Valhalla</h2>
                <p>PS5 Version</p>
                <div className={classes.progress} />
              </div>
              <h2 className={classes.percentage}>60%</h2>
            </li>
            <li className={classes.card}>
              <img src={assassinsCreed} alt="Assassins Creed" />
              <div className={classes.cardInfo}>
                <h2>Assassins Creed Valhalla</h2>
                <p>PS5 Version</p>
                <div className={classes.progress} />
              </div>
              <h2 className={classes.percentage}>60%</h2>
            </li>
            <li className={classes.card}>
              <img src={assassinsCreed} alt="Assassins Creed" />
              <div className={classes.cardInfo}>
                <h2>Assassins Creed Valhalla</h2>
                <p>PS5 Version</p>
                <div className={classes.progress} />
              </div>
              <h2 className={classes.percentage}>60%</h2>
            </li>
          </ul>
        </div>
      </section>
      <div className={classes.circle1} />
      <div className={classes.circle2} />
    </main>
  )
}

export default GlassUi
