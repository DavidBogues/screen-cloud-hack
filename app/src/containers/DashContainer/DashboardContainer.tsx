import React, { Component, ReactNode, Fragment } from "react";

import {Screen} from '../DashContainer/widgets/Screen'
import { IScreen, ISpace } from "../../models/IScreen";
import { ScreenCloud } from "../../ScreenCloudReactApp";
import {Spaces} from "../DashContainer/widgets/Spaces"

interface State {
    spaces: ISpace[],
    currentSpace: string
}

interface IProps {
    spaces: ISpace[]
}


export class DashboardContainer extends Component<IProps, State> {

    /*- - - - - - - - - - - - - -
     * CTOR
     - - - - - - - - - - - - - -*/
    constructor(props: IProps) {
        super(props);
        this.state= {
            spaces:props.spaces,
            currentSpace:props.spaces[1].name
        }

        console.log(this.state.spaces.length)
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
                            {this.state.currentSpace}
                        </div>

                        <div className="title active">
                            Floor 12
                        </div>
                        <div className="title">
                            Floor 14
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
                    
                    <Spaces 
                        spaces ={this.state.spaces}
                        currentSpace={this.state.currentSpace}
                        />
                    
                </div>


                
            </Fragment>
        )
    
    }

}
