export interface RetroRadioProps {
    id: string;
    name: string;
    value: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    backgroundColor: "lightblue" | "orange" | "pink";
}
