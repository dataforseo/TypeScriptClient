[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksApi

# Class: BacklinksApi

## Constructors

### new BacklinksApi()

> **new BacklinksApi**(`baseUrl`?, `http`?): [`BacklinksApi`](BacklinksApi.md)

#### Parameters

##### baseUrl?

`string`

##### http?

###### http.fetch

#### Returns

[`BacklinksApi`](BacklinksApi.md)

#### Defined in

main.ts:12064

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

main.ts:12062

## Methods

### anchorsLive()

> **anchorsLive**(`body`): `Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksAnchorsLiveRequestInfo`](BacklinksAnchorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12357

***

### backlinksAvailableFilters()

> **backlinksAvailableFilters**(): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12156

***

### backlinksErrors()

> **backlinksErrors**(`body`): `Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12115

***

### backlinksIdList()

> **backlinksIdList**(`body`): `Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12073

***

### backlinksLive()

> **backlinksLive**(`body`): `Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksBacklinksLiveRequestInfo`](BacklinksBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12315

***

### bulkBacklinksLive()

> **bulkBacklinksLive**(`body`): `Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12819

***

### bulkNewLostBacklinksLive()

> **bulkNewLostBacklinksLive**(`body`): `Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksBulkNewLostBacklinksLiveRequestInfo`](BacklinksBulkNewLostBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12945

***

### bulkNewLostReferringDomainsLive()

> **bulkNewLostReferringDomainsLive**(`body`): `Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksBulkNewLostReferringDomainsLiveRequestInfo`](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12987

***

### bulkPagesSummaryLive()

> **bulkPagesSummaryLive**(`body`): `Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13029

***

### bulkRanksLive()

> **bulkRanksLive**(`body`): `Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12777

***

### bulkReferringDomainsLive()

> **bulkReferringDomainsLive**(`body`): `Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksBulkReferringDomainsLiveRequestInfo`](BacklinksBulkReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12903

***

### bulkSpamScoreLive()

> **bulkSpamScoreLive**(`body`): `Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12861

***

### competitorsLive()

> **competitorsLive**(`body`): `Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksCompetitorsLiveRequestInfo`](BacklinksCompetitorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12567

***

### domainIntersectionLive()

> **domainIntersectionLive**(`body`): `Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12609

***

### domainPagesLive()

> **domainPagesLive**(`body`): `Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12399

***

### domainPagesSummaryLive()

> **domainPagesSummaryLive**(`body`): `Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksDomainPagesSummaryLiveRequestInfo`](BacklinksDomainPagesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12441

***

### historyLive()

> **historyLive**(`body`): `Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12273

***

### index()

> **index**(): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12193

***

### pageIntersectionLive()

> **pageIntersectionLive**(`body`): `Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksPageIntersectionLiveRequestInfo`](BacklinksPageIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12651

***

### processAnchorsLive()

> `protected` **processAnchorsLive**(`response`): `Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Defined in

main.ts:12377

***

### processBacklinksAvailableFilters()

> `protected` **processBacklinksAvailableFilters**(`response`): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:12172

***

### processBacklinksErrors()

> `protected` **processBacklinksErrors**(`response`): `Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Defined in

main.ts:12135

***

### processBacklinksIdList()

> `protected` **processBacklinksIdList**(`response`): `Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Defined in

main.ts:12093

***

### processBacklinksLive()

> `protected` **processBacklinksLive**(`response`): `Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Defined in

main.ts:12335

***

### processBulkBacklinksLive()

> `protected` **processBulkBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Defined in

main.ts:12839

***

### processBulkNewLostBacklinksLive()

> `protected` **processBulkNewLostBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Defined in

main.ts:12965

***

### processBulkNewLostReferringDomainsLive()

> `protected` **processBulkNewLostReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Defined in

main.ts:13007

***

### processBulkPagesSummaryLive()

> `protected` **processBulkPagesSummaryLive**(`response`): `Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:13049

***

### processBulkRanksLive()

> `protected` **processBulkRanksLive**(`response`): `Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Defined in

main.ts:12797

***

### processBulkReferringDomainsLive()

> `protected` **processBulkReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Defined in

main.ts:12923

***

### processBulkSpamScoreLive()

> `protected` **processBulkSpamScoreLive**(`response`): `Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Defined in

main.ts:12881

***

### processCompetitorsLive()

> `protected` **processCompetitorsLive**(`response`): `Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Defined in

main.ts:12587

***

### processDomainIntersectionLive()

> `protected` **processDomainIntersectionLive**(`response`): `Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:12629

***

### processDomainPagesLive()

> `protected` **processDomainPagesLive**(`response`): `Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Defined in

main.ts:12419

***

### processDomainPagesSummaryLive()

> `protected` **processDomainPagesSummaryLive**(`response`): `Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:12461

***

### processHistoryLive()

> `protected` **processHistoryLive**(`response`): `Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Defined in

main.ts:12293

***

### processIndex()

> `protected` **processIndex**(`response`): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Defined in

main.ts:12209

***

### processPageIntersectionLive()

> `protected` **processPageIntersectionLive**(`response`): `Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:12671

***

### processReferringDomainsLive()

> `protected` **processReferringDomainsLive**(`response`): `Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Defined in

main.ts:12503

***

### processReferringNetworksLive()

> `protected` **processReferringNetworksLive**(`response`): `Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Defined in

main.ts:12545

***

### processSummaryLive()

> `protected` **processSummaryLive**(`response`): `Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:12251

***

### processTimeseriesNewLostSummaryLive()

> `protected` **processTimeseriesNewLostSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:12755

***

### processTimeseriesSummaryLive()

> `protected` **processTimeseriesSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:12713

***

### referringDomainsLive()

> **referringDomainsLive**(`body`): `Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksReferringDomainsLiveRequestInfo`](BacklinksReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12483

***

### referringNetworksLive()

> **referringNetworksLive**(`body`): `Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksReferringNetworksLiveRequestInfo`](BacklinksReferringNetworksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12525

***

### summaryLive()

> **summaryLive**(`body`): `Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12231

***

### timeseriesNewLostSummaryLive()

> **timeseriesNewLostSummaryLive**(`body`): `Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksTimeseriesNewLostSummaryLiveRequestInfo`](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12735

***

### timeseriesSummaryLive()

> **timeseriesSummaryLive**(`body`): `Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Parameters

##### body

[`BacklinksTimeseriesSummaryLiveRequestInfo`](BacklinksTimeseriesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12693
