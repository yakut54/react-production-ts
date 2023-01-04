import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { AppLink, AppLinkTheme } from './AppLink'

export default {
  title: 'widget/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  theme: AppLinkTheme.PRIMARY,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Primary Dark',
  theme: AppLinkTheme.PRIMARY,
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  theme: AppLinkTheme.SECONDARY,
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'Secondary Dark',
  theme: AppLinkTheme.SECONDARY,
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RED = Template.bind({})
RED.args = {
  children: 'Red',
  theme: AppLinkTheme.RED,
}

export const RedDark = Template.bind({})
RedDark.args = {
  children: 'Red Dark',
  theme: AppLinkTheme.RED,
}
RedDark.decorators = [ThemeDecorator(Theme.DARK)]