import React, { FC, Fragment } from "react";
import { ISpace } from "../../../models/IScreen";
import { Space } from "./Space";

interface Props {
  spaces: ISpace[];
}


export const Spaces: FC<Props> = ({ spaces}) => {
  const items = spaces.map(
    space => (
      <Space 
        key={space.name}
        space={space} />
    )
  );

  return (
    <Fragment> 
      {items}
    </Fragment>
  )
}