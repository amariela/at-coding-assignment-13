export interface RetroDropdownProps {
    options: Array<{ label: string, value: string }>;
    selectedOption: string;
    onSelect: (option: string) => void;
    disabled: boolean;
    dropdownLabel: string;
    labelBackgroundColor: 'lightblue' | 'orange' | 'pink';
}