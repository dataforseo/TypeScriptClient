**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / MerchantApi

# Class: MerchantApi

## Constructors

### new MerchantApi(baseUrl, http)

> **new MerchantApi**(`baseUrl`?, `http`?): [`MerchantApi`](MerchantApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`MerchantApi`](MerchantApi.md)

#### Source

main.ts:14145

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:14142

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

main.ts:14141

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:14143

## Methods

### amazonAsinTaskGetAdvanced()

> **amazonAsinTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:15381

***

### amazonAsinTaskGetHtml()

> **amazonAsinTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:15424

***

### amazonAsinTaskPost()

> **amazonAsinTaskPost**(`body`): `Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantAmazonAsinTaskPostRequestInfo`](MerchantAmazonAsinTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:15300

***

### amazonAsinTasksReady()

> **amazonAsinTasksReady**(): `Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:15341

***

### amazonProductsTaskGetAdvanced()

> **amazonProductsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:15216

***

### amazonProductsTaskGetHtml()

> **amazonProductsTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:15259

***

### amazonProductsTaskPost()

> **amazonProductsTaskPost**(`body`): `Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantAmazonProductsTaskPostRequestInfo`](MerchantAmazonProductsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:15135

***

### amazonProductsTasksReady()

> **amazonProductsTasksReady**(): `Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:15176

***

### amazonReviewsTaskGetAdvanced()

> **amazonReviewsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:15711

***

### amazonReviewsTaskGetHtml()

> **amazonReviewsTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:15754

***

### amazonReviewsTaskPost()

> **amazonReviewsTaskPost**(`body`): `Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantAmazonReviewsTaskPostRequestInfo`](MerchantAmazonReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:15630

***

### amazonReviewsTasksReady()

> **amazonReviewsTasksReady**(): `Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:15671

***

### amazonSellersTaskGetAdvanced()

> **amazonSellersTaskGetAdvanced**(`id`): `Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:15546

***

### amazonSellersTaskGetHtml()

> **amazonSellersTaskGetHtml**(`id`): `Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:15589

***

### amazonSellersTaskPost()

> **amazonSellersTaskPost**(`body`): `Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantAmazonSellersTaskPostRequestInfo`](MerchantAmazonSellersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:15465

***

### amazonSellersTasksReady()

> **amazonSellersTasksReady**(): `Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:15506

***

### googleProductInfoTaskGetAdvanced()

> **googleProductInfoTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:14933

***

### googleProductInfoTaskPost()

> **googleProductInfoTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantGoogleProductInfoTaskPostRequestInfo`](MerchantGoogleProductInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:14852

***

### googleProductInfoTasksReady()

> **googleProductInfoTasksReady**(): `Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:14893

***

### googleProductSpecTaskGetAdvanced()

> **googleProductSpecTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:14768

***

### googleProductSpecTaskGetHtml()

> **googleProductSpecTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:14811

***

### googleProductSpecTaskPost()

> **googleProductSpecTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantGoogleProductSpecTaskPostRequestInfo`](MerchantGoogleProductSpecTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:14687

***

### googleProductSpecTasksReady()

> **googleProductSpecTasksReady**(): `Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:14728

***

### googleProductsTaskGetAdvanced()

> **googleProductsTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:14438

***

### googleProductsTaskGetHtml()

> **googleProductsTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:14481

***

### googleProductsTaskPost()

> **googleProductsTaskPost**(`body`): `Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantTaskRequestInfo`](MerchantTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:14357

***

### googleProductsTasksReady()

> **googleProductsTasksReady**(): `Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:14398

***

### googleSellersAdUrl()

> **googleSellersAdUrl**(`shop_ad_aclk`): `Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

#### Parameters

• **shop\_ad\_aclk**: `string`

unique ad click referral parameter
you can obtain this parameter with Google Shopping Products or Google Shopping Sellers

#### Returns

`Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

Successful operation

#### Source

main.ts:14975

***

### googleSellersTaskGetAdvanced()

> **googleSellersTaskGetAdvanced**(`id`): `Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:14603

***

### googleSellersTaskGetHtml()

> **googleSellersTaskGetHtml**(`id`): `Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:14646

***

### googleSellersTaskPost()

> **googleSellersTaskPost**(`body`): `Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantGoogleSellersTaskPostRequestInfo`](MerchantGoogleSellersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:14522

***

### googleSellersTasksReady()

> **googleSellersTasksReady**(): `Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:14563

***

### merchantAmazonLanguages()

> **merchantAmazonLanguages**(): `Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:15097

***

### merchantAmazonLocations()

> **merchantAmazonLocations**(): `Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:15015

***

### merchantAmazonLocationsCountry()

> **merchantAmazonLocationsCountry**(`country`): `Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

Successful operation

#### Source

main.ts:15057

***

### merchantErrors()

> **merchantErrors**(`body`): `Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantErrorsRequestInfo`](MerchantErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

Successful operation

#### Source

main.ts:14196

***

### merchantGoogleLanguages()

> **merchantGoogleLanguages**(): `Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:14237

***

### merchantGoogleLocations()

> **merchantGoogleLocations**(): `Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:14274

***

### merchantGoogleLocationsCountry()

> **merchantGoogleLocationsCountry**(`country`): `Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

Successful operation

#### Source

main.ts:14316

***

### merchantIdList()

> **merchantIdList**(`body`): `Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

#### Parameters

• **body**: [`MerchantIdListRequestInfo`](MerchantIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

Successful operation

#### Source

main.ts:14154

***

### processAmazonAsinTaskGetAdvanced()

> **`protected`** **processAmazonAsinTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetAdvancedResponseInfo`](MerchantAmazonAsinTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:15400

***

### processAmazonAsinTaskGetHtml()

> **`protected`** **processAmazonAsinTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskGetHtmlResponseInfo`](MerchantAmazonAsinTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:15443

***

### processAmazonAsinTaskPost()

> **`protected`** **processAmazonAsinTaskPost**(`response`): `Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTaskPostResponseInfo`](MerchantAmazonAsinTaskPostResponseInfo.md)\>

#### Source

main.ts:15320

***

### processAmazonAsinTasksReady()

> **`protected`** **processAmazonAsinTasksReady**(`response`): `Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonAsinTasksReadyResponseInfo`](MerchantAmazonAsinTasksReadyResponseInfo.md)\>

#### Source

main.ts:15357

***

### processAmazonProductsTaskGetAdvanced()

> **`protected`** **processAmazonProductsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetAdvancedResponseInfo`](MerchantAmazonProductsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:15235

***

### processAmazonProductsTaskGetHtml()

> **`protected`** **processAmazonProductsTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskGetHtmlResponseInfo`](MerchantAmazonProductsTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:15278

***

### processAmazonProductsTaskPost()

> **`protected`** **processAmazonProductsTaskPost**(`response`): `Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTaskPostResponseInfo`](MerchantAmazonProductsTaskPostResponseInfo.md)\>

#### Source

main.ts:15155

***

### processAmazonProductsTasksReady()

> **`protected`** **processAmazonProductsTasksReady**(`response`): `Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonProductsTasksReadyResponseInfo`](MerchantAmazonProductsTasksReadyResponseInfo.md)\>

#### Source

main.ts:15192

***

### processAmazonReviewsTaskGetAdvanced()

> **`protected`** **processAmazonReviewsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetAdvancedResponseInfo`](MerchantAmazonReviewsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:15730

***

### processAmazonReviewsTaskGetHtml()

> **`protected`** **processAmazonReviewsTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskGetHtmlResponseInfo`](MerchantAmazonReviewsTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:15773

***

### processAmazonReviewsTaskPost()

> **`protected`** **processAmazonReviewsTaskPost**(`response`): `Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTaskPostResponseInfo`](MerchantAmazonReviewsTaskPostResponseInfo.md)\>

#### Source

main.ts:15650

***

### processAmazonReviewsTasksReady()

> **`protected`** **processAmazonReviewsTasksReady**(`response`): `Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonReviewsTasksReadyResponseInfo`](MerchantAmazonReviewsTasksReadyResponseInfo.md)\>

#### Source

main.ts:15687

***

### processAmazonSellersTaskGetAdvanced()

> **`protected`** **processAmazonSellersTaskGetAdvanced**(`response`): `Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetAdvancedResponseInfo`](MerchantAmazonSellersTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:15565

***

### processAmazonSellersTaskGetHtml()

> **`protected`** **processAmazonSellersTaskGetHtml**(`response`): `Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskGetHtmlResponseInfo`](MerchantAmazonSellersTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:15608

***

### processAmazonSellersTaskPost()

> **`protected`** **processAmazonSellersTaskPost**(`response`): `Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTaskPostResponseInfo`](MerchantAmazonSellersTaskPostResponseInfo.md)\>

#### Source

main.ts:15485

***

### processAmazonSellersTasksReady()

> **`protected`** **processAmazonSellersTasksReady**(`response`): `Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonSellersTasksReadyResponseInfo`](MerchantAmazonSellersTasksReadyResponseInfo.md)\>

#### Source

main.ts:15522

***

### processGoogleProductInfoTaskGetAdvanced()

> **`protected`** **processGoogleProductInfoTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskGetAdvancedResponseInfo`](MerchantGoogleProductInfoTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:14952

***

### processGoogleProductInfoTaskPost()

> **`protected`** **processGoogleProductInfoTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTaskPostResponseInfo`](MerchantGoogleProductInfoTaskPostResponseInfo.md)\>

#### Source

main.ts:14872

***

### processGoogleProductInfoTasksReady()

> **`protected`** **processGoogleProductInfoTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductInfoTasksReadyResponseInfo`](MerchantGoogleProductInfoTasksReadyResponseInfo.md)\>

#### Source

main.ts:14909

***

### processGoogleProductSpecTaskGetAdvanced()

> **`protected`** **processGoogleProductSpecTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetAdvancedResponseInfo`](MerchantGoogleProductSpecTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:14787

***

### processGoogleProductSpecTaskGetHtml()

> **`protected`** **processGoogleProductSpecTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:14830

***

### processGoogleProductSpecTaskPost()

> **`protected`** **processGoogleProductSpecTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTaskPostResponseInfo`](MerchantGoogleProductSpecTaskPostResponseInfo.md)\>

#### Source

main.ts:14707

***

### processGoogleProductSpecTasksReady()

> **`protected`** **processGoogleProductSpecTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductSpecTasksReadyResponseInfo`](MerchantGoogleProductSpecTasksReadyResponseInfo.md)\>

#### Source

main.ts:14744

***

### processGoogleProductsTaskGetAdvanced()

> **`protected`** **processGoogleProductsTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetAdvancedResponseInfo`](MerchantGoogleProductsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:14457

***

### processGoogleProductsTaskGetHtml()

> **`protected`** **processGoogleProductsTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskGetHtmlResponseInfo`](MerchantGoogleProductsTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:14500

***

### processGoogleProductsTaskPost()

> **`protected`** **processGoogleProductsTaskPost**(`response`): `Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTaskPostResponseInfo`](MerchantGoogleProductsTaskPostResponseInfo.md)\>

#### Source

main.ts:14377

***

### processGoogleProductsTasksReady()

> **`protected`** **processGoogleProductsTasksReady**(`response`): `Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleProductsTasksReadyResponseInfo`](MerchantGoogleProductsTasksReadyResponseInfo.md)\>

#### Source

main.ts:14414

***

### processGoogleSellersAdUrl()

> **`protected`** **processGoogleSellersAdUrl**(`response`): `Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersAdUrlResponseInfo`](MerchantGoogleSellersAdUrlResponseInfo.md)\>

#### Source

main.ts:14994

***

### processGoogleSellersTaskGetAdvanced()

> **`protected`** **processGoogleSellersTaskGetAdvanced**(`response`): `Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetAdvancedResponseInfo`](MerchantGoogleSellersTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:14622

***

### processGoogleSellersTaskGetHtml()

> **`protected`** **processGoogleSellersTaskGetHtml**(`response`): `Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskGetHtmlResponseInfo`](MerchantGoogleSellersTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:14665

***

### processGoogleSellersTaskPost()

> **`protected`** **processGoogleSellersTaskPost**(`response`): `Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTaskPostResponseInfo`](MerchantGoogleSellersTaskPostResponseInfo.md)\>

#### Source

main.ts:14542

***

### processGoogleSellersTasksReady()

> **`protected`** **processGoogleSellersTasksReady**(`response`): `Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleSellersTasksReadyResponseInfo`](MerchantGoogleSellersTasksReadyResponseInfo.md)\>

#### Source

main.ts:14579

***

### processMerchantAmazonLanguages()

> **`protected`** **processMerchantAmazonLanguages**(`response`): `Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonLanguagesResponseInfo`](MerchantAmazonLanguagesResponseInfo.md)\>

#### Source

main.ts:15113

***

### processMerchantAmazonLocations()

> **`protected`** **processMerchantAmazonLocations**(`response`): `Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonLocationsResponseInfo`](MerchantAmazonLocationsResponseInfo.md)\>

#### Source

main.ts:15031

***

### processMerchantAmazonLocationsCountry()

> **`protected`** **processMerchantAmazonLocationsCountry**(`response`): `Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantAmazonLocationsCountryResponseInfo`](MerchantAmazonLocationsCountryResponseInfo.md)\>

#### Source

main.ts:15076

***

### processMerchantErrors()

> **`protected`** **processMerchantErrors**(`response`): `Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantErrorsResponseInfo`](MerchantErrorsResponseInfo.md)\>

#### Source

main.ts:14216

***

### processMerchantGoogleLanguages()

> **`protected`** **processMerchantGoogleLanguages**(`response`): `Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleLanguagesResponseInfo`](MerchantGoogleLanguagesResponseInfo.md)\>

#### Source

main.ts:14253

***

### processMerchantGoogleLocations()

> **`protected`** **processMerchantGoogleLocations**(`response`): `Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleLocationsResponseInfo`](MerchantGoogleLocationsResponseInfo.md)\>

#### Source

main.ts:14290

***

### processMerchantGoogleLocationsCountry()

> **`protected`** **processMerchantGoogleLocationsCountry**(`response`): `Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantGoogleLocationsCountryResponseInfo`](MerchantGoogleLocationsCountryResponseInfo.md)\>

#### Source

main.ts:14335

***

### processMerchantIdList()

> **`protected`** **processMerchantIdList**(`response`): `Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`MerchantIdListResponseInfo`](MerchantIdListResponseInfo.md)\>

#### Source

main.ts:14174
