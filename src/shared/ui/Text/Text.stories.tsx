import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Text, TextTheme } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const PrimaryText = Template.bind({})
PrimaryText.args = {
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam omnis quae inventore. Ad, blanditiis ducimus libero recusandae adipisci officia nam?',
}

export const ErrorText = Template.bind({})
ErrorText.args = {
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam omnis quae inventore. Ad, blanditiis ducimus libero recusandae adipisci officia nam?',
  theme: TextTheme.ERROR,
}

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam omnis quae inventore. Ad, blanditiis ducimus libero recusandae adipisci officia nam?',
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Lorem ipsum dolor',
}

export const DarkOnlyTitle = Template.bind({})
DarkOnlyTitle.args = {
  title: 'Lorem ipsum dolor',
}
DarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkOnlyText = Template.bind({})
DarkOnlyText.args = {
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam omnis quae inventore. Ad, blanditiis ducimus libero recusandae adipisci officia nam?',
}
DarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)]

export const DarkText = Template.bind({})
DarkText.args = {
  title: 'Lorem ipsum dolor',
  text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam omnis quae inventore. Ad, blanditiis ducimus libero recusandae adipisci officia nam?',
}
DarkText.decorators = [ThemeDecorator(Theme.DARK)]