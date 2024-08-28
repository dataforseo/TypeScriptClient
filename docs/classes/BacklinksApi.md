[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BacklinksApi

# Class: BacklinksApi

## Constructors

### new BacklinksApi()

> **new BacklinksApi**(`baseUrl`?, `http`?): [`BacklinksApi`](BacklinksApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http.fetch?**

#### Returns

[`BacklinksApi`](BacklinksApi.md)

#### Defined in

main.ts:11508

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Defined in

main.ts:11506

## Methods

### anchorsLive()

> **anchorsLive**(`body`): `Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksAnchorsLiveRequestInfo`](BacklinksAnchorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11801

***

### backlinksAvailableFilters()

> **backlinksAvailableFilters**(): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11600

***

### backlinksErrors()

> **backlinksErrors**(`body`): `Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11559

***

### backlinksIdList()

> **backlinksIdList**(`body`): `Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11517

***

### backlinksLive()

> **backlinksLive**(`body`): `Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBacklinksLiveRequestInfo`](BacklinksBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11759

***

### bulkBacklinksLive()

> **bulkBacklinksLive**(`body`): `Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12263

***

### bulkNewLostBacklinksLive()

> **bulkNewLostBacklinksLive**(`body`): `Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkNewLostBacklinksLiveRequestInfo`](BacklinksBulkNewLostBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12389

***

### bulkNewLostReferringDomainsLive()

> **bulkNewLostReferringDomainsLive**(`body`): `Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkNewLostReferringDomainsLiveRequestInfo`](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12431

***

### bulkPagesSummaryLive()

> **bulkPagesSummaryLive**(`body`): `Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12473

***

### bulkRanksLive()

> **bulkRanksLive**(`body`): `Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12221

***

### bulkReferringDomainsLive()

> **bulkReferringDomainsLive**(`body`): `Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkReferringDomainsLiveRequestInfo`](BacklinksBulkReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12347

***

### bulkSpamScoreLive()

> **bulkSpamScoreLive**(`body`): `Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12305

***

### competitorsLive()

> **competitorsLive**(`body`): `Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksCompetitorsLiveRequestInfo`](BacklinksCompetitorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12011

***

### domainIntersectionLive()

> **domainIntersectionLive**(`body`): `Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12053

***

### domainPagesLive()

> **domainPagesLive**(`body`): `Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11843

***

### domainPagesSummaryLive()

> **domainPagesSummaryLive**(`body`): `Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksDomainPagesSummaryLiveRequestInfo`](BacklinksDomainPagesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11885

***

### historyLive()

> **historyLive**(`body`): `Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11717

***

### index()

> **index**(): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11637

***

### pageIntersectionLive()

> **pageIntersectionLive**(`body`): `Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksPageIntersectionLiveRequestInfo`](BacklinksPageIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12095

***

### processAnchorsLive()

> `protected` **processAnchorsLive**(`response`): `Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Defined in

main.ts:11821

***

### processBacklinksAvailableFilters()

> `protected` **processBacklinksAvailableFilters**(`response`): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:11616

***

### processBacklinksErrors()

> `protected` **processBacklinksErrors**(`response`): `Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Defined in

main.ts:11579

***

### processBacklinksIdList()

> `protected` **processBacklinksIdList**(`response`): `Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Defined in

main.ts:11537

***

### processBacklinksLive()

> `protected` **processBacklinksLive**(`response`): `Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Defined in

main.ts:11779

***

### processBulkBacklinksLive()

> `protected` **processBulkBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Defined in

main.ts:12283

***

### processBulkNewLostBacklinksLive()

> `protected` **processBulkNewLostBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Defined in

main.ts:12409

***

### processBulkNewLostReferringDomainsLive()

> `protected` **processBulkNewLostReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Defined in

main.ts:12451

***

### processBulkPagesSummaryLive()

> `protected` **processBulkPagesSummaryLive**(`response`): `Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:12493

***

### processBulkRanksLive()

> `protected` **processBulkRanksLive**(`response`): `Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Defined in

main.ts:12241

***

### processBulkReferringDomainsLive()

> `protected` **processBulkReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Defined in

main.ts:12367

***

### processBulkSpamScoreLive()

> `protected` **processBulkSpamScoreLive**(`response`): `Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Defined in

main.ts:12325

***

### processCompetitorsLive()

> `protected` **processCompetitorsLive**(`response`): `Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Defined in

main.ts:12031

***

### processDomainIntersectionLive()

> `protected` **processDomainIntersectionLive**(`response`): `Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:12073

***

### processDomainPagesLive()

> `protected` **processDomainPagesLive**(`response`): `Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Defined in

main.ts:11863

***

### processDomainPagesSummaryLive()

> `protected` **processDomainPagesSummaryLive**(`response`): `Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:11905

***

### processHistoryLive()

> `protected` **processHistoryLive**(`response`): `Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Defined in

main.ts:11737

***

### processIndex()

> `protected` **processIndex**(`response`): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Defined in

main.ts:11653

***

### processPageIntersectionLive()

> `protected` **processPageIntersectionLive**(`response`): `Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Defined in

main.ts:12115

***

### processReferringDomainsLive()

> `protected` **processReferringDomainsLive**(`response`): `Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Defined in

main.ts:11947

***

### processReferringNetworksLive()

> `protected` **processReferringNetworksLive**(`response`): `Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Defined in

main.ts:11989

***

### processSummaryLive()

> `protected` **processSummaryLive**(`response`): `Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:11695

***

### processTimeseriesNewLostSummaryLive()

> `protected` **processTimeseriesNewLostSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:12199

***

### processTimeseriesSummaryLive()

> `protected` **processTimeseriesSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Defined in

main.ts:12157

***

### referringDomainsLive()

> **referringDomainsLive**(`body`): `Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksReferringDomainsLiveRequestInfo`](BacklinksReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11927

***

### referringNetworksLive()

> **referringNetworksLive**(`body`): `Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksReferringNetworksLiveRequestInfo`](BacklinksReferringNetworksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11969

***

### summaryLive()

> **summaryLive**(`body`): `Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11675

***

### timeseriesNewLostSummaryLive()

> **timeseriesNewLostSummaryLive**(`body`): `Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksTimeseriesNewLostSummaryLiveRequestInfo`](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12179

***

### timeseriesSummaryLive()

> **timeseriesSummaryLive**(`body`): `Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksTimeseriesSummaryLiveRequestInfo`](BacklinksTimeseriesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12137
