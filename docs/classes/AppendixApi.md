[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppendixApi

# Class: AppendixApi

## Constructors

### new AppendixApi()

> **new AppendixApi**(`baseUrl`?, `http`?): [`AppendixApi`](AppendixApi.md)

#### Parameters

##### baseUrl?

`string`

##### http?

###### http.fetch

#### Returns

[`AppendixApi`](AppendixApi.md)

#### Defined in

main.ts:20869

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

#### Defined in

main.ts:20867

## Methods

### appendixErrors()

> **appendixErrors**(): `Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

#### Returns

`Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:20914

***

### appendixStatus()

> **appendixStatus**(): `Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

#### Returns

`Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:20993

***

### processAppendixErrors()

> `protected` **processAppendixErrors**(`response`): `Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

#### Defined in

main.ts:20930

***

### processAppendixStatus()

> `protected` **processAppendixStatus**(`response`): `Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

#### Defined in

main.ts:21009

***

### processUserData()

> `protected` **processUserData**(`response`): `Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

#### Defined in

main.ts:20893

***

### processWebhookResend()

> `protected` **processWebhookResend**(`response`): `Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

#### Defined in

main.ts:20972

***

### userData()

> **userData**(): `Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

#### Returns

`Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:20877

***

### webhookResend()

> **webhookResend**(`body`): `Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

#### Parameters

##### body

[`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:20952
