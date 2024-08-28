[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DomainAnalyticsApi

# Class: DomainAnalyticsApi

## Constructors

### new DomainAnalyticsApi()

> **new DomainAnalyticsApi**(`baseUrl`?, `http`?): [`DomainAnalyticsApi`](DomainAnalyticsApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http.fetch?**

#### Returns

[`DomainAnalyticsApi`](DomainAnalyticsApi.md)

#### Defined in

main.ts:5909

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Defined in

main.ts:5907

## Methods

### domainAnalyticsErrors()

> **domainAnalyticsErrors**(`body`): `Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5960

***

### domainAnalyticsIdList()

> **domainAnalyticsIdList**(`body`): `Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

#### Parameters

• **body**: [`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:5918

***

### domainAnalyticsTechnologiesLanguages()

> **domainAnalyticsTechnologiesLanguages**(): `Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6075

***

### domainAnalyticsTechnologiesLocations()

> **domainAnalyticsTechnologiesLocations**(): `Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6038

***

### processDomainAnalyticsErrors()

> `protected` **processDomainAnalyticsErrors**(`response`): `Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

#### Defined in

main.ts:5980

***

### processDomainAnalyticsIdList()

> `protected` **processDomainAnalyticsIdList**(`response`): `Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

#### Defined in

main.ts:5938

***

### processDomainAnalyticsTechnologiesLanguages()

> `protected` **processDomainAnalyticsTechnologiesLanguages**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

#### Defined in

main.ts:6091

***

### processDomainAnalyticsTechnologiesLocations()

> `protected` **processDomainAnalyticsTechnologiesLocations**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

#### Defined in

main.ts:6054

***

### processTechnologiesAggregationTechnologiesLive()

> `protected` **processTechnologiesAggregationTechnologiesLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

#### Defined in

main.ts:6170

***

### processTechnologiesAvailableFilters()

> `protected` **processTechnologiesAvailableFilters**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:6017

***

### processTechnologiesDomainTechnologiesLive()

> `protected` **processTechnologiesDomainTechnologiesLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

#### Defined in

main.ts:6380

***

### processTechnologiesDomainsByHtmlTermsLive()

> `protected` **processTechnologiesDomainsByHtmlTermsLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

#### Defined in

main.ts:6338

***

### processTechnologiesDomainsByTechnologyLive()

> `protected` **processTechnologiesDomainsByTechnologyLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

#### Defined in

main.ts:6296

***

### processTechnologiesTechnologies()

> `protected` **processTechnologiesTechnologies**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

#### Defined in

main.ts:6128

***

### processTechnologiesTechnologiesSummaryLive()

> `protected` **processTechnologiesTechnologiesSummaryLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:6212

***

### processTechnologiesTechnologyStatsLive()

> `protected` **processTechnologiesTechnologyStatsLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

#### Defined in

main.ts:6254

***

### processWhoisAvailableFilters()

> `protected` **processWhoisAvailableFilters**(`response`): `Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:6417

***

### processWhoisOverviewLive()

> `protected` **processWhoisOverviewLive**(`response`): `Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

#### Defined in

main.ts:6459

***

### technologiesAggregationTechnologiesLive()

> **technologiesAggregationTechnologiesLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6150

***

### technologiesAvailableFilters()

> **technologiesAvailableFilters**(): `Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6001

***

### technologiesDomainTechnologiesLive()

> **technologiesDomainTechnologiesLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6360

***

### technologiesDomainsByHtmlTermsLive()

> **technologiesDomainsByHtmlTermsLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6318

***

### technologiesDomainsByTechnologyLive()

> **technologiesDomainsByTechnologyLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6276

***

### technologiesTechnologies()

> **technologiesTechnologies**(): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6112

***

### technologiesTechnologiesSummaryLive()

> **technologiesTechnologiesSummaryLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6192

***

### technologiesTechnologyStatsLive()

> **technologiesTechnologyStatsLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6234

***

### whoisAvailableFilters()

> **whoisAvailableFilters**(): `Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6401

***

### whoisOverviewLive()

> **whoisOverviewLive**(`body`): `Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

#### Parameters

• **body**: [`DomainAnalyticsWhoisOverviewLiveRequestInfo`](DomainAnalyticsWhoisOverviewLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:6439
