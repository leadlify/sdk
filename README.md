# @leadxhub/sdk

The `@leadxhub/sdk` is a JavaScript library that serves as the SDK for interacting with the Leadxhub API. This library provides a convenient interface for creating leads by making requests to the Leadxhub API.

## Installation

To use the Leadxhub SDK in your project, you can install it via npm or yarn.

```bash
npm install @leadxhub/sdk
```

or

```bash
yarn add @leadxhub/sdk
```

## Usage

### Initialization

To use the Leadxhub SDK, you need to initialize it with your API key.

```javascript
import { LeadxhubSDK } from '@leadxhub/sdk';

const apiKey = 'your_api_key';
const leadxhub = LeadxhubSDK(apiKey);
const leads = leadxhub().Leads;
```

### Creating a Lead

To create a lead, you can call the `create` method provided by the `Leads` module.

```javascript
const createLeadParams = {
  email: 'example@example.com',
  name: 'John Doe',
  metadata: { age: 25, occupation: 'Developer' },
  sessionId: '123456789',
};

try {
  const response = await leads.create(createLeadParams);
  console.log('Lead created successfully:', response);
} catch (error) {
  console.error('Error creating lead:', error);
}
```

## API Reference

### `LeadxhubSDK(apiKey: string)`

Initialize the Leadxhub SDK with your API key.

- **Parameters:**
  - `apiKey` (string): Your Leadxhub API key.

- **Returns:**
  A function with modules, such as `Leads`, for interacting with the Leadxhub API.

### `Leads`

Module for managing leads.

#### `create(params: CreateLeadParams): Promise<Response>`

Create a lead with the specified parameters.

- **Parameters:**
  - `params` (CreateLeadParams): An object containing lead creation parameters (email, name, metadata, sessionId).

- **Returns:**
  A Promise that resolves with the API response.

## Contributing

If you would like to contribute to the Leadxhub SDK, please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).