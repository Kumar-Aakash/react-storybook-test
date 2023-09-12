import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button2, { ButtonProps } from '../component/Button2'; // Import Button and ButtonProps

export default {
  component: Button2,
  title: 'Button2 tailwind',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button2 {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const primary = Template.bind({});
primary.args = {
  type: 'primary',
  size:'xs',
  shape:'simple'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
};

export const Circle = Template.bind({});
Circle.args = {
  shape: 'circle',
};

export const Simple = Template.bind({});
Simple.args = {
  shape: 'simple',
};

export const Round = Template.bind({});
Round.args = {
  shape: 'round',
};

export const xs = Template.bind({});
xs.args = {
  size: 'xs',
};

export const sm = Template.bind({});
sm.args = {
  size: 'sm',
};
export const md = Template.bind({});
md.args = {
  size: 'md',
};
export const lg = Template.bind({});
lg.args = {
  size: 'lg',
};
export const xl = Template.bind({});
xl.args = {
  size: 'xl',
};
