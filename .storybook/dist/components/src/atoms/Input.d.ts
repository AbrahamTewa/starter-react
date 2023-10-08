import React from 'react';
declare function Input({ defaultValue, onUpdate, }: Props): React.JSX.Element;
declare namespace Input {
    var defaultProps: {
        defaultValue: undefined;
    };
}
type Props = {
    defaultValue: string;
    onUpdate: (value: string) => void;
};
export default Input;
