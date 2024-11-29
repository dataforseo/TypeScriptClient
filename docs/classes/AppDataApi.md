[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataApi

# Class: AppDataApi

## Constructors

### new AppDataApi()

> **new AppDataApi**(`baseUrl`?, `http`?): [`AppDataApi`](AppDataApi.md)

#### Parameters

##### baseUrl?

`string`

##### http?

###### http.fetch

#### Returns

[`AppDataApi`](AppDataApi.md)

#### Defined in

main.ts:16878

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

main.ts:16876

## Methods

### appDataAppleLanguages()

> **appDataAppleLanguages**(): `Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17976

***

### appDataAppleLocations()

> **appDataAppleLocations**(): `Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17939

***

### appDataErrors()

> **appDataErrors**(`body`): `Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

#### Parameters

##### body

[`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16929

***

### appDataGoogleLanguages()

> **appDataGoogleLanguages**(): `Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17089

***

### appDataGoogleLocations()

> **appDataGoogleLocations**(): `Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17007

***

### appDataGoogleLocationsCountry()

> **appDataGoogleLocationsCountry**(`country`): `Promise`\<[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17049

***

### appDataIdList()

> **appDataIdList**(`body`): `Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

#### Parameters

##### body

[`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16887

***

### appDataTasksReady()

> **appDataTasksReady**(): `Promise`\<[`AppDataTasksReadyResponseInfo`](AppDataTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataTasksReadyResponseInfo`](AppDataTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17205

***

### appleAppInfoTaskGetAdvanced()

> **appleAppInfoTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18217

***

### appleAppInfoTaskPost()

> **appleAppInfoTaskPost**(`body`): `Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18136

***

### appleAppInfoTasksReady()

> **appleAppInfoTasksReady**(): `Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18177

***

### appleAppListingsCategories()

> **appleAppListingsCategories**(): `Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18501

***

### appleAppListingsSearchLive()

> **appleAppListingsSearchLive**(`body`): `Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

##### body

[`AppDataAppleAppListingsSearchLiveRequestInfo`](AppDataAppleAppListingsSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18539

***

### appleAppListTaskGetAdvanced()

> **appleAppListTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18339

***

### appleAppListTaskPost()

> **appleAppListTaskPost**(`body`): `Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18258

***

### appleAppListTasksReady()

> **appleAppListTasksReady**(): `Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18299

***

### appleAppReviewsTaskGetAdvanced()

> **appleAppReviewsTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18461

***

### appleAppReviewsTaskPost()

> **appleAppReviewsTaskPost**(`body`): `Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`AppDataAppleAppReviewsTaskPostRequestInfo`](AppDataAppleAppReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18380

***

### appleAppReviewsTasksReady()

> **appleAppReviewsTasksReady**(): `Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18421

***

### appleAppSearchesTaskGetAdvanced()

> **appleAppSearchesTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18095

***

### appleAppSearchesTaskPost()

> **appleAppSearchesTaskPost**(`body`): `Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`AppDataAppleAppSearchesTaskPostRequestInfo`](AppDataAppleAppSearchesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18014

***

### appleAppSearchesTasksReady()

> **appleAppSearchesTasksReady**(): `Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18055

***

### appleCategories()

> **appleCategories**(): `Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17902

***

### googleAppInfoTaskGetAdvanced()

> **googleAppInfoTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17575

***

### googleAppInfoTaskGetHtml()

> **googleAppInfoTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17618

***

### googleAppInfoTaskPost()

> **googleAppInfoTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17494

***

### googleAppInfoTasksReady()

> **googleAppInfoTasksReady**(): `Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17535

***

### googleAppListingsCategories()

> **googleAppListingsCategories**(): `Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17823

***

### googleAppListingsSearchLive()

> **googleAppListingsSearchLive**(`body`): `Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

##### body

[`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17861

***

### googleAppListTaskGetAdvanced()

> **googleAppListTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17410

***

### googleAppListTaskGetHtml()

> **googleAppListTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17453

***

### googleAppListTaskPost()

> **googleAppListTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17329

***

### googleAppListTasksReady()

> **googleAppListTasksReady**(): `Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17370

***

### googleAppReviewsTaskGetAdvanced()

> **googleAppReviewsTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17740

***

### googleAppReviewsTaskGetHtml()

> **googleAppReviewsTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17783

***

### googleAppReviewsTaskPost()

> **googleAppReviewsTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17659

***

### googleAppReviewsTasksReady()

> **googleAppReviewsTasksReady**(): `Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17700

***

### googleAppSearchesTaskGetAdvanced()

> **googleAppSearchesTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17245

***

### googleAppSearchesTaskGetHtml()

> **googleAppSearchesTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17288

***

### googleAppSearchesTaskPost()

> **googleAppSearchesTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`AppDataGoogleAppSearchesTaskPostRequestInfo`](AppDataGoogleAppSearchesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17127

***

### googleAppSearchesTasksReady()

> **googleAppSearchesTasksReady**(): `Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17168

***

### googleCategories()

> **googleCategories**(): `Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16970

***

### processAppDataAppleLanguages()

> `protected` **processAppDataAppleLanguages**(`response`): `Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

#### Defined in

main.ts:17992

***

### processAppDataAppleLocations()

> `protected` **processAppDataAppleLocations**(`response`): `Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

#### Defined in

main.ts:17955

***

### processAppDataErrors()

> `protected` **processAppDataErrors**(`response`): `Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

#### Defined in

main.ts:16949

***

### processAppDataGoogleLanguages()

> `protected` **processAppDataGoogleLanguages**(`response`): `Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

#### Defined in

main.ts:17105

***

### processAppDataGoogleLocations()

> `protected` **processAppDataGoogleLocations**(`response`): `Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

#### Defined in

main.ts:17023

***

### processAppDataGoogleLocationsCountry()

> `protected` **processAppDataGoogleLocationsCountry**(`response`): `Promise`\<[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleLocationsCountryResponseInfo`](AppDataGoogleLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:17068

***

### processAppDataIdList()

> `protected` **processAppDataIdList**(`response`): `Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

#### Defined in

main.ts:16907

***

### processAppDataTasksReady()

> `protected` **processAppDataTasksReady**(`response`): `Promise`\<[`AppDataTasksReadyResponseInfo`](AppDataTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataTasksReadyResponseInfo`](AppDataTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:17221

***

### processAppleAppInfoTaskGetAdvanced()

> `protected` **processAppleAppInfoTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:18236

***

### processAppleAppInfoTaskPost()

> `protected` **processAppleAppInfoTaskPost**(`response`): `Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18156

***

### processAppleAppInfoTasksReady()

> `protected` **processAppleAppInfoTasksReady**(`response`): `Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18193

***

### processAppleAppListingsCategories()

> `protected` **processAppleAppListingsCategories**(`response`): `Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

#### Defined in

main.ts:18517

***

### processAppleAppListingsSearchLive()

> `protected` **processAppleAppListingsSearchLive**(`response`): `Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

#### Defined in

main.ts:18559

***

### processAppleAppListTaskGetAdvanced()

> `protected` **processAppleAppListTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:18358

***

### processAppleAppListTaskPost()

> `protected` **processAppleAppListTaskPost**(`response`): `Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18278

***

### processAppleAppListTasksReady()

> `protected` **processAppleAppListTasksReady**(`response`): `Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18315

***

### processAppleAppReviewsTaskGetAdvanced()

> `protected` **processAppleAppReviewsTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:18480

***

### processAppleAppReviewsTaskPost()

> `protected` **processAppleAppReviewsTaskPost**(`response`): `Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18400

***

### processAppleAppReviewsTasksReady()

> `protected` **processAppleAppReviewsTasksReady**(`response`): `Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18437

***

### processAppleAppSearchesTaskGetAdvanced()

> `protected` **processAppleAppSearchesTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:18114

***

### processAppleAppSearchesTaskPost()

> `protected` **processAppleAppSearchesTaskPost**(`response`): `Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18034

***

### processAppleAppSearchesTasksReady()

> `protected` **processAppleAppSearchesTasksReady**(`response`): `Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18071

***

### processAppleCategories()

> `protected` **processAppleCategories**(`response`): `Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

#### Defined in

main.ts:17918

***

### processGoogleAppInfoTaskGetAdvanced()

> `protected` **processGoogleAppInfoTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:17594

***

### processGoogleAppInfoTaskGetHtml()

> `protected` **processGoogleAppInfoTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:17637

***

### processGoogleAppInfoTaskPost()

> `protected` **processGoogleAppInfoTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

#### Defined in

main.ts:17514

***

### processGoogleAppInfoTasksReady()

> `protected` **processGoogleAppInfoTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:17551

***

### processGoogleAppListingsCategories()

> `protected` **processGoogleAppListingsCategories**(`response`): `Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

#### Defined in

main.ts:17839

***

### processGoogleAppListingsSearchLive()

> `protected` **processGoogleAppListingsSearchLive**(`response`): `Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

#### Defined in

main.ts:17881

***

### processGoogleAppListTaskGetAdvanced()

> `protected` **processGoogleAppListTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:17429

***

### processGoogleAppListTaskGetHtml()

> `protected` **processGoogleAppListTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:17472

***

### processGoogleAppListTaskPost()

> `protected` **processGoogleAppListTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

#### Defined in

main.ts:17349

***

### processGoogleAppListTasksReady()

> `protected` **processGoogleAppListTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:17386

***

### processGoogleAppReviewsTaskGetAdvanced()

> `protected` **processGoogleAppReviewsTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:17759

***

### processGoogleAppReviewsTaskGetHtml()

> `protected` **processGoogleAppReviewsTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:17802

***

### processGoogleAppReviewsTaskPost()

> `protected` **processGoogleAppReviewsTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:17679

***

### processGoogleAppReviewsTasksReady()

> `protected` **processGoogleAppReviewsTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:17716

***

### processGoogleAppSearchesTaskGetAdvanced()

> `protected` **processGoogleAppSearchesTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:17264

***

### processGoogleAppSearchesTaskGetHtml()

> `protected` **processGoogleAppSearchesTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:17307

***

### processGoogleAppSearchesTaskPost()

> `protected` **processGoogleAppSearchesTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

#### Defined in

main.ts:17147

***

### processGoogleAppSearchesTasksReady()

> `protected` **processGoogleAppSearchesTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:17184

***

### processGoogleCategories()

> `protected` **processGoogleCategories**(`response`): `Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

#### Defined in

main.ts:16986
