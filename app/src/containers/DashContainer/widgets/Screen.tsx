import React, { Component, ReactNode, Fragment } from "react";

interface State {

}

interface IProps {

}



export class Screen extends Component<IProps, State> {




    /*- - - - - - - - - - - - - -
     * CTOR
     - - - - - - - - - - - - - -*/
    constructor(props: IProps) {
        super(props);
        this.state = {

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
                        <img src="./img/portrait.jpg" />
                        <div className="screen-name">
                            Screen Name
                                            </div>
                        <div className="screen-status">
                            Online
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}