import { CheckboxBorder, CheckboxContainer, CheckboxIndicator } from "./styles";
import React, { ReactElement, useState } from "react";

export default function Checkbox(): ReactElement {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxContainer onClick={() => setChecked(!checked)}>
      <CheckboxBorder>
        {checked ? <CheckboxIndicator /> : <div></div>}
      </CheckboxBorder>
    </CheckboxContainer>
  );
}
