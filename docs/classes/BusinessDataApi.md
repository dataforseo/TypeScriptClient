**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataApi

# Class: BusinessDataApi

## Constructors

### new BusinessDataApi(baseUrl, http)

> **new BusinessDataApi**(`baseUrl`?, `http`?): [`BusinessDataApi`](BusinessDataApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`BusinessDataApi`](BusinessDataApi.md)

#### Source

main.ts:17570

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:17567

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

main.ts:17566

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:17568

## Methods

### businessDataBusinessListingsLocations()

> **businessDataBusinessListingsLocations**(): `Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:17662

***

### businessDataErrors()

> **businessDataErrors**(`body`): `Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

Successful operation

#### Source

main.ts:17621

***

### businessDataGoogleLanguages()

> **businessDataGoogleLanguages**(): `Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:17939

***

### businessDataGoogleLocations()

> **businessDataGoogleLocations**(): `Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:17857

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

#### Source

main.ts:17899

***

### businessDataIdList()

> **businessDataIdList**(`body`): `Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

Successful operation

#### Source

main.ts:17579

***

### businessDataTasksReady()

> **businessDataTasksReady**(): `Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:18055

***

### businessDataTripadvisorLanguages()

> **businessDataTripadvisorLanguages**(): `Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:19282

***

### businessDataTripadvisorLocations()

> **businessDataTripadvisorLocations**(): `Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:19200

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

#### Source

main.ts:19242

***

### businessListingsAvailableFilters()

> **businessListingsAvailableFilters**(): `Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

Successful operation

#### Source

main.ts:17736

***

### businessListingsCategories()

> **businessListingsCategories**(): `Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

Successful operation

#### Source

main.ts:17699

***

### businessListingsCategoriesAggregationLive()

> **businessListingsCategoriesAggregationLive**(`body`): `Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:17816

***

### businessListingsSearchLive()

> **businessListingsSearchLive**(`body`): `Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:17774

***

### googleHotelInfoLiveAdvanced()

> **googleHotelInfoLiveAdvanced**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:18587

***

### googleHotelInfoLiveHtml()

> **googleHotelInfoLiveHtml**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:18629

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

#### Source

main.ts:18503

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

#### Source

main.ts:18546

***

### googleHotelInfoTaskPost()

> **googleHotelInfoTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelInfoTaskPostRequestInfo`](BusinessDataGoogleHotelInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:18422

***

### googleHotelInfoTasksReady()

> **googleHotelInfoTasksReady**(): `Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:18463

***

### googleHotelSearchesLive()

> **googleHotelSearchesLive**(`body`): `Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:18380

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

#### Source

main.ts:18339

***

### googleHotelSearchesTaskPost()

> **googleHotelSearchesTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:18258

***

### googleHotelSearchesTasksReady()

> **googleHotelSearchesTasksReady**(): `Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:18299

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

#### Source

main.ts:18095

***

### googleMyBusinessInfoTaskPost()

> **googleMyBusinessInfoTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:17977

***

### googleMyBusinessInfoTasksReady()

> **googleMyBusinessInfoTasksReady**(): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:18018

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

#### Source

main.ts:18217

***

### googleMyBusinessUpdatesTaskPost()

> **googleMyBusinessUpdatesTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:18136

***

### googleMyBusinessUpdatesTasksReady()

> **googleMyBusinessUpdatesTasksReady**(): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:18177

***

### googleQuestionsAndAnswersLive()

> **googleQuestionsAndAnswersLive**(`body`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo`](BusinessDataGoogleQuestionsAndAnswersLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:18915

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

#### Source

main.ts:18874

***

### googleQuestionsAndAnswersTaskPost()

> **googleQuestionsAndAnswersTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:18793

***

### googleQuestionsAndAnswersTasksReady()

> **googleQuestionsAndAnswersTasksReady**(): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:18834

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

#### Source

main.ts:18752

***

### googleReviewsTaskPost()

> **googleReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:18671

***

### googleReviewsTasksReady()

> **googleReviewsTasksReady**(): `Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:18712

***

### processBusinessDataBusinessListingsLocations()

> **`protected`** **processBusinessDataBusinessListingsLocations**(`response`): `Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

#### Source

main.ts:17678

***

### processBusinessDataErrors()

> **`protected`** **processBusinessDataErrors**(`response`): `Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

#### Source

main.ts:17641

***

### processBusinessDataGoogleLanguages()

> **`protected`** **processBusinessDataGoogleLanguages**(`response`): `Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

#### Source

main.ts:17955

***

### processBusinessDataGoogleLocations()

> **`protected`** **processBusinessDataGoogleLocations**(`response`): `Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

#### Source

main.ts:17873

***

### processBusinessDataGoogleLocationsCountry()

> **`protected`** **processBusinessDataGoogleLocationsCountry**(`response`): `Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

#### Source

main.ts:17918

***

### processBusinessDataIdList()

> **`protected`** **processBusinessDataIdList**(`response`): `Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

#### Source

main.ts:17599

***

### processBusinessDataTasksReady()

> **`protected`** **processBusinessDataTasksReady**(`response`): `Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTasksReadyResponseInfo`](BusinessDataTasksReadyResponseInfo.md)\>

#### Source

main.ts:18071

***

### processBusinessDataTripadvisorLanguages()

> **`protected`** **processBusinessDataTripadvisorLanguages**(`response`): `Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

#### Source

main.ts:19298

***

### processBusinessDataTripadvisorLocations()

> **`protected`** **processBusinessDataTripadvisorLocations**(`response`): `Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

#### Source

main.ts:19216

***

### processBusinessDataTripadvisorLocationsCountry()

> **`protected`** **processBusinessDataTripadvisorLocationsCountry**(`response`): `Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

#### Source

main.ts:19261

***

### processBusinessListingsAvailableFilters()

> **`protected`** **processBusinessListingsAvailableFilters**(`response`): `Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

#### Source

main.ts:17752

***

### processBusinessListingsCategories()

> **`protected`** **processBusinessListingsCategories**(`response`): `Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

#### Source

main.ts:17715

***

### processBusinessListingsCategoriesAggregationLive()

> **`protected`** **processBusinessListingsCategoriesAggregationLive**(`response`): `Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

#### Source

main.ts:17836

***

### processBusinessListingsSearchLive()

> **`protected`** **processBusinessListingsSearchLive**(`response`): `Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

#### Source

main.ts:17794

***

### processGoogleHotelInfoLiveAdvanced()

> **`protected`** **processGoogleHotelInfoLiveAdvanced**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:18607

***

### processGoogleHotelInfoLiveHtml()

> **`protected`** **processGoogleHotelInfoLiveHtml**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

#### Source

main.ts:18649

***

### processGoogleHotelInfoTaskGetAdvanced()

> **`protected`** **processGoogleHotelInfoTaskGetAdvanced**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:18522

***

### processGoogleHotelInfoTaskGetHtml()

> **`protected`** **processGoogleHotelInfoTaskGetHtml**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:18565

***

### processGoogleHotelInfoTaskPost()

> **`protected`** **processGoogleHotelInfoTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

#### Source

main.ts:18442

***

### processGoogleHotelInfoTasksReady()

> **`protected`** **processGoogleHotelInfoTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

#### Source

main.ts:18479

***

### processGoogleHotelSearchesLive()

> **`protected`** **processGoogleHotelSearchesLive**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

#### Source

main.ts:18400

***

### processGoogleHotelSearchesTaskGet()

> **`protected`** **processGoogleHotelSearchesTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

#### Source

main.ts:18358

***

### processGoogleHotelSearchesTaskPost()

> **`protected`** **processGoogleHotelSearchesTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

#### Source

main.ts:18278

***

### processGoogleHotelSearchesTasksReady()

> **`protected`** **processGoogleHotelSearchesTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

#### Source

main.ts:18315

***

### processGoogleMyBusinessInfoTaskGet()

> **`protected`** **processGoogleMyBusinessInfoTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

#### Source

main.ts:18114

***

### processGoogleMyBusinessInfoTaskPost()

> **`protected`** **processGoogleMyBusinessInfoTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

#### Source

main.ts:17997

***

### processGoogleMyBusinessInfoTasksReady()

> **`protected`** **processGoogleMyBusinessInfoTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

#### Source

main.ts:18034

***

### processGoogleMyBusinessUpdatesTaskGet()

> **`protected`** **processGoogleMyBusinessUpdatesTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

#### Source

main.ts:18236

***

### processGoogleMyBusinessUpdatesTaskPost()

> **`protected`** **processGoogleMyBusinessUpdatesTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

#### Source

main.ts:18156

***

### processGoogleMyBusinessUpdatesTasksReady()

> **`protected`** **processGoogleMyBusinessUpdatesTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

#### Source

main.ts:18193

***

### processGoogleQuestionsAndAnswersLive()

> **`protected`** **processGoogleQuestionsAndAnswersLive**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo`](BusinessDataGoogleQuestionsAndAnswersLiveResponseInfo.md)\>

#### Source

main.ts:18935

***

### processGoogleQuestionsAndAnswersTaskGet()

> **`protected`** **processGoogleQuestionsAndAnswersTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskGetResponseInfo.md)\>

#### Source

main.ts:18893

***

### processGoogleQuestionsAndAnswersTaskPost()

> **`protected`** **processGoogleQuestionsAndAnswersTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTaskPostResponseInfo.md)\>

#### Source

main.ts:18813

***

### processGoogleQuestionsAndAnswersTasksReady()

> **`protected`** **processGoogleQuestionsAndAnswersTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)\>

#### Source

main.ts:18850

***

### processGoogleReviewsTaskGet()

> **`protected`** **processGoogleReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

#### Source

main.ts:18771

***

### processGoogleReviewsTaskPost()

> **`protected`** **processGoogleReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

#### Source

main.ts:18691

***

### processGoogleReviewsTasksReady()

> **`protected`** **processGoogleReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

#### Source

main.ts:18728

***

### processSocialMediaFacebookLive()

> **`protected`** **processSocialMediaFacebookLive**(`response`): `Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

#### Source

main.ts:19626

***

### processSocialMediaPinterestLive()

> **`protected`** **processSocialMediaPinterestLive**(`response`): `Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

#### Source

main.ts:19584

***

### processSocialMediaRedditLive()

> **`protected`** **processSocialMediaRedditLive**(`response`): `Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

#### Source

main.ts:19668

***

### processTripadvisorReviewsTaskGet()

> **`protected`** **processTripadvisorReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

#### Source

main.ts:19542

***

### processTripadvisorReviewsTaskPost()

> **`protected`** **processTripadvisorReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

#### Source

main.ts:19462

***

### processTripadvisorReviewsTasksReady()

> **`protected`** **processTripadvisorReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

#### Source

main.ts:19499

***

### processTripadvisorSearchTaskGet()

> **`protected`** **processTripadvisorSearchTaskGet**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

#### Source

main.ts:19420

***

### processTripadvisorSearchTaskPost()

> **`protected`** **processTripadvisorSearchTaskPost**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

#### Source

main.ts:19340

***

### processTripadvisorSearchTasksReady()

> **`protected`** **processTripadvisorSearchTasksReady**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

#### Source

main.ts:19377

***

### processTrustpilotReviewsTaskGet()

> **`protected`** **processTrustpilotReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

#### Source

main.ts:19179

***

### processTrustpilotReviewsTaskPost()

> **`protected`** **processTrustpilotReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

#### Source

main.ts:19099

***

### processTrustpilotReviewsTasksReady()

> **`protected`** **processTrustpilotReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

#### Source

main.ts:19136

***

### processTrustpilotSearchTaskGet()

> **`protected`** **processTrustpilotSearchTaskGet**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

#### Source

main.ts:19057

***

### processTrustpilotSearchTaskPost()

> **`protected`** **processTrustpilotSearchTaskPost**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

#### Source

main.ts:18977

***

### processTrustpilotSearchTasksReady()

> **`protected`** **processTrustpilotSearchTasksReady**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

#### Source

main.ts:19014

***

### socialMediaFacebookLive()

> **socialMediaFacebookLive**(`body`): `Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:19606

***

### socialMediaPinterestLive()

> **socialMediaPinterestLive**(`body`): `Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:19564

***

### socialMediaRedditLive()

> **socialMediaRedditLive**(`body`): `Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:19648

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

#### Source

main.ts:19523

***

### tripadvisorReviewsTaskPost()

> **tripadvisorReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:19442

***

### tripadvisorReviewsTasksReady()

> **tripadvisorReviewsTasksReady**(): `Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:19483

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

#### Source

main.ts:19401

***

### tripadvisorSearchTaskPost()

> **tripadvisorSearchTaskPost**(`body`): `Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:19320

***

### tripadvisorSearchTasksReady()

> **tripadvisorSearchTasksReady**(): `Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:19361

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

#### Source

main.ts:19160

***

### trustpilotReviewsTaskPost()

> **trustpilotReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:19079

***

### trustpilotReviewsTasksReady()

> **trustpilotReviewsTasksReady**(): `Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:19120

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

#### Source

main.ts:19038

***

### trustpilotSearchTaskPost()

> **trustpilotSearchTaskPost**(`body`): `Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`BusinessDataTrustpilotSearchTaskPostRequestInfo`](BusinessDataTrustpilotSearchTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:18957

***

### trustpilotSearchTasksReady()

> **trustpilotSearchTasksReady**(): `Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:18998
