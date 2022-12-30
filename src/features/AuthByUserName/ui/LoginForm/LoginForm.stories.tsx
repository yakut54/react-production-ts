import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

import { LoginForm } from './LoginForm'

export default {
  title: 'faetures/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
)

export const LoginFormLight = Template.bind({})
LoginFormLight.args = {}
LoginFormLight.decorators = [
  StoreDecorator({
    loginForm: { username: 'username', password: '123456' },
  }),
]

export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [
  StoreDecorator({
    loginForm: { username: 'username', password: '123456', error: 'Error' },
  }),
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
]

export const LoginFormDark = Template.bind({})
LoginFormDark.args = {}
LoginFormDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: { username: 'admin', password: '123' },
  }),
]
