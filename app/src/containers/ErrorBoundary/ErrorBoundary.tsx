import React, { ReactNode, Component, ErrorInfo } from "react";
import "./ErrorBoundary.scss";
import largeIcon from "../../assets/svgs/icon_lg.svg";
import * as Sentry from "@sentry/browser";
import { sendError } from "../../util/containerEvents";

interface State {
  error?: Error;
  hasError: boolean;
  eventId?: string;
  errorInfo: ErrorInfo;
}

class ErrorBoundary extends Component<{}, State> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
      eventId: undefined,
      errorInfo: { componentStack: "" }
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });

    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId: eventId });
    });
    //sendError("Power Bi App: failure", error);
  }

  render(): ReactNode {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const isTickerTape = windowWidth > windowHeight * 7;

    if (this.state.hasError) {
      let { eventId } = this.state;

      if (eventId) {
        console.log(`Event ID ${eventId}`);
        eventId = eventId.substring(0, 8);
      }

      return (
        <div
          className={`error-container error-container-${
            isTickerTape ? "tickertape" : "zones"
            } `} 
            >
          <div className="left-panel">
            <img src={largeIcon} alt="Error icon" />
          </div>
          <div className="right-panel">
            <div>
              <h1>An error has occurred :(</h1>
              {!isTickerTape && (
                <h2>
                  Please contact ScreenCloud support if the error persists
                </h2>
              )}
              <p>Error ID: {eventId}</p>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
