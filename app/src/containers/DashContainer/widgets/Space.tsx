import React, { FC, Fragment } from "react";


import { Card, CardContent } from "@screencloud/screencloud-ui-components"
import { ISpace } from "../../../models/IScreen";
import {Screen} from "../widgets/Screen";

interface Props {
    space: ISpace;
}


export const Space: FC<Props> = ({ space }) => {
    const items = space.screens.map(
        screen => (
            <Screen
                key={screen.name}
                screen={screen} />
        )
    );

    return (
        <Fragment>

            {items}

        </Fragment>
    )
}