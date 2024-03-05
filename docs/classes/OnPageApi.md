[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageApi

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

[main.ts:11499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11499)

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

[main.ts:11496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11496)

___

### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

[main.ts:11495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11495)

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

[main.ts:11497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11497)

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

[main.ts:12341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12341)

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

[main.ts:12383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12383)

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

[main.ts:11963](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11963)

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

[main.ts:11921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11921)

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

[main.ts:11592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11592)

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

[main.ts:12425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12425)

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

[main.ts:12173](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12173)

___

### lighthouseAudits

▸ **lighthouseAudits**(): `Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseAuditsResponseInfo`](OnPageLighthouseAuditsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:12503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12503)

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

[main.ts:12702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12702)

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

[main.ts:12661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12661)

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

[main.ts:12578](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12578)

___

### lighthouseTasksReady

▸ **lighthouseTasksReady**(): `Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseTasksReadyResponseInfo`](OnPageLighthouseTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:12619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12619)

___

### lighthouseVersions

▸ **lighthouseVersions**(): `Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseVersionsResponseInfo`](OnPageLighthouseVersionsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:12540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12540)

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

[main.ts:12005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12005)

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

[main.ts:12215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12215)

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

[main.ts:12089](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12089)

___

### onPageAvailableFilters

▸ **onPageAvailableFilters**(): `Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageAvailableFiltersResponseInfo`](OnPageAvailableFiltersResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:11633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11633)

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

[main.ts:11550](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11550)

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

[main.ts:11508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11508)

___

### onPageLighthouseLanguages

▸ **onPageLighthouseLanguages**(): `Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageLighthouseLanguagesResponseInfo`](OnPageLighthouseLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:12466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12466)

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

[main.ts:12299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12299)

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

[main.ts:11795](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11795)

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

[main.ts:11837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11837)

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

[main.ts:12361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12361)

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

[main.ts:12403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12403)

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

[main.ts:11983](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11983)

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

[main.ts:11941](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11941)

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

[main.ts:11612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11612)

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

[main.ts:12445](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12445)

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

[main.ts:12193](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12193)

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

[main.ts:12519](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12519)

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

[main.ts:12722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12722)

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

[main.ts:12680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12680)

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

[main.ts:12598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12598)

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

[main.ts:12635](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12635)

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

[main.ts:12556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12556)

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

[main.ts:12025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12025)

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

[main.ts:12235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12235)

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

[main.ts:12109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12109)

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

[main.ts:11649](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11649)

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

[main.ts:11570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11570)

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

[main.ts:11528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11528)

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

[main.ts:12482](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12482)

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

[main.ts:12319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12319)

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

[main.ts:11815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11815)

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

[main.ts:11857](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11857)

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

[main.ts:12277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12277)

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

[main.ts:12067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12067)

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

[main.ts:11899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11899)

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

[main.ts:11773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11773)

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

[main.ts:11691](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11691)

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

[main.ts:11728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11728)

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

[main.ts:12151](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12151)

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

[main.ts:12257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12257)

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

[main.ts:12047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12047)

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

[main.ts:11879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11879)

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

[main.ts:11754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11754)

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

[main.ts:11671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11671)

___

### tasksReady

▸ **tasksReady**(): `Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`OnPageTasksReadyResponseInfo`](OnPageTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:11712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L11712)

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

[main.ts:12131](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L12131)
