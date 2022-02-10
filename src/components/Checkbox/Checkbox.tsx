import React, { ReactElement, useState } from "react";

import { CustomCheckbox } from "./styles";

export default function Checkbox(): ReactElement {
  const [checked, setChecked] = useState(false);

  const handleClick = () => setChecked(!checked);

  return (
    <CustomCheckbox type="checkbox" onClick={handleClick} checked={checked} />
  );
}
