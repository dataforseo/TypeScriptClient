**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksApi

# Class: BacklinksApi

## Constructors

### new BacklinksApi(baseUrl, http)

> **new BacklinksApi**(`baseUrl`?, `http`?): [`BacklinksApi`](BacklinksApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`BacklinksApi`](BacklinksApi.md)

#### Source

main.ts:11058

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:11055

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

main.ts:11054

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:11056

## Methods

### anchorsLive()

> **anchorsLive**(`body`): `Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksAnchorsLiveRequestInfo`](BacklinksAnchorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11351

***

### backlinksAvailableFilters()

> **backlinksAvailableFilters**(): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

Successful operation

#### Source

main.ts:11150

***

### backlinksErrors()

> **backlinksErrors**(`body`): `Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksErrorsRequestInfo`](BacklinksErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

Successful operation

#### Source

main.ts:11109

***

### backlinksIdList()

> **backlinksIdList**(`body`): `Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksIdListRequestInfo`](BacklinksIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

Successful operation

#### Source

main.ts:11067

***

### backlinksLive()

> **backlinksLive**(`body`): `Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBacklinksLiveRequestInfo`](BacklinksBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11309

***

### bulkBacklinksLive()

> **bulkBacklinksLive**(`body`): `Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkBacklinksLiveRequestInfo`](BacklinksBulkBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11813

***

### bulkNewLostBacklinksLive()

> **bulkNewLostBacklinksLive**(`body`): `Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkNewLostBacklinksLiveRequestInfo`](BacklinksBulkNewLostBacklinksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11939

***

### bulkNewLostReferringDomainsLive()

> **bulkNewLostReferringDomainsLive**(`body`): `Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkNewLostReferringDomainsLiveRequestInfo`](BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11981

***

### bulkPagesSummaryLive()

> **bulkPagesSummaryLive**(`body`): `Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkPagesSummaryLiveRequestInfo`](BacklinksBulkPagesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:12023

***

### bulkRanksLive()

> **bulkRanksLive**(`body`): `Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkRanksLiveRequestInfo`](BacklinksBulkRanksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11771

***

### bulkReferringDomainsLive()

> **bulkReferringDomainsLive**(`body`): `Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkReferringDomainsLiveRequestInfo`](BacklinksBulkReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11897

***

### bulkSpamScoreLive()

> **bulkSpamScoreLive**(`body`): `Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksBulkSpamScoreLiveRequestInfo`](BacklinksBulkSpamScoreLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11855

***

### competitorsLive()

> **competitorsLive**(`body`): `Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksCompetitorsLiveRequestInfo`](BacklinksCompetitorsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11561

***

### domainIntersectionLive()

> **domainIntersectionLive**(`body`): `Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksDomainIntersectionLiveRequestInfo`](BacklinksDomainIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11603

***

### domainPagesLive()

> **domainPagesLive**(`body`): `Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksDomainPagesLiveRequestInfo`](BacklinksDomainPagesLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11393

***

### domainPagesSummaryLive()

> **domainPagesSummaryLive**(`body`): `Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksDomainPagesSummaryLiveRequestInfo`](BacklinksDomainPagesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11435

***

### historyLive()

> **historyLive**(`body`): `Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksHistoryLiveRequestInfo`](BacklinksHistoryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11267

***

### index()

> **index**(): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

Successful operation

#### Source

main.ts:11187

***

### pageIntersectionLive()

> **pageIntersectionLive**(`body`): `Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksPageIntersectionLiveRequestInfo`](BacklinksPageIntersectionLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11645

***

### processAnchorsLive()

> **`protected`** **processAnchorsLive**(`response`): `Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Source

main.ts:11371

***

### processBacklinksAvailableFilters()

> **`protected`** **processBacklinksAvailableFilters**(`response`): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Source

main.ts:11166

***

### processBacklinksErrors()

> **`protected`** **processBacklinksErrors**(`response`): `Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Source

main.ts:11129

***

### processBacklinksIdList()

> **`protected`** **processBacklinksIdList**(`response`): `Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Source

main.ts:11087

***

### processBacklinksLive()

> **`protected`** **processBacklinksLive**(`response`): `Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Source

main.ts:11329

***

### processBulkBacklinksLive()

> **`protected`** **processBulkBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Source

main.ts:11833

***

### processBulkNewLostBacklinksLive()

> **`protected`** **processBulkNewLostBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Source

main.ts:11959

***

### processBulkNewLostReferringDomainsLive()

> **`protected`** **processBulkNewLostReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Source

main.ts:12001

***

### processBulkPagesSummaryLive()

> **`protected`** **processBulkPagesSummaryLive**(`response`): `Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Source

main.ts:12043

***

### processBulkRanksLive()

> **`protected`** **processBulkRanksLive**(`response`): `Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Source

main.ts:11791

***

### processBulkReferringDomainsLive()

> **`protected`** **processBulkReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Source

main.ts:11917

***

### processBulkSpamScoreLive()

> **`protected`** **processBulkSpamScoreLive**(`response`): `Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Source

main.ts:11875

***

### processCompetitorsLive()

> **`protected`** **processCompetitorsLive**(`response`): `Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:11581

***

### processDomainIntersectionLive()

> **`protected`** **processDomainIntersectionLive**(`response`): `Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:11623

***

### processDomainPagesLive()

> **`protected`** **processDomainPagesLive**(`response`): `Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Source

main.ts:11413

***

### processDomainPagesSummaryLive()

> **`protected`** **processDomainPagesSummaryLive**(`response`): `Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Source

main.ts:11455

***

### processHistoryLive()

> **`protected`** **processHistoryLive**(`response`): `Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Source

main.ts:11287

***

### processIndex()

> **`protected`** **processIndex**(`response`): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Source

main.ts:11203

***

### processPageIntersectionLive()

> **`protected`** **processPageIntersectionLive**(`response`): `Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:11665

***

### processReferringDomainsLive()

> **`protected`** **processReferringDomainsLive**(`response`): `Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Source

main.ts:11497

***

### processReferringNetworksLive()

> **`protected`** **processReferringNetworksLive**(`response`): `Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Source

main.ts:11539

***

### processSummaryLive()

> **`protected`** **processSummaryLive**(`response`): `Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Source

main.ts:11245

***

### processTimeseriesNewLostSummaryLive()

> **`protected`** **processTimeseriesNewLostSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Source

main.ts:11749

***

### processTimeseriesSummaryLive()

> **`protected`** **processTimeseriesSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Source

main.ts:11707

***

### referringDomainsLive()

> **referringDomainsLive**(`body`): `Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksReferringDomainsLiveRequestInfo`](BacklinksReferringDomainsLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11477

***

### referringNetworksLive()

> **referringNetworksLive**(`body`): `Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksReferringNetworksLiveRequestInfo`](BacklinksReferringNetworksLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11519

***

### summaryLive()

> **summaryLive**(`body`): `Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksSummaryLiveRequestInfo`](BacklinksSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11225

***

### timeseriesNewLostSummaryLive()

> **timeseriesNewLostSummaryLive**(`body`): `Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksTimeseriesNewLostSummaryLiveRequestInfo`](BacklinksTimeseriesNewLostSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11729

***

### timeseriesSummaryLive()

> **timeseriesSummaryLive**(`body`): `Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Parameters

• **body**: [`BacklinksTimeseriesSummaryLiveRequestInfo`](BacklinksTimeseriesSummaryLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:11687
