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

main.ts:11020

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:11017

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

main.ts:11016

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:11018

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

main.ts:11313

***

### backlinksAvailableFilters()

> **backlinksAvailableFilters**(): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

Successful operation

#### Source

main.ts:11112

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

main.ts:11071

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

main.ts:11029

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

main.ts:11271

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

main.ts:11775

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

main.ts:11901

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

main.ts:11943

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

main.ts:11985

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

main.ts:11733

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

main.ts:11859

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

main.ts:11817

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

main.ts:11523

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

main.ts:11565

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

main.ts:11355

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

main.ts:11397

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

main.ts:11229

***

### index()

> **index**(): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

Successful operation

#### Source

main.ts:11149

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

main.ts:11607

***

### processAnchorsLive()

> **`protected`** **processAnchorsLive**(`response`): `Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksAnchorsLiveResponseInfo`](BacklinksAnchorsLiveResponseInfo.md)\>

#### Source

main.ts:11333

***

### processBacklinksAvailableFilters()

> **`protected`** **processBacklinksAvailableFilters**(`response`): `Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksAvailableFiltersResponseInfo`](BacklinksAvailableFiltersResponseInfo.md)\>

#### Source

main.ts:11128

***

### processBacklinksErrors()

> **`protected`** **processBacklinksErrors**(`response`): `Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksErrorsResponseInfo`](BacklinksErrorsResponseInfo.md)\>

#### Source

main.ts:11091

***

### processBacklinksIdList()

> **`protected`** **processBacklinksIdList**(`response`): `Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksIdListResponseInfo`](BacklinksIdListResponseInfo.md)\>

#### Source

main.ts:11049

***

### processBacklinksLive()

> **`protected`** **processBacklinksLive**(`response`): `Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBacklinksLiveResponseInfo`](BacklinksBacklinksLiveResponseInfo.md)\>

#### Source

main.ts:11291

***

### processBulkBacklinksLive()

> **`protected`** **processBulkBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkBacklinksLiveResponseInfo`](BacklinksBulkBacklinksLiveResponseInfo.md)\>

#### Source

main.ts:11795

***

### processBulkNewLostBacklinksLive()

> **`protected`** **processBulkNewLostBacklinksLive**(`response`): `Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostBacklinksLiveResponseInfo`](BacklinksBulkNewLostBacklinksLiveResponseInfo.md)\>

#### Source

main.ts:11921

***

### processBulkNewLostReferringDomainsLive()

> **`protected`** **processBulkNewLostReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkNewLostReferringDomainsLiveResponseInfo`](BacklinksBulkNewLostReferringDomainsLiveResponseInfo.md)\>

#### Source

main.ts:11963

***

### processBulkPagesSummaryLive()

> **`protected`** **processBulkPagesSummaryLive**(`response`): `Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkPagesSummaryLiveResponseInfo`](BacklinksBulkPagesSummaryLiveResponseInfo.md)\>

#### Source

main.ts:12005

***

### processBulkRanksLive()

> **`protected`** **processBulkRanksLive**(`response`): `Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkRanksLiveResponseInfo`](BacklinksBulkRanksLiveResponseInfo.md)\>

#### Source

main.ts:11753

***

### processBulkReferringDomainsLive()

> **`protected`** **processBulkReferringDomainsLive**(`response`): `Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkReferringDomainsLiveResponseInfo`](BacklinksBulkReferringDomainsLiveResponseInfo.md)\>

#### Source

main.ts:11879

***

### processBulkSpamScoreLive()

> **`protected`** **processBulkSpamScoreLive**(`response`): `Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksBulkSpamScoreLiveResponseInfo`](BacklinksBulkSpamScoreLiveResponseInfo.md)\>

#### Source

main.ts:11837

***

### processCompetitorsLive()

> **`protected`** **processCompetitorsLive**(`response`): `Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksCompetitorsLiveResponseInfo`](BacklinksCompetitorsLiveResponseInfo.md)\>

#### Source

main.ts:11543

***

### processDomainIntersectionLive()

> **`protected`** **processDomainIntersectionLive**(`response`): `Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksDomainIntersectionLiveResponseInfo`](BacklinksDomainIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:11585

***

### processDomainPagesLive()

> **`protected`** **processDomainPagesLive**(`response`): `Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesLiveResponseInfo`](BacklinksDomainPagesLiveResponseInfo.md)\>

#### Source

main.ts:11375

***

### processDomainPagesSummaryLive()

> **`protected`** **processDomainPagesSummaryLive**(`response`): `Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksDomainPagesSummaryLiveResponseInfo`](BacklinksDomainPagesSummaryLiveResponseInfo.md)\>

#### Source

main.ts:11417

***

### processHistoryLive()

> **`protected`** **processHistoryLive**(`response`): `Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksHistoryLiveResponseInfo`](BacklinksHistoryLiveResponseInfo.md)\>

#### Source

main.ts:11249

***

### processIndex()

> **`protected`** **processIndex**(`response`): `Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksIndexResponseInfo`](BacklinksIndexResponseInfo.md)\>

#### Source

main.ts:11165

***

### processPageIntersectionLive()

> **`protected`** **processPageIntersectionLive**(`response`): `Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksPageIntersectionLiveResponseInfo`](BacklinksPageIntersectionLiveResponseInfo.md)\>

#### Source

main.ts:11627

***

### processReferringDomainsLive()

> **`protected`** **processReferringDomainsLive**(`response`): `Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksReferringDomainsLiveResponseInfo`](BacklinksReferringDomainsLiveResponseInfo.md)\>

#### Source

main.ts:11459

***

### processReferringNetworksLive()

> **`protected`** **processReferringNetworksLive**(`response`): `Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksReferringNetworksLiveResponseInfo`](BacklinksReferringNetworksLiveResponseInfo.md)\>

#### Source

main.ts:11501

***

### processSummaryLive()

> **`protected`** **processSummaryLive**(`response`): `Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksSummaryLiveResponseInfo`](BacklinksSummaryLiveResponseInfo.md)\>

#### Source

main.ts:11207

***

### processTimeseriesNewLostSummaryLive()

> **`protected`** **processTimeseriesNewLostSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesNewLostSummaryLiveResponseInfo`](BacklinksTimeseriesNewLostSummaryLiveResponseInfo.md)\>

#### Source

main.ts:11711

***

### processTimeseriesSummaryLive()

> **`protected`** **processTimeseriesSummaryLive**(`response`): `Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`BacklinksTimeseriesSummaryLiveResponseInfo`](BacklinksTimeseriesSummaryLiveResponseInfo.md)\>

#### Source

main.ts:11669

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

main.ts:11439

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

main.ts:11481

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

main.ts:11187

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

main.ts:11691

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

main.ts:11649
