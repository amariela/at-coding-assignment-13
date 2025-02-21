import type { Meta, StoryObj } from '@storybook/react';
import RetroHeroImage from './RetroHeroImage';

const meta: Meta<typeof RetroHeroImage> = {
    component: RetroHeroImage,
    title: 'AT-Retro-Library/Retro-HeroImage',
}

export default meta;

type Story = StoryObj<typeof RetroHeroImage>;

export const Primary: Story = {
    args: {
        src: "https://picsum.photos/600/200",
        alt: "Placeholder Image",
        title: "Hero Title",
        disabled: false,
        backgroundColor: "lightblue",
    }
}
