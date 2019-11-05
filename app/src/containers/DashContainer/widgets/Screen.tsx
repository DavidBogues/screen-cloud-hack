import React, { Component, ReactNode, Fragment, ErrorInfo } from "react";

import { IScreen } from "../../../models/IScreen";

interface State {
    screen:IScreen,
    currentImage: string
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
            screen:props.screen,
            currentImage:props.screen.playing[0]
        };

    }

    updateScreen = () => {
        var index = this.state.screen.playing.indexOf(this.state.currentImage);
        console.log(index);
        index+=1;
        if(index >= this.state.screen.playing.length){
            index = 0;
        }
        var newImage = this.state.screen.playing[index];
        this.setState({
            currentImage: newImage
        });

        setTimeout(() => {
            this.updateScreen();
        }, 3000);

    }

    componentDidMount(): void {
        
        
        setTimeout(() => {
            this.updateScreen();
        }, 3000);
        
    }


    /*- - - - - - - - - - - - - -
     * RENDER
     - - - - - - - - - - - - - -*/
    render(): ReactNode {

        return (
            <Fragment>
                <div className="screen-wrapper">

                    <div className={this.state.screen.status === "online" ? "screen" : "screen offline"}>
                        {this.state.screen.status === "online"  &&
                            <img src={`./img/${this.state.currentImage}`} />
                        }
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