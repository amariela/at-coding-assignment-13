import type { Meta, StoryObj } from '@storybook/react';
import RetroImage from './RetroImage';

const meta: Meta<typeof RetroImage> = {
    component: RetroImage,
    title: 'AT-Retro-Library/Retro-Image',
}

export default meta;

type Story = StoryObj<typeof RetroImage>;

export const Primary: Story = {
    args: {
        src: "https://picsum.photos/100/100",
        alt: "Placeholder Image",
        disabled: false,
        backgroundColor: "lightblue"
    }
}
