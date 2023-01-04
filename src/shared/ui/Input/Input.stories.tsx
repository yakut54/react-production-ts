import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { Input } from './Input'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const InputLight = Template.bind({})
InputLight.args = {
  placeholder: 'Enter text',
  value: 'input dark',
}

export const InputDark = Template.bind({})
InputDark.args = {
  placeholder: 'Enter text',
  value: 'input dark',
}
InputDark.decorators = [ThemeDecorator(Theme.DARK)]