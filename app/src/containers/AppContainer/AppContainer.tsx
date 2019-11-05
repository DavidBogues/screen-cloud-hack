import React, { Component, ReactNode } from "react";
import { ScreenCloud } from "../../ScreenCloudReactApp";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { IBiBasicFilter } from "../../models/IBiBasicFilter";
import { DashboardContainer } from "../DashContainer/DashboardContainer";
import { IScreen, ISpace } from "../../models/IScreen";


interface State{
  spaces:ISpace[]
}

interface IProps {
  sc: ScreenCloud;
}

export class AppContainer extends Component<IProps, State> {

  constructor(props: IProps) {
    super(props);
    
   this.state = {
     spaces: props.sc.config.screens.spaces
    }
    
    console.log("Spaces:");
    
    console.log(this.state.spaces);

  }

  


  render(): ReactNode {
    return (
      <ErrorBoundary>
      <div className="app-container">
            <DashboardContainer spaces ={this.state.spaces} /> 
      </div>
      </ErrorBoundary>
    );
  }
}
