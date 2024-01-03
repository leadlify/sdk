var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var LeadxhubSDK = (apiKey) => {
  return () => ({
    Leads: {
      create: (params) => __async(void 0, null, function* () {
        const { email, name, metadata, sessionId } = params;
        const requestBody = {
          email,
          name,
          metadata,
          session_id: sessionId
        };
        const parsedRequestBody = JSON.stringify(requestBody);
        const response = yield fetch("https://api.leadxhub.com/v1/leads", {
          body: parsedRequestBody,
          headers: {
            "x-api-key": apiKey
          }
        });
        return response.json();
      })
    }
  });
};
export {
  LeadxhubSDK
};
//# sourceMappingURL=index.mjs.map