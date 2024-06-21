**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppendixApi

# Class: AppendixApi

## Constructors

### new AppendixApi(baseUrl, http)

> **new AppendixApi**(`baseUrl`?, `http`?): [`AppendixApi`](AppendixApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`AppendixApi`](AppendixApi.md)

#### Source

main.ts:19692

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:19689

***

### http

> **`private`** **http**: `Object`

#### http.fetch()

##### Parameters

• **url**: `RequestInfo`

• **init?**: `RequestInit`

##### Returns

`Promise`\<`Response`\>

#### Source

main.ts:19688

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:19690

## Methods

### appendixErrors()

> **appendixErrors**(): `Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

#### Returns

`Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

Successful operation

#### Source

main.ts:19737

***

### appendixStatus()

> **appendixStatus**(): `Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

#### Returns

`Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

Successful operation

#### Source

main.ts:19816

***

### processAppendixErrors()

> **`protected`** **processAppendixErrors**(`response`): `Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

#### Source

main.ts:19753

***

### processAppendixStatus()

> **`protected`** **processAppendixStatus**(`response`): `Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

#### Source

main.ts:19832

***

### processUserData()

> **`protected`** **processUserData**(`response`): `Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

#### Source

main.ts:19716

***

### processWebhookResend()

> **`protected`** **processWebhookResend**(`response`): `Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

#### Source

main.ts:19795

***

### userData()

> **userData**(): `Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

#### Returns

`Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

Successful operation

#### Source

main.ts:19700

***

### webhookResend()

> **webhookResend**(`body`): `Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

#### Parameters

• **body**: [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

Successful operation

#### Source

main.ts:19775
