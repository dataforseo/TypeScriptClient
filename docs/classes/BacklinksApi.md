[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksApi

# Class: BacklinksApi

Defined in: main.ts:12059

## Constructors

### new BacklinksApi()

> **new BacklinksApi**(`baseUrl`?, `http`?): [`BacklinksApi`](BacklinksApi.md)

Defined in: main.ts:12064

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

[`BacklinksApi`](BacklinksApi.md)

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:12062

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### anchorsLive()

> **anchorsLive**(`body`): `Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

Defined in: main.ts:12357

#### Parameters

##### body

[`BacklinksAnchorsLiveRequestInfo`](BacklinksAnchorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

Successful operation

***

### backlinksAvailableFilters()

> **backlinksAvailableFilters**(): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:12156

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

Successful operation

***

### backlinksErrors()

> **backlinksErrors**(`body`): `Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

Defined in: main.ts:12115

#### Parameters

##### body

[`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

Successful operation

***

### backlinksIdList()

> **backlinksIdList**(`body`): `Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

Defined in: main.ts:12073

#### Parameters

##### body

[`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

Successful operation

***

### backlinksLive()

> **backlinksLive**(`body`): `Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

Defined in: main.ts:12315

#### Parameters

##### body

[`BacklinksBacklinksLiveRequestInfo`](BacklinksBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

Successful operation

***

### bulkBacklinksLive()

> **bulkBacklinksLive**(`body`): `Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

Defined in: main.ts:12819

#### Parameters

##### body

[`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

Successful operation

***

### bulkNewLostBacklinksLive()

> **bulkNewLostBacklinksLive**(`body`): `Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

Defined in: main.ts:12945

#### Parameters

##### body

[`BacklinksBulkNewLostBacklinksLiveRequestInfo`](BacklinksBulkNewLostBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

Successful operation

***

### bulkNewLostReferringDomainsLive()

> **bulkNewLostReferringDomainsLive**(`body`): `Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

Defined in: main.ts:12987

#### Parameters

##### body

[`BacklinksBulkNewLostReferringDomainsLiveRequestInfo`](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

Successful operation

***

### bulkPagesSummaryLive()

> **bulkPagesSummaryLive**(`body`): `Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

Defined in: main.ts:13029

#### Parameters

##### body

[`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

Successful operation

***

### bulkRanksLive()

> **bulkRanksLive**(`body`): `Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

Defined in: main.ts:12777

#### Parameters

##### body

[`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

Successful operation

***

### bulkReferringDomainsLive()

> **bulkReferringDomainsLive**(`body`): `Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

Defined in: main.ts:12903

#### Parameters

##### body

[`BacklinksBulkReferringDomainsLiveRequestInfo`](BacklinksBulkReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

Successful operation

***

### bulkSpamScoreLive()

> **bulkSpamScoreLive**(`body`): `Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

Defined in: main.ts:12861

#### Parameters

##### body

[`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

Successful operation

***

### competitorsLive()

> **competitorsLive**(`body`): `Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

Defined in: main.ts:12567

#### Parameters

##### body

[`BacklinksCompetitorsLiveRequestInfo`](BacklinksCompetitorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

Successful operation

***

### domainIntersectionLive()

> **domainIntersectionLive**(`body`): `Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

Defined in: main.ts:12609

#### Parameters

##### body

[`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

Successful operation

***

### domainPagesLive()

> **domainPagesLive**(`body`): `Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

Defined in: main.ts:12399

#### Parameters

##### body

[`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

Successful operation

***

### domainPagesSummaryLive()

> **domainPagesSummaryLive**(`body`): `Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

Defined in: main.ts:12441

#### Parameters

##### body

[`BacklinksDomainPagesSummaryLiveRequestInfo`](BacklinksDomainPagesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

Successful operation

***

### historyLive()

> **historyLive**(`body`): `Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

Defined in: main.ts:12273

#### Parameters

##### body

[`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

Successful operation

***

### index()

> **index**(): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

Defined in: main.ts:12193

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

Successful operation

***

### pageIntersectionLive()

> **pageIntersectionLive**(`body`): `Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

Defined in: main.ts:12651

#### Parameters

##### body

[`BacklinksPageIntersectionLiveRequestInfo`](BacklinksPageIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

Successful operation

***

### processAnchorsLive()

> `protected` **processAnchorsLive**(`response`): `Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

Defined in: main.ts:12377

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

***

### processBacklinksAvailableFilters()

> `protected` **processBacklinksAvailableFilters**(`response`): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:12172

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

***

### processBacklinksErrors()

> `protected` **processBacklinksErrors**(`response`): `Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

Defined in: main.ts:12135

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

***

### processBacklinksIdList()

> `protected` **processBacklinksIdList**(`response`): `Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

Defined in: main.ts:12093

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

***

### processBacklinksLive()

> `protected` **processBacklinksLive**(`response`): `Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

Defined in: main.ts:12335

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

***

### processBulkBacklinksLive()

> `protected` **processBulkBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

Defined in: main.ts:12839

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

***

### processBulkNewLostBacklinksLive()

> `protected` **processBulkNewLostBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

Defined in: main.ts:12965

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

***

### processBulkNewLostReferringDomainsLive()

> `protected` **processBulkNewLostReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

Defined in: main.ts:13007

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

***

### processBulkPagesSummaryLive()

> `protected` **processBulkPagesSummaryLive**(`response`): `Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

Defined in: main.ts:13049

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

***

### processBulkRanksLive()

> `protected` **processBulkRanksLive**(`response`): `Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

Defined in: main.ts:12797

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

***

### processBulkReferringDomainsLive()

> `protected` **processBulkReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

Defined in: main.ts:12923

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

***

### processBulkSpamScoreLive()

> `protected` **processBulkSpamScoreLive**(`response`): `Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

Defined in: main.ts:12881

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

***

### processCompetitorsLive()

> `protected` **processCompetitorsLive**(`response`): `Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

Defined in: main.ts:12587

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

***

### processDomainIntersectionLive()

> `protected` **processDomainIntersectionLive**(`response`): `Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

Defined in: main.ts:12629

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

***

### processDomainPagesLive()

> `protected` **processDomainPagesLive**(`response`): `Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

Defined in: main.ts:12419

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

***

### processDomainPagesSummaryLive()

> `protected` **processDomainPagesSummaryLive**(`response`): `Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

Defined in: main.ts:12461

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

***

### processHistoryLive()

> `protected` **processHistoryLive**(`response`): `Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

Defined in: main.ts:12293

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

***

### processIndex()

> `protected` **processIndex**(`response`): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

Defined in: main.ts:12209

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

***

### processPageIntersectionLive()

> `protected` **processPageIntersectionLive**(`response`): `Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

Defined in: main.ts:12671

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

***

### processReferringDomainsLive()

> `protected` **processReferringDomainsLive**(`response`): `Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

Defined in: main.ts:12503

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

***

### processReferringNetworksLive()

> `protected` **processReferringNetworksLive**(`response`): `Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

Defined in: main.ts:12545

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

***

### processSummaryLive()

> `protected` **processSummaryLive**(`response`): `Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

Defined in: main.ts:12251

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

***

### processTimeseriesNewLostSummaryLive()

> `protected` **processTimeseriesNewLostSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

Defined in: main.ts:12755

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

***

### processTimeseriesSummaryLive()

> `protected` **processTimeseriesSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

Defined in: main.ts:12713

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

***

### referringDomainsLive()

> **referringDomainsLive**(`body`): `Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

Defined in: main.ts:12483

#### Parameters

##### body

[`BacklinksReferringDomainsLiveRequestInfo`](BacklinksReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

Successful operation

***

### referringNetworksLive()

> **referringNetworksLive**(`body`): `Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

Defined in: main.ts:12525

#### Parameters

##### body

[`BacklinksReferringNetworksLiveRequestInfo`](BacklinksReferringNetworksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

Successful operation

***

### summaryLive()

> **summaryLive**(`body`): `Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

Defined in: main.ts:12231

#### Parameters

##### body

[`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

Successful operation

***

### timeseriesNewLostSummaryLive()

> **timeseriesNewLostSummaryLive**(`body`): `Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

Defined in: main.ts:12735

#### Parameters

##### body

[`BacklinksTimeseriesNewLostSummaryLiveRequestInfo`](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

Successful operation

***

### timeseriesSummaryLive()

> **timeseriesSummaryLive**(`body`): `Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

Defined in: main.ts:12693

#### Parameters

##### body

[`BacklinksTimeseriesSummaryLiveRequestInfo`](BacklinksTimeseriesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

Successful operation
