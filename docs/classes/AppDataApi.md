**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataApi

# Class: AppDataApi

## Constructors

### new AppDataApi(baseUrl, http)

> **new AppDataApi**(`baseUrl`?, `http`?): [`AppDataApi`](AppDataApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`AppDataApi`](AppDataApi.md)

#### Source

main.ts:15797

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:15794

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

main.ts:15793

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:15795

## Methods

### appDataAppleLanguages()

> **appDataAppleLanguages**(): `Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:16813

***

### appDataAppleLocations()

> **appDataAppleLocations**(): `Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:16776

***

### appDataErrors()

> **appDataErrors**(`body`): `Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

Successful operation

#### Source

main.ts:15848

***

### appDataGoogleLanguages()

> **appDataGoogleLanguages**(): `Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:15963

***

### appDataGoogleLocations()

> **appDataGoogleLocations**(): `Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:15926

***

### appDataIdList()

> **appDataIdList**(`body`): `Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

Successful operation

#### Source

main.ts:15806

***

### appleAppInfoTaskGetAdvanced()

> **appleAppInfoTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:17054

***

### appleAppInfoTaskPost()

> **appleAppInfoTaskPost**(`body`): `Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:16973

***

### appleAppInfoTasksReady()

> **appleAppInfoTasksReady**(): `Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:17014

***

### appleAppListTaskGetAdvanced()

> **appleAppListTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:17176

***

### appleAppListTaskPost()

> **appleAppListTaskPost**(`body`): `Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:17095

***

### appleAppListTasksReady()

> **appleAppListTasksReady**(): `Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:17136

***

### appleAppListingsCategories()

> **appleAppListingsCategories**(): `Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

Successful operation

#### Source

main.ts:17338

***

### appleAppListingsSearchLive()

> **appleAppListingsSearchLive**(`body`): `Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataAppleAppListingsSearchLiveRequestInfo`](AppDataAppleAppListingsSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:17376

***

### appleAppReviewsTaskGetAdvanced()

> **appleAppReviewsTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:17298

***

### appleAppReviewsTaskPost()

> **appleAppReviewsTaskPost**(`body`): `Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataAppleAppReviewsTaskPostRequestInfo`](AppDataAppleAppReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:17217

***

### appleAppReviewsTasksReady()

> **appleAppReviewsTasksReady**(): `Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:17258

***

### appleAppSearchesTaskGetAdvanced()

> **appleAppSearchesTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:16932

***

### appleAppSearchesTaskPost()

> **appleAppSearchesTaskPost**(`body`): `Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:16851

***

### appleAppSearchesTasksReady()

> **appleAppSearchesTasksReady**(): `Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:16892

***

### appleCategories()

> **appleCategories**(): `Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

Successful operation

#### Source

main.ts:16739

***

### googleAppInfoTaskGetAdvanced()

> **googleAppInfoTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:16412

***

### googleAppInfoTaskGetHtml()

> **googleAppInfoTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:16455

***

### googleAppInfoTaskPost()

> **googleAppInfoTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:16331

***

### googleAppInfoTasksReady()

> **googleAppInfoTasksReady**(): `Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:16372

***

### googleAppListTaskGetAdvanced()

> **googleAppListTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:16247

***

### googleAppListTaskGetHtml()

> **googleAppListTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:16290

***

### googleAppListTaskPost()

> **googleAppListTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:16166

***

### googleAppListTasksReady()

> **googleAppListTasksReady**(): `Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:16207

***

### googleAppListingsCategories()

> **googleAppListingsCategories**(): `Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

Successful operation

#### Source

main.ts:16660

***

### googleAppListingsSearchLive()

> **googleAppListingsSearchLive**(`body`): `Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:16698

***

### googleAppReviewsTaskGetAdvanced()

> **googleAppReviewsTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:16577

***

### googleAppReviewsTaskGetHtml()

> **googleAppReviewsTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:16620

***

### googleAppReviewsTaskPost()

> **googleAppReviewsTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:16496

***

### googleAppReviewsTasksReady()

> **googleAppReviewsTasksReady**(): `Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:16537

***

### googleAppSearchesTaskGetAdvanced()

> **googleAppSearchesTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:16082

***

### googleAppSearchesTaskGetHtml()

> **googleAppSearchesTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:16125

***

### googleAppSearchesTaskPost()

> **googleAppSearchesTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:16001

***

### googleAppSearchesTasksReady()

> **googleAppSearchesTasksReady**(): `Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:16042

***

### googleCategories()

> **googleCategories**(): `Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

Successful operation

#### Source

main.ts:15889

***

### processAppDataAppleLanguages()

> **`protected`** **processAppDataAppleLanguages**(`response`): `Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

#### Source

main.ts:16829

***

### processAppDataAppleLocations()

> **`protected`** **processAppDataAppleLocations**(`response`): `Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

#### Source

main.ts:16792

***

### processAppDataErrors()

> **`protected`** **processAppDataErrors**(`response`): `Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

#### Source

main.ts:15868

***

### processAppDataGoogleLanguages()

> **`protected`** **processAppDataGoogleLanguages**(`response`): `Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

#### Source

main.ts:15979

***

### processAppDataGoogleLocations()

> **`protected`** **processAppDataGoogleLocations**(`response`): `Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

#### Source

main.ts:15942

***

### processAppDataIdList()

> **`protected`** **processAppDataIdList**(`response`): `Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

#### Source

main.ts:15826

***

### processAppleAppInfoTaskGetAdvanced()

> **`protected`** **processAppleAppInfoTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:17073

***

### processAppleAppInfoTaskPost()

> **`protected`** **processAppleAppInfoTaskPost**(`response`): `Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

#### Source

main.ts:16993

***

### processAppleAppInfoTasksReady()

> **`protected`** **processAppleAppInfoTasksReady**(`response`): `Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

#### Source

main.ts:17030

***

### processAppleAppListTaskGetAdvanced()

> **`protected`** **processAppleAppListTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:17195

***

### processAppleAppListTaskPost()

> **`protected`** **processAppleAppListTaskPost**(`response`): `Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

#### Source

main.ts:17115

***

### processAppleAppListTasksReady()

> **`protected`** **processAppleAppListTasksReady**(`response`): `Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

#### Source

main.ts:17152

***

### processAppleAppListingsCategories()

> **`protected`** **processAppleAppListingsCategories**(`response`): `Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

#### Source

main.ts:17354

***

### processAppleAppListingsSearchLive()

> **`protected`** **processAppleAppListingsSearchLive**(`response`): `Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

#### Source

main.ts:17396

***

### processAppleAppReviewsTaskGetAdvanced()

> **`protected`** **processAppleAppReviewsTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:17317

***

### processAppleAppReviewsTaskPost()

> **`protected`** **processAppleAppReviewsTaskPost**(`response`): `Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

#### Source

main.ts:17237

***

### processAppleAppReviewsTasksReady()

> **`protected`** **processAppleAppReviewsTasksReady**(`response`): `Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

#### Source

main.ts:17274

***

### processAppleAppSearchesTaskGetAdvanced()

> **`protected`** **processAppleAppSearchesTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:16951

***

### processAppleAppSearchesTaskPost()

> **`protected`** **processAppleAppSearchesTaskPost**(`response`): `Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

#### Source

main.ts:16871

***

### processAppleAppSearchesTasksReady()

> **`protected`** **processAppleAppSearchesTasksReady**(`response`): `Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

#### Source

main.ts:16908

***

### processAppleCategories()

> **`protected`** **processAppleCategories**(`response`): `Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

#### Source

main.ts:16755

***

### processGoogleAppInfoTaskGetAdvanced()

> **`protected`** **processGoogleAppInfoTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:16431

***

### processGoogleAppInfoTaskGetHtml()

> **`protected`** **processGoogleAppInfoTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:16474

***

### processGoogleAppInfoTaskPost()

> **`protected`** **processGoogleAppInfoTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

#### Source

main.ts:16351

***

### processGoogleAppInfoTasksReady()

> **`protected`** **processGoogleAppInfoTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

#### Source

main.ts:16388

***

### processGoogleAppListTaskGetAdvanced()

> **`protected`** **processGoogleAppListTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:16266

***

### processGoogleAppListTaskGetHtml()

> **`protected`** **processGoogleAppListTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:16309

***

### processGoogleAppListTaskPost()

> **`protected`** **processGoogleAppListTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

#### Source

main.ts:16186

***

### processGoogleAppListTasksReady()

> **`protected`** **processGoogleAppListTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

#### Source

main.ts:16223

***

### processGoogleAppListingsCategories()

> **`protected`** **processGoogleAppListingsCategories**(`response`): `Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

#### Source

main.ts:16676

***

### processGoogleAppListingsSearchLive()

> **`protected`** **processGoogleAppListingsSearchLive**(`response`): `Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

#### Source

main.ts:16718

***

### processGoogleAppReviewsTaskGetAdvanced()

> **`protected`** **processGoogleAppReviewsTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:16596

***

### processGoogleAppReviewsTaskGetHtml()

> **`protected`** **processGoogleAppReviewsTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:16639

***

### processGoogleAppReviewsTaskPost()

> **`protected`** **processGoogleAppReviewsTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

#### Source

main.ts:16516

***

### processGoogleAppReviewsTasksReady()

> **`protected`** **processGoogleAppReviewsTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

#### Source

main.ts:16553

***

### processGoogleAppSearchesTaskGetAdvanced()

> **`protected`** **processGoogleAppSearchesTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:16101

***

### processGoogleAppSearchesTaskGetHtml()

> **`protected`** **processGoogleAppSearchesTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:16144

***

### processGoogleAppSearchesTaskPost()

> **`protected`** **processGoogleAppSearchesTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

#### Source

main.ts:16021

***

### processGoogleAppSearchesTasksReady()

> **`protected`** **processGoogleAppSearchesTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

#### Source

main.ts:16058

***

### processGoogleCategories()

> **`protected`** **processGoogleCategories**(`response`): `Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

#### Source

main.ts:15905
