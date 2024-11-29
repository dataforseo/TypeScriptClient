[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantApi

# Class: MerchantApi

## Constructors

### new MerchantApi()

> **new MerchantApi**(`baseUrl`?, `http`?): [`MerchantApi`](MerchantApi.md)

#### Parameters

##### baseUrl?

`string`

##### http?

###### http.fetch

#### Returns

[`MerchantApi`](MerchantApi.md)

#### Defined in

main.ts:15189

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

main.ts:15187

## Methods

### amazonAsinTaskGetAdvanced()

> **amazonAsinTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16462

***

### amazonAsinTaskGetHtml()

> **amazonAsinTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16505

***

### amazonAsinTaskPost()

> **amazonAsinTaskPost**(`body`): `Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`MerchantAmazonAsinTaskPostRequestInfo`](MerchantAmazonAsinTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16381

***

### amazonAsinTasksReady()

> **amazonAsinTasksReady**(): `Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16422

***

### amazonProductsTaskGetAdvanced()

> **amazonProductsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16297

***

### amazonProductsTaskGetHtml()

> **amazonProductsTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16340

***

### amazonProductsTaskPost()

> **amazonProductsTaskPost**(`body`): `Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16216

***

### amazonProductsTasksReady()

> **amazonProductsTasksReady**(): `Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16257

***

### amazonReviewsTaskGetAdvanced()

> **amazonReviewsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16792

***

### amazonReviewsTaskGetHtml()

> **amazonReviewsTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16835

***

### amazonReviewsTaskPost()

> **amazonReviewsTaskPost**(`body`): `Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`MerchantAmazonReviewsTaskPostRequestInfo`](MerchantAmazonReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16711

***

### amazonReviewsTasksReady()

> **amazonReviewsTasksReady**(): `Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16752

***

### amazonSellersTaskGetAdvanced()

> **amazonSellersTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16627

***

### amazonSellersTaskGetHtml()

> **amazonSellersTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16670

***

### amazonSellersTaskPost()

> **amazonSellersTaskPost**(`body`): `Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16546

***

### amazonSellersTasksReady()

> **amazonSellersTasksReady**(): `Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16587

***

### googleProductInfoTaskGetAdvanced()

> **googleProductInfoTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16014

***

### googleProductInfoTaskPost()

> **googleProductInfoTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15933

***

### googleProductInfoTasksReady()

> **googleProductInfoTasksReady**(): `Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15974

***

### googleProductSpecTaskGetAdvanced()

> **googleProductSpecTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15849

***

### googleProductSpecTaskGetHtml()

> **googleProductSpecTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15892

***

### googleProductSpecTaskPost()

> **googleProductSpecTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15768

***

### googleProductSpecTasksReady()

> **googleProductSpecTasksReady**(): `Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15809

***

### googleProductsTaskGetAdvanced()

> **googleProductsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15519

***

### googleProductsTaskGetHtml()

> **googleProductsTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15562

***

### googleProductsTaskPost()

> **googleProductsTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`MerchantGoogleProductsTaskPostRequestInfo`](MerchantGoogleProductsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15401

***

### googleProductsTasksReady()

> **googleProductsTasksReady**(): `Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15442

***

### googleSellersAdUrl()

> **googleSellersAdUrl**(`shop_ad_aclk`): `Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

#### Parameters

##### shop\_ad\_aclk

`string`

unique ad click referral parameter
you can obtain this parameter with Google Shopping Products or Google Shopping Sellers

#### Returns

`Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16056

***

### googleSellersTaskGetAdvanced()

> **googleSellersTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15684

***

### googleSellersTaskGetHtml()

> **googleSellersTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15727

***

### googleSellersTaskPost()

> **googleSellersTaskPost**(`body`): `Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15603

***

### googleSellersTasksReady()

> **googleSellersTasksReady**(): `Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15644

***

### merchantAmazonLanguages()

> **merchantAmazonLanguages**(): `Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16178

***

### merchantAmazonLocations()

> **merchantAmazonLocations**(): `Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16096

***

### merchantAmazonLocationsCountry()

> **merchantAmazonLocationsCountry**(`country`): `Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

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

#### Defined in

main.ts:16138

***

### merchantErrors()

> **merchantErrors**(`body`): `Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

#### Parameters

##### body

[`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15240

***

### merchantGoogleLanguages()

> **merchantGoogleLanguages**(): `Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15281

***

### merchantGoogleLocations()

> **merchantGoogleLocations**(): `Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15318

***

### merchantGoogleLocationsCountry()

> **merchantGoogleLocationsCountry**(`country`): `Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

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

#### Defined in

main.ts:15360

***

### merchantIdList()

> **merchantIdList**(`body`): `Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

#### Parameters

##### body

[`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15198

***

### merchantTasksReady()

> **merchantTasksReady**(): `Promise`\<[`MerchantTasksReadyResponseInfo`](MerchantTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantTasksReadyResponseInfo`](MerchantTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:15479

***

### processAmazonAsinTaskGetAdvanced()

> `protected` **processAmazonAsinTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:16481

***

### processAmazonAsinTaskGetHtml()

> `protected` **processAmazonAsinTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:16524

***

### processAmazonAsinTaskPost()

> `protected` **processAmazonAsinTaskPost**(`response`): `Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

#### Defined in

main.ts:16401

***

### processAmazonAsinTasksReady()

> `protected` **processAmazonAsinTasksReady**(`response`): `Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:16438

***

### processAmazonProductsTaskGetAdvanced()

> `protected` **processAmazonProductsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:16316

***

### processAmazonProductsTaskGetHtml()

> `protected` **processAmazonProductsTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:16359

***

### processAmazonProductsTaskPost()

> `protected` **processAmazonProductsTaskPost**(`response`): `Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:16236

***

### processAmazonProductsTasksReady()

> `protected` **processAmazonProductsTasksReady**(`response`): `Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:16273

***

### processAmazonReviewsTaskGetAdvanced()

> `protected` **processAmazonReviewsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:16811

***

### processAmazonReviewsTaskGetHtml()

> `protected` **processAmazonReviewsTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:16854

***

### processAmazonReviewsTaskPost()

> `protected` **processAmazonReviewsTaskPost**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:16731

***

### processAmazonReviewsTasksReady()

> `protected` **processAmazonReviewsTasksReady**(`response`): `Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:16768

***

### processAmazonSellersTaskGetAdvanced()

> `protected` **processAmazonSellersTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:16646

***

### processAmazonSellersTaskGetHtml()

> `protected` **processAmazonSellersTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:16689

***

### processAmazonSellersTaskPost()

> `protected` **processAmazonSellersTaskPost**(`response`): `Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

#### Defined in

main.ts:16566

***

### processAmazonSellersTasksReady()

> `protected` **processAmazonSellersTasksReady**(`response`): `Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:16603

***

### processGoogleProductInfoTaskGetAdvanced()

> `protected` **processGoogleProductInfoTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:16033

***

### processGoogleProductInfoTaskPost()

> `protected` **processGoogleProductInfoTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

#### Defined in

main.ts:15953

***

### processGoogleProductInfoTasksReady()

> `protected` **processGoogleProductInfoTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:15990

***

### processGoogleProductSpecTaskGetAdvanced()

> `protected` **processGoogleProductSpecTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:15868

***

### processGoogleProductSpecTaskGetHtml()

> `protected` **processGoogleProductSpecTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:15911

***

### processGoogleProductSpecTaskPost()

> `protected` **processGoogleProductSpecTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

#### Defined in

main.ts:15788

***

### processGoogleProductSpecTasksReady()

> `protected` **processGoogleProductSpecTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:15825

***

### processGoogleProductsTaskGetAdvanced()

> `protected` **processGoogleProductsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:15538

***

### processGoogleProductsTaskGetHtml()

> `protected` **processGoogleProductsTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:15581

***

### processGoogleProductsTaskPost()

> `protected` **processGoogleProductsTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:15421

***

### processGoogleProductsTasksReady()

> `protected` **processGoogleProductsTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:15458

***

### processGoogleSellersAdUrl()

> `protected` **processGoogleSellersAdUrl**(`response`): `Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

#### Defined in

main.ts:16075

***

### processGoogleSellersTaskGetAdvanced()

> `protected` **processGoogleSellersTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:15703

***

### processGoogleSellersTaskGetHtml()

> `protected` **processGoogleSellersTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:15746

***

### processGoogleSellersTaskPost()

> `protected` **processGoogleSellersTaskPost**(`response`): `Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

#### Defined in

main.ts:15623

***

### processGoogleSellersTasksReady()

> `protected` **processGoogleSellersTasksReady**(`response`): `Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:15660

***

### processMerchantAmazonLanguages()

> `protected` **processMerchantAmazonLanguages**(`response`): `Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

#### Defined in

main.ts:16194

***

### processMerchantAmazonLocations()

> `protected` **processMerchantAmazonLocations**(`response`): `Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

#### Defined in

main.ts:16112

***

### processMerchantAmazonLocationsCountry()

> `protected` **processMerchantAmazonLocationsCountry**(`response`): `Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:16157

***

### processMerchantErrors()

> `protected` **processMerchantErrors**(`response`): `Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

#### Defined in

main.ts:15260

***

### processMerchantGoogleLanguages()

> `protected` **processMerchantGoogleLanguages**(`response`): `Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

#### Defined in

main.ts:15297

***

### processMerchantGoogleLocations()

> `protected` **processMerchantGoogleLocations**(`response`): `Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

#### Defined in

main.ts:15334

***

### processMerchantGoogleLocationsCountry()

> `protected` **processMerchantGoogleLocationsCountry**(`response`): `Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:15379

***

### processMerchantIdList()

> `protected` **processMerchantIdList**(`response`): `Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

#### Defined in

main.ts:15218

***

### processMerchantTasksReady()

> `protected` **processMerchantTasksReady**(`response`): `Promise`\<[`MerchantTasksReadyResponseInfo`](MerchantTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`MerchantTasksReadyResponseInfo`](MerchantTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:15495
