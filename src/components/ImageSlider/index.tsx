import React from 'react'
import classes from './styles.module.scss'

import imgBefore from 'assets/images/imageSlider/landscape-grey.jpg'
import imgAfter from 'assets/images/imageSlider/landscape-coloured.jpg'

const ImageSlider: React.FC = (): React.ReactElement => {
  return (
    <main className={classes.container}>
      <div className={classes.imgContainerAfter}>
        <img className={classes.imgAfter} src={imgAfter} alt="" />
      </div>
      <div className={classes.imgContainerBefore}>
        <img className={classes.imgBefore} src={imgBefore} alt="" />
      </div>
      <div className={classes.slider} />
    </main>
  )
}

export default ImageSlider
