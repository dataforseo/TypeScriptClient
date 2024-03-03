[Documentation](../README.md) / [Exports](../modules.md) / BusinessDataApi

# Class: BusinessDataApi

## Table of contents

### Constructors

- [constructor](BusinessDataApi.md#constructor)

### Properties

- [baseUrl](BusinessDataApi.md#baseurl)
- [http](BusinessDataApi.md#http)
- [jsonParseReviver](BusinessDataApi.md#jsonparsereviver)

### Methods

- [businessDataBusinessListingsLocations](BusinessDataApi.md#businessdatabusinesslistingslocations)
- [businessDataErrors](BusinessDataApi.md#businessdataerrors)
- [businessDataGoogleLanguages](BusinessDataApi.md#businessdatagooglelanguages)
- [businessDataGoogleLocations](BusinessDataApi.md#businessdatagooglelocations)
- [businessDataGoogleLocationsCountry](BusinessDataApi.md#businessdatagooglelocationscountry)
- [businessDataIdList](BusinessDataApi.md#businessdataidlist)
- [businessDataTripadvisorLanguages](BusinessDataApi.md#businessdatatripadvisorlanguages)
- [businessDataTripadvisorLocations](BusinessDataApi.md#businessdatatripadvisorlocations)
- [businessDataTripadvisorLocationsCountry](BusinessDataApi.md#businessdatatripadvisorlocationscountry)
- [businessDataYelpLanguages](BusinessDataApi.md#businessdatayelplanguages)
- [businessDataYelpLocations](BusinessDataApi.md#businessdatayelplocations)
- [businessDataYelpLocationsCountry](BusinessDataApi.md#businessdatayelplocationscountry)
- [businessListingsAvailableFilters](BusinessDataApi.md#businesslistingsavailablefilters)
- [businessListingsCategories](BusinessDataApi.md#businesslistingscategories)
- [businessListingsCategoriesAggregationLive](BusinessDataApi.md#businesslistingscategoriesaggregationlive)
- [businessListingsSearchLive](BusinessDataApi.md#businesslistingssearchlive)
- [googleHotelInfoLiveAdvanced](BusinessDataApi.md#googlehotelinfoliveadvanced)
- [googleHotelInfoLiveHtml](BusinessDataApi.md#googlehotelinfolivehtml)
- [googleHotelInfoTaskGetAdvanced](BusinessDataApi.md#googlehotelinfotaskgetadvanced)
- [googleHotelInfoTaskGetHtml](BusinessDataApi.md#googlehotelinfotaskgethtml)
- [googleHotelInfoTaskPost](BusinessDataApi.md#googlehotelinfotaskpost)
- [googleHotelInfoTasksReady](BusinessDataApi.md#googlehotelinfotasksready)
- [googleHotelSearchesLive](BusinessDataApi.md#googlehotelsearcheslive)
- [googleHotelSearchesTaskGet](BusinessDataApi.md#googlehotelsearchestaskget)
- [googleHotelSearchesTaskPost](BusinessDataApi.md#googlehotelsearchestaskpost)
- [googleHotelSearchesTasksReady](BusinessDataApi.md#googlehotelsearchestasksready)
- [googleMyBusinessInfoTaskGet](BusinessDataApi.md#googlemybusinessinfotaskget)
- [googleMyBusinessInfoTaskPost](BusinessDataApi.md#googlemybusinessinfotaskpost)
- [googleMyBusinessInfoTasksReady](BusinessDataApi.md#googlemybusinessinfotasksready)
- [googleMyBusinessUpdatesTaskGet](BusinessDataApi.md#googlemybusinessupdatestaskget)
- [googleMyBusinessUpdatesTaskPost](BusinessDataApi.md#googlemybusinessupdatestaskpost)
- [googleMyBusinessUpdatesTasksReady](BusinessDataApi.md#googlemybusinessupdatestasksready)
- [googleReviewsTaskGet](BusinessDataApi.md#googlereviewstaskget)
- [googleReviewsTaskPost](BusinessDataApi.md#googlereviewstaskpost)
- [googleReviewsTasksReady](BusinessDataApi.md#googlereviewstasksready)
- [processBusinessDataBusinessListingsLocations](BusinessDataApi.md#processbusinessdatabusinesslistingslocations)
- [processBusinessDataErrors](BusinessDataApi.md#processbusinessdataerrors)
- [processBusinessDataGoogleLanguages](BusinessDataApi.md#processbusinessdatagooglelanguages)
- [processBusinessDataGoogleLocations](BusinessDataApi.md#processbusinessdatagooglelocations)
- [processBusinessDataGoogleLocationsCountry](BusinessDataApi.md#processbusinessdatagooglelocationscountry)
- [processBusinessDataIdList](BusinessDataApi.md#processbusinessdataidlist)
- [processBusinessDataTripadvisorLanguages](BusinessDataApi.md#processbusinessdatatripadvisorlanguages)
- [processBusinessDataTripadvisorLocations](BusinessDataApi.md#processbusinessdatatripadvisorlocations)
- [processBusinessDataTripadvisorLocationsCountry](BusinessDataApi.md#processbusinessdatatripadvisorlocationscountry)
- [processBusinessDataYelpLanguages](BusinessDataApi.md#processbusinessdatayelplanguages)
- [processBusinessDataYelpLocations](BusinessDataApi.md#processbusinessdatayelplocations)
- [processBusinessDataYelpLocationsCountry](BusinessDataApi.md#processbusinessdatayelplocationscountry)
- [processBusinessListingsAvailableFilters](BusinessDataApi.md#processbusinesslistingsavailablefilters)
- [processBusinessListingsCategories](BusinessDataApi.md#processbusinesslistingscategories)
- [processBusinessListingsCategoriesAggregationLive](BusinessDataApi.md#processbusinesslistingscategoriesaggregationlive)
- [processBusinessListingsSearchLive](BusinessDataApi.md#processbusinesslistingssearchlive)
- [processGoogleHotelInfoLiveAdvanced](BusinessDataApi.md#processgooglehotelinfoliveadvanced)
- [processGoogleHotelInfoLiveHtml](BusinessDataApi.md#processgooglehotelinfolivehtml)
- [processGoogleHotelInfoTaskGetAdvanced](BusinessDataApi.md#processgooglehotelinfotaskgetadvanced)
- [processGoogleHotelInfoTaskGetHtml](BusinessDataApi.md#processgooglehotelinfotaskgethtml)
- [processGoogleHotelInfoTaskPost](BusinessDataApi.md#processgooglehotelinfotaskpost)
- [processGoogleHotelInfoTasksReady](BusinessDataApi.md#processgooglehotelinfotasksready)
- [processGoogleHotelSearchesLive](BusinessDataApi.md#processgooglehotelsearcheslive)
- [processGoogleHotelSearchesTaskGet](BusinessDataApi.md#processgooglehotelsearchestaskget)
- [processGoogleHotelSearchesTaskPost](BusinessDataApi.md#processgooglehotelsearchestaskpost)
- [processGoogleHotelSearchesTasksReady](BusinessDataApi.md#processgooglehotelsearchestasksready)
- [processGoogleMyBusinessInfoTaskGet](BusinessDataApi.md#processgooglemybusinessinfotaskget)
- [processGoogleMyBusinessInfoTaskPost](BusinessDataApi.md#processgooglemybusinessinfotaskpost)
- [processGoogleMyBusinessInfoTasksReady](BusinessDataApi.md#processgooglemybusinessinfotasksready)
- [processGoogleMyBusinessUpdatesTaskGet](BusinessDataApi.md#processgooglemybusinessupdatestaskget)
- [processGoogleMyBusinessUpdatesTaskPost](BusinessDataApi.md#processgooglemybusinessupdatestaskpost)
- [processGoogleMyBusinessUpdatesTasksReady](BusinessDataApi.md#processgooglemybusinessupdatestasksready)
- [processGoogleReviewsTaskGet](BusinessDataApi.md#processgooglereviewstaskget)
- [processGoogleReviewsTaskPost](BusinessDataApi.md#processgooglereviewstaskpost)
- [processGoogleReviewsTasksReady](BusinessDataApi.md#processgooglereviewstasksready)
- [processSocialMediaFacebookLive](BusinessDataApi.md#processsocialmediafacebooklive)
- [processSocialMediaPinterestLive](BusinessDataApi.md#processsocialmediapinterestlive)
- [processSocialMediaRedditLive](BusinessDataApi.md#processsocialmediaredditlive)
- [processTripadvisorReviewsTaskGet](BusinessDataApi.md#processtripadvisorreviewstaskget)
- [processTripadvisorReviewsTaskPost](BusinessDataApi.md#processtripadvisorreviewstaskpost)
- [processTripadvisorReviewsTasksReady](BusinessDataApi.md#processtripadvisorreviewstasksready)
- [processTripadvisorSearchTaskGet](BusinessDataApi.md#processtripadvisorsearchtaskget)
- [processTripadvisorSearchTaskPost](BusinessDataApi.md#processtripadvisorsearchtaskpost)
- [processTripadvisorSearchTasksReady](BusinessDataApi.md#processtripadvisorsearchtasksready)
- [processTrustpilotReviewsTaskGet](BusinessDataApi.md#processtrustpilotreviewstaskget)
- [processTrustpilotReviewsTaskPost](BusinessDataApi.md#processtrustpilotreviewstaskpost)
- [processTrustpilotReviewsTasksReady](BusinessDataApi.md#processtrustpilotreviewstasksready)
- [processTrustpilotSearchTaskGet](BusinessDataApi.md#processtrustpilotsearchtaskget)
- [processTrustpilotSearchTaskPost](BusinessDataApi.md#processtrustpilotsearchtaskpost)
- [processTrustpilotSearchTasksReady](BusinessDataApi.md#processtrustpilotsearchtasksready)
- [processYelpReviewsTaskGet](BusinessDataApi.md#processyelpreviewstaskget)
- [processYelpReviewsTaskPost](BusinessDataApi.md#processyelpreviewstaskpost)
- [processYelpReviewsTasksReady](BusinessDataApi.md#processyelpreviewstasksready)
- [processYelpSearchTaskGet](BusinessDataApi.md#processyelpsearchtaskget)
- [processYelpSearchTaskPost](BusinessDataApi.md#processyelpsearchtaskpost)
- [processYelpSearchTasksReady](BusinessDataApi.md#processyelpsearchtasksready)
- [socialMediaFacebookLive](BusinessDataApi.md#socialmediafacebooklive)
- [socialMediaPinterestLive](BusinessDataApi.md#socialmediapinterestlive)
- [socialMediaRedditLive](BusinessDataApi.md#socialmediaredditlive)
- [tripadvisorReviewsTaskGet](BusinessDataApi.md#tripadvisorreviewstaskget)
- [tripadvisorReviewsTaskPost](BusinessDataApi.md#tripadvisorreviewstaskpost)
- [tripadvisorReviewsTasksReady](BusinessDataApi.md#tripadvisorreviewstasksready)
- [tripadvisorSearchTaskGet](BusinessDataApi.md#tripadvisorsearchtaskget)
- [tripadvisorSearchTaskPost](BusinessDataApi.md#tripadvisorsearchtaskpost)
- [tripadvisorSearchTasksReady](BusinessDataApi.md#tripadvisorsearchtasksready)
- [trustpilotReviewsTaskGet](BusinessDataApi.md#trustpilotreviewstaskget)
- [trustpilotReviewsTaskPost](BusinessDataApi.md#trustpilotreviewstaskpost)
- [trustpilotReviewsTasksReady](BusinessDataApi.md#trustpilotreviewstasksready)
- [trustpilotSearchTaskGet](BusinessDataApi.md#trustpilotsearchtaskget)
- [trustpilotSearchTaskPost](BusinessDataApi.md#trustpilotsearchtaskpost)
- [trustpilotSearchTasksReady](BusinessDataApi.md#trustpilotsearchtasksready)
- [yelpReviewsTaskGet](BusinessDataApi.md#yelpreviewstaskget)
- [yelpReviewsTaskPost](BusinessDataApi.md#yelpreviewstaskpost)
- [yelpReviewsTasksReady](BusinessDataApi.md#yelpreviewstasksready)
- [yelpSearchTaskGet](BusinessDataApi.md#yelpsearchtaskget)
- [yelpSearchTaskPost](BusinessDataApi.md#yelpsearchtaskpost)
- [yelpSearchTasksReady](BusinessDataApi.md#yelpsearchtasksready)

## Constructors

### constructor

• **new BusinessDataApi**(`baseUrl?`, `http?`): [`BusinessDataApi`](BusinessDataApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl?` | `string` |
| `http?` | `Object` |
| `http.fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Returns

[`BusinessDataApi`](BusinessDataApi.md)

#### Defined in

main.ts:16890

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

main.ts:16887

___

### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

main.ts:16886

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

main.ts:16888

## Methods

### businessDataBusinessListingsLocations

▸ **businessDataBusinessListingsLocations**(): `Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16982

___

### businessDataErrors

▸ **businessDataErrors**(`body`): `Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataErrorsRequestInfo`](BusinessDataErrorsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16941

___

### businessDataGoogleLanguages

▸ **businessDataGoogleLanguages**(): `Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17259

___

### businessDataGoogleLocations

▸ **businessDataGoogleLocations**(): `Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17177

___

### businessDataGoogleLocationsCountry

▸ **businessDataGoogleLocationsCountry**(`country`): `Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17219

___

### businessDataIdList

▸ **businessDataIdList**(`body`): `Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataIdListRequestInfo`](BusinessDataIdListRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:16899

___

### businessDataTripadvisorLanguages

▸ **businessDataTripadvisorLanguages**(): `Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18401

___

### businessDataTripadvisorLocations

▸ **businessDataTripadvisorLocations**(): `Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18319

___

### businessDataTripadvisorLocationsCountry

▸ **businessDataTripadvisorLocationsCountry**(`country`): `Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18361

___

### businessDataYelpLanguages

▸ **businessDataYelpLanguages**(): `Promise`\<[`BusinessDataYelpLanguagesResponseInfo`](BusinessDataYelpLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataYelpLanguagesResponseInfo`](BusinessDataYelpLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18764

___

### businessDataYelpLocations

▸ **businessDataYelpLocations**(): `Promise`\<[`BusinessDataYelpLocationsResponseInfo`](BusinessDataYelpLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataYelpLocationsResponseInfo`](BusinessDataYelpLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18682

___

### businessDataYelpLocationsCountry

▸ **businessDataYelpLocationsCountry**(`country`): `Promise`\<[`BusinessDataYelpLocationsCountryResponseInfo`](BusinessDataYelpLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`BusinessDataYelpLocationsCountryResponseInfo`](BusinessDataYelpLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18724

___

### businessListingsAvailableFilters

▸ **businessListingsAvailableFilters**(): `Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17056

___

### businessListingsCategories

▸ **businessListingsCategories**(): `Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17019

___

### businessListingsCategoriesAggregationLive

▸ **businessListingsCategoriesAggregationLive**(`body`): `Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17136

___

### businessListingsSearchLive

▸ **businessListingsSearchLive**(`body`): `Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataBusinessListingsSearchLiveRequestInfo`](BusinessDataBusinessListingsSearchLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17094

___

### googleHotelInfoLiveAdvanced

▸ **googleHotelInfoLiveAdvanced**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo`](BusinessDataGoogleHotelInfoLiveAdvancedRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17870

___

### googleHotelInfoLiveHtml

▸ **googleHotelInfoLiveHtml**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataGoogleHotelInfoLiveHtmlRequestInfo`](BusinessDataGoogleHotelInfoLiveHtmlRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17912

___

### googleHotelInfoTaskGetAdvanced

▸ **googleHotelInfoTaskGetAdvanced**(`id`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17786

___

### googleHotelInfoTaskGetHtml

▸ **googleHotelInfoTaskGetHtml**(`id`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17829

___

### googleHotelInfoTaskPost

▸ **googleHotelInfoTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataGoogleHotelInfoTaskPostRequestInfo`](BusinessDataGoogleHotelInfoTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17705

___

### googleHotelInfoTasksReady

▸ **googleHotelInfoTasksReady**(): `Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17746

___

### googleHotelSearchesLive

▸ **googleHotelSearchesLive**(`body`): `Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataGoogleHotelSearchesLiveRequestInfo`](BusinessDataGoogleHotelSearchesLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17663

___

### googleHotelSearchesTaskGet

▸ **googleHotelSearchesTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17622

___

### googleHotelSearchesTaskPost

▸ **googleHotelSearchesTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataGoogleHotelSearchesTaskPostRequestInfo`](BusinessDataGoogleHotelSearchesTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17541

___

### googleHotelSearchesTasksReady

▸ **googleHotelSearchesTasksReady**(): `Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17582

___

### googleMyBusinessInfoTaskGet

▸ **googleMyBusinessInfoTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17378

___

### googleMyBusinessInfoTaskPost

▸ **googleMyBusinessInfoTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataTaskRequestInfo`](BusinessDataTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17297

___

### googleMyBusinessInfoTasksReady

▸ **googleMyBusinessInfoTasksReady**(): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17338

___

### googleMyBusinessUpdatesTaskGet

▸ **googleMyBusinessUpdatesTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17500

___

### googleMyBusinessUpdatesTaskPost

▸ **googleMyBusinessUpdatesTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17419

___

### googleMyBusinessUpdatesTasksReady

▸ **googleMyBusinessUpdatesTasksReady**(): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17460

___

### googleReviewsTaskGet

▸ **googleReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18035

___

### googleReviewsTaskPost

▸ **googleReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataGoogleReviewsTaskPostRequestInfo`](BusinessDataGoogleReviewsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17954

___

### googleReviewsTasksReady

▸ **googleReviewsTasksReady**(): `Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:17995

___

### processBusinessDataBusinessListingsLocations

▸ **processBusinessDataBusinessListingsLocations**(`response`): `Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataBusinessListingsLocationsResponseInfo`](BusinessDataBusinessListingsLocationsResponseInfo.md)\>

#### Defined in

main.ts:16998

___

### processBusinessDataErrors

▸ **processBusinessDataErrors**(`response`): `Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataErrorsResponseInfo`](BusinessDataErrorsResponseInfo.md)\>

#### Defined in

main.ts:16961

___

### processBusinessDataGoogleLanguages

▸ **processBusinessDataGoogleLanguages**(`response`): `Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleLanguagesResponseInfo`](BusinessDataGoogleLanguagesResponseInfo.md)\>

#### Defined in

main.ts:17275

___

### processBusinessDataGoogleLocations

▸ **processBusinessDataGoogleLocations**(`response`): `Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsResponseInfo`](BusinessDataGoogleLocationsResponseInfo.md)\>

#### Defined in

main.ts:17193

___

### processBusinessDataGoogleLocationsCountry

▸ **processBusinessDataGoogleLocationsCountry**(`response`): `Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleLocationsCountryResponseInfo`](BusinessDataGoogleLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:17238

___

### processBusinessDataIdList

▸ **processBusinessDataIdList**(`response`): `Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataIdListResponseInfo`](BusinessDataIdListResponseInfo.md)\>

#### Defined in

main.ts:16919

___

### processBusinessDataTripadvisorLanguages

▸ **processBusinessDataTripadvisorLanguages**(`response`): `Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTripadvisorLanguagesResponseInfo`](BusinessDataTripadvisorLanguagesResponseInfo.md)\>

#### Defined in

main.ts:18417

___

### processBusinessDataTripadvisorLocations

▸ **processBusinessDataTripadvisorLocations**(`response`): `Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsResponseInfo`](BusinessDataTripadvisorLocationsResponseInfo.md)\>

#### Defined in

main.ts:18335

___

### processBusinessDataTripadvisorLocationsCountry

▸ **processBusinessDataTripadvisorLocationsCountry**(`response`): `Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTripadvisorLocationsCountryResponseInfo`](BusinessDataTripadvisorLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:18380

___

### processBusinessDataYelpLanguages

▸ **processBusinessDataYelpLanguages**(`response`): `Promise`\<[`BusinessDataYelpLanguagesResponseInfo`](BusinessDataYelpLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataYelpLanguagesResponseInfo`](BusinessDataYelpLanguagesResponseInfo.md)\>

#### Defined in

main.ts:18780

___

### processBusinessDataYelpLocations

▸ **processBusinessDataYelpLocations**(`response`): `Promise`\<[`BusinessDataYelpLocationsResponseInfo`](BusinessDataYelpLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataYelpLocationsResponseInfo`](BusinessDataYelpLocationsResponseInfo.md)\>

#### Defined in

main.ts:18698

___

### processBusinessDataYelpLocationsCountry

▸ **processBusinessDataYelpLocationsCountry**(`response`): `Promise`\<[`BusinessDataYelpLocationsCountryResponseInfo`](BusinessDataYelpLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataYelpLocationsCountryResponseInfo`](BusinessDataYelpLocationsCountryResponseInfo.md)\>

#### Defined in

main.ts:18743

___

### processBusinessListingsAvailableFilters

▸ **processBusinessListingsAvailableFilters**(`response`): `Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataBusinessListingsAvailableFiltersResponseInfo`](BusinessDataBusinessListingsAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:17072

___

### processBusinessListingsCategories

▸ **processBusinessListingsCategories**(`response`): `Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesResponseInfo`](BusinessDataBusinessListingsCategoriesResponseInfo.md)\>

#### Defined in

main.ts:17035

___

### processBusinessListingsCategoriesAggregationLive

▸ **processBusinessListingsCategoriesAggregationLive**(`response`): `Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo`](BusinessDataBusinessListingsCategoriesAggregationLiveResponseInfo.md)\>

#### Defined in

main.ts:17156

___

### processBusinessListingsSearchLive

▸ **processBusinessListingsSearchLive**(`response`): `Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataBusinessListingsSearchLiveResponseInfo`](BusinessDataBusinessListingsSearchLiveResponseInfo.md)\>

#### Defined in

main.ts:17114

___

### processGoogleHotelInfoLiveAdvanced

▸ **processGoogleHotelInfoLiveAdvanced**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo`](BusinessDataGoogleHotelInfoLiveAdvancedResponseInfo.md)\>

#### Defined in

main.ts:17890

___

### processGoogleHotelInfoLiveHtml

▸ **processGoogleHotelInfoLiveHtml**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoLiveHtmlResponseInfo`](BusinessDataGoogleHotelInfoLiveHtmlResponseInfo.md)\>

#### Defined in

main.ts:17932

___

### processGoogleHotelInfoTaskGetAdvanced

▸ **processGoogleHotelInfoTaskGetAdvanced**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo`](BusinessDataGoogleHotelInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

main.ts:17805

___

### processGoogleHotelInfoTaskGetHtml

▸ **processGoogleHotelInfoTaskGetHtml**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo`](BusinessDataGoogleHotelInfoTaskGetHtmlResponseInfo.md)\>

#### Defined in

main.ts:17848

___

### processGoogleHotelInfoTaskPost

▸ **processGoogleHotelInfoTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTaskPostResponseInfo`](BusinessDataGoogleHotelInfoTaskPostResponseInfo.md)\>

#### Defined in

main.ts:17725

___

### processGoogleHotelInfoTasksReady

▸ **processGoogleHotelInfoTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelInfoTasksReadyResponseInfo`](BusinessDataGoogleHotelInfoTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:17762

___

### processGoogleHotelSearchesLive

▸ **processGoogleHotelSearchesLive**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesLiveResponseInfo`](BusinessDataGoogleHotelSearchesLiveResponseInfo.md)\>

#### Defined in

main.ts:17683

___

### processGoogleHotelSearchesTaskGet

▸ **processGoogleHotelSearchesTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskGetResponseInfo`](BusinessDataGoogleHotelSearchesTaskGetResponseInfo.md)\>

#### Defined in

main.ts:17641

___

### processGoogleHotelSearchesTaskPost

▸ **processGoogleHotelSearchesTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTaskPostResponseInfo`](BusinessDataGoogleHotelSearchesTaskPostResponseInfo.md)\>

#### Defined in

main.ts:17561

___

### processGoogleHotelSearchesTasksReady

▸ **processGoogleHotelSearchesTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleHotelSearchesTasksReadyResponseInfo`](BusinessDataGoogleHotelSearchesTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:17598

___

### processGoogleMyBusinessInfoTaskGet

▸ **processGoogleMyBusinessInfoTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskGetResponseInfo.md)\>

#### Defined in

main.ts:17397

___

### processGoogleMyBusinessInfoTaskPost

▸ **processGoogleMyBusinessInfoTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo`](BusinessDataGoogleMyBusinessInfoTaskPostResponseInfo.md)\>

#### Defined in

main.ts:17317

___

### processGoogleMyBusinessInfoTasksReady

▸ **processGoogleMyBusinessInfoTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:17354

___

### processGoogleMyBusinessUpdatesTaskGet

▸ **processGoogleMyBusinessUpdatesTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskGetResponseInfo.md)\>

#### Defined in

main.ts:17519

___

### processGoogleMyBusinessUpdatesTaskPost

▸ **processGoogleMyBusinessUpdatesTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTaskPostResponseInfo.md)\>

#### Defined in

main.ts:17439

___

### processGoogleMyBusinessUpdatesTasksReady

▸ **processGoogleMyBusinessUpdatesTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:17476

___

### processGoogleReviewsTaskGet

▸ **processGoogleReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskGetResponseInfo`](BusinessDataGoogleReviewsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:18054

___

### processGoogleReviewsTaskPost

▸ **processGoogleReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTaskPostResponseInfo`](BusinessDataGoogleReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:17974

___

### processGoogleReviewsTasksReady

▸ **processGoogleReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataGoogleReviewsTasksReadyResponseInfo`](BusinessDataGoogleReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18011

___

### processSocialMediaFacebookLive

▸ **processSocialMediaFacebookLive**(`response`): `Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

#### Defined in

main.ts:19108

___

### processSocialMediaPinterestLive

▸ **processSocialMediaPinterestLive**(`response`): `Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

#### Defined in

main.ts:19066

___

### processSocialMediaRedditLive

▸ **processSocialMediaRedditLive**(`response`): `Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

#### Defined in

main.ts:19150

___

### processTripadvisorReviewsTaskGet

▸ **processTripadvisorReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:18661

___

### processTripadvisorReviewsTaskPost

▸ **processTripadvisorReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18581

___

### processTripadvisorReviewsTasksReady

▸ **processTripadvisorReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18618

___

### processTripadvisorSearchTaskGet

▸ **processTripadvisorSearchTaskGet**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

#### Defined in

main.ts:18539

___

### processTripadvisorSearchTaskPost

▸ **processTripadvisorSearchTaskPost**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18459

___

### processTripadvisorSearchTasksReady

▸ **processTripadvisorSearchTasksReady**(`response`): `Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18496

___

### processTrustpilotReviewsTaskGet

▸ **processTrustpilotReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:18298

___

### processTrustpilotReviewsTaskPost

▸ **processTrustpilotReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18218

___

### processTrustpilotReviewsTasksReady

▸ **processTrustpilotReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18255

___

### processTrustpilotSearchTaskGet

▸ **processTrustpilotSearchTaskGet**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

#### Defined in

main.ts:18176

___

### processTrustpilotSearchTaskPost

▸ **processTrustpilotSearchTaskPost**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18096

___

### processTrustpilotSearchTasksReady

▸ **processTrustpilotSearchTasksReady**(`response`): `Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18133

___

### processYelpReviewsTaskGet

▸ **processYelpReviewsTaskGet**(`response`): `Promise`\<[`BusinessDataYelpReviewsTaskGetResponseInfo`](BusinessDataYelpReviewsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataYelpReviewsTaskGetResponseInfo`](BusinessDataYelpReviewsTaskGetResponseInfo.md)\>

#### Defined in

main.ts:19024

___

### processYelpReviewsTaskPost

▸ **processYelpReviewsTaskPost**(`response`): `Promise`\<[`BusinessDataYelpReviewsTaskPostResponseInfo`](BusinessDataYelpReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataYelpReviewsTaskPostResponseInfo`](BusinessDataYelpReviewsTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18944

___

### processYelpReviewsTasksReady

▸ **processYelpReviewsTasksReady**(`response`): `Promise`\<[`BusinessDataYelpReviewsTasksReadyResponseInfo`](BusinessDataYelpReviewsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataYelpReviewsTasksReadyResponseInfo`](BusinessDataYelpReviewsTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18981

___

### processYelpSearchTaskGet

▸ **processYelpSearchTaskGet**(`response`): `Promise`\<[`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)\>

#### Defined in

main.ts:18902

___

### processYelpSearchTaskPost

▸ **processYelpSearchTaskPost**(`response`): `Promise`\<[`BusinessDataYelpSearchTaskPostResponseInfo`](BusinessDataYelpSearchTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataYelpSearchTaskPostResponseInfo`](BusinessDataYelpSearchTaskPostResponseInfo.md)\>

#### Defined in

main.ts:18822

___

### processYelpSearchTasksReady

▸ **processYelpSearchTasksReady**(`response`): `Promise`\<[`BusinessDataYelpSearchTasksReadyResponseInfo`](BusinessDataYelpSearchTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`BusinessDataYelpSearchTasksReadyResponseInfo`](BusinessDataYelpSearchTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:18859

___

### socialMediaFacebookLive

▸ **socialMediaFacebookLive**(`body`): `Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataSocialMediaFacebookLiveRequestInfo`](BusinessDataSocialMediaFacebookLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataSocialMediaFacebookLiveResponseInfo`](BusinessDataSocialMediaFacebookLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19088

___

### socialMediaPinterestLive

▸ **socialMediaPinterestLive**(`body`): `Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataSocialMediaPinterestLiveRequestInfo`](BusinessDataSocialMediaPinterestLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataSocialMediaPinterestLiveResponseInfo`](BusinessDataSocialMediaPinterestLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19046

___

### socialMediaRedditLive

▸ **socialMediaRedditLive**(`body`): `Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataSocialMediaRedditLiveRequestInfo`](BusinessDataSocialMediaRedditLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataSocialMediaRedditLiveResponseInfo`](BusinessDataSocialMediaRedditLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19130

___

### tripadvisorReviewsTaskGet

▸ **tripadvisorReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskGetResponseInfo`](BusinessDataTripadvisorReviewsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18642

___

### tripadvisorReviewsTaskPost

▸ **tripadvisorReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataTripadvisorReviewsTaskPostRequestInfo`](BusinessDataTripadvisorReviewsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTaskPostResponseInfo`](BusinessDataTripadvisorReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18561

___

### tripadvisorReviewsTasksReady

▸ **tripadvisorReviewsTasksReady**(): `Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorReviewsTasksReadyResponseInfo`](BusinessDataTripadvisorReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18602

___

### tripadvisorSearchTaskGet

▸ **tripadvisorSearchTaskGet**(`id`): `Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskGetResponseInfo`](BusinessDataTripadvisorSearchTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18520

___

### tripadvisorSearchTaskPost

▸ **tripadvisorSearchTaskPost**(`body`): `Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataTripadvisorSearchTaskPostRequestInfo`](BusinessDataTripadvisorSearchTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTaskPostResponseInfo`](BusinessDataTripadvisorSearchTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18439

___

### tripadvisorSearchTasksReady

▸ **tripadvisorSearchTasksReady**(): `Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTripadvisorSearchTasksReadyResponseInfo`](BusinessDataTripadvisorSearchTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18480

___

### trustpilotReviewsTaskGet

▸ **trustpilotReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskGetResponseInfo`](BusinessDataTrustpilotReviewsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18279

___

### trustpilotReviewsTaskPost

▸ **trustpilotReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataTrustpilotReviewsTaskPostRequestInfo`](BusinessDataTrustpilotReviewsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTaskPostResponseInfo`](BusinessDataTrustpilotReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18198

___

### trustpilotReviewsTasksReady

▸ **trustpilotReviewsTasksReady**(): `Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTrustpilotReviewsTasksReadyResponseInfo`](BusinessDataTrustpilotReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18239

___

### trustpilotSearchTaskGet

▸ **trustpilotSearchTaskGet**(`id`): `Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskGetResponseInfo`](BusinessDataTrustpilotSearchTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18157

___

### trustpilotSearchTaskPost

▸ **trustpilotSearchTaskPost**(`body`): `Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataTrustpilotSearchTaskPostRequestInfo`](BusinessDataTrustpilotSearchTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTaskPostResponseInfo`](BusinessDataTrustpilotSearchTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18076

___

### trustpilotSearchTasksReady

▸ **trustpilotSearchTasksReady**(): `Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataTrustpilotSearchTasksReadyResponseInfo`](BusinessDataTrustpilotSearchTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18117

___

### yelpReviewsTaskGet

▸ **yelpReviewsTaskGet**(`id`): `Promise`\<[`BusinessDataYelpReviewsTaskGetResponseInfo`](BusinessDataYelpReviewsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataYelpReviewsTaskGetResponseInfo`](BusinessDataYelpReviewsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:19005

___

### yelpReviewsTaskPost

▸ **yelpReviewsTaskPost**(`body`): `Promise`\<[`BusinessDataYelpReviewsTaskPostResponseInfo`](BusinessDataYelpReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataYelpReviewsTaskPostRequestInfo`](BusinessDataYelpReviewsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataYelpReviewsTaskPostResponseInfo`](BusinessDataYelpReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18924

___

### yelpReviewsTasksReady

▸ **yelpReviewsTasksReady**(): `Promise`\<[`BusinessDataYelpReviewsTasksReadyResponseInfo`](BusinessDataYelpReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataYelpReviewsTasksReadyResponseInfo`](BusinessDataYelpReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18965

___

### yelpSearchTaskGet

▸ **yelpSearchTaskGet**(`id`): `Promise`\<[`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`BusinessDataYelpSearchTaskGetResponseInfo`](BusinessDataYelpSearchTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18883

___

### yelpSearchTaskPost

▸ **yelpSearchTaskPost**(`body`): `Promise`\<[`BusinessDataYelpSearchTaskPostResponseInfo`](BusinessDataYelpSearchTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`BusinessDataYelpSearchTaskPostRequestInfo`](BusinessDataYelpSearchTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`BusinessDataYelpSearchTaskPostResponseInfo`](BusinessDataYelpSearchTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18802

___

### yelpSearchTasksReady

▸ **yelpSearchTasksReady**(): `Promise`\<[`BusinessDataYelpSearchTasksReadyResponseInfo`](BusinessDataYelpSearchTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`BusinessDataYelpSearchTasksReadyResponseInfo`](BusinessDataYelpSearchTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:18843
