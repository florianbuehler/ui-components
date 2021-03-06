import React from 'react'
import classes from './styles.module.scss'

const GlassUi: React.FC = (): React.ReactElement => {
  return (
    <main className={classes.main}>
      <section className={classes.glass}> </section>
      <div className={classes.circle1} />
      <div className={classes.circle2} />
    </main>
  )
}

export default GlassUi
