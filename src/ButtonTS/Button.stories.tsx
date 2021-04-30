import React from 'react';
import { Story, Meta } from '@storybook/react';
import ButtonTS from './index';

export default {
  title: 'Example/Button1',
  component: ButtonTS,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = (args) => {

  
  return <ButtonTS {...args} />};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  height:16,
};


