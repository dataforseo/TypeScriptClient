[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataApi

# Class: KeywordsDataApi

## Table of contents

### Constructors

- [constructor](KeywordsDataApi.md#constructor)

### Properties

- [baseUrl](KeywordsDataApi.md#baseurl)
- [http](KeywordsDataApi.md#http)
- [jsonParseReviver](KeywordsDataApi.md#jsonparsereviver)

### Methods

- [bingKeywordPerformanceLive](KeywordsDataApi.md#bingkeywordperformancelive)
- [bingKeywordPerformanceTaskGet](KeywordsDataApi.md#bingkeywordperformancetaskget)
- [bingKeywordPerformanceTaskPost](KeywordsDataApi.md#bingkeywordperformancetaskpost)
- [bingKeywordPerformanceTasksReady](KeywordsDataApi.md#bingkeywordperformancetasksready)
- [bingKeywordsForKeywordsLive](KeywordsDataApi.md#bingkeywordsforkeywordslive)
- [bingKeywordsForKeywordsTaskGet](KeywordsDataApi.md#bingkeywordsforkeywordstaskget)
- [bingKeywordsForKeywordsTaskPost](KeywordsDataApi.md#bingkeywordsforkeywordstaskpost)
- [bingKeywordsForKeywordsTasksReady](KeywordsDataApi.md#bingkeywordsforkeywordstasksready)
- [bingKeywordsForSiteLive](KeywordsDataApi.md#bingkeywordsforsitelive)
- [bingKeywordsForSiteTaskGet](KeywordsDataApi.md#bingkeywordsforsitetaskget)
- [bingKeywordsForSiteTaskPost](KeywordsDataApi.md#bingkeywordsforsitetaskpost)
- [bingKeywordsForSiteTasksReady](KeywordsDataApi.md#bingkeywordsforsitetasksready)
- [bingSearchVolumeLive](KeywordsDataApi.md#bingsearchvolumelive)
- [bingSearchVolumeTaskGet](KeywordsDataApi.md#bingsearchvolumetaskget)
- [bingSearchVolumeTaskPost](KeywordsDataApi.md#bingsearchvolumetaskpost)
- [bingSearchVolumeTasksReady](KeywordsDataApi.md#bingsearchvolumetasksready)
- [googleAdsAdTrafficByKeywordsLive](KeywordsDataApi.md#googleadsadtrafficbykeywordslive)
- [googleAdsAdTrafficByKeywordsTaskGet](KeywordsDataApi.md#googleadsadtrafficbykeywordstaskget)
- [googleAdsAdTrafficByKeywordsTaskPost](KeywordsDataApi.md#googleadsadtrafficbykeywordstaskpost)
- [googleAdsAdTrafficByKeywordsTasksReady](KeywordsDataApi.md#googleadsadtrafficbykeywordstasksready)
- [googleAdsKeywordsForKeywordsLive](KeywordsDataApi.md#googleadskeywordsforkeywordslive)
- [googleAdsKeywordsForKeywordsTaskGet](KeywordsDataApi.md#googleadskeywordsforkeywordstaskget)
- [googleAdsKeywordsForKeywordsTaskPost](KeywordsDataApi.md#googleadskeywordsforkeywordstaskpost)
- [googleAdsKeywordsForKeywordsTasksReady](KeywordsDataApi.md#googleadskeywordsforkeywordstasksready)
- [googleAdsKeywordsForSiteLive](KeywordsDataApi.md#googleadskeywordsforsitelive)
- [googleAdsKeywordsForSiteTaskGet](KeywordsDataApi.md#googleadskeywordsforsitetaskget)
- [googleAdsKeywordsForSiteTaskPost](KeywordsDataApi.md#googleadskeywordsforsitetaskpost)
- [googleAdsKeywordsForSiteTasksReady](KeywordsDataApi.md#googleadskeywordsforsitetasksready)
- [googleAdsSearchVolumeLive](KeywordsDataApi.md#googleadssearchvolumelive)
- [googleAdsSearchVolumeTaskGet](KeywordsDataApi.md#googleadssearchvolumetaskget)
- [googleAdsSearchVolumeTaskPost](KeywordsDataApi.md#googleadssearchvolumetaskpost)
- [googleAdsSearchVolumeTasksReady](KeywordsDataApi.md#googleadssearchvolumetasksready)
- [googleAdsStatus](KeywordsDataApi.md#googleadsstatus)
- [googleTrendsCategories](KeywordsDataApi.md#googletrendscategories)
- [googleTrendsExploreLive](KeywordsDataApi.md#googletrendsexplorelive)
- [googleTrendsExploreTaskGet](KeywordsDataApi.md#googletrendsexploretaskget)
- [googleTrendsExploreTaskPost](KeywordsDataApi.md#googletrendsexploretaskpost)
- [googleTrendsExploreTasksReady](KeywordsDataApi.md#googletrendsexploretasksready)
- [keywordsDataBingKeywordPerformanceLocationsAndLanguages](KeywordsDataApi.md#keywordsdatabingkeywordperformancelocationsandlanguages)
- [keywordsDataBingLanguages](KeywordsDataApi.md#keywordsdatabinglanguages)
- [keywordsDataBingLocations](KeywordsDataApi.md#keywordsdatabinglocations)
- [keywordsDataErrors](KeywordsDataApi.md#keywordsdataerrors)
- [keywordsDataGoogleAdsLanguages](KeywordsDataApi.md#keywordsdatagoogleadslanguages)
- [keywordsDataGoogleAdsLocations](KeywordsDataApi.md#keywordsdatagoogleadslocations)
- [keywordsDataGoogleTrendsLanguages](KeywordsDataApi.md#keywordsdatagoogletrendslanguages)
- [keywordsDataGoogleTrendsLocations](KeywordsDataApi.md#keywordsdatagoogletrendslocations)
- [keywordsDataGoogleTrendsLocationsCountry](KeywordsDataApi.md#keywordsdatagoogletrendslocationscountry)
- [keywordsDataIdList](KeywordsDataApi.md#keywordsdataidlist)
- [processBingKeywordPerformanceLive](KeywordsDataApi.md#processbingkeywordperformancelive)
- [processBingKeywordPerformanceTaskGet](KeywordsDataApi.md#processbingkeywordperformancetaskget)
- [processBingKeywordPerformanceTaskPost](KeywordsDataApi.md#processbingkeywordperformancetaskpost)
- [processBingKeywordPerformanceTasksReady](KeywordsDataApi.md#processbingkeywordperformancetasksready)
- [processBingKeywordsForKeywordsLive](KeywordsDataApi.md#processbingkeywordsforkeywordslive)
- [processBingKeywordsForKeywordsTaskGet](KeywordsDataApi.md#processbingkeywordsforkeywordstaskget)
- [processBingKeywordsForKeywordsTaskPost](KeywordsDataApi.md#processbingkeywordsforkeywordstaskpost)
- [processBingKeywordsForKeywordsTasksReady](KeywordsDataApi.md#processbingkeywordsforkeywordstasksready)
- [processBingKeywordsForSiteLive](KeywordsDataApi.md#processbingkeywordsforsitelive)
- [processBingKeywordsForSiteTaskGet](KeywordsDataApi.md#processbingkeywordsforsitetaskget)
- [processBingKeywordsForSiteTaskPost](KeywordsDataApi.md#processbingkeywordsforsitetaskpost)
- [processBingKeywordsForSiteTasksReady](KeywordsDataApi.md#processbingkeywordsforsitetasksready)
- [processBingSearchVolumeLive](KeywordsDataApi.md#processbingsearchvolumelive)
- [processBingSearchVolumeTaskGet](KeywordsDataApi.md#processbingsearchvolumetaskget)
- [processBingSearchVolumeTaskPost](KeywordsDataApi.md#processbingsearchvolumetaskpost)
- [processBingSearchVolumeTasksReady](KeywordsDataApi.md#processbingsearchvolumetasksready)
- [processGoogleAdsAdTrafficByKeywordsLive](KeywordsDataApi.md#processgoogleadsadtrafficbykeywordslive)
- [processGoogleAdsAdTrafficByKeywordsTaskGet](KeywordsDataApi.md#processgoogleadsadtrafficbykeywordstaskget)
- [processGoogleAdsAdTrafficByKeywordsTaskPost](KeywordsDataApi.md#processgoogleadsadtrafficbykeywordstaskpost)
- [processGoogleAdsAdTrafficByKeywordsTasksReady](KeywordsDataApi.md#processgoogleadsadtrafficbykeywordstasksready)
- [processGoogleAdsKeywordsForKeywordsLive](KeywordsDataApi.md#processgoogleadskeywordsforkeywordslive)
- [processGoogleAdsKeywordsForKeywordsTaskGet](KeywordsDataApi.md#processgoogleadskeywordsforkeywordstaskget)
- [processGoogleAdsKeywordsForKeywordsTaskPost](KeywordsDataApi.md#processgoogleadskeywordsforkeywordstaskpost)
- [processGoogleAdsKeywordsForKeywordsTasksReady](KeywordsDataApi.md#processgoogleadskeywordsforkeywordstasksready)
- [processGoogleAdsKeywordsForSiteLive](KeywordsDataApi.md#processgoogleadskeywordsforsitelive)
- [processGoogleAdsKeywordsForSiteTaskGet](KeywordsDataApi.md#processgoogleadskeywordsforsitetaskget)
- [processGoogleAdsKeywordsForSiteTaskPost](KeywordsDataApi.md#processgoogleadskeywordsforsitetaskpost)
- [processGoogleAdsKeywordsForSiteTasksReady](KeywordsDataApi.md#processgoogleadskeywordsforsitetasksready)
- [processGoogleAdsSearchVolumeLive](KeywordsDataApi.md#processgoogleadssearchvolumelive)
- [processGoogleAdsSearchVolumeTaskGet](KeywordsDataApi.md#processgoogleadssearchvolumetaskget)
- [processGoogleAdsSearchVolumeTaskPost](KeywordsDataApi.md#processgoogleadssearchvolumetaskpost)
- [processGoogleAdsSearchVolumeTasksReady](KeywordsDataApi.md#processgoogleadssearchvolumetasksready)
- [processGoogleAdsStatus](KeywordsDataApi.md#processgoogleadsstatus)
- [processGoogleTrendsCategories](KeywordsDataApi.md#processgoogletrendscategories)
- [processGoogleTrendsExploreLive](KeywordsDataApi.md#processgoogletrendsexplorelive)
- [processGoogleTrendsExploreTaskGet](KeywordsDataApi.md#processgoogletrendsexploretaskget)
- [processGoogleTrendsExploreTaskPost](KeywordsDataApi.md#processgoogletrendsexploretaskpost)
- [processGoogleTrendsExploreTasksReady](KeywordsDataApi.md#processgoogletrendsexploretasksready)
- [processKeywordsDataBingKeywordPerformanceLocationsAndLanguages](KeywordsDataApi.md#processkeywordsdatabingkeywordperformancelocationsandlanguages)
- [processKeywordsDataBingLanguages](KeywordsDataApi.md#processkeywordsdatabinglanguages)
- [processKeywordsDataBingLocations](KeywordsDataApi.md#processkeywordsdatabinglocations)
- [processKeywordsDataErrors](KeywordsDataApi.md#processkeywordsdataerrors)
- [processKeywordsDataGoogleAdsLanguages](KeywordsDataApi.md#processkeywordsdatagoogleadslanguages)
- [processKeywordsDataGoogleAdsLocations](KeywordsDataApi.md#processkeywordsdatagoogleadslocations)
- [processKeywordsDataGoogleTrendsLanguages](KeywordsDataApi.md#processkeywordsdatagoogletrendslanguages)
- [processKeywordsDataGoogleTrendsLocations](KeywordsDataApi.md#processkeywordsdatagoogletrendslocations)
- [processKeywordsDataGoogleTrendsLocationsCountry](KeywordsDataApi.md#processkeywordsdatagoogletrendslocationscountry)
- [processKeywordsDataIdList](KeywordsDataApi.md#processkeywordsdataidlist)

## Constructors

### constructor

• **new KeywordsDataApi**(`baseUrl?`, `http?`): [`KeywordsDataApi`](KeywordsDataApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl?` | `string` |
| `http?` | `Object` |
| `http.fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Returns

[`KeywordsDataApi`](KeywordsDataApi.md)

#### Defined in

[main.ts:8583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8583)

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

[main.ts:8580](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8580)

___


### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

[main.ts:8579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8579)

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

[main.ts:8581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8581)

## Methods

### bingKeywordPerformanceLive

▸ **bingKeywordPerformanceLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataBingKeywordPerformanceLiveRequestInfo`](KeywordsDataBingKeywordPerformanceLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10488)

___


### bingKeywordPerformanceTaskGet

▸ **bingKeywordPerformanceTaskGet**(`id`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10447)

___


### bingKeywordPerformanceTaskPost

▸ **bingKeywordPerformanceTaskPost**(`body`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataBingKeywordPerformanceTaskPostRequestInfo`](KeywordsDataBingKeywordPerformanceTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10366](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10366)

___


### bingKeywordPerformanceTasksReady

▸ **bingKeywordPerformanceTasksReady**(): `Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10407)

___


### bingKeywordsForKeywordsLive

▸ **bingKeywordsForKeywordsLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataBingKeywordsForKeywordsLiveRequestInfo`](KeywordsDataBingKeywordsForKeywordsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10287](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10287)

___


### bingKeywordsForKeywordsTaskGet

▸ **bingKeywordsForKeywordsTaskGet**(`id`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10246)

___


### bingKeywordsForKeywordsTaskPost

▸ **bingKeywordsForKeywordsTaskPost**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10165)

___


### bingKeywordsForKeywordsTasksReady

▸ **bingKeywordsForKeywordsTasksReady**(): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10206](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10206)

___


### bingKeywordsForSiteLive

▸ **bingKeywordsForSiteLive**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataBingKeywordsForSiteLiveRequestInfo`](KeywordsDataBingKeywordsForSiteLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10123)

___


### bingKeywordsForSiteTaskGet

▸ **bingKeywordsForSiteTaskGet**(`id`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10082)

___


### bingKeywordsForSiteTaskPost

▸ **bingKeywordsForSiteTaskPost**(`body`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataBingKeywordsForSiteTaskPostRequestInfo`](KeywordsDataBingKeywordsForSiteTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10001)

___


### bingKeywordsForSiteTasksReady

▸ **bingKeywordsForSiteTasksReady**(): `Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10042](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10042)

___


### bingSearchVolumeLive

▸ **bingSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataBingSearchVolumeLiveRequestInfo`](KeywordsDataBingSearchVolumeLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9959](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9959)

___


### bingSearchVolumeTaskGet

▸ **bingSearchVolumeTaskGet**(`id`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9918)

___


### bingSearchVolumeTaskPost

▸ **bingSearchVolumeTaskPost**(`body`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataBingSearchVolumeTaskPostRequestInfo`](KeywordsDataBingSearchVolumeTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9837)

___


### bingSearchVolumeTasksReady

▸ **bingSearchVolumeTasksReady**(): `Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9878)

___


### googleAdsAdTrafficByKeywordsLive

▸ **googleAdsAdTrafficByKeywordsLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9401)

___


### googleAdsAdTrafficByKeywordsTaskGet

▸ **googleAdsAdTrafficByKeywordsTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9360](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9360)

___


### googleAdsAdTrafficByKeywordsTaskPost

▸ **googleAdsAdTrafficByKeywordsTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9279)

___


### googleAdsAdTrafficByKeywordsTasksReady

▸ **googleAdsAdTrafficByKeywordsTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9320](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9320)

___


### googleAdsKeywordsForKeywordsLive

▸ **googleAdsKeywordsForKeywordsLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9237)

___


### googleAdsKeywordsForKeywordsTaskGet

▸ **googleAdsKeywordsForKeywordsTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9196](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9196)

___


### googleAdsKeywordsForKeywordsTaskPost

▸ **googleAdsKeywordsForKeywordsTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9115](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9115)

___


### googleAdsKeywordsForKeywordsTasksReady

▸ **googleAdsKeywordsForKeywordsTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9156](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9156)

___


### googleAdsKeywordsForSiteLive

▸ **googleAdsKeywordsForSiteLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9073](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9073)

___


### googleAdsKeywordsForSiteTaskGet

▸ **googleAdsKeywordsForSiteTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9032)

___


### googleAdsKeywordsForSiteTaskPost

▸ **googleAdsKeywordsForSiteTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8951](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8951)

___


### googleAdsKeywordsForSiteTasksReady

▸ **googleAdsKeywordsForSiteTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8992](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8992)

___


### googleAdsSearchVolumeLive

▸ **googleAdsSearchVolumeLive**(`body`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8909)

___


### googleAdsSearchVolumeTaskGet

▸ **googleAdsSearchVolumeTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8868)

___


### googleAdsSearchVolumeTaskPost

▸ **googleAdsSearchVolumeTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataTaskRequestInfo`](KeywordsDataTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8787)

___


### googleAdsSearchVolumeTasksReady

▸ **googleAdsSearchVolumeTasksReady**(): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8828)

___


### googleAdsStatus

▸ **googleAdsStatus**(): `Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8675)

___


### googleTrendsCategories

▸ **googleTrendsCategories**(): `Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9561](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9561)

___


### googleTrendsExploreLive

▸ **googleTrendsExploreLive**(`body`): `Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataGoogleTrendsExploreLiveRequestInfo`](KeywordsDataGoogleTrendsExploreLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9721](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9721)

___


### googleTrendsExploreTaskGet

▸ **googleTrendsExploreTaskGet**(`id`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9680)

___


### googleTrendsExploreTaskPost

▸ **googleTrendsExploreTaskPost**(`body`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataGoogleTrendsExploreTaskPostRequestInfo`](KeywordsDataGoogleTrendsExploreTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9599](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9599)

___


### googleTrendsExploreTasksReady

▸ **googleTrendsExploreTasksReady**(): `Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9640](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9640)

___


### keywordsDataBingKeywordPerformanceLocationsAndLanguages

▸ **keywordsDataBingKeywordPerformanceLocationsAndLanguages**(): `Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:10328](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10328)

___


### keywordsDataBingLanguages

▸ **keywordsDataBingLanguages**(): `Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9799)

___


### keywordsDataBingLocations

▸ **keywordsDataBingLocations**(): `Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9762)

___


### keywordsDataErrors

▸ **keywordsDataErrors**(`body`): `Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataErrorsRequestInfo`](KeywordsDataErrorsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8634)

___


### keywordsDataGoogleAdsLanguages

▸ **keywordsDataGoogleAdsLanguages**(): `Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8749)

___


### keywordsDataGoogleAdsLocations

▸ **keywordsDataGoogleAdsLocations**(): `Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8712)

___


### keywordsDataGoogleTrendsLanguages

▸ **keywordsDataGoogleTrendsLanguages**(): `Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9524)

___


### keywordsDataGoogleTrendsLocations

▸ **keywordsDataGoogleTrendsLocations**(): `Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9442)

___


### keywordsDataGoogleTrendsLocationsCountry

▸ **keywordsDataGoogleTrendsLocationsCountry**(`country`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | country ISO code optional field specify the ISO code if you want to filter the list of locations by country example: us |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:9484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9484)

___


### keywordsDataIdList

▸ **keywordsDataIdList**(`body`): `Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`KeywordsDataIdListRequestInfo`](KeywordsDataIdListRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:8592](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8592)

___


### processBingKeywordPerformanceLive

▸ **processBingKeywordPerformanceLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLiveResponseInfo`](KeywordsDataBingKeywordPerformanceLiveResponseInfo.md)\>

#### Defined in

[main.ts:10508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10508)

___


### processBingKeywordPerformanceTaskGet

▸ **processBingKeywordPerformanceTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskGetResponseInfo`](KeywordsDataBingKeywordPerformanceTaskGetResponseInfo.md)\>

#### Defined in

[main.ts:10466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10466)

___


### processBingKeywordPerformanceTaskPost

▸ **processBingKeywordPerformanceTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTaskPostResponseInfo`](KeywordsDataBingKeywordPerformanceTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:10386](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10386)

___


### processBingKeywordPerformanceTasksReady

▸ **processBingKeywordPerformanceTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:10423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10423)

___


### processBingKeywordsForKeywordsLive

▸ **processBingKeywordsForKeywordsLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsLiveResponseInfo`](KeywordsDataBingKeywordsForKeywordsLiveResponseInfo.md)\>

#### Defined in

[main.ts:10307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10307)

___


### processBingKeywordsForKeywordsTaskGet

▸ **processBingKeywordsForKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Defined in

[main.ts:10265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10265)

___


### processBingKeywordsForKeywordsTaskPost

▸ **processBingKeywordsForKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataBingKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:10185](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10185)

___


### processBingKeywordsForKeywordsTasksReady

▸ **processBingKeywordsForKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:10222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10222)

___


### processBingKeywordsForSiteLive

▸ **processBingKeywordsForSiteLive**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteLiveResponseInfo`](KeywordsDataBingKeywordsForSiteLiveResponseInfo.md)\>

#### Defined in

[main.ts:10143](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10143)

___


### processBingKeywordsForSiteTaskGet

▸ **processBingKeywordsForSiteTaskGet**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskGetResponseInfo`](KeywordsDataBingKeywordsForSiteTaskGetResponseInfo.md)\>

#### Defined in

[main.ts:10101](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10101)

___


### processBingKeywordsForSiteTaskPost

▸ **processBingKeywordsForSiteTaskPost**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTaskPostResponseInfo`](KeywordsDataBingKeywordsForSiteTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:10021](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10021)

___


### processBingKeywordsForSiteTasksReady

▸ **processBingKeywordsForSiteTasksReady**(`response`): `Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:10058](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10058)

___


### processBingSearchVolumeLive

▸ **processBingSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeLiveResponseInfo`](KeywordsDataBingSearchVolumeLiveResponseInfo.md)\>

#### Defined in

[main.ts:9979](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9979)

___


### processBingSearchVolumeTaskGet

▸ **processBingSearchVolumeTaskGet**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskGetResponseInfo`](KeywordsDataBingSearchVolumeTaskGetResponseInfo.md)\>

#### Defined in

[main.ts:9937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9937)

___


### processBingSearchVolumeTaskPost

▸ **processBingSearchVolumeTaskPost**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTaskPostResponseInfo`](KeywordsDataBingSearchVolumeTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:9857](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9857)

___


### processBingSearchVolumeTasksReady

▸ **processBingSearchVolumeTasksReady**(`response`): `Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingSearchVolumeTasksReadyResponseInfo`](KeywordsDataBingSearchVolumeTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:9894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9894)

___


### processGoogleAdsAdTrafficByKeywordsLive

▸ **processGoogleAdsAdTrafficByKeywordsLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsLiveResponseInfo.md)\>

#### Defined in

[main.ts:9421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9421)

___


### processGoogleAdsAdTrafficByKeywordsTaskGet

▸ **processGoogleAdsAdTrafficByKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskGetResponseInfo.md)\>

#### Defined in

[main.ts:9379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9379)

___


### processGoogleAdsAdTrafficByKeywordsTaskPost

▸ **processGoogleAdsAdTrafficByKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:9299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9299)

___


### processGoogleAdsAdTrafficByKeywordsTasksReady

▸ **processGoogleAdsAdTrafficByKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsAdTrafficByKeywordsTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:9336](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9336)

___


### processGoogleAdsKeywordsForKeywordsLive

▸ **processGoogleAdsKeywordsForKeywordsLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsLiveResponseInfo.md)\>

#### Defined in

[main.ts:9257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9257)

___


### processGoogleAdsKeywordsForKeywordsTaskGet

▸ **processGoogleAdsKeywordsForKeywordsTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskGetResponseInfo.md)\>

#### Defined in

[main.ts:9215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9215)

___


### processGoogleAdsKeywordsForKeywordsTaskPost

▸ **processGoogleAdsKeywordsForKeywordsTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:9135](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9135)

___


### processGoogleAdsKeywordsForKeywordsTasksReady

▸ **processGoogleAdsKeywordsForKeywordsTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForKeywordsTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:9172](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9172)

___


### processGoogleAdsKeywordsForSiteLive

▸ **processGoogleAdsKeywordsForSiteLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteLiveResponseInfo.md)\>

#### Defined in

[main.ts:9093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9093)

___


### processGoogleAdsKeywordsForSiteTaskGet

▸ **processGoogleAdsKeywordsForSiteTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskGetResponseInfo.md)\>

#### Defined in

[main.ts:9051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9051)

___


### processGoogleAdsKeywordsForSiteTaskPost

▸ **processGoogleAdsKeywordsForSiteTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:8971](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8971)

___


### processGoogleAdsKeywordsForSiteTasksReady

▸ **processGoogleAdsKeywordsForSiteTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo`](KeywordsDataGoogleAdsKeywordsForSiteTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:9008](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9008)

___


### processGoogleAdsSearchVolumeLive

▸ **processGoogleAdsSearchVolumeLive**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo`](KeywordsDataGoogleAdsSearchVolumeLiveResponseInfo.md)\>

#### Defined in

[main.ts:8929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8929)

___


### processGoogleAdsSearchVolumeTaskGet

▸ **processGoogleAdsSearchVolumeTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskGetResponseInfo.md)\>

#### Defined in

[main.ts:8887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8887)

___


### processGoogleAdsSearchVolumeTaskPost

▸ **processGoogleAdsSearchVolumeTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:8807](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8807)

___


### processGoogleAdsSearchVolumeTasksReady

▸ **processGoogleAdsSearchVolumeTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo`](KeywordsDataGoogleAdsSearchVolumeTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:8844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8844)

___


### processGoogleAdsStatus

▸ **processGoogleAdsStatus**(`response`): `Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsStatusResponseInfo`](KeywordsDataGoogleAdsStatusResponseInfo.md)\>

#### Defined in

[main.ts:8691](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8691)

___


### processGoogleTrendsCategories

▸ **processGoogleTrendsCategories**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsCategoriesResponseInfo`](KeywordsDataGoogleTrendsCategoriesResponseInfo.md)\>

#### Defined in

[main.ts:9577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9577)

___


### processGoogleTrendsExploreLive

▸ **processGoogleTrendsExploreLive**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreLiveResponseInfo`](KeywordsDataGoogleTrendsExploreLiveResponseInfo.md)\>

#### Defined in

[main.ts:9741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9741)

___


### processGoogleTrendsExploreTaskGet

▸ **processGoogleTrendsExploreTaskGet**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskGetResponseInfo`](KeywordsDataGoogleTrendsExploreTaskGetResponseInfo.md)\>

#### Defined in

[main.ts:9699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9699)

___


### processGoogleTrendsExploreTaskPost

▸ **processGoogleTrendsExploreTaskPost**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTaskPostResponseInfo`](KeywordsDataGoogleTrendsExploreTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:9619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9619)

___


### processGoogleTrendsExploreTasksReady

▸ **processGoogleTrendsExploreTasksReady**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:9656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9656)

___


### processKeywordsDataBingKeywordPerformanceLocationsAndLanguages

▸ **processKeywordsDataBingKeywordPerformanceLocationsAndLanguages**(`response`): `Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo`](KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResponseInfo.md)\>

#### Defined in

[main.ts:10344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L10344)

___


### processKeywordsDataBingLanguages

▸ **processKeywordsDataBingLanguages**(`response`): `Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingLanguagesResponseInfo`](KeywordsDataBingLanguagesResponseInfo.md)\>

#### Defined in

[main.ts:9815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9815)

___


### processKeywordsDataBingLocations

▸ **processKeywordsDataBingLocations**(`response`): `Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataBingLocationsResponseInfo`](KeywordsDataBingLocationsResponseInfo.md)\>

#### Defined in

[main.ts:9778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9778)

___


### processKeywordsDataErrors

▸ **processKeywordsDataErrors**(`response`): `Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataErrorsResponseInfo`](KeywordsDataErrorsResponseInfo.md)\>

#### Defined in

[main.ts:8654](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8654)

___


### processKeywordsDataGoogleAdsLanguages

▸ **processKeywordsDataGoogleAdsLanguages**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLanguagesResponseInfo`](KeywordsDataGoogleAdsLanguagesResponseInfo.md)\>

#### Defined in

[main.ts:8765](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8765)

___


### processKeywordsDataGoogleAdsLocations

▸ **processKeywordsDataGoogleAdsLocations**(`response`): `Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleAdsLocationsResponseInfo`](KeywordsDataGoogleAdsLocationsResponseInfo.md)\>

#### Defined in

[main.ts:8728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8728)

___


### processKeywordsDataGoogleTrendsLanguages

▸ **processKeywordsDataGoogleTrendsLanguages**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLanguagesResponseInfo`](KeywordsDataGoogleTrendsLanguagesResponseInfo.md)\>

#### Defined in

[main.ts:9540](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9540)

___


### processKeywordsDataGoogleTrendsLocations

▸ **processKeywordsDataGoogleTrendsLocations**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsResponseInfo`](KeywordsDataGoogleTrendsLocationsResponseInfo.md)\>

#### Defined in

[main.ts:9458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9458)

___


### processKeywordsDataGoogleTrendsLocationsCountry

▸ **processKeywordsDataGoogleTrendsLocationsCountry**(`response`): `Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)\>

#### Defined in

[main.ts:9503](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L9503)

___


### processKeywordsDataIdList

▸ **processKeywordsDataIdList**(`response`): `Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`KeywordsDataIdListResponseInfo`](KeywordsDataIdListResponseInfo.md)\>

#### Defined in

[main.ts:8612](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L8612)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")