interface CreateLeadParams {
    email: string;
    name: string;
    metadata: Record<string, any>;
    sessionId: string;
}
declare const LeadlifySDK: (apiKey: string) => () => {
    Leads: {
        create: (params: CreateLeadParams) => Promise<any>;
    };
};

export { type CreateLeadParams, LeadlifySDK };
