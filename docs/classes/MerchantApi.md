[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantApi

# Class: MerchantApi

Defined in: main.ts:15184

## Constructors

### new MerchantApi()

> **new MerchantApi**(`baseUrl`?, `http`?): [`MerchantApi`](MerchantApi.md)

Defined in: main.ts:15189

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

[`MerchantApi`](MerchantApi.md)

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:15187

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### amazonAsinTaskGetAdvanced()

> **amazonAsinTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16462

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### amazonAsinTaskGetHtml()

> **amazonAsinTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:16505

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### amazonAsinTaskPost()

> **amazonAsinTaskPost**(`body`): `Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

Defined in: main.ts:16381

#### Parameters

##### body

[`MerchantAmazonAsinTaskPostRequestInfo`](MerchantAmazonAsinTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

Successful operation

***

### amazonAsinTasksReady()

> **amazonAsinTasksReady**(): `Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

Defined in: main.ts:16422

#### Returns

`Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

Successful operation

***

### amazonProductsTaskGetAdvanced()

> **amazonProductsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16297

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### amazonProductsTaskGetHtml()

> **amazonProductsTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:16340

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### amazonProductsTaskPost()

> **amazonProductsTaskPost**(`body`): `Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

Defined in: main.ts:16216

#### Parameters

##### body

[`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

Successful operation

***

### amazonProductsTasksReady()

> **amazonProductsTasksReady**(): `Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

Defined in: main.ts:16257

#### Returns

`Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

Successful operation

***

### amazonReviewsTaskGetAdvanced()

> **amazonReviewsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16792

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### amazonReviewsTaskGetHtml()

> **amazonReviewsTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:16835

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### amazonReviewsTaskPost()

> **amazonReviewsTaskPost**(`body`): `Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:16711

#### Parameters

##### body

[`MerchantAmazonReviewsTaskPostRequestInfo`](MerchantAmazonReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

Successful operation

***

### amazonReviewsTasksReady()

> **amazonReviewsTasksReady**(): `Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:16752

#### Returns

`Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

Successful operation

***

### amazonSellersTaskGetAdvanced()

> **amazonSellersTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16627

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### amazonSellersTaskGetHtml()

> **amazonSellersTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:16670

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### amazonSellersTaskPost()

> **amazonSellersTaskPost**(`body`): `Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

Defined in: main.ts:16546

#### Parameters

##### body

[`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

Successful operation

***

### amazonSellersTasksReady()

> **amazonSellersTasksReady**(): `Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

Defined in: main.ts:16587

#### Returns

`Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

Successful operation

***

### googleProductInfoTaskGetAdvanced()

> **googleProductInfoTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16014

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleProductInfoTaskPost()

> **googleProductInfoTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:15933

#### Parameters

##### body

[`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

Successful operation

***

### googleProductInfoTasksReady()

> **googleProductInfoTasksReady**(): `Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:15974

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

Successful operation

***

### googleProductSpecTaskGetAdvanced()

> **googleProductSpecTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:15849

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleProductSpecTaskGetHtml()

> **googleProductSpecTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:15892

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleProductSpecTaskPost()

> **googleProductSpecTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

Defined in: main.ts:15768

#### Parameters

##### body

[`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

Successful operation

***

### googleProductSpecTasksReady()

> **googleProductSpecTasksReady**(): `Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

Defined in: main.ts:15809

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

Successful operation

***

### googleProductsTaskGetAdvanced()

> **googleProductsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:15519

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleProductsTaskGetHtml()

> **googleProductsTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:15562

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleProductsTaskPost()

> **googleProductsTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

Defined in: main.ts:15401

#### Parameters

##### body

[`MerchantGoogleProductsTaskPostRequestInfo`](MerchantGoogleProductsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

Successful operation

***

### googleProductsTasksReady()

> **googleProductsTasksReady**(): `Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

Defined in: main.ts:15442

#### Returns

`Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleSellersAdUrl()

> **googleSellersAdUrl**(`shop_ad_aclk`): `Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

Defined in: main.ts:16056

#### Parameters

##### shop\_ad\_aclk

`string`

unique ad click referral parameter
you can obtain this parameter with Google Shopping Products or Google Shopping Sellers

#### Returns

`Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

Successful operation

***

### googleSellersTaskGetAdvanced()

> **googleSellersTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:15684

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleSellersTaskGetHtml()

> **googleSellersTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:15727

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleSellersTaskPost()

> **googleSellersTaskPost**(`body`): `Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

Defined in: main.ts:15603

#### Parameters

##### body

[`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

Successful operation

***

### googleSellersTasksReady()

> **googleSellersTasksReady**(): `Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

Defined in: main.ts:15644

#### Returns

`Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

Successful operation

***

### merchantAmazonLanguages()

> **merchantAmazonLanguages**(): `Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

Defined in: main.ts:16178

#### Returns

`Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

Successful operation

***

### merchantAmazonLocations()

> **merchantAmazonLocations**(): `Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

Defined in: main.ts:16096

#### Returns

`Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

Successful operation

***

### merchantAmazonLocationsCountry()

> **merchantAmazonLocationsCountry**(`country`): `Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

Defined in: main.ts:16138

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

Successful operation

***

### merchantErrors()

> **merchantErrors**(`body`): `Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

Defined in: main.ts:15240

#### Parameters

##### body

[`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

Successful operation

***

### merchantGoogleLanguages()

> **merchantGoogleLanguages**(): `Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

Defined in: main.ts:15281

#### Returns

`Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

Successful operation

***

### merchantGoogleLocations()

> **merchantGoogleLocations**(): `Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

Defined in: main.ts:15318

#### Returns

`Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

Successful operation

***

### merchantGoogleLocationsCountry()

> **merchantGoogleLocationsCountry**(`country`): `Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

Defined in: main.ts:15360

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

Successful operation

***

### merchantIdList()

> **merchantIdList**(`body`): `Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

Defined in: main.ts:15198

#### Parameters

##### body

[`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

Successful operation

***

### merchantTasksReady()

> **merchantTasksReady**(): `Promise`\<[`MerchantTasksReadyResponseInfo`](MerchantTasksReadyResponseInfo.md)\>

Defined in: main.ts:15479

#### Returns

`Promise`\<[`MerchantTasksReadyResponseInfo`](MerchantTasksReadyResponseInfo.md)\>

Successful operation

***

### processAmazonAsinTaskGetAdvanced()

> `protected` **processAmazonAsinTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16481

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

***

### processAmazonAsinTaskGetHtml()

> `protected` **processAmazonAsinTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:16524

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

***

### processAmazonAsinTaskPost()

> `protected` **processAmazonAsinTaskPost**(`response`): `Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

Defined in: main.ts:16401

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

***

### processAmazonAsinTasksReady()

> `protected` **processAmazonAsinTasksReady**(`response`): `Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

Defined in: main.ts:16438

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

***

### processAmazonProductsTaskGetAdvanced()

> `protected` **processAmazonProductsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16316

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

***

### processAmazonProductsTaskGetHtml()

> `protected` **processAmazonProductsTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:16359

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

***

### processAmazonProductsTaskPost()

> `protected` **processAmazonProductsTaskPost**(`response`): `Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

Defined in: main.ts:16236

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

***

### processAmazonProductsTasksReady()

> `protected` **processAmazonProductsTasksReady**(`response`): `Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

Defined in: main.ts:16273

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

***

### processAmazonReviewsTaskGetAdvanced()

> `protected` **processAmazonReviewsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16811

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

***

### processAmazonReviewsTaskGetHtml()

> `protected` **processAmazonReviewsTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:16854

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

***

### processAmazonReviewsTaskPost()

> `protected` **processAmazonReviewsTaskPost**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

Defined in: main.ts:16731

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

***

### processAmazonReviewsTasksReady()

> `protected` **processAmazonReviewsTasksReady**(`response`): `Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:16768

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

***

### processAmazonSellersTaskGetAdvanced()

> `protected` **processAmazonSellersTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16646

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

***

### processAmazonSellersTaskGetHtml()

> `protected` **processAmazonSellersTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:16689

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

***

### processAmazonSellersTaskPost()

> `protected` **processAmazonSellersTaskPost**(`response`): `Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

Defined in: main.ts:16566

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

***

### processAmazonSellersTasksReady()

> `protected` **processAmazonSellersTasksReady**(`response`): `Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

Defined in: main.ts:16603

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

***

### processGoogleProductInfoTaskGetAdvanced()

> `protected` **processGoogleProductInfoTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:16033

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleProductInfoTaskPost()

> `protected` **processGoogleProductInfoTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:15953

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

***

### processGoogleProductInfoTasksReady()

> `protected` **processGoogleProductInfoTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:15990

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

***

### processGoogleProductSpecTaskGetAdvanced()

> `protected` **processGoogleProductSpecTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:15868

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleProductSpecTaskGetHtml()

> `protected` **processGoogleProductSpecTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:15911

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

***

### processGoogleProductSpecTaskPost()

> `protected` **processGoogleProductSpecTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

Defined in: main.ts:15788

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

***

### processGoogleProductSpecTasksReady()

> `protected` **processGoogleProductSpecTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

Defined in: main.ts:15825

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

***

### processGoogleProductsTaskGetAdvanced()

> `protected` **processGoogleProductsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:15538

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleProductsTaskGetHtml()

> `protected` **processGoogleProductsTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:15581

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

***

### processGoogleProductsTaskPost()

> `protected` **processGoogleProductsTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

Defined in: main.ts:15421

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

***

### processGoogleProductsTasksReady()

> `protected` **processGoogleProductsTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

Defined in: main.ts:15458

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

***

### processGoogleSellersAdUrl()

> `protected` **processGoogleSellersAdUrl**(`response`): `Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

Defined in: main.ts:16075

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

***

### processGoogleSellersTaskGetAdvanced()

> `protected` **processGoogleSellersTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:15703

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleSellersTaskGetHtml()

> `protected` **processGoogleSellersTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:15746

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

***

### processGoogleSellersTaskPost()

> `protected` **processGoogleSellersTaskPost**(`response`): `Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

Defined in: main.ts:15623

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

***

### processGoogleSellersTasksReady()

> `protected` **processGoogleSellersTasksReady**(`response`): `Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

Defined in: main.ts:15660

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

***

### processMerchantAmazonLanguages()

> `protected` **processMerchantAmazonLanguages**(`response`): `Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

Defined in: main.ts:16194

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

***

### processMerchantAmazonLocations()

> `protected` **processMerchantAmazonLocations**(`response`): `Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

Defined in: main.ts:16112

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

***

### processMerchantAmazonLocationsCountry()

> `protected` **processMerchantAmazonLocationsCountry**(`response`): `Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

Defined in: main.ts:16157

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

***

### processMerchantErrors()

> `protected` **processMerchantErrors**(`response`): `Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

Defined in: main.ts:15260

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

***

### processMerchantGoogleLanguages()

> `protected` **processMerchantGoogleLanguages**(`response`): `Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

Defined in: main.ts:15297

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

***

### processMerchantGoogleLocations()

> `protected` **processMerchantGoogleLocations**(`response`): `Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

Defined in: main.ts:15334

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

***

### processMerchantGoogleLocationsCountry()

> `protected` **processMerchantGoogleLocationsCountry**(`response`): `Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

Defined in: main.ts:15379

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

***

### processMerchantIdList()

> `protected` **processMerchantIdList**(`response`): `Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

Defined in: main.ts:15218

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

***

### processMerchantTasksReady()

> `protected` **processMerchantTasksReady**(`response`): `Promise`\<[`MerchantTasksReadyResponseInfo`](MerchantTasksReadyResponseInfo.md)\>

Defined in: main.ts:15495

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantTasksReadyResponseInfo`](MerchantTasksReadyResponseInfo.md)\>
