export interface CreateLeadParams {
  email: string;
  name: string;
  metadata: Record<string, any>;
  sessionId: string;
}


export const LeadxhubSDK = (apiKey: string) => {
  return () => ({
    Leads: {
      create: async (params: CreateLeadParams) => {
        const { email, name, metadata, sessionId } = params;

        const requestBody = {
          email,
          name,
          metadata,
          session_id: sessionId,
        };
        const parsedRequestBody = JSON.stringify(requestBody);

        const response = await fetch("https://api.leadxhub.com/v1/leads", {
          body: parsedRequestBody,
          headers: {
            'x-api-key': apiKey,
          },
        });

		return response.json()
      },
    },
  });
};
