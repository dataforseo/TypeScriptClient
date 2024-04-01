[Documentation](../README.md) / [Exports](../modules.md) / OnPageApi

# Class: OnPageApi

## Table of contents

### Constructors

- [constructor](OnPageApi.md#constructor)

### Properties

- [baseUrl](OnPageApi.md#baseurl)
- [http](OnPageApi.md#http)
- [jsonParseReviver](OnPageApi.md#jsonparsereviver)

### Methods

- [contentParsing](OnPageApi.md#contentparsing)
- [contentParsingLive](OnPageApi.md#contentparsinglive)
- [duplicateContent](OnPageApi.md#duplicatecontent)
- [duplicateTags](OnPageApi.md#duplicatetags)
- [forceStop](OnPageApi.md#forcestop)
- [instantPages](OnPageApi.md#instantpages)
- [keywordDensity](OnPageApi.md#keyworddensity)
- [lighthouseAudits](OnPageApi.md#lighthouseaudits)
- [lighthouseLiveJson](OnPageApi.md#lighthouselivejson)
- [lighthouseTaskGetJson](OnPageApi.md#lighthousetaskgetjson)
- [lighthouseTaskPost](OnPageApi.md#lighthousetaskpost)
- [lighthouseTasksReady](OnPageApi.md#lighthousetasksready)
- [lighthouseVersions](OnPageApi.md#lighthouseversions)
- [links](OnPageApi.md#links)
- [microdata](OnPageApi.md#microdata)
- [nonIndexable](OnPageApi.md#nonindexable)
- [onPageAvailableFilters](OnPageApi.md#onpageavailablefilters)
- [onPageErrors](OnPageApi.md#onpageerrors)
- [onPageIdList](OnPageApi.md#onpageidlist)
- [onPageLighthouseLanguages](OnPageApi.md#onpagelighthouselanguages)
- [pageScreenshot](OnPageApi.md#pagescreenshot)
- [pages](OnPageApi.md#pages)
- [pagesByResource](OnPageApi.md#pagesbyresource)
- [processContentParsing](OnPageApi.md#processcontentparsing)
- [processContentParsingLive](OnPageApi.md#processcontentparsinglive)
- [processDuplicateContent](OnPageApi.md#processduplicatecontent)
- [processDuplicateTags](OnPageApi.md#processduplicatetags)
- [processForceStop](OnPageApi.md#processforcestop)
- [processInstantPages](OnPageApi.md#processinstantpages)
- [processKeywordDensity](OnPageApi.md#processkeyworddensity)
- [processLighthouseAudits](OnPageApi.md#processlighthouseaudits)
- [processLighthouseLiveJson](OnPageApi.md#processlighthouselivejson)
- [processLighthouseTaskGetJson](OnPageApi.md#processlighthousetaskgetjson)
- [processLighthouseTaskPost](OnPageApi.md#processlighthousetaskpost)
- [processLighthouseTasksReady](OnPageApi.md#processlighthousetasksready)
- [processLighthouseVersions](OnPageApi.md#processlighthouseversions)
- [processLinks](OnPageApi.md#processlinks)
- [processMicrodata](OnPageApi.md#processmicrodata)
- [processNonIndexable](OnPageApi.md#processnonindexable)
- [processOnPageAvailableFilters](OnPageApi.md#processonpageavailablefilters)
- [processOnPageErrors](OnPageApi.md#processonpageerrors)
- [processOnPageIdList](OnPageApi.md#processonpageidlist)
- [processOnPageLighthouseLanguages](OnPageApi.md#processonpagelighthouselanguages)
- [processPageScreenshot](OnPageApi.md#processpagescreenshot)
- [processPages](OnPageApi.md#processpages)
- [processPagesByResource](OnPageApi.md#processpagesbyresource)
- [processRawHtml](OnPageApi.md#processrawhtml)
- [processRedirectChains](OnPageApi.md#processredirectchains)
- [processResources](OnPageApi.md#processresources)
- [processSummary](OnPageApi.md#processsummary)
- [processTaskPost](OnPageApi.md#processtaskpost)
- [processTasksReady](OnPageApi.md#processtasksready)
- [processWaterfall](OnPageApi.md#processwaterfall)
- [rawHtml](OnPageApi.md#rawhtml)
- [redirectChains](OnPageApi.md#redirectchains)
- [resources](OnPageApi.md#resources)
- [summary](OnPageApi.md#summary)
- [taskPost](OnPageApi.md#taskpost)
- [tasksReady](OnPageApi.md#tasksready)
- [waterfall](OnPageApi.md#waterfall)

## Constructors

### constructor

• **new OnPageApi**(`baseUrl?`, `http?`): [`OnPageApi`](OnPageApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl?` | `string` |
| `http?` | `Object` |
| `http.fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Returns

[`OnPageApi`](OnPageApi.md)

#### Defined in

main.ts:11950

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

main.ts:11947

___

### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

main.ts:11946

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

main.ts:11948

## Methods

### contentParsing

▸ **contentParsing**(`body`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageContentParsingRequestInfo`](OnPageContentParsingRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12792

___

### contentParsingLive

▸ **contentParsingLive**(`body`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageContentParsingLiveRequestInfo`](OnPageContentParsingLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12834

___

### duplicateContent

▸ **duplicateContent**(`body`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageDuplicateContentRequestInfo`](OnPageDuplicateContentRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12414

___

### duplicateTags

▸ **duplicateTags**(`body`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageDuplicateTagsRequestInfo`](OnPageDuplicateTagsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12372

___

### forceStop

▸ **forceStop**(`body`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12043

___

### instantPages

▸ **instantPages**(`body`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageInstantPagesRequestInfo`](OnPageInstantPagesRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12876

___

### keywordDensity

▸ **keywordDensity**(`body`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageKeywordDensityRequestInfo`](OnPageKeywordDensityRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12624

___

### lighthouseAudits

▸ **lighthouseAudits**(): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12954

___

### lighthouseLiveJson

▸ **lighthouseLiveJson**(`body`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageLighthouseLiveJsonRequestInfo`](OnPageLighthouseLiveJsonRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13153

___

### lighthouseTaskGetJson

▸ **lighthouseTaskGetJson**(`id`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier required field you can get this ID in the response of the Task POST endpoint example: “07131248-1535-0216-1000-17384017ad04” |

#### Returns

`Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13112

___

### lighthouseTaskPost

▸ **lighthouseTaskPost**(`body`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageLighthouseTaskPostRequestInfo`](OnPageLighthouseTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13029

___

### lighthouseTasksReady

▸ **lighthouseTasksReady**(): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:13070

___

### lighthouseVersions

▸ **lighthouseVersions**(): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12991

___

### links

▸ **links**(`body`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageLinksRequestInfo`](OnPageLinksRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12456

___

### microdata

▸ **microdata**(`body`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageMicrodataRequestInfo`](OnPageMicrodataRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12666

___

### nonIndexable

▸ **nonIndexable**(`body`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageNonIndexableRequestInfo`](OnPageNonIndexableRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12540

___

### onPageAvailableFilters

▸ **onPageAvailableFilters**(): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12084

___

### onPageErrors

▸ **onPageErrors**(`body`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageErrorsRequestInfo`](OnPageErrorsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12001

___

### onPageIdList

▸ **onPageIdList**(`body`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageIdListRequestInfo`](OnPageIdListRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:11959

___

### onPageLighthouseLanguages

▸ **onPageLighthouseLanguages**(): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12917

___

### pageScreenshot

▸ **pageScreenshot**(`body`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPagePageScreenshotRequestInfo`](OnPagePageScreenshotRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12750

___

### pages

▸ **pages**(`body`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPagePagesRequestInfo`](OnPagePagesRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12246

___

### pagesByResource

▸ **pagesByResource**(`body`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPagePagesByResourceRequestInfo`](OnPagePagesByResourceRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12288

___

### processContentParsing

▸ **processContentParsing**(`response`): `Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageContentParsingResponseInfo`](OnPageContentParsingResponseInfo.md)\>

#### Defined in

main.ts:12812

___

### processContentParsingLive

▸ **processContentParsingLive**(`response`): `Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageContentParsingLiveResponseInfo`](OnPageContentParsingLiveResponseInfo.md)\>

#### Defined in

main.ts:12854

___

### processDuplicateContent

▸ **processDuplicateContent**(`response`): `Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageDuplicateContentResponseInfo`](OnPageDuplicateContentResponseInfo.md)\>

#### Defined in

main.ts:12434

___

### processDuplicateTags

▸ **processDuplicateTags**(`response`): `Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageDuplicateTagsResponseInfo`](OnPageDuplicateTagsResponseInfo.md)\>

#### Defined in

main.ts:12392

___

### processForceStop

▸ **processForceStop**(`response`): `Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageForceStopResponseInfo`](OnPageForceStopResponseInfo.md)\>

#### Defined in

main.ts:12063

___

### processInstantPages

▸ **processInstantPages**(`response`): `Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageInstantPagesResponseInfo`](OnPageInstantPagesResponseInfo.md)\>

#### Defined in

main.ts:12896

___

### processKeywordDensity

▸ **processKeywordDensity**(`response`): `Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageKeywordDensityResponseInfo`](OnPageKeywordDensityResponseInfo.md)\>

#### Defined in

main.ts:12644

___

### processLighthouseAudits

▸ **processLighthouseAudits**(`response`): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Defined in

main.ts:12970

___

### processLighthouseLiveJson

▸ **processLighthouseLiveJson**(`response`): `Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageLighthouseLiveJsonResponseInfo`](OnPageLighthouseLiveJsonResponseInfo.md)\>

#### Defined in

main.ts:13173

___

### processLighthouseTaskGetJson

▸ **processLighthouseTaskGetJson**(`response`): `Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageLighthouseTaskGetJsonResponseInfo`](OnPageLighthouseTaskGetJsonResponseInfo.md)\>

#### Defined in

main.ts:13131

___

### processLighthouseTaskPost

▸ **processLighthouseTaskPost**(`response`): `Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageLighthouseTaskPostResponseInfo`](OnPageLighthouseTaskPostResponseInfo.md)\>

#### Defined in

main.ts:13049

___

### processLighthouseTasksReady

▸ **processLighthouseTasksReady**(`response`): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:13086

___

### processLighthouseVersions

▸ **processLighthouseVersions**(`response`): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Defined in

main.ts:13007

___

### processLinks

▸ **processLinks**(`response`): `Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageLinksResponseInfo`](OnPageLinksResponseInfo.md)\>

#### Defined in

main.ts:12476

___

### processMicrodata

▸ **processMicrodata**(`response`): `Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageMicrodataResponseInfo`](OnPageMicrodataResponseInfo.md)\>

#### Defined in

main.ts:12686

___

### processNonIndexable

▸ **processNonIndexable**(`response`): `Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageNonIndexableResponseInfo`](OnPageNonIndexableResponseInfo.md)\>

#### Defined in

main.ts:12560

___

### processOnPageAvailableFilters

▸ **processOnPageAvailableFilters**(`response`): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Defined in

main.ts:12100

___

### processOnPageErrors

▸ **processOnPageErrors**(`response`): `Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageErrorsResponseInfo`](OnPageErrorsResponseInfo.md)\>

#### Defined in

main.ts:12021

___

### processOnPageIdList

▸ **processOnPageIdList**(`response`): `Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageIdListResponseInfo`](OnPageIdListResponseInfo.md)\>

#### Defined in

main.ts:11979

___

### processOnPageLighthouseLanguages

▸ **processOnPageLighthouseLanguages**(`response`): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Defined in

main.ts:12933

___

### processPageScreenshot

▸ **processPageScreenshot**(`response`): `Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPagePageScreenshotResponseInfo`](OnPagePageScreenshotResponseInfo.md)\>

#### Defined in

main.ts:12770

___

### processPages

▸ **processPages**(`response`): `Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPagePagesResponseInfo`](OnPagePagesResponseInfo.md)\>

#### Defined in

main.ts:12266

___

### processPagesByResource

▸ **processPagesByResource**(`response`): `Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPagePagesByResourceResponseInfo`](OnPagePagesByResourceResponseInfo.md)\>

#### Defined in

main.ts:12308

___

### processRawHtml

▸ **processRawHtml**(`response`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

#### Defined in

main.ts:12728

___

### processRedirectChains

▸ **processRedirectChains**(`response`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

#### Defined in

main.ts:12518

___

### processResources

▸ **processResources**(`response`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

#### Defined in

main.ts:12350

___

### processSummary

▸ **processSummary**(`response`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

#### Defined in

main.ts:12224

___

### processTaskPost

▸ **processTaskPost**(`response`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

#### Defined in

main.ts:12142

___

### processTasksReady

▸ **processTasksReady**(`response`): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Defined in

main.ts:12179

___

### processWaterfall

▸ **processWaterfall**(`response`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

#### Defined in

main.ts:12602

___

### rawHtml

▸ **rawHtml**(`body`): `Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageRawHtmlRequestInfo`](OnPageRawHtmlRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageRawHtmlResponseInfo`](OnPageRawHtmlResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12708

___

### redirectChains

▸ **redirectChains**(`body`): `Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageRedirectChainsRequestInfo`](OnPageRedirectChainsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageRedirectChainsResponseInfo`](OnPageRedirectChainsResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12498

___

### resources

▸ **resources**(`body`): `Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageResourcesRequestInfo`](OnPageResourcesRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageResourcesResponseInfo`](OnPageResourcesResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12330

___

### summary

▸ **summary**(`id`): `Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier required field you can get this ID in the response of the Task POST endpoint example: “07131248-1535-0216-1000-17384017ad04” |

#### Returns

`Promise`\<[`OnPageSummaryResponseInfo`](OnPageSummaryResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12205

___

### taskPost

▸ **taskPost**(`body`): `Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageTaskRequestInfo`](OnPageTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageTaskPostResponseInfo`](OnPageTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12122

___

### tasksReady

▸ **tasksReady**(): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12163

___

### waterfall

▸ **waterfall**(`body`): `Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`OnPageWaterfallRequestInfo`](OnPageWaterfallRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`OnPageWaterfallResponseInfo`](OnPageWaterfallResponseInfo.md)\>

Successful operation

#### Defined in

main.ts:12582
