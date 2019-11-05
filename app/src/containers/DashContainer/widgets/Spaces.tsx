import React, { FC, Fragment } from "react";
import { ISpace } from "../../../models/IScreen";
import { Space } from "./Space";

interface Props {
  spaces: ISpace[];
  currentSpace: string;
}


export const Spaces: FC<Props> = ({ spaces, currentSpace}) => {
  const items = spaces.map(
    space => (
      <Space 
        key={space.name}
        space={space}
        currentSpace={currentSpace} />
    )
  );

  return (
    <Fragment> 
      {items}
    </Fragment>
  )
}