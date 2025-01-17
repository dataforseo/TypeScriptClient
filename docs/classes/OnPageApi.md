[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageApi

# Class: OnPageApi

Defined in: main.ts:13068

## Constructors

### new OnPageApi()

> **new OnPageApi**(`baseUrl`?, `http`?): [`OnPageApi`](OnPageApi.md)

Defined in: main.ts:13073

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

[`OnPageApi`](OnPageApi.md)

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:13071

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### contentParsing()

> **contentParsing**(`body`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

Defined in: main.ts:13915

#### Parameters

##### body

[`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

Successful operation

***

### contentParsingLive()

> **contentParsingLive**(`body`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

Defined in: main.ts:13957

#### Parameters

##### body

[`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

Successful operation

***

### duplicateContent()

> **duplicateContent**(`body`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

Defined in: main.ts:13537

#### Parameters

##### body

[`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

Successful operation

***

### duplicateTags()

> **duplicateTags**(`body`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

Defined in: main.ts:13495

#### Parameters

##### body

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

Successful operation

***

### forceStop()

> **forceStop**(`body`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

Defined in: main.ts:13166

#### Parameters

##### body

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

Successful operation

***

### instantPages()

> **instantPages**(`body`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

Defined in: main.ts:13999

#### Parameters

##### body

[`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

Successful operation

***

### keywordDensity()

> **keywordDensity**(`body`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

Defined in: main.ts:13747

#### Parameters

##### body

[`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

Successful operation

***

### lighthouseAudits()

> **lighthouseAudits**(): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Defined in: main.ts:14077

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Successful operation

***

### lighthouseLiveJson()

> **lighthouseLiveJson**(`body`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

Defined in: main.ts:14276

#### Parameters

##### body

[`OnPageLighthouseLiveJsonRequestInfo`](OnPageLighthouseLiveJsonRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

Successful operation

***

### lighthouseTaskGetJson()

> **lighthouseTaskGetJson**(`id`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

Defined in: main.ts:14235

#### Parameters

##### id

`string`

task identifier
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Returns

`Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

Successful operation

***

### lighthouseTaskPost()

> **lighthouseTaskPost**(`body`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

Defined in: main.ts:14152

#### Parameters

##### body

[`OnPageLighthouseTaskPostRequestInfo`](OnPageLighthouseTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

Successful operation

***

### lighthouseTasksReady()

> **lighthouseTasksReady**(): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Defined in: main.ts:14193

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Successful operation

***

### lighthouseVersions()

> **lighthouseVersions**(): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Defined in: main.ts:14114

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Successful operation

***

### links()

> **links**(`body`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

Defined in: main.ts:13579

#### Parameters

##### body

[`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

Successful operation

***

### microdata()

> **microdata**(`body`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

Defined in: main.ts:13789

#### Parameters

##### body

[`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

Successful operation

***

### nonIndexable()

> **nonIndexable**(`body`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

Defined in: main.ts:13663

#### Parameters

##### body

[`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

Successful operation

***

### onPageAvailableFilters()

> **onPageAvailableFilters**(): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:13207

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Successful operation

***

### onPageErrors()

> **onPageErrors**(`body`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

Defined in: main.ts:13124

#### Parameters

##### body

[`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

Successful operation

***

### onPageIdList()

> **onPageIdList**(`body`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

Defined in: main.ts:13082

#### Parameters

##### body

[`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

Successful operation

***

### onPageLighthouseLanguages()

> **onPageLighthouseLanguages**(): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Defined in: main.ts:14040

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Successful operation

***

### onPageTasksReady()

> **onPageTasksReady**(): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Defined in: main.ts:13286

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Successful operation

***

### pages()

> **pages**(`body`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

Defined in: main.ts:13369

#### Parameters

##### body

[`OnPagePagesRequestInfo`](OnPagePagesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

Successful operation

***

### pagesByResource()

> **pagesByResource**(`body`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

Defined in: main.ts:13411

#### Parameters

##### body

[`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

Successful operation

***

### pageScreenshot()

> **pageScreenshot**(`body`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

Defined in: main.ts:13873

#### Parameters

##### body

[`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

Successful operation

***

### processContentParsing()

> `protected` **processContentParsing**(`response`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

Defined in: main.ts:13935

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

***

### processContentParsingLive()

> `protected` **processContentParsingLive**(`response`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

Defined in: main.ts:13977

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

***

### processDuplicateContent()

> `protected` **processDuplicateContent**(`response`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

Defined in: main.ts:13557

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

***

### processDuplicateTags()

> `protected` **processDuplicateTags**(`response`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

Defined in: main.ts:13515

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

***

### processForceStop()

> `protected` **processForceStop**(`response`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

Defined in: main.ts:13186

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

***

### processInstantPages()

> `protected` **processInstantPages**(`response`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

Defined in: main.ts:14019

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

***

### processKeywordDensity()

> `protected` **processKeywordDensity**(`response`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

Defined in: main.ts:13767

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

***

### processLighthouseAudits()

> `protected` **processLighthouseAudits**(`response`): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Defined in: main.ts:14093

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

***

### processLighthouseLiveJson()

> `protected` **processLighthouseLiveJson**(`response`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

Defined in: main.ts:14296

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

***

### processLighthouseTaskGetJson()

> `protected` **processLighthouseTaskGetJson**(`response`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

Defined in: main.ts:14254

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

***

### processLighthouseTaskPost()

> `protected` **processLighthouseTaskPost**(`response`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

Defined in: main.ts:14172

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

***

### processLighthouseTasksReady()

> `protected` **processLighthouseTasksReady**(`response`): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Defined in: main.ts:14209

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

***

### processLighthouseVersions()

> `protected` **processLighthouseVersions**(`response`): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Defined in: main.ts:14130

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

***

### processLinks()

> `protected` **processLinks**(`response`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

Defined in: main.ts:13599

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

***

### processMicrodata()

> `protected` **processMicrodata**(`response`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

Defined in: main.ts:13809

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

***

### processNonIndexable()

> `protected` **processNonIndexable**(`response`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

Defined in: main.ts:13683

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

***

### processOnPageAvailableFilters()

> `protected` **processOnPageAvailableFilters**(`response`): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Defined in: main.ts:13223

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

***

### processOnPageErrors()

> `protected` **processOnPageErrors**(`response`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

Defined in: main.ts:13144

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

***

### processOnPageIdList()

> `protected` **processOnPageIdList**(`response`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

Defined in: main.ts:13102

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

***

### processOnPageLighthouseLanguages()

> `protected` **processOnPageLighthouseLanguages**(`response`): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Defined in: main.ts:14056

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

***

### processOnPageTasksReady()

> `protected` **processOnPageTasksReady**(`response`): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Defined in: main.ts:13302

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

***

### processPages()

> `protected` **processPages**(`response`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

Defined in: main.ts:13389

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

***

### processPagesByResource()

> `protected` **processPagesByResource**(`response`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

Defined in: main.ts:13431

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

***

### processPageScreenshot()

> `protected` **processPageScreenshot**(`response`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

Defined in: main.ts:13893

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

***

### processRawHtml()

> `protected` **processRawHtml**(`response`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

Defined in: main.ts:13851

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

***

### processRedirectChains()

> `protected` **processRedirectChains**(`response`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

Defined in: main.ts:13641

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

***

### processResources()

> `protected` **processResources**(`response`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

Defined in: main.ts:13473

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

***

### processSummary()

> `protected` **processSummary**(`response`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

Defined in: main.ts:13347

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

***

### processTaskPost()

> `protected` **processTaskPost**(`response`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

Defined in: main.ts:13265

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

***

### processWaterfall()

> `protected` **processWaterfall**(`response`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

Defined in: main.ts:13725

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

***

### rawHtml()

> **rawHtml**(`body`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

Defined in: main.ts:13831

#### Parameters

##### body

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

Successful operation

***

### redirectChains()

> **redirectChains**(`body`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

Defined in: main.ts:13621

#### Parameters

##### body

[`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

Successful operation

***

### resources()

> **resources**(`body`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

Defined in: main.ts:13453

#### Parameters

##### body

[`OnPageResourcesRequestInfo`](OnPageResourcesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

Successful operation

***

### summary()

> **summary**(`id`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

Defined in: main.ts:13328

#### Parameters

##### id

`string`

task identifier
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Returns

`Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

Successful operation

***

### taskPost()

> **taskPost**(`body`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

Defined in: main.ts:13245

#### Parameters

##### body

[`OnPageTaskPostRequestInfo`](OnPageTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

Successful operation

***

### waterfall()

> **waterfall**(`body`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

Defined in: main.ts:13705

#### Parameters

##### body

[`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

Successful operation
