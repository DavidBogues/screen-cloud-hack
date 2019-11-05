import React, { Component, ReactNode, Fragment } from "react";

import {Screen} from '../DashContainer/widgets/Screen'
import { IScreen, ISpace } from "../../models/IScreen";
import { ScreenCloud } from "../../ScreenCloudReactApp";
import {Spaces} from "../DashContainer/widgets/Spaces"
interface State {
    spaces: ISpace[]
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
            spaces:props.spaces
        }

        console.log(this.state.spaces.length)
    }


    /*- - - - - - - - - - - - - -
     * COMPONENT MOUNTED
     - - - - - - - - - - - - - -*/
    async componentDidMount(): Promise<void> {
        // await this.fetchData();
    }


    /*- - - - - - - - - - - - - -      
     * FETCH REPORT DATA
     - - - - - - - - - - - - - -*/
    private fetchData(): void {
        /*
        const reportUrl = process.env.REACT_APP_API_BASE_URL + `/power-bi/v1/reports/${this.state.reportId}?credentialId=${this.state.credentialId}&reportType=${this.state.reportType}`;

        request
            .get(reportUrl)
            .retry(2)
            .timeout(20000)
            .then((res: { body: IBiReport }) => {
                this.setState({ report: res.body });
                this.setState({ isLoading: false });
            })
            .catch(err => {

                this.setState({ isLoading: false });

                this.setState(() => {
                    throw err;
                });

            });
        */
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
                            Floor 10
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
                    
                    <Spaces spaces ={this.state.spaces} />
                    
                </div>


                
            </Fragment>
        )
    
    }

}
