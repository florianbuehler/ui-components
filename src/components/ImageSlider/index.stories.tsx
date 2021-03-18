import React from 'react'
import { Story, Meta } from '@storybook/react'
import StoryBookLayout from 'components/StoryBookLayout'
import ImageSlider from './index'

export default {
  title: 'Components/ImageSlider',
  component: ImageSlider
} as Meta

export const ImageSliderStory: Story = () => (
  <StoryBookLayout>
    <ImageSlider />
  </StoryBookLayout>
)
