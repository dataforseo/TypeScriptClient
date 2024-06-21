**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageApi

# Class: OnPageApi

## Constructors

### new OnPageApi(baseUrl, http)

> **new OnPageApi**(`baseUrl`?, `http`?): [`OnPageApi`](OnPageApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`OnPageApi`](OnPageApi.md)

#### Source

main.ts:12067

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:12064

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

main.ts:12063

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:12065

## Methods

### contentParsing()

> **contentParsing**(`body`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

Successful operation

#### Source

main.ts:12909

***

### contentParsingLive()

> **contentParsingLive**(`body`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

Successful operation

#### Source

main.ts:12951

***

### duplicateContent()

> **duplicateContent**(`body`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

Successful operation

#### Source

main.ts:12531

***

### duplicateTags()

> **duplicateTags**(`body`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

Successful operation

#### Source

main.ts:12489

***

### forceStop()

> **forceStop**(`body`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

Successful operation

#### Source

main.ts:12160

***

### instantPages()

> **instantPages**(`body`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:12993

***

### keywordDensity()

> **keywordDensity**(`body`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

Successful operation

#### Source

main.ts:12741

***

### lighthouseAudits()

> **lighthouseAudits**(): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Successful operation

#### Source

main.ts:13071

***

### lighthouseLiveJson()

> **lighthouseLiveJson**(`body`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageLighthouseLiveJsonRequestInfo`](OnPageLighthouseLiveJsonRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

Successful operation

#### Source

main.ts:13270

***

### lighthouseTaskGetJson()

> **lighthouseTaskGetJson**(`id`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Returns

`Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

Successful operation

#### Source

main.ts:13229

***

### lighthouseTaskPost()

> **lighthouseTaskPost**(`body`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageLighthouseTaskPostRequestInfo`](OnPageLighthouseTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:13146

***

### lighthouseTasksReady()

> **lighthouseTasksReady**(): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:13187

***

### lighthouseVersions()

> **lighthouseVersions**(): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Successful operation

#### Source

main.ts:13108

***

### links()

> **links**(`body`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

Successful operation

#### Source

main.ts:12573

***

### microdata()

> **microdata**(`body`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

Successful operation

#### Source

main.ts:12783

***

### nonIndexable()

> **nonIndexable**(`body`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

Successful operation

#### Source

main.ts:12657

***

### onPageAvailableFilters()

> **onPageAvailableFilters**(): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Successful operation

#### Source

main.ts:12201

***

### onPageErrors()

> **onPageErrors**(`body`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

Successful operation

#### Source

main.ts:12118

***

### onPageIdList()

> **onPageIdList**(`body`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

Successful operation

#### Source

main.ts:12076

***

### onPageLighthouseLanguages()

> **onPageLighthouseLanguages**(): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:13034

***

### onPageTasksReady()

> **onPageTasksReady**(): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:12280

***

### pageScreenshot()

> **pageScreenshot**(`body`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

#### Parameters

• **body**: [`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

Successful operation

#### Source

main.ts:12867

***

### pages()

> **pages**(`body`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

#### Parameters

• **body**: [`OnPagePagesRequestInfo`](OnPagePagesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:12363

***

### pagesByResource()

> **pagesByResource**(`body`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

#### Parameters

• **body**: [`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

Successful operation

#### Source

main.ts:12405

***

### processContentParsing()

> **`protected`** **processContentParsing**(`response`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

#### Source

main.ts:12929

***

### processContentParsingLive()

> **`protected`** **processContentParsingLive**(`response`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

#### Source

main.ts:12971

***

### processDuplicateContent()

> **`protected`** **processDuplicateContent**(`response`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

#### Source

main.ts:12551

***

### processDuplicateTags()

> **`protected`** **processDuplicateTags**(`response`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

#### Source

main.ts:12509

***

### processForceStop()

> **`protected`** **processForceStop**(`response`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

#### Source

main.ts:12180

***

### processInstantPages()

> **`protected`** **processInstantPages**(`response`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

#### Source

main.ts:13013

***

### processKeywordDensity()

> **`protected`** **processKeywordDensity**(`response`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

#### Source

main.ts:12761

***

### processLighthouseAudits()

> **`protected`** **processLighthouseAudits**(`response`): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Source

main.ts:13087

***

### processLighthouseLiveJson()

> **`protected`** **processLighthouseLiveJson**(`response`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

#### Source

main.ts:13290

***

### processLighthouseTaskGetJson()

> **`protected`** **processLighthouseTaskGetJson**(`response`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

#### Source

main.ts:13248

***

### processLighthouseTaskPost()

> **`protected`** **processLighthouseTaskPost**(`response`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

#### Source

main.ts:13166

***

### processLighthouseTasksReady()

> **`protected`** **processLighthouseTasksReady**(`response`): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Source

main.ts:13203

***

### processLighthouseVersions()

> **`protected`** **processLighthouseVersions**(`response`): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Source

main.ts:13124

***

### processLinks()

> **`protected`** **processLinks**(`response`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

#### Source

main.ts:12593

***

### processMicrodata()

> **`protected`** **processMicrodata**(`response`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

#### Source

main.ts:12803

***

### processNonIndexable()

> **`protected`** **processNonIndexable**(`response`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

#### Source

main.ts:12677

***

### processOnPageAvailableFilters()

> **`protected`** **processOnPageAvailableFilters**(`response`): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Source

main.ts:12217

***

### processOnPageErrors()

> **`protected`** **processOnPageErrors**(`response`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

#### Source

main.ts:12138

***

### processOnPageIdList()

> **`protected`** **processOnPageIdList**(`response`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

#### Source

main.ts:12096

***

### processOnPageLighthouseLanguages()

> **`protected`** **processOnPageLighthouseLanguages**(`response`): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Source

main.ts:13050

***

### processOnPageTasksReady()

> **`protected`** **processOnPageTasksReady**(`response`): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Source

main.ts:12296

***

### processPageScreenshot()

> **`protected`** **processPageScreenshot**(`response`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

#### Source

main.ts:12887

***

### processPages()

> **`protected`** **processPages**(`response`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

#### Source

main.ts:12383

***

### processPagesByResource()

> **`protected`** **processPagesByResource**(`response`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

#### Source

main.ts:12425

***

### processRawHtml()

> **`protected`** **processRawHtml**(`response`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

#### Source

main.ts:12845

***

### processRedirectChains()

> **`protected`** **processRedirectChains**(`response`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

#### Source

main.ts:12635

***

### processResources()

> **`protected`** **processResources**(`response`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

#### Source

main.ts:12467

***

### processSummary()

> **`protected`** **processSummary**(`response`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

#### Source

main.ts:12341

***

### processTaskPost()

> **`protected`** **processTaskPost**(`response`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

#### Source

main.ts:12259

***

### processWaterfall()

> **`protected`** **processWaterfall**(`response`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

#### Source

main.ts:12719

***

### rawHtml()

> **rawHtml**(`body`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:12825

***

### redirectChains()

> **redirectChains**(`body`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

Successful operation

#### Source

main.ts:12615

***

### resources()

> **resources**(`body`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageResourcesRequestInfo`](OnPageResourcesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

Successful operation

#### Source

main.ts:12447

***

### summary()

> **summary**(`id`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Returns

`Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

Successful operation

#### Source

main.ts:12322

***

### taskPost()

> **taskPost**(`body`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageTaskRequestInfo`](OnPageTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:12239

***

### waterfall()

> **waterfall**(`body`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

#### Parameters

• **body**: [`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

Successful operation

#### Source

main.ts:12699
