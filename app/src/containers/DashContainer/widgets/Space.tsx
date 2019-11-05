import React, { FC, Fragment } from "react";


import { Card, CardContent } from "@screencloud/screencloud-ui-components"
import { ISpace } from "../../../models/IScreen";
import {Screen} from "../widgets/Screen";

interface Props {
    space: ISpace;
    currentSpace: string
}


export const Space: FC<Props> = ({ space, currentSpace }) => {
    
    let items = space.screens.map(
        screen => (
            <Screen
                key={screen.name}
                screen={screen} />
        )
    );
    
    if (space.name !== currentSpace) {
        items = [];
    }


    return (
        <Fragment>
            {items}
        </Fragment>
    )
}