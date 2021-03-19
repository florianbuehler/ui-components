import React from 'react'

// styles
import classes from './styles.module.scss'
import './styles.css'

const StoryBookLayout: React.FC = ({ children }): React.ReactElement => {
  return <main className={classes.container}>{children}</main>
}

export default StoryBookLayout
