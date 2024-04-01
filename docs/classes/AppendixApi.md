[Documentation](../README.md) / [Exports](../modules.md) / AppendixApi

# Class: AppendixApi

## Table of contents

### Constructors

- [constructor](AppendixApi.md#constructor)

### Properties

- [baseUrl](AppendixApi.md#baseurl)
- [http](AppendixApi.md#http)
- [jsonParseReviver](AppendixApi.md#jsonparsereviver)

### Methods

- [appendixErrors](AppendixApi.md#appendixerrors)
- [appendixStatus](AppendixApi.md#appendixstatus)
- [processAppendixErrors](AppendixApi.md#processappendixerrors)
- [processAppendixStatus](AppendixApi.md#processappendixstatus)
- [processUserData](AppendixApi.md#processuserdata)
- [processWebhookResend](AppendixApi.md#processwebhookresend)
- [userData](AppendixApi.md#userdata)
- [webhookResend](AppendixApi.md#webhookresend)

## Constructors

### constructor

• **new AppendixApi**(`baseUrl?`, `http?`): [`AppendixApi`](AppendixApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl?` | `string` |
| `http?` | `Object` |
| `http.fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Returns

[`AppendixApi`](AppendixApi.md)

#### Defined in

main.ts:19625

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

main.ts:19622

___

### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

main.ts:19621

___

### jsonParseReviver

• `Protected` **jsonParseReviver**: (`key`: `string`, `value`: `any`) => `any` = `undefined`

#### Type declaration

▸ (`key`, `value`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

##### Returns

`any`

#### Defined in

main.ts:19623

## Methods

### appendixErrors

▸ **appendixErrors**(): `Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

#### Returns

`Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19670

___

### appendixStatus

▸ **appendixStatus**(): `Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

#### Returns

`Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19749

___

### processAppendixErrors

▸ **processAppendixErrors**(`response`): `Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppendixErrorsResponseInfo`](AppendixErrorsResponseInfo.md)\>

#### Defined in

main.ts:19686

___

### processAppendixStatus

▸ **processAppendixStatus**(`response`): `Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppendixStatusResponseInfo`](AppendixStatusResponseInfo.md)\>

#### Defined in

main.ts:19765

___

### processUserData

▸ **processUserData**(`response`): `Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

#### Defined in

main.ts:19649

___

### processWebhookResend

▸ **processWebhookResend**(`response`): `Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

#### Defined in

main.ts:19728

___

### userData

▸ **userData**(): `Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

#### Returns

`Promise`\<[`AppendixUserDataResponseInfo`](AppendixUserDataResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19633

___

### webhookResend

▸ **webhookResend**(`body`): `Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppendixWebhookResendRequestInfo`](AppendixWebhookResendRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppendixWebhookResendResponseInfo`](AppendixWebhookResendResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19708
