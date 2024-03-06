[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataApi

# Class: AppDataApi

## Table of contents

### Constructors

- [constructor](AppDataApi.md#constructor)

### Properties

- [baseUrl](AppDataApi.md#baseurl)
- [http](AppDataApi.md#http)
- [jsonParseReviver](AppDataApi.md#jsonparsereviver)

### Methods

- [appDataAppleLanguages](AppDataApi.md#appdataapplelanguages)
- [appDataAppleLocations](AppDataApi.md#appdataapplelocations)
- [appDataErrors](AppDataApi.md#appdataerrors)
- [appDataGoogleLanguages](AppDataApi.md#appdatagooglelanguages)
- [appDataGoogleLocations](AppDataApi.md#appdatagooglelocations)
- [appDataIdList](AppDataApi.md#appdataidlist)
- [appleAppInfoTaskGetAdvanced](AppDataApi.md#appleappinfotaskgetadvanced)
- [appleAppInfoTaskPost](AppDataApi.md#appleappinfotaskpost)
- [appleAppInfoTasksReady](AppDataApi.md#appleappinfotasksready)
- [appleAppListTaskGetAdvanced](AppDataApi.md#appleapplisttaskgetadvanced)
- [appleAppListTaskPost](AppDataApi.md#appleapplisttaskpost)
- [appleAppListTasksReady](AppDataApi.md#appleapplisttasksready)
- [appleAppListingsCategories](AppDataApi.md#appleapplistingscategories)
- [appleAppListingsSearchLive](AppDataApi.md#appleapplistingssearchlive)
- [appleAppReviewsTaskGetAdvanced](AppDataApi.md#appleappreviewstaskgetadvanced)
- [appleAppReviewsTaskPost](AppDataApi.md#appleappreviewstaskpost)
- [appleAppReviewsTasksReady](AppDataApi.md#appleappreviewstasksready)
- [appleAppSearchesTaskGetAdvanced](AppDataApi.md#appleappsearchestaskgetadvanced)
- [appleAppSearchesTaskPost](AppDataApi.md#appleappsearchestaskpost)
- [appleAppSearchesTasksReady](AppDataApi.md#appleappsearchestasksready)
- [appleCategories](AppDataApi.md#applecategories)
- [googleAppInfoTaskGetAdvanced](AppDataApi.md#googleappinfotaskgetadvanced)
- [googleAppInfoTaskGetHtml](AppDataApi.md#googleappinfotaskgethtml)
- [googleAppInfoTaskPost](AppDataApi.md#googleappinfotaskpost)
- [googleAppInfoTasksReady](AppDataApi.md#googleappinfotasksready)
- [googleAppListTaskGetAdvanced](AppDataApi.md#googleapplisttaskgetadvanced)
- [googleAppListTaskGetHtml](AppDataApi.md#googleapplisttaskgethtml)
- [googleAppListTaskPost](AppDataApi.md#googleapplisttaskpost)
- [googleAppListTasksReady](AppDataApi.md#googleapplisttasksready)
- [googleAppListingsCategories](AppDataApi.md#googleapplistingscategories)
- [googleAppListingsSearchLive](AppDataApi.md#googleapplistingssearchlive)
- [googleAppReviewsTaskGetAdvanced](AppDataApi.md#googleappreviewstaskgetadvanced)
- [googleAppReviewsTaskGetHtml](AppDataApi.md#googleappreviewstaskgethtml)
- [googleAppReviewsTaskPost](AppDataApi.md#googleappreviewstaskpost)
- [googleAppReviewsTasksReady](AppDataApi.md#googleappreviewstasksready)
- [googleAppSearchesTaskGetAdvanced](AppDataApi.md#googleappsearchestaskgetadvanced)
- [googleAppSearchesTaskGetHtml](AppDataApi.md#googleappsearchestaskgethtml)
- [googleAppSearchesTaskPost](AppDataApi.md#googleappsearchestaskpost)
- [googleAppSearchesTasksReady](AppDataApi.md#googleappsearchestasksready)
- [googleCategories](AppDataApi.md#googlecategories)
- [processAppDataAppleLanguages](AppDataApi.md#processappdataapplelanguages)
- [processAppDataAppleLocations](AppDataApi.md#processappdataapplelocations)
- [processAppDataErrors](AppDataApi.md#processappdataerrors)
- [processAppDataGoogleLanguages](AppDataApi.md#processappdatagooglelanguages)
- [processAppDataGoogleLocations](AppDataApi.md#processappdatagooglelocations)
- [processAppDataIdList](AppDataApi.md#processappdataidlist)
- [processAppleAppInfoTaskGetAdvanced](AppDataApi.md#processappleappinfotaskgetadvanced)
- [processAppleAppInfoTaskPost](AppDataApi.md#processappleappinfotaskpost)
- [processAppleAppInfoTasksReady](AppDataApi.md#processappleappinfotasksready)
- [processAppleAppListTaskGetAdvanced](AppDataApi.md#processappleapplisttaskgetadvanced)
- [processAppleAppListTaskPost](AppDataApi.md#processappleapplisttaskpost)
- [processAppleAppListTasksReady](AppDataApi.md#processappleapplisttasksready)
- [processAppleAppListingsCategories](AppDataApi.md#processappleapplistingscategories)
- [processAppleAppListingsSearchLive](AppDataApi.md#processappleapplistingssearchlive)
- [processAppleAppReviewsTaskGetAdvanced](AppDataApi.md#processappleappreviewstaskgetadvanced)
- [processAppleAppReviewsTaskPost](AppDataApi.md#processappleappreviewstaskpost)
- [processAppleAppReviewsTasksReady](AppDataApi.md#processappleappreviewstasksready)
- [processAppleAppSearchesTaskGetAdvanced](AppDataApi.md#processappleappsearchestaskgetadvanced)
- [processAppleAppSearchesTaskPost](AppDataApi.md#processappleappsearchestaskpost)
- [processAppleAppSearchesTasksReady](AppDataApi.md#processappleappsearchestasksready)
- [processAppleCategories](AppDataApi.md#processapplecategories)
- [processGoogleAppInfoTaskGetAdvanced](AppDataApi.md#processgoogleappinfotaskgetadvanced)
- [processGoogleAppInfoTaskGetHtml](AppDataApi.md#processgoogleappinfotaskgethtml)
- [processGoogleAppInfoTaskPost](AppDataApi.md#processgoogleappinfotaskpost)
- [processGoogleAppInfoTasksReady](AppDataApi.md#processgoogleappinfotasksready)
- [processGoogleAppListTaskGetAdvanced](AppDataApi.md#processgoogleapplisttaskgetadvanced)
- [processGoogleAppListTaskGetHtml](AppDataApi.md#processgoogleapplisttaskgethtml)
- [processGoogleAppListTaskPost](AppDataApi.md#processgoogleapplisttaskpost)
- [processGoogleAppListTasksReady](AppDataApi.md#processgoogleapplisttasksready)
- [processGoogleAppListingsCategories](AppDataApi.md#processgoogleapplistingscategories)
- [processGoogleAppListingsSearchLive](AppDataApi.md#processgoogleapplistingssearchlive)
- [processGoogleAppReviewsTaskGetAdvanced](AppDataApi.md#processgoogleappreviewstaskgetadvanced)
- [processGoogleAppReviewsTaskGetHtml](AppDataApi.md#processgoogleappreviewstaskgethtml)
- [processGoogleAppReviewsTaskPost](AppDataApi.md#processgoogleappreviewstaskpost)
- [processGoogleAppReviewsTasksReady](AppDataApi.md#processgoogleappreviewstasksready)
- [processGoogleAppSearchesTaskGetAdvanced](AppDataApi.md#processgoogleappsearchestaskgetadvanced)
- [processGoogleAppSearchesTaskGetHtml](AppDataApi.md#processgoogleappsearchestaskgethtml)
- [processGoogleAppSearchesTaskPost](AppDataApi.md#processgoogleappsearchestaskpost)
- [processGoogleAppSearchesTasksReady](AppDataApi.md#processgoogleappsearchestasksready)
- [processGoogleCategories](AppDataApi.md#processgooglecategories)

## Constructors

### constructor

• **new AppDataApi**(`baseUrl?`, `http?`): [`AppDataApi`](AppDataApi.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseUrl?` | `string` |
| `http?` | `Object` |
| `http.fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Returns

[`AppDataApi`](AppDataApi.md)

#### Defined in

[main.ts:15267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15267)

## Properties

### baseUrl

• `Private` **baseUrl**: `string`

#### Defined in

[main.ts:15264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15264)

___


### http

• `Private` **http**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fetch` | (`url`: `RequestInfo`, `init?`: `RequestInit`) => `Promise`\<`Response`\> |

#### Defined in

[main.ts:15263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15263)

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

[main.ts:15265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15265)

## Methods

### appDataAppleLanguages

▸ **appDataAppleLanguages**(): `Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16283)

___


### appDataAppleLocations

▸ **appDataAppleLocations**(): `Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16246)

___


### appDataErrors

▸ **appDataErrors**(`body`): `Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataErrorsRequestInfo`](AppDataErrorsRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15318](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15318)

___


### appDataGoogleLanguages

▸ **appDataGoogleLanguages**(): `Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15433)

___


### appDataGoogleLocations

▸ **appDataGoogleLocations**(): `Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15396)

___


### appDataIdList

▸ **appDataIdList**(`body`): `Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15276)

___


### appleAppInfoTaskGetAdvanced

▸ **appleAppInfoTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16524](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16524)

___


### appleAppInfoTaskPost

▸ **appleAppInfoTaskPost**(`body`): `Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataAppleAppInfoTaskPostRequestInfo`](AppDataAppleAppInfoTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16443](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16443)

___


### appleAppInfoTasksReady

▸ **appleAppInfoTasksReady**(): `Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16484)

___


### appleAppListTaskGetAdvanced

▸ **appleAppListTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16646)

___


### appleAppListTaskPost

▸ **appleAppListTaskPost**(`body`): `Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataAppleAppListTaskPostRequestInfo`](AppDataAppleAppListTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16565)

___


### appleAppListTasksReady

▸ **appleAppListTasksReady**(): `Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16606)

___


### appleAppListingsCategories

▸ **appleAppListingsCategories**(): `Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16808](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16808)

___


### appleAppListingsSearchLive

▸ **appleAppListingsSearchLive**(`body`): `Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataAppleAppListingsSearchLiveRequestInfo`](AppDataAppleAppListingsSearchLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16846)

___


### appleAppReviewsTaskGetAdvanced

▸ **appleAppReviewsTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16768](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16768)

___


### appleAppReviewsTaskPost

▸ **appleAppReviewsTaskPost**(`body`): `Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataAppleAppReviewsTaskPostRequestInfo`](AppDataAppleAppReviewsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16687)

___


### appleAppReviewsTasksReady

▸ **appleAppReviewsTasksReady**(): `Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16728)

___


### appleAppSearchesTaskGetAdvanced

▸ **appleAppSearchesTaskGetAdvanced**(`id`): `Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16402)

___


### appleAppSearchesTaskPost

▸ **appleAppSearchesTaskPost**(`body`): `Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16321](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16321)

___


### appleAppSearchesTasksReady

▸ **appleAppSearchesTasksReady**(): `Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16362](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16362)

___


### appleCategories

▸ **appleCategories**(): `Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16209](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16209)

___


### googleAppInfoTaskGetAdvanced

▸ **googleAppInfoTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15882)

___


### googleAppInfoTaskGetHtml

▸ **googleAppInfoTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15925)

___


### googleAppInfoTaskPost

▸ **googleAppInfoTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataGoogleAppInfoTaskPostRequestInfo`](AppDataGoogleAppInfoTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15801)

___


### googleAppInfoTasksReady

▸ **googleAppInfoTasksReady**(): `Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15842)

___


### googleAppListTaskGetAdvanced

▸ **googleAppListTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15717](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15717)

___


### googleAppListTaskGetHtml

▸ **googleAppListTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15760)

___


### googleAppListTaskPost

▸ **googleAppListTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataGoogleAppListTaskPostRequestInfo`](AppDataGoogleAppListTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15636)

___


### googleAppListTasksReady

▸ **googleAppListTasksReady**(): `Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15677)

___


### googleAppListingsCategories

▸ **googleAppListingsCategories**(): `Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16130)

___


### googleAppListingsSearchLive

▸ **googleAppListingsSearchLive**(`body`): `Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataGoogleAppListingsSearchLiveRequestInfo`](AppDataGoogleAppListingsSearchLiveRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16168](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16168)

___


### googleAppReviewsTaskGetAdvanced

▸ **googleAppReviewsTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16047)

___


### googleAppReviewsTaskGetHtml

▸ **googleAppReviewsTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16090)

___


### googleAppReviewsTaskPost

▸ **googleAppReviewsTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataGoogleAppReviewsTaskPostRequestInfo`](AppDataGoogleAppReviewsTaskPostRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15966](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15966)

___


### googleAppReviewsTasksReady

▸ **googleAppReviewsTasksReady**(): `Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:16007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16007)

___


### googleAppSearchesTaskGetAdvanced

▸ **googleAppSearchesTaskGetAdvanced**(`id`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 30 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15552)

___


### googleAppSearchesTaskGetHtml

▸ **googleAppSearchesTaskGetHtml**(`id`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | task identifier unique task identifier in our system in the UUID format you will be able to use it within 7 days to request the results of the task at any time |

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15595)

___


### googleAppSearchesTaskPost

▸ **googleAppSearchesTaskPost**(`body`): `Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | [`AppDataTaskRequestInfo`](AppDataTaskRequestInfo.md)[] | (optional) |

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15471)

___


### googleAppSearchesTasksReady

▸ **googleAppSearchesTasksReady**(): `Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15512)

___


### googleCategories

▸ **googleCategories**(): `Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

#### Returns

`Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

Successful operation

#### Defined in

[main.ts:15359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15359)

___


### processAppDataAppleLanguages

▸ **processAppDataAppleLanguages**(`response`): `Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleLanguagesResponseInfo`](AppDataAppleLanguagesResponseInfo.md)\>

#### Defined in

[main.ts:16299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16299)

___


### processAppDataAppleLocations

▸ **processAppDataAppleLocations**(`response`): `Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleLocationsResponseInfo`](AppDataAppleLocationsResponseInfo.md)\>

#### Defined in

[main.ts:16262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16262)

___


### processAppDataErrors

▸ **processAppDataErrors**(`response`): `Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataErrorsResponseInfo`](AppDataErrorsResponseInfo.md)\>

#### Defined in

[main.ts:15338](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15338)

___


### processAppDataGoogleLanguages

▸ **processAppDataGoogleLanguages**(`response`): `Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleLanguagesResponseInfo`](AppDataGoogleLanguagesResponseInfo.md)\>

#### Defined in

[main.ts:15449](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15449)

___


### processAppDataGoogleLocations

▸ **processAppDataGoogleLocations**(`response`): `Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleLocationsResponseInfo`](AppDataGoogleLocationsResponseInfo.md)\>

#### Defined in

[main.ts:15412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15412)

___


### processAppDataIdList

▸ **processAppDataIdList**(`response`): `Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataIdListResponseInfo`](AppDataIdListResponseInfo.md)\>

#### Defined in

[main.ts:15296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15296)

___


### processAppleAppInfoTaskGetAdvanced

▸ **processAppleAppInfoTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskGetAdvancedResponseInfo`](AppDataAppleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:16543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16543)

___


### processAppleAppInfoTaskPost

▸ **processAppleAppInfoTaskPost**(`response`): `Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppInfoTaskPostResponseInfo`](AppDataAppleAppInfoTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:16463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16463)

___


### processAppleAppInfoTasksReady

▸ **processAppleAppInfoTasksReady**(`response`): `Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppInfoTasksReadyResponseInfo`](AppDataAppleAppInfoTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:16500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16500)

___


### processAppleAppListTaskGetAdvanced

▸ **processAppleAppListTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppListTaskGetAdvancedResponseInfo`](AppDataAppleAppListTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:16665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16665)

___


### processAppleAppListTaskPost

▸ **processAppleAppListTaskPost**(`response`): `Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppListTaskPostResponseInfo`](AppDataAppleAppListTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:16585](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16585)

___


### processAppleAppListTasksReady

▸ **processAppleAppListTasksReady**(`response`): `Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppListTasksReadyResponseInfo`](AppDataAppleAppListTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:16622](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16622)

___


### processAppleAppListingsCategories

▸ **processAppleAppListingsCategories**(`response`): `Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppListingsCategoriesResponseInfo`](AppDataAppleAppListingsCategoriesResponseInfo.md)\>

#### Defined in

[main.ts:16824](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16824)

___


### processAppleAppListingsSearchLive

▸ **processAppleAppListingsSearchLive**(`response`): `Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppListingsSearchLiveResponseInfo`](AppDataAppleAppListingsSearchLiveResponseInfo.md)\>

#### Defined in

[main.ts:16866](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16866)

___


### processAppleAppReviewsTaskGetAdvanced

▸ **processAppleAppReviewsTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskGetAdvancedResponseInfo`](AppDataAppleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:16787](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16787)

___


### processAppleAppReviewsTaskPost

▸ **processAppleAppReviewsTaskPost**(`response`): `Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTaskPostResponseInfo`](AppDataAppleAppReviewsTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:16707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16707)

___


### processAppleAppReviewsTasksReady

▸ **processAppleAppReviewsTasksReady**(`response`): `Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppReviewsTasksReadyResponseInfo`](AppDataAppleAppReviewsTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:16744](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16744)

___


### processAppleAppSearchesTaskGetAdvanced

▸ **processAppleAppSearchesTaskGetAdvanced**(`response`): `Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskGetAdvancedResponseInfo`](AppDataAppleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:16421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16421)

___


### processAppleAppSearchesTaskPost

▸ **processAppleAppSearchesTaskPost**(`response`): `Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTaskPostResponseInfo`](AppDataAppleAppSearchesTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:16341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16341)

___


### processAppleAppSearchesTasksReady

▸ **processAppleAppSearchesTasksReady**(`response`): `Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleAppSearchesTasksReadyResponseInfo`](AppDataAppleAppSearchesTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:16378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16378)

___


### processAppleCategories

▸ **processAppleCategories**(`response`): `Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataAppleCategoriesResponseInfo`](AppDataAppleCategoriesResponseInfo.md)\>

#### Defined in

[main.ts:16225](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16225)

___


### processGoogleAppInfoTaskGetAdvanced

▸ **processGoogleAppInfoTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetAdvancedResponseInfo`](AppDataGoogleAppInfoTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:15901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15901)

___


### processGoogleAppInfoTaskGetHtml

▸ **processGoogleAppInfoTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskGetHtmlResponseInfo`](AppDataGoogleAppInfoTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:15944](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15944)

___


### processGoogleAppInfoTaskPost

▸ **processGoogleAppInfoTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTaskPostResponseInfo`](AppDataGoogleAppInfoTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:15821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15821)

___


### processGoogleAppInfoTasksReady

▸ **processGoogleAppInfoTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppInfoTasksReadyResponseInfo`](AppDataGoogleAppInfoTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:15858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15858)

___


### processGoogleAppListTaskGetAdvanced

▸ **processGoogleAppListTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetAdvancedResponseInfo`](AppDataGoogleAppListTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:15736](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15736)

___


### processGoogleAppListTaskGetHtml

▸ **processGoogleAppListTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskGetHtmlResponseInfo`](AppDataGoogleAppListTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:15779](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15779)

___


### processGoogleAppListTaskPost

▸ **processGoogleAppListTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppListTaskPostResponseInfo`](AppDataGoogleAppListTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:15656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15656)

___


### processGoogleAppListTasksReady

▸ **processGoogleAppListTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppListTasksReadyResponseInfo`](AppDataGoogleAppListTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:15693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15693)

___


### processGoogleAppListingsCategories

▸ **processGoogleAppListingsCategories**(`response`): `Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppListingsCategoriesResponseInfo`](AppDataGoogleAppListingsCategoriesResponseInfo.md)\>

#### Defined in

[main.ts:16146](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16146)

___


### processGoogleAppListingsSearchLive

▸ **processGoogleAppListingsSearchLive**(`response`): `Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppListingsSearchLiveResponseInfo`](AppDataGoogleAppListingsSearchLiveResponseInfo.md)\>

#### Defined in

[main.ts:16188](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16188)

___


### processGoogleAppReviewsTaskGetAdvanced

▸ **processGoogleAppReviewsTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo`](AppDataGoogleAppReviewsTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:16066](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16066)

___


### processGoogleAppReviewsTaskGetHtml

▸ **processGoogleAppReviewsTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskGetHtmlResponseInfo`](AppDataGoogleAppReviewsTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:16109](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16109)

___


### processGoogleAppReviewsTaskPost

▸ **processGoogleAppReviewsTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTaskPostResponseInfo`](AppDataGoogleAppReviewsTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:15986](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15986)

___


### processGoogleAppReviewsTasksReady

▸ **processGoogleAppReviewsTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppReviewsTasksReadyResponseInfo`](AppDataGoogleAppReviewsTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:16023](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L16023)

___


### processGoogleAppSearchesTaskGetAdvanced

▸ **processGoogleAppSearchesTaskGetAdvanced**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo`](AppDataGoogleAppSearchesTaskGetAdvancedResponseInfo.md)\>

#### Defined in

[main.ts:15571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15571)

___


### processGoogleAppSearchesTaskGetHtml

▸ **processGoogleAppSearchesTaskGetHtml**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskGetHtmlResponseInfo`](AppDataGoogleAppSearchesTaskGetHtmlResponseInfo.md)\>

#### Defined in

[main.ts:15614](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15614)

___


### processGoogleAppSearchesTaskPost

▸ **processGoogleAppSearchesTaskPost**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTaskPostResponseInfo`](AppDataGoogleAppSearchesTaskPostResponseInfo.md)\>

#### Defined in

[main.ts:15491](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15491)

___


### processGoogleAppSearchesTasksReady

▸ **processGoogleAppSearchesTasksReady**(`response`): `Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleAppSearchesTasksReadyResponseInfo`](AppDataGoogleAppSearchesTasksReadyResponseInfo.md)\>

#### Defined in

[main.ts:15528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15528)

___


### processGoogleCategories

▸ **processGoogleCategories**(`response`): `Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | `Response` |

#### Returns

`Promise`\<[`AppDataGoogleCategoriesResponseInfo`](AppDataGoogleCategoriesResponseInfo.md)\>

#### Defined in

[main.ts:15375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L15375)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")