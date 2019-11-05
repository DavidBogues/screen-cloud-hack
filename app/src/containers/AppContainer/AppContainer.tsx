import React, { Component, ReactNode } from "react";
import { ScreenCloud } from "../../ScreenCloudReactApp";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { IBiBasicFilter } from "../../models/IBiBasicFilter";
import { DashboardContainer } from "../DashContainer/DashboardContainer";


interface State{
  credentialId: string;
  reportId: string;
  reportType: string;
  filters: IBiBasicFilter[];
}

interface IProps {
  sc: ScreenCloud;
}

export class AppContainer extends Component<IProps, State> {

  constructor(props: IProps) {
    super(props);
    /*
    const credentialId = props.sc && props.sc.config.credentialId;
    const reportId = props.sc && props.sc.config.reportId;
    const reportType = props.sc && props.sc.config.reportType;
    */
  }


  render(): ReactNode {
    return (
      <ErrorBoundary>
      <div className="app-container">
            <DashboardContainer /> 
      </div>
      </ErrorBoundary>
    );
  }
}
