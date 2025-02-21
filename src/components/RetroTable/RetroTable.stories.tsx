import type { Meta, StoryObj } from '@storybook/react';
import RetroTable from './RetroTable';

const meta: Meta<typeof RetroTable> = {
    component: RetroTable,
    title: 'AT-Retro-Library/Retro-Table',
}

export default meta;

type Story = StoryObj<typeof RetroTable>;

export const OneDimensional: Story = {
    args: {
        tableId: "oneDimensionalTable",
        headerData: ["Month", "Revenue"],
        rowData: [
            ["January", 12],
            ["February", 7],
            ["March", 64]
        ],
        footerData: ["3 Months Total", 83],
        disabled: false,
        headerBackgroundColor: "lightblue",
        footerBackgroundColor: "lightblue"
    }
}

