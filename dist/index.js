"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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
var src_exports = {};
__export(src_exports, {
  LeadlifySDK: () => LeadlifySDK
});
module.exports = __toCommonJS(src_exports);
var LeadlifySDK = (apiKey) => {
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
        const response = yield fetch("https://api.leadlify.com/v1/leads", {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LeadlifySDK
});
//# sourceMappingURL=index.js.map