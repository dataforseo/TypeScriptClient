[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageApi

# Class: OnPageApi

## Constructors

### new OnPageApi()

> **new OnPageApi**(`baseUrl`?, `http`?): [`OnPageApi`](OnPageApi.md)

#### Parameters

##### baseUrl?

`string`

##### http?

###### http.fetch

#### Returns

[`OnPageApi`](OnPageApi.md)

#### Defined in

main.ts:13073

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

main.ts:13071

## Methods

### contentParsing()

> **contentParsing**(`body`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

#### Parameters

##### body

[`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13915

***

### contentParsingLive()

> **contentParsingLive**(`body`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

#### Parameters

##### body

[`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13957

***

### duplicateContent()

> **duplicateContent**(`body`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

#### Parameters

##### body

[`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13537

***

### duplicateTags()

> **duplicateTags**(`body`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

#### Parameters

##### body

[`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13495

***

### forceStop()

> **forceStop**(`body`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

#### Parameters

##### body

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13166

***

### instantPages()

> **instantPages**(`body`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

#### Parameters

##### body

[`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13999

***

### keywordDensity()

> **keywordDensity**(`body`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

#### Parameters

##### body

[`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13747

***

### lighthouseAudits()

> **lighthouseAudits**(): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14077

***

### lighthouseLiveJson()

> **lighthouseLiveJson**(`body`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

#### Parameters

##### body

[`OnPageLighthouseLiveJsonRequestInfo`](OnPageLighthouseLiveJsonRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14276

***

### lighthouseTaskGetJson()

> **lighthouseTaskGetJson**(`id`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

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

#### Defined in

main.ts:14235

***

### lighthouseTaskPost()

> **lighthouseTaskPost**(`body`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`OnPageLighthouseTaskPostRequestInfo`](OnPageLighthouseTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14152

***

### lighthouseTasksReady()

> **lighthouseTasksReady**(): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14193

***

### lighthouseVersions()

> **lighthouseVersions**(): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14114

***

### links()

> **links**(`body`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

#### Parameters

##### body

[`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13579

***

### microdata()

> **microdata**(`body`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

#### Parameters

##### body

[`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13789

***

### nonIndexable()

> **nonIndexable**(`body`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

#### Parameters

##### body

[`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13663

***

### onPageAvailableFilters()

> **onPageAvailableFilters**(): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13207

***

### onPageErrors()

> **onPageErrors**(`body`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

#### Parameters

##### body

[`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13124

***

### onPageIdList()

> **onPageIdList**(`body`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

#### Parameters

##### body

[`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13082

***

### onPageLighthouseLanguages()

> **onPageLighthouseLanguages**(): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:14040

***

### onPageTasksReady()

> **onPageTasksReady**(): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13286

***

### pages()

> **pages**(`body`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

#### Parameters

##### body

[`OnPagePagesRequestInfo`](OnPagePagesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13369

***

### pagesByResource()

> **pagesByResource**(`body`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

#### Parameters

##### body

[`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13411

***

### pageScreenshot()

> **pageScreenshot**(`body`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

#### Parameters

##### body

[`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13873

***

### processContentParsing()

> `protected` **processContentParsing**(`response`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

#### Defined in

main.ts:13935

***

### processContentParsingLive()

> `protected` **processContentParsingLive**(`response`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

#### Defined in

main.ts:13977

***

### processDuplicateContent()

> `protected` **processDuplicateContent**(`response`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

#### Defined in

main.ts:13557

***

### processDuplicateTags()

> `protected` **processDuplicateTags**(`response`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

#### Defined in

main.ts:13515

***

### processForceStop()

> `protected` **processForceStop**(`response`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

#### Defined in

main.ts:13186

***

### processInstantPages()

> `protected` **processInstantPages**(`response`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

#### Defined in

main.ts:14019

***

### processKeywordDensity()

> `protected` **processKeywordDensity**(`response`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

#### Defined in

main.ts:13767

***

### processLighthouseAudits()

> `protected` **processLighthouseAudits**(`response`): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Defined in

main.ts:14093

***

### processLighthouseLiveJson()

> `protected` **processLighthouseLiveJson**(`response`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

#### Defined in

main.ts:14296

***

### processLighthouseTaskGetJson()

> `protected` **processLighthouseTaskGetJson**(`response`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

#### Defined in

main.ts:14254

***

### processLighthouseTaskPost()

> `protected` **processLighthouseTaskPost**(`response`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

#### Defined in

main.ts:14172

***

### processLighthouseTasksReady()

> `protected` **processLighthouseTasksReady**(`response`): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:14209

***

### processLighthouseVersions()

> `protected` **processLighthouseVersions**(`response`): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Defined in

main.ts:14130

***

### processLinks()

> `protected` **processLinks**(`response`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

#### Defined in

main.ts:13599

***

### processMicrodata()

> `protected` **processMicrodata**(`response`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

#### Defined in

main.ts:13809

***

### processNonIndexable()

> `protected` **processNonIndexable**(`response`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

#### Defined in

main.ts:13683

***

### processOnPageAvailableFilters()

> `protected` **processOnPageAvailableFilters**(`response`): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:13223

***

### processOnPageErrors()

> `protected` **processOnPageErrors**(`response`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

#### Defined in

main.ts:13144

***

### processOnPageIdList()

> `protected` **processOnPageIdList**(`response`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

#### Defined in

main.ts:13102

***

### processOnPageLighthouseLanguages()

> `protected` **processOnPageLighthouseLanguages**(`response`): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Defined in

main.ts:14056

***

### processOnPageTasksReady()

> `protected` **processOnPageTasksReady**(`response`): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:13302

***

### processPages()

> `protected` **processPages**(`response`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

#### Defined in

main.ts:13389

***

### processPagesByResource()

> `protected` **processPagesByResource**(`response`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

#### Defined in

main.ts:13431

***

### processPageScreenshot()

> `protected` **processPageScreenshot**(`response`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

#### Defined in

main.ts:13893

***

### processRawHtml()

> `protected` **processRawHtml**(`response`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

#### Defined in

main.ts:13851

***

### processRedirectChains()

> `protected` **processRedirectChains**(`response`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

#### Defined in

main.ts:13641

***

### processResources()

> `protected` **processResources**(`response`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

#### Defined in

main.ts:13473

***

### processSummary()

> `protected` **processSummary**(`response`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

#### Defined in

main.ts:13347

***

### processTaskPost()

> `protected` **processTaskPost**(`response`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

#### Defined in

main.ts:13265

***

### processWaterfall()

> `protected` **processWaterfall**(`response`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

#### Defined in

main.ts:13725

***

### rawHtml()

> **rawHtml**(`body`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

#### Parameters

##### body

[`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13831

***

### redirectChains()

> **redirectChains**(`body`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

#### Parameters

##### body

[`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13621

***

### resources()

> **resources**(`body`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

#### Parameters

##### body

[`OnPageResourcesRequestInfo`](OnPageResourcesRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13453

***

### summary()

> **summary**(`id`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

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

#### Defined in

main.ts:13328

***

### taskPost()

> **taskPost**(`body`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

#### Parameters

##### body

[`OnPageTaskPostRequestInfo`](OnPageTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13245

***

### waterfall()

> **waterfall**(`body`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

#### Parameters

##### body

[`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13705
