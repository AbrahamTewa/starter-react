// ============================================================
// Import packages
import React, { useCallback } from 'react';
import type { ChangeEventHandler } from 'react';

// ============================================================
// Container
function Input({
  defaultValue,
  onUpdate,
}: Props) {
  const onKeyPress: ChangeEventHandler<HTMLInputElement> = useCallback(
    (evt) => {
      onUpdate(evt.target.value);
    },
    [onUpdate],
  );
  return (
    <input
      defaultValue={defaultValue}
      onChange={onKeyPress}
      type="text"
    />
  );
}

type Props = {
  defaultValue: string,
  onUpdate: (value: string) => void,
};

Input.defaultProps = {
  defaultValue: undefined,
};

// ============================================================
// Exports
export default Input;
