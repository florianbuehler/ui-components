import React from 'react'
import { Story, Meta } from '@storybook/react'
import StoryBookLayout from 'components/StoryBookLayout'
import GlassUi from './index'

export default {
  title: 'Components/GlassUi',
  component: GlassUi
} as Meta

export const GlassUiStory: Story = () => (
  <StoryBookLayout>
    <GlassUi />
  </StoryBookLayout>
)
