[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataApi

# Class: BusinessDataApi

## Constructors

### new BusinessDataApi()

> **new BusinessDataApi**(`baseUrl`?, `http`?): [`BusinessDataApi`](BusinessDataApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http.fetch?**

#### Returns

[`BusinessDataApi`](BusinessDataApi.md)

#### Defined in

main.ts:18027

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Defined in

main.ts:18025

## Methods

### businessDataBusinessListingsLocations()

> **businessDataBusinessListingsLocations**(): `Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18119

***

### businessDataErrors()

> **businessDataErrors**(`body`): `Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18078

***

### businessDataGoogleLanguages()

> **businessDataGoogleLanguages**(): `Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18396

***

### businessDataGoogleLocations()

> **businessDataGoogleLocations**(): `Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18314

***

### businessDataGoogleLocationsCountry()

> **businessDataGoogleLocationsCountry**(`country`): `Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18356

***

### businessDataIdList()

> **businessDataIdList**(`body`): `Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18036

***

### businessDataTasksReady()

> **businessDataTasksReady**(): `Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18512

***

### businessDataTripadvisorLanguages()

> **businessDataTripadvisorLanguages**(): `Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19781

***

### businessDataTripadvisorLocations()

> **businessDataTripadvisorLocations**(): `Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19699

***

### businessDataTripadvisorLocationsCountry()

> **businessDataTripadvisorLocationsCountry**(`country`): `Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19741

***

### businessListingsAvailableFilters()

> **businessListingsAvailableFilters**(): `Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18193

***

### businessListingsCategories()

> **businessListingsCategories**(): `Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18156

***

### businessListingsCategoriesAggregationLive()

> **businessListingsCategoriesAggregationLive**(`body`): `Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18273

***

### businessListingsSearchLive()

> **businessListingsSearchLive**(`body`): `Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18231

***

### googleHotelInfoLiveAdvanced()

> **googleHotelInfoLiveAdvanced**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19086

***

### googleHotelInfoLiveHtml()

> **googleHotelInfoLiveHtml**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19128

***

### googleHotelInfoTaskGetAdvanced()

> **googleHotelInfoTaskGetAdvanced**(`id`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19002

***

### googleHotelInfoTaskGetHtml()

> **googleHotelInfoTaskGetHtml**(`id`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19045

***

### googleHotelInfoTaskPost()

> **googleHotelInfoTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelInfoTaskPostRequestInfo`](BusinessDataGoogleHotelInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18921

***

### googleHotelInfoTasksReady()

> **googleHotelInfoTasksReady**(): `Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18962

***

### googleHotelSearchesLive()

> **googleHotelSearchesLive**(`body`): `Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18879

***

### googleHotelSearchesTaskGet()

> **googleHotelSearchesTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18838

***

### googleHotelSearchesTaskPost()

> **googleHotelSearchesTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18757

***

### googleHotelSearchesTasksReady()

> **googleHotelSearchesTasksReady**(): `Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18798

***

### googleMyBusinessInfoLive()

> **googleMyBusinessInfoLive**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoLiveResponseInfo`](BusinessDataGoogleMyBusinessInfoLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoLiveResponseInfo`](BusinessDataGoogleMyBusinessInfoLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18593

***

### googleMyBusinessInfoTaskGet()

> **googleMyBusinessInfoTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18552

***

### googleMyBusinessInfoTaskPost()

> **googleMyBusinessInfoTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18434

***

### googleMyBusinessInfoTasksReady()

> **googleMyBusinessInfoTasksReady**(): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18475

***

### googleMyBusinessUpdatesTaskGet()

> **googleMyBusinessUpdatesTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18716

***

### googleMyBusinessUpdatesTaskPost()

> **googleMyBusinessUpdatesTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18635

***

### googleMyBusinessUpdatesTasksReady()

> **googleMyBusinessUpdatesTasksReady**(): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18676

***

### googleQuestionsAndAnswersLive()

> **googleQuestionsAndAnswersLive**(`body`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19414

***

### googleQuestionsAndAnswersTaskGet()

> **googleQuestionsAndAnswersTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19373

***

### googleQuestionsAndAnswersTaskPost()

> **googleQuestionsAndAnswersTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19292

***

### googleQuestionsAndAnswersTasksReady()

> **googleQuestionsAndAnswersTasksReady**(): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19333

***

### googleReviewsTaskGet()

> **googleReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19251

***

### googleReviewsTaskPost()

> **googleReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19170

***

### googleReviewsTasksReady()

> **googleReviewsTasksReady**(): `Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19211

***

### processBusinessDataBusinessListingsLocations()

> `protected` **processBusinessDataBusinessListingsLocations**(`response`): `Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

#### Defined in

main.ts:18135

***

### processBusinessDataErrors()

> `protected` **processBusinessDataErrors**(`response`): `Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

#### Defined in

main.ts:18098

***

### processBusinessDataGoogleLanguages()

> `protected` **processBusinessDataGoogleLanguages**(`response`): `Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

#### Defined in

main.ts:18412

***

### processBusinessDataGoogleLocations()

> `protected` **processBusinessDataGoogleLocations**(`response`): `Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

#### Defined in

main.ts:18330

***

### processBusinessDataGoogleLocationsCountry()

> `protected` **processBusinessDataGoogleLocationsCountry**(`response`): `Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:18375

***

### processBusinessDataIdList()

> `protected` **processBusinessDataIdList**(`response`): `Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

#### Defined in

main.ts:18056

***

### processBusinessDataTasksReady()

> `protected` **processBusinessDataTasksReady**(`response`): `Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18528

***

### processBusinessDataTripadvisorLanguages()

> `protected` **processBusinessDataTripadvisorLanguages**(`response`): `Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

#### Defined in

main.ts:19797

***

### processBusinessDataTripadvisorLocations()

> `protected` **processBusinessDataTripadvisorLocations**(`response`): `Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

#### Defined in

main.ts:19715

***

### processBusinessDataTripadvisorLocationsCountry()

> `protected` **processBusinessDataTripadvisorLocationsCountry**(`response`): `Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:19760

***

### processBusinessListingsAvailableFilters()

> `protected` **processBusinessListingsAvailableFilters**(`response`): `Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:18209

***

### processBusinessListingsCategories()

> `protected` **processBusinessListingsCategories**(`response`): `Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

#### Defined in

main.ts:18172

***

### processBusinessListingsCategoriesAggregationLive()

> `protected` **processBusinessListingsCategoriesAggregationLive**(`response`): `Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

#### Defined in

main.ts:18293

***

### processBusinessListingsSearchLive()

> `protected` **processBusinessListingsSearchLive**(`response`): `Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

#### Defined in

main.ts:18251

***

### processGoogleHotelInfoLiveAdvanced()

> `protected` **processGoogleHotelInfoLiveAdvanced**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:19106

***

### processGoogleHotelInfoLiveHtml()

> `protected` **processGoogleHotelInfoLiveHtml**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

#### Defined in

main.ts:19148

***

### processGoogleHotelInfoTaskGetAdvanced()

> `protected` **processGoogleHotelInfoTaskGetAdvanced**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:19021

***

### processGoogleHotelInfoTaskGetHtml()

> `protected` **processGoogleHotelInfoTaskGetHtml**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:19064

***

### processGoogleHotelInfoTaskPost()

> `protected` **processGoogleHotelInfoTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18941

***

### processGoogleHotelInfoTasksReady()

> `protected` **processGoogleHotelInfoTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18978

***

### processGoogleHotelSearchesLive()

> `protected` **processGoogleHotelSearchesLive**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

#### Defined in

main.ts:18899

***

### processGoogleHotelSearchesTaskGet()

> `protected` **processGoogleHotelSearchesTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

#### Defined in

main.ts:18857

***

### processGoogleHotelSearchesTaskPost()

> `protected` **processGoogleHotelSearchesTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18777

***

### processGoogleHotelSearchesTasksReady()

> `protected` **processGoogleHotelSearchesTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18814

***

### processGoogleMyBusinessInfoLive()

> `protected` **processGoogleMyBusinessInfoLive**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoLiveResponseInfo`](BusinessDataGoogleMyBusinessInfoLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoLiveResponseInfo`](BusinessDataGoogleMyBusinessInfoLiveResponseInfo.md)\>

#### Defined in

main.ts:18613

***

### processGoogleMyBusinessInfoTaskGet()

> `protected` **processGoogleMyBusinessInfoTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

#### Defined in

main.ts:18571

***

### processGoogleMyBusinessInfoTaskPost()

> `protected` **processGoogleMyBusinessInfoTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18454

***

### processGoogleMyBusinessInfoTasksReady()

> `protected` **processGoogleMyBusinessInfoTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18491

***

### processGoogleMyBusinessUpdatesTaskGet()

> `protected` **processGoogleMyBusinessUpdatesTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

#### Defined in

main.ts:18735

***

### processGoogleMyBusinessUpdatesTaskPost()

> `protected` **processGoogleMyBusinessUpdatesTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18655

***

### processGoogleMyBusinessUpdatesTasksReady()

> `protected` **processGoogleMyBusinessUpdatesTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18692

***

### processGoogleQuestionsAndAnswersLive()

> `protected` **processGoogleQuestionsAndAnswersLive**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

#### Defined in

main.ts:19434

***

### processGoogleQuestionsAndAnswersTaskGet()

> `protected` **processGoogleQuestionsAndAnswersTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

#### Defined in

main.ts:19392

***

### processGoogleQuestionsAndAnswersTaskPost()

> `protected` **processGoogleQuestionsAndAnswersTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

#### Defined in

main.ts:19312

***

### processGoogleQuestionsAndAnswersTasksReady()

> `protected` **processGoogleQuestionsAndAnswersTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:19349

***

### processGoogleReviewsTaskGet()

> `protected` **processGoogleReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:19270

***

### processGoogleReviewsTaskPost()

> `protected` **processGoogleReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:19190

***

### processGoogleReviewsTasksReady()

> `protected` **processGoogleReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:19227

***

### processSocialMediaFacebookLive()

> `protected` **processSocialMediaFacebookLive**(`response`): `Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

#### Defined in

main.ts:20125

***

### processSocialMediaPinterestLive()

> `protected` **processSocialMediaPinterestLive**(`response`): `Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

#### Defined in

main.ts:20083

***

### processSocialMediaRedditLive()

> `protected` **processSocialMediaRedditLive**(`response`): `Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

#### Defined in

main.ts:20167

***

### processTripadvisorReviewsTaskGet()

> `protected` **processTripadvisorReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:20041

***

### processTripadvisorReviewsTaskPost()

> `protected` **processTripadvisorReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:19961

***

### processTripadvisorReviewsTasksReady()

> `protected` **processTripadvisorReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:19998

***

### processTripadvisorSearchTaskGet()

> `protected` **processTripadvisorSearchTaskGet**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

#### Defined in

main.ts:19919

***

### processTripadvisorSearchTaskPost()

> `protected` **processTripadvisorSearchTaskPost**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

#### Defined in

main.ts:19839

***

### processTripadvisorSearchTasksReady()

> `protected` **processTripadvisorSearchTasksReady**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:19876

***

### processTrustpilotReviewsTaskGet()

> `protected` **processTrustpilotReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:19678

***

### processTrustpilotReviewsTaskPost()

> `protected` **processTrustpilotReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:19598

***

### processTrustpilotReviewsTasksReady()

> `protected` **processTrustpilotReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:19635

***

### processTrustpilotSearchTaskGet()

> `protected` **processTrustpilotSearchTaskGet**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

#### Defined in

main.ts:19556

***

### processTrustpilotSearchTaskPost()

> `protected` **processTrustpilotSearchTaskPost**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

#### Defined in

main.ts:19476

***

### processTrustpilotSearchTasksReady()

> `protected` **processTrustpilotSearchTasksReady**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:19513

***

### socialMediaFacebookLive()

> **socialMediaFacebookLive**(`body`): `Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:20105

***

### socialMediaPinterestLive()

> **socialMediaPinterestLive**(`body`): `Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:20063

***

### socialMediaRedditLive()

> **socialMediaRedditLive**(`body`): `Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:20147

***

### tripadvisorReviewsTaskGet()

> **tripadvisorReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:20022

***

### tripadvisorReviewsTaskPost()

> **tripadvisorReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19941

***

### tripadvisorReviewsTasksReady()

> **tripadvisorReviewsTasksReady**(): `Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19982

***

### tripadvisorSearchTaskGet()

> **tripadvisorSearchTaskGet**(`id`): `Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19900

***

### tripadvisorSearchTaskPost()

> **tripadvisorSearchTaskPost**(`body`): `Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19819

***

### tripadvisorSearchTasksReady()

> **tripadvisorSearchTasksReady**(): `Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19860

***

### trustpilotReviewsTaskGet()

> **trustpilotReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19659

***

### trustpilotReviewsTaskPost()

> **trustpilotReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19578

***

### trustpilotReviewsTasksReady()

> **trustpilotReviewsTasksReady**(): `Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19619

***

### trustpilotSearchTaskGet()

> **trustpilotSearchTaskGet**(`id`): `Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19537

***

### trustpilotSearchTaskPost()

> **trustpilotSearchTaskPost**(`body`): `Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTrustpilotSearchTaskPostRequestInfo`](BusinessDataTrustpilotSearchTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19456

***

### trustpilotSearchTasksReady()

> **trustpilotSearchTasksReady**(): `Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19497
