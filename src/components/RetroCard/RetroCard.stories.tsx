import type { Meta, StoryObj } from '@storybook/react';
import RetroCard from './RetroCard';

const meta: Meta<typeof RetroCard> = {
    component: RetroCard,
    title: 'AT-Retro-Library/Retro-Card',
}

export default meta;

type Story = StoryObj<typeof RetroCard>;

export const Primary: Story = {
    args: {
        title: "Card Title",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quidem! Aut nobis ea illo commodi. Voluptatum obcaecati, incidunt unde nihil quaerat minus aliquid quod ducimus exercitationem atque sed labore corrupti.",
        disabled: false,
        backgroundColor: "lightblue",
    }
}
