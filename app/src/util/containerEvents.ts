import { triggerEvents } from "@screencloud/screencloud-apps-sdk";


const isProduction = (): boolean => {
    return process.env.REACT_APP_ENVIRONMENT === "production" ? true : false;
};

const initAppEvents = (
    name: string,
    codeName: string,
    version: string
): void => {
    triggerEvents.initApp({
        app: {
            id: `cloud.screen.apps${isProduction() ? "" : "_staging"}.${codeName}`,
            name,
            version
        },
        // auth: {
        //     organizationId: "10cb2407-cdb8-472b-a4bf-c5807c9b8372",
        //     teamId: "7e9bc57b-2882-41b1-a393-5c2a936218c1",
        //     screenId: mockedScreenIds[Math.floor(Math.random() * 10)]
        // },
        stage: isProduction() ? "production" : "staging"
    });

    triggerEvents.on("start", () => {
        triggerEvents.sendAppStatusStarted({ name });
    });

    triggerEvents.on("finish", () => {
        triggerEvents.sendAppStatusFinished({ name });
    });
};

const sendError = (message: string, error: Error): void => {
    triggerEvents.sendAppError({
        message,
        error
    });
};

export { initAppEvents, sendError };
