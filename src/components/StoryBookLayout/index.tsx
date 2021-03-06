import React from 'react'
import classes from './styles.module.scss'

const StoryBookLayout: React.FC = ({ children }): React.ReactElement => {
  return <main className={classes.container}>{children}</main>
}

export default StoryBookLayout
