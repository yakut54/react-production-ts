import { ComponentMeta, ComponentStory } from '@storybook/react'
import SelectImg from './Select.jpg'

import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Normal = Template.bind({})
Normal.args = {
  label: 'Укажите значение',
  options: [
    { value: '123', content: 'first point' },
    { value: '124', content: 'second point' },
    { value: '133', content: 'third point' },
  ],
}
