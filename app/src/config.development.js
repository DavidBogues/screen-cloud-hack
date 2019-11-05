export const config = {
    credentialId: "5933ab83-2a09-4269-ac0b-9b0bd4626da0",
    reportId: "0195dea7-64f4-4ae4-aaf3-662542608d46",
    reportType: "report",
    filters: [{
        table: "DummyData",
        column: "Town",
        operator: "NotIn",
        values: ["Derry"]
    },
    {
        table: "DummyData",
        column: "Town",
        operator: "NotIn",
        values: ["Belfast"]
    }
    ]
};
