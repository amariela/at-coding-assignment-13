import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RetroDropdown from './RetroDropdown';
import { RetroDropdownProps } from './RetroDropdown.types';

const meta: Meta<typeof RetroDropdown> = {
    component: RetroDropdown,
    title: 'AT-Retro-Library/Retro-Dropdown',
};

export default meta;

type Story = StoryObj<RetroDropdownProps>;

// Creating a template component for story rendering
const Template: Story = {
    render: (args) => {
        const [selectedOption, setSelectedOption] = useState(args.selectedOption);

        const handleSelect = (option: string) => {
            setSelectedOption(option);
        };

        return (
            <RetroDropdown
                {...args}
                selectedOption={selectedOption}
                onSelect={handleSelect}
            />
        );
    },
};

// Exporting the primary story using the template component
export const Primary: Story = {
    ...Template,
    args: {
        dropdownLabel: "Select an option",
        options: [
            { label: "Option 1", value: "1" },
            { label: "Option 2", value: "2" },
            { label: "Option 3", value: "3" }
        ],
        selectedOption: "1",
        disabled: false,
        labelBackgroundColor: 'lightblue'
    },
};
