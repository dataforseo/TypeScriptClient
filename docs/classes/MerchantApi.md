[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantApi

# Class: MerchantApi

## Table of contents

### Constructors

- [constructor](MerchantApi.md#constructor)

### Properties

- [baseUrl](MerchantApi.md#baseurl)
- [http](MerchantApi.md#http)
- [jsonParseReviver](MerchantApi.md#jsonparsereviver)

### Methods

- [amazonAsinTaskGetAdvanced](MerchantApi.md#amazonasintaskgetadvanced)
- [amazonAsinTaskGetHtml](MerchantApi.md#amazonasintaskgethtml)
- [amazonAsinTaskPost](MerchantApi.md#amazonasintaskpost)
- [amazonAsinTasksReady](MerchantApi.md#amazonasintasksready)
- [amazonProductsTaskGetAdvanced](MerchantApi.md#amazonproductstaskgetadvanced)
- [amazonProductsTaskGetHtml](MerchantApi.md#amazonproductstaskgethtml)
- [amazonProductsTaskPost](MerchantApi.md#amazonproductstaskpost)
- [amazonProductsTasksReady](MerchantApi.md#amazonproductstasksready)
- [amazonReviewsTaskGetAdvanced](MerchantApi.md#amazonreviewstaskgetadvanced)
- [amazonReviewsTaskGetHtml](MerchantApi.md#amazonreviewstaskgethtml)
- [amazonReviewsTaskPost](MerchantApi.md#amazonreviewstaskpost)
- [amazonReviewsTasksReady](MerchantApi.md#amazonreviewstasksready)
- [amazonSellersTaskGetAdvanced](MerchantApi.md#amazonsellerstaskgetadvanced)
- [amazonSellersTaskGetHtml](MerchantApi.md#amazonsellerstaskgethtml)
- [amazonSellersTaskPost](MerchantApi.md#amazonsellerstaskpost)
- [amazonSellersTasksReady](MerchantApi.md#amazonsellerstasksready)
- [googleProductInfoTaskGetAdvanced](MerchantApi.md#googleproductinfotaskgetadvanced)
- [googleProductInfoTaskPost](MerchantApi.md#googleproductinfotaskpost)
- [googleProductInfoTasksReady](MerchantApi.md#googleproductinfotasksready)
- [googleProductSpecTaskGetAdvanced](MerchantApi.md#googleproductspectaskgetadvanced)
- [googleProductSpecTaskGetHtml](MerchantApi.md#googleproductspectaskgethtml)
- [googleProductSpecTaskPost](MerchantApi.md#googleproductspectaskpost)
- [googleProductSpecTasksReady](MerchantApi.md#googleproductspectasksready)
- [googleProductsTaskGetAdvanced](MerchantApi.md#googleproductstaskgetadvanced)
- [googleProductsTaskGetHtml](MerchantApi.md#googleproductstaskgethtml)
- [googleProductsTaskPost](MerchantApi.md#googleproductstaskpost)
- [googleProductsTasksReady](MerchantApi.md#googleproductstasksready)
- [googleSellersAdUrl](MerchantApi.md#googlesellersadurl)
- [googleSellersTaskGetAdvanced](MerchantApi.md#googlesellerstaskgetadvanced)
- [googleSellersTaskGetHtml](MerchantApi.md#googlesellerstaskgethtml)
- [googleSellersTaskPost](MerchantApi.md#googlesellerstaskpost)
- [googleSellersTasksReady](MerchantApi.md#googlesellerstasksready)
- [merchantAmazonLanguages](MerchantApi.md#merchantamazonlanguages)
- [merchantAmazonLocations](MerchantApi.md#merchantamazonlocations)
- [merchantAmazonLocationsCountry](MerchantApi.md#merchantamazonlocationscountry)
- [merchantErrors](MerchantApi.md#merchanterrors)
- [merchantGoogleLanguages](MerchantApi.md#merchantgooglelanguages)
- [merchantGoogleLocations](MerchantApi.md#merchantgooglelocations)
- [merchantGoogleLocationsCountry](MerchantApi.md#merchantgooglelocationscountry)
- [merchantIdList](MerchantApi.md#merchantidlist)
- [processAmazonAsinTaskGetAdvanced](MerchantApi.md#processamazonasintaskgetadvanced)
- [processAmazonAsinTaskGetHtml](MerchantApi.md#processamazonasintaskgethtml)
- [processAmazonAsinTaskPost](MerchantApi.md#processamazonasintaskpost)
- [processAmazonAsinTasksReady](MerchantApi.md#processamazonasintasksready)
- [processAmazonProductsTaskGetAdvanced](MerchantApi.md#processamazonproductstaskgetadvanced)
- [processAmazonProductsTaskGetHtml](MerchantApi.md#processamazonproductstaskgethtml)
- [processAmazonProductsTaskPost](MerchantApi.md#processamazonproductstaskpost)
- [processAmazonProductsTasksReady](MerchantApi.md#processamazonproductstasksready)
- [processAmazonReviewsTaskGetAdvanced](MerchantApi.md#processamazonreviewstaskgetadvanced)
- [processAmazonReviewsTaskGetHtml](MerchantApi.md#processamazonreviewstaskgethtml)
- [processAmazonReviewsTaskPost](MerchantApi.md#processamazonreviewstaskpost)
- [processAmazonReviewsTasksReady](MerchantApi.md#processamazonreviewstasksready)
- [processAmazonSellersTaskGetAdvanced](MerchantApi.md#processamazonsellerstaskgetadvanced)
- [processAmazonSellersTaskGetHtml](MerchantApi.md#processamazonsellerstaskgethtml)
- [processAmazonSellersTaskPost](MerchantApi.md#processamazonsellerstaskpost)
- [processAmazonSellersTasksReady](MerchantApi.md#processamazonsellerstasksready)
- [processGoogleProductInfoTaskGetAdvanced](MerchantApi.md#processgoogleproductinfotaskgetadvanced)
- [processGoogleProductInfoTaskPost](MerchantApi.md#processgoogleproductinfotaskpost)
- [processGoogleProductInfoTasksReady](MerchantApi.md#processgoogleproductinfotasksready)
- [processGoogleProductSpecTaskGetAdvanced](MerchantApi.md#processgoogleproductspectaskgetadvanced)
- [processGoogleProductSpecTaskGetHtml](MerchantApi.md#processgoogleproductspectaskgethtml)
- [processGoogleProductSpecTaskPost](MerchantApi.md#processgoogleproductspectaskpost)
- [processGoogleProductSpecTasksReady](MerchantApi.md#processgoogleproductspectasksready)
- [processGoogleProductsTaskGetAdvanced](MerchantApi.md#processgoogleproductstaskgetadvanced)
- [processGoogleProductsTaskGetHtml](MerchantApi.md#processgoogleproductstaskgethtml)
- [processGoogleProductsTaskPost](MerchantApi.md#processgoogleproductstaskpost)
- [processGoogleProductsTasksReady](MerchantApi.md#processgoogleproductstasksready)
- [processGoogleSellersAdUrl](MerchantApi.md#processgooglesellersadurl)
- [processGoogleSellersTaskGetAdvanced](MerchantApi.md#processgooglesellerstaskgetadvanced)
- [processGoogleSellersTaskGetHtml](MerchantApi.md#processgooglesellerstaskgethtml)
- [processGoogleSellersTaskPost](MerchantApi.md#processgooglesellerstaskpost)
- [processGoogleSellersTasksReady](MerchantApi.md#processgooglesellerstasksready)
- [processMerchantAmazonLanguages](MerchantApi.md#processmerchantamazonlanguages)
- [processMerchantAmazonLocations](MerchantApi.md#processmerchantamazonlocations)
- [processMerchantAmazonLocationsCountry](MerchantApi.md#processmerchantamazonlocationscountry)
- [processMerchantErrors](MerchantApi.md#processmerchanterrors)
- [processMerchantGoogleLanguages](MerchantApi.md#processmerchantgooglelanguages)
- [processMerchantGoogleLocations](MerchantApi.md#processmerchantgooglelocations)
- [processMerchantGoogleLocationsCountry](MerchantApi.md#processmerchantgooglelocationscountry)
- [processMerchantIdList](MerchantApi.md#processmerchantidlist)

## Constructors

### constructor

• **new MerchantApi**(`baseUrl?`, `http?`): [`MerchantApi`](MerchantApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl?` | `string` |
| `http?` | `Object` |
| `http.fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Returns

[`MerchantApi`](MerchantApi.md)

#### Defined in

[main.ts:13615](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13615)

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

[main.ts:13612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13612)

___

### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

[main.ts:13611](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13611)

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

[main.ts:13613](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13613)

## Methods

### amazonAsinTaskGetAdvanced

▸ **amazonAsinTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14851)

___

### amazonAsinTaskGetHtml

▸ **amazonAsinTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14894)

___

### amazonAsinTaskPost

▸ **amazonAsinTaskPost**(`body`): `Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantAmazonAsinTaskPostRequestInfo`](MerchantAmazonAsinTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14770](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14770)

___

### amazonAsinTasksReady

▸ **amazonAsinTasksReady**(): `Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14811](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14811)

___

### amazonProductsTaskGetAdvanced

▸ **amazonProductsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14686](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14686)

___

### amazonProductsTaskGetHtml

▸ **amazonProductsTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14729](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14729)

___

### amazonProductsTaskPost

▸ **amazonProductsTaskPost**(`body`): `Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14605)

___

### amazonProductsTasksReady

▸ **amazonProductsTasksReady**(): `Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14646)

___

### amazonReviewsTaskGetAdvanced

▸ **amazonReviewsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15181](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15181)

___

### amazonReviewsTaskGetHtml

▸ **amazonReviewsTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15224](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15224)

___

### amazonReviewsTaskPost

▸ **amazonReviewsTaskPost**(`body`): `Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantAmazonReviewsTaskPostRequestInfo`](MerchantAmazonReviewsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15100)

___

### amazonReviewsTasksReady

▸ **amazonReviewsTasksReady**(): `Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15141](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15141)

___

### amazonSellersTaskGetAdvanced

▸ **amazonSellersTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15016)

___

### amazonSellersTaskGetHtml

▸ **amazonSellersTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15059](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15059)

___

### amazonSellersTaskPost

▸ **amazonSellersTaskPost**(`body`): `Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14935](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14935)

___

### amazonSellersTasksReady

▸ **amazonSellersTasksReady**(): `Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14976](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14976)

___

### googleProductInfoTaskGetAdvanced

▸ **googleProductInfoTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14403)

___

### googleProductInfoTaskPost

▸ **googleProductInfoTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14322)

___

### googleProductInfoTasksReady

▸ **googleProductInfoTasksReady**(): `Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14363)

___

### googleProductSpecTaskGetAdvanced

▸ **googleProductSpecTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14238)

___

### googleProductSpecTaskGetHtml

▸ **googleProductSpecTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14281)

___

### googleProductSpecTaskPost

▸ **googleProductSpecTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14157)

___

### googleProductSpecTasksReady

▸ **googleProductSpecTasksReady**(): `Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14198](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14198)

___

### googleProductsTaskGetAdvanced

▸ **googleProductsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13908)

___

### googleProductsTaskGetHtml

▸ **googleProductsTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13951)

___

### googleProductsTaskPost

▸ **googleProductsTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantTaskRequestInfo`](MerchantTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13827)

___

### googleProductsTasksReady

▸ **googleProductsTasksReady**(): `Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13868)

___

### googleSellersAdUrl

▸ **googleSellersAdUrl**(`shop_ad_aclk`): `Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shop_ad_aclk` | `string` | unique ad click referral parameter you can obtain this parameter with Google Shopping Products or Google Shopping Sellers |

#### Returns

`Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14445)

___

### googleSellersTaskGetAdvanced

▸ **googleSellersTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14073)

___

### googleSellersTaskGetHtml

▸ **googleSellersTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14116)

___

### googleSellersTaskPost

▸ **googleSellersTaskPost**(`body`): `Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13992)

___

### googleSellersTasksReady

▸ **googleSellersTasksReady**(): `Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14033)

___

### merchantAmazonLanguages

▸ **merchantAmazonLanguages**(): `Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14567)

___

### merchantAmazonLocations

▸ **merchantAmazonLocations**(): `Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14485](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14485)

___

### merchantAmazonLocationsCountry

▸ **merchantAmazonLocationsCountry**(`country`): `Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:14527](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14527)

___

### merchantErrors

▸ **merchantErrors**(`body`): `Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13666)

___

### merchantGoogleLanguages

▸ **merchantGoogleLanguages**(): `Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13707)

___

### merchantGoogleLocations

▸ **merchantGoogleLocations**(): `Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13744)

___

### merchantGoogleLocationsCountry

▸ **merchantGoogleLocationsCountry**(`country`): `Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13786)

___

### merchantIdList

▸ **merchantIdList**(`body`): `Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:13624](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13624)

___

### processAmazonAsinTaskGetAdvanced

▸ **processAmazonAsinTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:14870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14870)

___

### processAmazonAsinTaskGetHtml

▸ **processAmazonAsinTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:14913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14913)

___

### processAmazonAsinTaskPost

▸ **processAmazonAsinTaskPost**(`response`): `Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:14790](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14790)

___

### processAmazonAsinTasksReady

▸ **processAmazonAsinTasksReady**(`response`): `Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:14827](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14827)

___

### processAmazonProductsTaskGetAdvanced

▸ **processAmazonProductsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:14705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14705)

___

### processAmazonProductsTaskGetHtml

▸ **processAmazonProductsTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:14748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14748)

___

### processAmazonProductsTaskPost

▸ **processAmazonProductsTaskPost**(`response`): `Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:14625](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14625)

___

### processAmazonProductsTasksReady

▸ **processAmazonProductsTasksReady**(`response`): `Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:14662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14662)

___

### processAmazonReviewsTaskGetAdvanced

▸ **processAmazonReviewsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:15200](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15200)

___

### processAmazonReviewsTaskGetHtml

▸ **processAmazonReviewsTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:15243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15243)

___

### processAmazonReviewsTaskPost

▸ **processAmazonReviewsTaskPost**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:15120](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15120)

___

### processAmazonReviewsTasksReady

▸ **processAmazonReviewsTasksReady**(`response`): `Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:15157](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15157)

___

### processAmazonSellersTaskGetAdvanced

▸ **processAmazonSellersTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:15035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15035)

___

### processAmazonSellersTaskGetHtml

▸ **processAmazonSellersTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:15078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15078)

___

### processAmazonSellersTaskPost

▸ **processAmazonSellersTaskPost**(`response`): `Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:14955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14955)

___

### processAmazonSellersTasksReady

▸ **processAmazonSellersTasksReady**(`response`): `Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:14992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14992)

___

### processGoogleProductInfoTaskGetAdvanced

▸ **processGoogleProductInfoTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:14422](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14422)

___

### processGoogleProductInfoTaskPost

▸ **processGoogleProductInfoTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:14342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14342)

___

### processGoogleProductInfoTasksReady

▸ **processGoogleProductInfoTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:14379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14379)

___

### processGoogleProductSpecTaskGetAdvanced

▸ **processGoogleProductSpecTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:14257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14257)

___

### processGoogleProductSpecTaskGetHtml

▸ **processGoogleProductSpecTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:14300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14300)

___

### processGoogleProductSpecTaskPost

▸ **processGoogleProductSpecTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:14177](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14177)

___

### processGoogleProductSpecTasksReady

▸ **processGoogleProductSpecTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:14214](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14214)

___

### processGoogleProductsTaskGetAdvanced

▸ **processGoogleProductsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:13927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13927)

___

### processGoogleProductsTaskGetHtml

▸ **processGoogleProductsTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:13970](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13970)

___

### processGoogleProductsTaskPost

▸ **processGoogleProductsTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:13847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13847)

___

### processGoogleProductsTasksReady

▸ **processGoogleProductsTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:13884](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13884)

___

### processGoogleSellersAdUrl

▸ **processGoogleSellersAdUrl**(`response`): `Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

#### Defined in

[main.ts:14464](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14464)

___

### processGoogleSellersTaskGetAdvanced

▸ **processGoogleSellersTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:14092](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14092)

___

### processGoogleSellersTaskGetHtml

▸ **processGoogleSellersTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:14135](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14135)

___

### processGoogleSellersTaskPost

▸ **processGoogleSellersTaskPost**(`response`): `Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:14012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14012)

___

### processGoogleSellersTasksReady

▸ **processGoogleSellersTasksReady**(`response`): `Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:14049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14049)

___

### processMerchantAmazonLanguages

▸ **processMerchantAmazonLanguages**(`response`): `Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

#### Defined in

[main.ts:14583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14583)

___

### processMerchantAmazonLocations

▸ **processMerchantAmazonLocations**(`response`): `Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

#### Defined in

[main.ts:14501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14501)

___

### processMerchantAmazonLocationsCountry

▸ **processMerchantAmazonLocationsCountry**(`response`): `Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

#### Defined in

[main.ts:14546](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L14546)

___

### processMerchantErrors

▸ **processMerchantErrors**(`response`): `Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

#### Defined in

[main.ts:13686](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13686)

___

### processMerchantGoogleLanguages

▸ **processMerchantGoogleLanguages**(`response`): `Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

#### Defined in

[main.ts:13723](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13723)

___

### processMerchantGoogleLocations

▸ **processMerchantGoogleLocations**(`response`): `Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

#### Defined in

[main.ts:13760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13760)

___

### processMerchantGoogleLocationsCountry

▸ **processMerchantGoogleLocationsCountry**(`response`): `Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

#### Defined in

[main.ts:13805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13805)

___

### processMerchantIdList

▸ **processMerchantIdList**(`response`): `Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

#### Defined in

[main.ts:13644](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L13644)
