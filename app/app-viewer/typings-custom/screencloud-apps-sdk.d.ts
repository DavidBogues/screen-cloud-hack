declare module "@screencloud/screencloud-apps-sdk" {
    export const triggerEvents: {
        initApp: Function;
        on: Function;
        sendAppStatusStarted: Function;
        sendAppStatusFinished: Function;
        sendAppError: Function;
    };
}
