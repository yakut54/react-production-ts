import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from 'shared/ui/Modal/Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const ModalLight = Template.bind({})
ModalLight.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui rem quam molestias ut illum fugit perspiciatis saepe voluptatum commodi alias exercitationem quasi, similique quo possimus quod! Eaque, error aperiam maiores illo sapiente, dignissimos modi amet vitae alias odit voluptate laudantium fuga cumque reiciendis accusamus placeat temporibus quos facilis minus sit. Qui tenetur natus quam nobis ad vero corporis ab voluptatum quos excepturi soluta facere ex quidem eos quae quibusdam consequatur totam placeat, consequuntur magni? Maxime ut earum cumque eaque ducimus porro culpa voluptates? Nam perspiciatis quae necessitatibus quod sed, dicta animi accusamus optio temporibus totam officia! Libero nesciunt fugiat voluptatem, atque doloremque hic consequatur? Possimus voluptatem magni, dolores sint deleniti perferendis accusantium facilis quas facere distinctio iure rerum voluptate debitis dignissimos commodi repellat laborum exercitationem nostrum nemo tenetur deserunt sed beatae perspiciatis? Officiis debitis consectetur laboriosam consequuntur, culpa saepe ipsam eius impedit sequi in ullam vero? Quibusdam possimus provident excepturi, tenetur voluptas nisi repellat incidunt vero quisquam, rerum perspiciatis adipisci? Nulla ad blanditiis qui saepe repellendus, dolore consequuntur. Exercitationem, dolore corporis possimus laborum eos quos maiores ut velit iusto quasi sequi similique id natus harum ipsum doloribus asperiores laboriosam, voluptatum rerum non saepe libero ipsam ad pariatur. Quo, eaque sapiente.',
}

export const ModalDark = Template.bind({})
ModalDark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui rem quam molestias ut illum fugit perspiciatis saepe voluptatum commodi alias exercitationem quasi, similique quo possimus quod! Eaque, error aperiam maiores illo sapiente, dignissimos modi amet vitae alias odit voluptate laudantium fuga cumque reiciendis accusamus placeat temporibus quos facilis minus sit. Qui tenetur natus quam nobis ad vero corporis ab voluptatum quos excepturi soluta facere ex quidem eos quae quibusdam consequatur totam placeat, consequuntur magni? Maxime ut earum cumque eaque ducimus porro culpa voluptates? Nam perspiciatis quae necessitatibus quod sed, dicta animi accusamus optio temporibus totam officia! Libero nesciunt fugiat voluptatem, atque doloremque hic consequatur? Possimus voluptatem magni, dolores sint deleniti perferendis accusantium facilis quas facere distinctio iure rerum voluptate debitis dignissimos commodi repellat laborum exercitationem nostrum nemo tenetur deserunt sed beatae perspiciatis? Officiis debitis consectetur laboriosam consequuntur, culpa saepe ipsam eius impedit sequi in ullam vero? Quibusdam possimus provident excepturi, tenetur voluptas nisi repellat incidunt vero quisquam, rerum perspiciatis adipisci? Nulla ad blanditiis qui saepe repellendus, dolore consequuntur. Exercitationem, dolore corporis possimus laborum eos quos maiores ut velit iusto quasi sequi similique id natus harum ipsum doloribus asperiores laboriosam, voluptatum rerum non saepe libero ipsam ad pariatur. Quo, eaque sapiente.',
}
ModalDark.decorators = [ThemeDecorator(Theme.DARK)]