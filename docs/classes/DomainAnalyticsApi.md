[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsApi

# Class: DomainAnalyticsApi

Defined in: main.ts:6222

## Constructors

### new DomainAnalyticsApi()

> **new DomainAnalyticsApi**(`baseUrl`?, `http`?): [`DomainAnalyticsApi`](DomainAnalyticsApi.md)

Defined in: main.ts:6227

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

[`DomainAnalyticsApi`](DomainAnalyticsApi.md)

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:6225

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### domainAnalyticsErrors()

> **domainAnalyticsErrors**(`body`): `Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

Defined in: main.ts:6278

#### Parameters

##### body

[`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

Successful operation

***

### domainAnalyticsIdList()

> **domainAnalyticsIdList**(`body`): `Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

Defined in: main.ts:6236

#### Parameters

##### body

[`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

Successful operation

***

### domainAnalyticsTechnologiesLanguages()

> **domainAnalyticsTechnologiesLanguages**(): `Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

Defined in: main.ts:6393

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

Successful operation

***

### domainAnalyticsTechnologiesLocations()

> **domainAnalyticsTechnologiesLocations**(): `Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

Defined in: main.ts:6356

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

Successful operation

***

### processDomainAnalyticsErrors()

> `protected` **processDomainAnalyticsErrors**(`response`): `Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

Defined in: main.ts:6298

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

***

### processDomainAnalyticsIdList()

> `protected` **processDomainAnalyticsIdList**(`response`): `Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

Defined in: main.ts:6256

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

***

### processDomainAnalyticsTechnologiesLanguages()

> `protected` **processDomainAnalyticsTechnologiesLanguages**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

Defined in: main.ts:6409

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

***

### processDomainAnalyticsTechnologiesLocations()

> `protected` **processDomainAnalyticsTechnologiesLocations**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

Defined in: main.ts:6372

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

***

### processTechnologiesAggregationTechnologiesLive()

> `protected` **processTechnologiesAggregationTechnologiesLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

Defined in: main.ts:6488

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

***

### processTechnologiesAvailableFilters()

> `protected` **processTechnologiesAvailableFilters**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:6335

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

***

### processTechnologiesDomainsByHtmlTermsLive()

> `protected` **processTechnologiesDomainsByHtmlTermsLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

Defined in: main.ts:6656

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

***

### processTechnologiesDomainsByTechnologyLive()

> `protected` **processTechnologiesDomainsByTechnologyLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

Defined in: main.ts:6614

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

***

### processTechnologiesDomainTechnologiesLive()

> `protected` **processTechnologiesDomainTechnologiesLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

Defined in: main.ts:6698

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

***

### processTechnologiesTechnologies()

> `protected` **processTechnologiesTechnologies**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

Defined in: main.ts:6446

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

***

### processTechnologiesTechnologiesSummaryLive()

> `protected` **processTechnologiesTechnologiesSummaryLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

Defined in: main.ts:6530

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

***

### processTechnologiesTechnologyStatsLive()

> `protected` **processTechnologiesTechnologyStatsLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

Defined in: main.ts:6572

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

***

### processWhoisAvailableFilters()

> `protected` **processWhoisAvailableFilters**(`response`): `Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:6735

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

***

### processWhoisOverviewLive()

> `protected` **processWhoisOverviewLive**(`response`): `Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

Defined in: main.ts:6777

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

***

### technologiesAggregationTechnologiesLive()

> **technologiesAggregationTechnologiesLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

Defined in: main.ts:6468

#### Parameters

##### body

[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

Successful operation

***

### technologiesAvailableFilters()

> **technologiesAvailableFilters**(): `Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:6319

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

Successful operation

***

### technologiesDomainsByHtmlTermsLive()

> **technologiesDomainsByHtmlTermsLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

Defined in: main.ts:6636

#### Parameters

##### body

[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

Successful operation

***

### technologiesDomainsByTechnologyLive()

> **technologiesDomainsByTechnologyLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

Defined in: main.ts:6594

#### Parameters

##### body

[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

Successful operation

***

### technologiesDomainTechnologiesLive()

> **technologiesDomainTechnologiesLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

Defined in: main.ts:6678

#### Parameters

##### body

[`DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

Successful operation

***

### technologiesTechnologies()

> **technologiesTechnologies**(): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

Defined in: main.ts:6430

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

Successful operation

***

### technologiesTechnologiesSummaryLive()

> **technologiesTechnologiesSummaryLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

Defined in: main.ts:6510

#### Parameters

##### body

[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

Successful operation

***

### technologiesTechnologyStatsLive()

> **technologiesTechnologyStatsLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

Defined in: main.ts:6552

#### Parameters

##### body

[`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

Successful operation

***

### whoisAvailableFilters()

> **whoisAvailableFilters**(): `Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:6719

#### Returns

`Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

Successful operation

***

### whoisOverviewLive()

> **whoisOverviewLive**(`body`): `Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

Defined in: main.ts:6757

#### Parameters

##### body

[`DomainAnalyticsWhoisOverviewLiveRequestInfo`](DomainAnalyticsWhoisOverviewLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

Successful operation
