interface CreateLeadParams {
    email: string;
    name: string;
    metadata: Record<string, any>;
    sessionId: string;
}
declare const LeadxhubSDK: (apiKey: string) => () => {
    Leads: {
        create: (params: CreateLeadParams) => Promise<any>;
    };
};

export { type CreateLeadParams, LeadxhubSDK };
