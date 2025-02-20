import * as react_jsx_runtime from 'react/jsx-runtime';

interface RetroButtonProps {
    label: string;
    buttonId: string;
    disabled: boolean;
    backgroundColor: "lightblue" | "orange" | "pink";
}

declare function RetroButton(props: RetroButtonProps): react_jsx_runtime.JSX.Element;

export { RetroButton as Button };
