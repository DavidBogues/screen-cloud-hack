import React, { Component, ReactNode, Fragment } from "react";

import {Screen} from '../DashContainer/widgets/Screen'

interface State {
    
}

interface IProps {

}



export class DashboardContainer extends Component<IProps, State> {




    /*- - - - - - - - - - - - - -
     * CTOR
     - - - - - - - - - - - - - -*/
    constructor(props: IProps) {
        super(props);
        this.state = {
            
        };
    }


    /*- - - - - - - - - - - - - -
     * COMPONENT MOUNTED
     - - - - - - - - - - - - - -*/
    async componentDidMount(): Promise<void> {
        
    }



    /*- - - - - - - - - - - - - -
     * RENDER
     - - - - - - - - - - - - - -*/
    render(): ReactNode {

        return (
            <Fragment>

                <div className="screens-header">

                    <div className="title-row">
                        <div className="title">
                            <span>Floor 10</span>
                        </div>
                        <div className="title active">
                            <span>Floor 12</span>
                        </div>
                        <div className="title">
                            <span>Floor 14</span>
                        </div>
                    </div>

                    <div className="status-holder">

                        <div className="offline">
                            Offline: 3
                        </div>

                        <div className="online">
                            Online: 13
                        </div>

                    </div>

                </div>

                <div className="screens-container">
                    
                    <Screen />
                    <Screen />
                    <Screen />
                    <Screen />
                    <Screen />
                    <Screen />
                    <Screen />
                    <Screen />
                    <Screen />
                    <Screen />
                    <Screen />
                    <Screen />
                    
                </div>


                
            </Fragment>
        )
    
    }

}
