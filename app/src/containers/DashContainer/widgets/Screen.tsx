import React, { Component, ReactNode, Fragment } from "react";
import { IScreen } from "../../../models/IScreen";

interface State {
    screen:IScreen
}

interface IProps {
    screen: IScreen
}



export class Screen extends Component<IProps, State> {

    /*- - - - - - - - - - - - - -
     * CTOR
     - - - - - - - - - - - - - -*/
    constructor(props: IProps) {
        super(props);
        this.state = {
            screen:props.screen
        };
    }


    /*- - - - - - - - - - - - - -
     * RENDER
     - - - - - - - - - - - - - -*/
    render(): ReactNode {

        return (
            <Fragment>
                <div className="screen-wrapper">
                    <div className="screen">
                        <img src="./img/apple-bg.png" />
                        <div className="screen-name">
                            {this.state.screen.name}
                        </div>
                        <div className="screen-status">
                            {this.state.screen.status}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}