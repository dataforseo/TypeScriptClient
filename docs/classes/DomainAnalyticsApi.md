[dataforseo-client](../README.md) / [Exports](../modules.md) / DomainAnalyticsApi

# Class: DomainAnalyticsApi

## Table of contents

### Constructors

- [constructor](DomainAnalyticsApi.md#constructor)

### Properties

- [baseUrl](DomainAnalyticsApi.md#baseurl)
- [http](DomainAnalyticsApi.md#http)
- [jsonParseReviver](DomainAnalyticsApi.md#jsonparsereviver)

### Methods

- [domainAnalyticsErrors](DomainAnalyticsApi.md#domainanalyticserrors)
- [domainAnalyticsIdList](DomainAnalyticsApi.md#domainanalyticsidlist)
- [domainAnalyticsTechnologiesLanguages](DomainAnalyticsApi.md#domainanalyticstechnologieslanguages)
- [domainAnalyticsTechnologiesLocations](DomainAnalyticsApi.md#domainanalyticstechnologieslocations)
- [processDomainAnalyticsErrors](DomainAnalyticsApi.md#processdomainanalyticserrors)
- [processDomainAnalyticsIdList](DomainAnalyticsApi.md#processdomainanalyticsidlist)
- [processDomainAnalyticsTechnologiesLanguages](DomainAnalyticsApi.md#processdomainanalyticstechnologieslanguages)
- [processDomainAnalyticsTechnologiesLocations](DomainAnalyticsApi.md#processdomainanalyticstechnologieslocations)
- [processTechnologiesAggregationTechnologiesLive](DomainAnalyticsApi.md#processtechnologiesaggregationtechnologieslive)
- [processTechnologiesAvailableFilters](DomainAnalyticsApi.md#processtechnologiesavailablefilters)
- [processTechnologiesDomainTechnologiesLive](DomainAnalyticsApi.md#processtechnologiesdomaintechnologieslive)
- [processTechnologiesDomainsByHtmlTermsLive](DomainAnalyticsApi.md#processtechnologiesdomainsbyhtmltermslive)
- [processTechnologiesDomainsByTechnologyLive](DomainAnalyticsApi.md#processtechnologiesdomainsbytechnologylive)
- [processTechnologiesTechnologies](DomainAnalyticsApi.md#processtechnologiestechnologies)
- [processTechnologiesTechnologiesSummaryLive](DomainAnalyticsApi.md#processtechnologiestechnologiessummarylive)
- [processTechnologiesTechnologyStatsLive](DomainAnalyticsApi.md#processtechnologiestechnologystatslive)
- [processWhoisAvailableFilters](DomainAnalyticsApi.md#processwhoisavailablefilters)
- [processWhoisOverviewLive](DomainAnalyticsApi.md#processwhoisoverviewlive)
- [technologiesAggregationTechnologiesLive](DomainAnalyticsApi.md#technologiesaggregationtechnologieslive)
- [technologiesAvailableFilters](DomainAnalyticsApi.md#technologiesavailablefilters)
- [technologiesDomainTechnologiesLive](DomainAnalyticsApi.md#technologiesdomaintechnologieslive)
- [technologiesDomainsByHtmlTermsLive](DomainAnalyticsApi.md#technologiesdomainsbyhtmltermslive)
- [technologiesDomainsByTechnologyLive](DomainAnalyticsApi.md#technologiesdomainsbytechnologylive)
- [technologiesTechnologies](DomainAnalyticsApi.md#technologiestechnologies)
- [technologiesTechnologiesSummaryLive](DomainAnalyticsApi.md#technologiestechnologiessummarylive)
- [technologiesTechnologyStatsLive](DomainAnalyticsApi.md#technologiestechnologystatslive)
- [whoisAvailableFilters](DomainAnalyticsApi.md#whoisavailablefilters)
- [whoisOverviewLive](DomainAnalyticsApi.md#whoisoverviewlive)

## Constructors

### constructor

• **new DomainAnalyticsApi**(`baseUrl?`, `http?`): [`DomainAnalyticsApi`](DomainAnalyticsApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl?` | `string` |
| `http?` | `Object` |
| `http.fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Returns

[`DomainAnalyticsApi`](DomainAnalyticsApi.md)

#### Defined in

[main.ts:5671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5671)

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

[main.ts:5668](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5668)

___

### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

[main.ts:5667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5667)

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

[main.ts:5669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5669)

## Methods

### domainAnalyticsErrors

▸ **domainAnalyticsErrors**(`body`): `Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DomainAnalyticsErrorsRequestInfo`](DomainAnalyticsErrorsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:5722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5722)

___

### domainAnalyticsIdList

▸ **domainAnalyticsIdList**(`body`): `Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DomainAnalyticsIdListRequestInfo`](DomainAnalyticsIdListRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:5680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5680)

___

### domainAnalyticsTechnologiesLanguages

▸ **domainAnalyticsTechnologiesLanguages**(): `Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:5837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5837)

___

### domainAnalyticsTechnologiesLocations

▸ **domainAnalyticsTechnologiesLocations**(): `Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:5800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5800)

___

### processDomainAnalyticsErrors

▸ **processDomainAnalyticsErrors**(`response`): `Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsErrorsResponseInfo`](DomainAnalyticsErrorsResponseInfo.md)\>

#### Defined in

[main.ts:5742](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5742)

___

### processDomainAnalyticsIdList

▸ **processDomainAnalyticsIdList**(`response`): `Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsIdListResponseInfo`](DomainAnalyticsIdListResponseInfo.md)\>

#### Defined in

[main.ts:5700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5700)

___

### processDomainAnalyticsTechnologiesLanguages

▸ **processDomainAnalyticsTechnologiesLanguages**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLanguagesResponseInfo`](DomainAnalyticsTechnologiesLanguagesResponseInfo.md)\>

#### Defined in

[main.ts:5853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5853)

___

### processDomainAnalyticsTechnologiesLocations

▸ **processDomainAnalyticsTechnologiesLocations**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesLocationsResponseInfo`](DomainAnalyticsTechnologiesLocationsResponseInfo.md)\>

#### Defined in

[main.ts:5816](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5816)

___

### processTechnologiesAggregationTechnologiesLive

▸ **processTechnologiesAggregationTechnologiesLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

#### Defined in

[main.ts:5932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5932)

___

### processTechnologiesAvailableFilters

▸ **processTechnologiesAvailableFilters**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

#### Defined in

[main.ts:5779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5779)

___

### processTechnologiesDomainTechnologiesLive

▸ **processTechnologiesDomainTechnologiesLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

#### Defined in

[main.ts:6142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6142)

___

### processTechnologiesDomainsByHtmlTermsLive

▸ **processTechnologiesDomainsByHtmlTermsLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

#### Defined in

[main.ts:6100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6100)

___

### processTechnologiesDomainsByTechnologyLive

▸ **processTechnologiesDomainsByTechnologyLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

#### Defined in

[main.ts:6058](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6058)

___

### processTechnologiesTechnologies

▸ **processTechnologiesTechnologies**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

#### Defined in

[main.ts:5890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5890)

___

### processTechnologiesTechnologiesSummaryLive

▸ **processTechnologiesTechnologiesSummaryLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

#### Defined in

[main.ts:5974](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5974)

___

### processTechnologiesTechnologyStatsLive

▸ **processTechnologiesTechnologyStatsLive**(`response`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

#### Defined in

[main.ts:6016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6016)

___

### processWhoisAvailableFilters

▸ **processWhoisAvailableFilters**(`response`): `Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

#### Defined in

[main.ts:6179](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6179)

___

### processWhoisOverviewLive

▸ **processWhoisOverviewLive**(`response`): `Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

#### Defined in

[main.ts:6221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6221)

___

### technologiesAggregationTechnologiesLive

▸ **technologiesAggregationTechnologiesLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:5912](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5912)

___

### technologiesAvailableFilters

▸ **technologiesAvailableFilters**(): `Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesAvailableFiltersResponseInfo`](DomainAnalyticsTechnologiesAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:5763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5763)

___

### technologiesDomainTechnologiesLive

▸ **technologiesDomainTechnologiesLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo`](DomainAnalyticsTechnologiesDomainTechnologiesLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:6122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6122)

___

### technologiesDomainsByHtmlTermsLive

▸ **technologiesDomainsByHtmlTermsLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:6080](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6080)

___

### technologiesDomainsByTechnologyLive

▸ **technologiesDomainsByTechnologyLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo`](DomainAnalyticsTechnologiesDomainsByTechnologyLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:6038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6038)

___

### technologiesTechnologies

▸ **technologiesTechnologies**(): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesResponseInfo`](DomainAnalyticsTechnologiesTechnologiesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:5874](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5874)

___

### technologiesTechnologiesSummaryLive

▸ **technologiesTechnologiesSummaryLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologiesSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:5954](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5954)

___

### technologiesTechnologyStatsLive

▸ **technologiesTechnologyStatsLive**(`body`): `Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo`](DomainAnalyticsTechnologiesTechnologyStatsLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:5996](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L5996)

___

### whoisAvailableFilters

▸ **whoisAvailableFilters**(): `Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`DomainAnalyticsWhoisAvailableFiltersResponseInfo`](DomainAnalyticsWhoisAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:6163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6163)

___

### whoisOverviewLive

▸ **whoisOverviewLive**(`body`): `Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`DomainAnalyticsWhoisOverviewLiveRequestInfo`](DomainAnalyticsWhoisOverviewLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`DomainAnalyticsWhoisOverviewLiveResponseInfo`](DomainAnalyticsWhoisOverviewLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:6201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L6201)
