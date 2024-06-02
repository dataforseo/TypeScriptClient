**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpApi

# Class: SerpApi

## Constructors

### new SerpApi(baseUrl, http)

> **new SerpApi**(`baseUrl`?, `http`?): [`SerpApi`](SerpApi.md)

#### Parameters

• **baseUrl?**: `string`

• **http?**

• **http\.fetch?**

#### Returns

[`SerpApi`](SerpApi.md)

#### Source

main.ts:16

## Properties

### baseUrl

> **`private`** **baseUrl**: `string`

#### Source

main.ts:13

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

main.ts:12

***

### jsonParseReviver

> **`protected`** **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

#### Parameters

• **key**: `string`

• **value**: `any`

#### Returns

`any`

#### Source

main.ts:14

## Methods

### aiSummary()

> **aiSummary**(`body`): `Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

#### Parameters

• **body**: [`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

Successful operation

#### Source

main.ts:151

***

### baiduOrganicTaskGetAdvanced()

> **baiduOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:5214

***

### baiduOrganicTaskGetHtml()

> **baiduOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:5257

***

### baiduOrganicTaskGetRegular()

> **baiduOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:5171

***

### baiduOrganicTaskPost()

> **baiduOrganicTaskPost**(`body`): `Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpBaiduOrganicTaskPostRequestInfo`](SerpBaiduOrganicTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:5053

***

### baiduOrganicTasksFixed()

> **baiduOrganicTasksFixed**(): `Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:5131

***

### baiduOrganicTasksReady()

> **baiduOrganicTasksReady**(): `Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:5094

***

### bingLocalPackLiveHtml()

> **bingLocalPackLiveHtml**(`body`): `Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:3680

***

### bingLocalPackLiveRegular()

> **bingLocalPackLiveRegular**(`body`): `Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:3638

***

### bingLocalPackTaskGetHtml()

> **bingLocalPackTaskGetHtml**(`id`): `Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:3597

***

### bingLocalPackTaskGetRegular()

> **bingLocalPackTaskGetRegular**(`id`): `Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:3554

***

### bingLocalPackTaskPost()

> **bingLocalPackTaskPost**(`body`): `Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:3436

***

### bingLocalPackTasksFixed()

> **bingLocalPackTasksFixed**(): `Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:3514

***

### bingLocalPackTasksReady()

> **bingLocalPackTasksReady**(): `Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:3477

***

### bingOrganicLiveAdvanced()

> **bingOrganicLiveAdvanced**(`body`): `Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:3352

***

### bingOrganicLiveHtml()

> **bingOrganicLiveHtml**(`body`): `Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:3394

***

### bingOrganicLiveRegular()

> **bingOrganicLiveRegular**(`body`): `Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:3310

***

### bingOrganicTaskGetAdvanced()

> **bingOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:3226

***

### bingOrganicTaskGetHtml()

> **bingOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:3269

***

### bingOrganicTaskGetRegular()

> **bingOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:3183

***

### bingOrganicTaskPost()

> **bingOrganicTaskPost**(`body`): `Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:3065

***

### bingOrganicTasksFixed()

> **bingOrganicTasksFixed**(): `Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:3143

***

### bingOrganicTasksReady()

> **bingOrganicTasksReady**(): `Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:3106

***

### googleAutocompleteLiveAdvanced()

> **googleAutocompleteLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2502

***

### googleAutocompleteTaskGetAdvanced()

> **googleAutocompleteTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2461

***

### googleAutocompleteTaskPost()

> **googleAutocompleteTaskPost**(`body`): `Promise`\<[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleAutocompleteTaskPostRequestInfo`](SerpGoogleAutocompleteTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:2343

***

### googleAutocompleteTasksFixed()

> **googleAutocompleteTasksFixed**(): `Promise`\<[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2421

***

### googleAutocompleteTasksReady()

> **googleAutocompleteTasksReady**(): `Promise`\<[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:2384

***

### googleDatasetInfoLiveAdvanced()

> **googleDatasetInfoLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2904

***

### googleDatasetInfoTaskGetAdvanced()

> **googleDatasetInfoTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2863

***

### googleDatasetInfoTaskPost()

> **googleDatasetInfoTaskPost**(`body`): `Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:2745

***

### googleDatasetInfoTasksFixed()

> **googleDatasetInfoTasksFixed**(): `Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2823

***

### googleDatasetInfoTasksReady()

> **googleDatasetInfoTasksReady**(): `Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:2786

***

### googleDatasetSearchLiveAdvanced()

> **googleDatasetSearchLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2703

***

### googleDatasetSearchTaskGetAdvanced()

> **googleDatasetSearchTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2662

***

### googleDatasetSearchTaskPost()

> **googleDatasetSearchTaskPost**(`body`): `Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleDatasetSearchTaskPostRequestInfo`](SerpGoogleDatasetSearchTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:2544

***

### googleDatasetSearchTasksFixed()

> **googleDatasetSearchTasksFixed**(): `Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2622

***

### googleDatasetSearchTasksReady()

> **googleDatasetSearchTasksReady**(): `Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:2585

***

### googleEventsLiveAdvanced()

> **googleEventsLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1654

***

### googleEventsTaskGetAdvanced()

> **googleEventsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1613

***

### googleEventsTaskPost()

> **googleEventsTaskPost**(`body`): `Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:1495

***

### googleEventsTasksFixed()

> **googleEventsTasksFixed**(): `Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1573

***

### googleEventsTasksReady()

> **googleEventsTasksReady**(): `Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:1536

***

### googleImagesLiveAdvanced()

> **googleImagesLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1898

***

### googleImagesLiveHtml()

> **googleImagesLiveHtml**(`body`): `Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:1940

***

### googleImagesTaskGetAdvanced()

> **googleImagesTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1814

***

### googleImagesTaskGetHtml()

> **googleImagesTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:1857

***

### googleImagesTaskPost()

> **googleImagesTaskPost**(`body`): `Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:1696

***

### googleImagesTasksFixed()

> **googleImagesTasksFixed**(): `Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1774

***

### googleImagesTasksReady()

> **googleImagesTasksReady**(): `Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:1737

***

### googleJobsTaskGetAdvanced()

> **googleJobsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2259

***

### googleJobsTaskGetHtml()

> **googleJobsTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:2302

***

### googleJobsTaskPost()

> **googleJobsTaskPost**(`body`): `Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleJobsTaskPostRequestInfo`](SerpGoogleJobsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:2141

***

### googleJobsTasksFixed()

> **googleJobsTasksFixed**(): `Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2219

***

### googleJobsTasksReady()

> **googleJobsTasksReady**(): `Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:2182

***

### googleLocalFinderLiveAdvanced()

> **googleLocalFinderLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleLocalFinderLiveAdvancedRequestInfo`](SerpGoogleLocalFinderLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1125

***

### googleLocalFinderLiveHtml()

> **googleLocalFinderLiveHtml**(`body`): `Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleLocalFinderLiveHtmlRequestInfo`](SerpGoogleLocalFinderLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:1167

***

### googleLocalFinderTaskGetAdvanced()

> **googleLocalFinderTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
a universally unique identifier (UUID)
unique task identifier in our system
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1041

***

### googleLocalFinderTaskGetHtml()

> **googleLocalFinderTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:1084

***

### googleLocalFinderTaskPost()

> **googleLocalFinderTaskPost**(`body`): `Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleLocalFinderTaskPostRequestInfo`](SerpGoogleLocalFinderTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:922

***

### googleLocalFinderTasksFixed()

> **googleLocalFinderTasksFixed**(): `Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1000

***

### googleLocalFinderTasksReady()

> **googleLocalFinderTasksReady**(): `Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:963

***

### googleMapsLiveAdvanced()

> **googleMapsLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:880

***

### googleMapsTaskGetAdvanced()

> **googleMapsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
a universally unique identifier (UUID)
unique task identifier in our system
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:839

***

### googleMapsTaskPost()

> **googleMapsTaskPost**(`body`): `Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleMapsTaskPostRequestInfo`](SerpGoogleMapsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:720

***

### googleMapsTasksFixed()

> **googleMapsTasksFixed**(): `Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:798

***

### googleMapsTasksReady()

> **googleMapsTasksReady**(): `Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:761

***

### googleNewsLiveAdvanced()

> **googleNewsLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1411

***

### googleNewsLiveHtml()

> **googleNewsLiveHtml**(`body`): `Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:1453

***

### googleNewsTaskGetAdvanced()

> **googleNewsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1327

***

### googleNewsTaskGetHtml()

> **googleNewsTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:1370

***

### googleNewsTaskPost()

> **googleNewsTaskPost**(`body`): `Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:1209

***

### googleNewsTasksFixed()

> **googleNewsTasksFixed**(): `Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:1287

***

### googleNewsTasksReady()

> **googleNewsTasksReady**(): `Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:1250

***

### googleOrganicLiveAdvanced()

> **googleOrganicLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleOrganicLiveAdvancedRequestInfo`](SerpGoogleOrganicLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:636

***

### googleOrganicLiveHtml()

> **googleOrganicLiveHtml**(`body`): `Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:678

***

### googleOrganicLiveRegular()

> **googleOrganicLiveRegular**(`body`): `Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleOrganicLiveRegularRequestInfo`](SerpGoogleOrganicLiveRegularRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:594

***

### googleOrganicTaskGetAdvanced()

> **googleOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:510

***

### googleOrganicTaskGetHtml()

> **googleOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:553

***

### googleOrganicTaskGetRegular()

> **googleOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:467

***

### googleOrganicTaskPost()

> **googleOrganicTaskPost**(`body`): `Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:312

***

### googleOrganicTasksFixed()

> **googleOrganicTasksFixed**(): `Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:427

***

### googleOrganicTasksReady()

> **googleOrganicTasksReady**(): `Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:353

***

### googleSearchByImageTaskGetAdvanced()

> **googleSearchByImageTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2100

***

### googleSearchByImageTaskPost()

> **googleSearchByImageTaskPost**(`body`): `Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:1982

***

### googleSearchByImageTasksFixed()

> **googleSearchByImageTasksFixed**(): `Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:2060

***

### googleSearchByImageTasksReady()

> **googleSearchByImageTasksReady**(): `Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:2023

***

### naverOrganicTaskGetAdvanced()

> **naverOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:5459

***

### naverOrganicTaskGetHtml()

> **naverOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:5502

***

### naverOrganicTaskGetRegular()

> **naverOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:5416

***

### naverOrganicTaskPost()

> **naverOrganicTaskPost**(`body`): `Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:5298

***

### naverOrganicTasksFixed()

> **naverOrganicTasksFixed**(): `Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:5376

***

### naverOrganicTasksReady()

> **naverOrganicTasksReady**(): `Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:5339

***

### processAiSummary()

> **`protected`** **processAiSummary**(`response`): `Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

#### Source

main.ts:171

***

### processBaiduOrganicTaskGetAdvanced()

> **`protected`** **processBaiduOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:5233

***

### processBaiduOrganicTaskGetHtml()

> **`protected`** **processBaiduOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:5276

***

### processBaiduOrganicTaskGetRegular()

> **`protected`** **processBaiduOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

#### Source

main.ts:5190

***

### processBaiduOrganicTaskPost()

> **`protected`** **processBaiduOrganicTaskPost**(`response`): `Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

#### Source

main.ts:5073

***

### processBaiduOrganicTasksFixed()

> **`protected`** **processBaiduOrganicTasksFixed**(`response`): `Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

#### Source

main.ts:5147

***

### processBaiduOrganicTasksReady()

> **`protected`** **processBaiduOrganicTasksReady**(`response`): `Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

#### Source

main.ts:5110

***

### processBingLocalPackLiveHtml()

> **`protected`** **processBingLocalPackLiveHtml**(`response`): `Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

#### Source

main.ts:3700

***

### processBingLocalPackLiveRegular()

> **`protected`** **processBingLocalPackLiveRegular**(`response`): `Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

#### Source

main.ts:3658

***

### processBingLocalPackTaskGetHtml()

> **`protected`** **processBingLocalPackTaskGetHtml**(`response`): `Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:3616

***

### processBingLocalPackTaskGetRegular()

> **`protected`** **processBingLocalPackTaskGetRegular**(`response`): `Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

#### Source

main.ts:3573

***

### processBingLocalPackTaskPost()

> **`protected`** **processBingLocalPackTaskPost**(`response`): `Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

#### Source

main.ts:3456

***

### processBingLocalPackTasksFixed()

> **`protected`** **processBingLocalPackTasksFixed**(`response`): `Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

#### Source

main.ts:3530

***

### processBingLocalPackTasksReady()

> **`protected`** **processBingLocalPackTasksReady**(`response`): `Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

#### Source

main.ts:3493

***

### processBingOrganicLiveAdvanced()

> **`protected`** **processBingOrganicLiveAdvanced**(`response`): `Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:3372

***

### processBingOrganicLiveHtml()

> **`protected`** **processBingOrganicLiveHtml**(`response`): `Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

#### Source

main.ts:3414

***

### processBingOrganicLiveRegular()

> **`protected`** **processBingOrganicLiveRegular**(`response`): `Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

#### Source

main.ts:3330

***

### processBingOrganicTaskGetAdvanced()

> **`protected`** **processBingOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:3245

***

### processBingOrganicTaskGetHtml()

> **`protected`** **processBingOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:3288

***

### processBingOrganicTaskGetRegular()

> **`protected`** **processBingOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

#### Source

main.ts:3202

***

### processBingOrganicTaskPost()

> **`protected`** **processBingOrganicTaskPost**(`response`): `Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

#### Source

main.ts:3085

***

### processBingOrganicTasksFixed()

> **`protected`** **processBingOrganicTasksFixed**(`response`): `Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

#### Source

main.ts:3159

***

### processBingOrganicTasksReady()

> **`protected`** **processBingOrganicTasksReady**(`response`): `Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

#### Source

main.ts:3122

***

### processGoogleAutocompleteLiveAdvanced()

> **`protected`** **processGoogleAutocompleteLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:2522

***

### processGoogleAutocompleteTaskGetAdvanced()

> **`protected`** **processGoogleAutocompleteTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:2480

***

### processGoogleAutocompleteTaskPost()

> **`protected`** **processGoogleAutocompleteTaskPost**(`response`): `Promise`\<[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)\>

#### Source

main.ts:2363

***

### processGoogleAutocompleteTasksFixed()

> **`protected`** **processGoogleAutocompleteTasksFixed**(`response`): `Promise`\<[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)\>

#### Source

main.ts:2437

***

### processGoogleAutocompleteTasksReady()

> **`protected`** **processGoogleAutocompleteTasksReady**(`response`): `Promise`\<[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)\>

#### Source

main.ts:2400

***

### processGoogleDatasetInfoLiveAdvanced()

> **`protected`** **processGoogleDatasetInfoLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:2924

***

### processGoogleDatasetInfoTaskGetAdvanced()

> **`protected`** **processGoogleDatasetInfoTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:2882

***

### processGoogleDatasetInfoTaskPost()

> **`protected`** **processGoogleDatasetInfoTaskPost**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

#### Source

main.ts:2765

***

### processGoogleDatasetInfoTasksFixed()

> **`protected`** **processGoogleDatasetInfoTasksFixed**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

#### Source

main.ts:2839

***

### processGoogleDatasetInfoTasksReady()

> **`protected`** **processGoogleDatasetInfoTasksReady**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

#### Source

main.ts:2802

***

### processGoogleDatasetSearchLiveAdvanced()

> **`protected`** **processGoogleDatasetSearchLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:2723

***

### processGoogleDatasetSearchTaskGetAdvanced()

> **`protected`** **processGoogleDatasetSearchTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:2681

***

### processGoogleDatasetSearchTaskPost()

> **`protected`** **processGoogleDatasetSearchTaskPost**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

#### Source

main.ts:2564

***

### processGoogleDatasetSearchTasksFixed()

> **`protected`** **processGoogleDatasetSearchTasksFixed**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

#### Source

main.ts:2638

***

### processGoogleDatasetSearchTasksReady()

> **`protected`** **processGoogleDatasetSearchTasksReady**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

#### Source

main.ts:2601

***

### processGoogleEventsLiveAdvanced()

> **`protected`** **processGoogleEventsLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:1674

***

### processGoogleEventsTaskGetAdvanced()

> **`protected`** **processGoogleEventsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:1632

***

### processGoogleEventsTaskPost()

> **`protected`** **processGoogleEventsTaskPost**(`response`): `Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

#### Source

main.ts:1515

***

### processGoogleEventsTasksFixed()

> **`protected`** **processGoogleEventsTasksFixed**(`response`): `Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

#### Source

main.ts:1589

***

### processGoogleEventsTasksReady()

> **`protected`** **processGoogleEventsTasksReady**(`response`): `Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

#### Source

main.ts:1552

***

### processGoogleImagesLiveAdvanced()

> **`protected`** **processGoogleImagesLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:1918

***

### processGoogleImagesLiveHtml()

> **`protected`** **processGoogleImagesLiveHtml**(`response`): `Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

#### Source

main.ts:1960

***

### processGoogleImagesTaskGetAdvanced()

> **`protected`** **processGoogleImagesTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:1833

***

### processGoogleImagesTaskGetHtml()

> **`protected`** **processGoogleImagesTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:1876

***

### processGoogleImagesTaskPost()

> **`protected`** **processGoogleImagesTaskPost**(`response`): `Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

#### Source

main.ts:1716

***

### processGoogleImagesTasksFixed()

> **`protected`** **processGoogleImagesTasksFixed**(`response`): `Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

#### Source

main.ts:1790

***

### processGoogleImagesTasksReady()

> **`protected`** **processGoogleImagesTasksReady**(`response`): `Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

#### Source

main.ts:1753

***

### processGoogleJobsTaskGetAdvanced()

> **`protected`** **processGoogleJobsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:2278

***

### processGoogleJobsTaskGetHtml()

> **`protected`** **processGoogleJobsTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:2321

***

### processGoogleJobsTaskPost()

> **`protected`** **processGoogleJobsTaskPost**(`response`): `Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

#### Source

main.ts:2161

***

### processGoogleJobsTasksFixed()

> **`protected`** **processGoogleJobsTasksFixed**(`response`): `Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

#### Source

main.ts:2235

***

### processGoogleJobsTasksReady()

> **`protected`** **processGoogleJobsTasksReady**(`response`): `Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

#### Source

main.ts:2198

***

### processGoogleLocalFinderLiveAdvanced()

> **`protected`** **processGoogleLocalFinderLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:1145

***

### processGoogleLocalFinderLiveHtml()

> **`protected`** **processGoogleLocalFinderLiveHtml**(`response`): `Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

#### Source

main.ts:1187

***

### processGoogleLocalFinderTaskGetAdvanced()

> **`protected`** **processGoogleLocalFinderTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:1060

***

### processGoogleLocalFinderTaskGetHtml()

> **`protected`** **processGoogleLocalFinderTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:1103

***

### processGoogleLocalFinderTaskPost()

> **`protected`** **processGoogleLocalFinderTaskPost**(`response`): `Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

#### Source

main.ts:942

***

### processGoogleLocalFinderTasksFixed()

> **`protected`** **processGoogleLocalFinderTasksFixed**(`response`): `Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

#### Source

main.ts:1016

***

### processGoogleLocalFinderTasksReady()

> **`protected`** **processGoogleLocalFinderTasksReady**(`response`): `Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

#### Source

main.ts:979

***

### processGoogleMapsLiveAdvanced()

> **`protected`** **processGoogleMapsLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:900

***

### processGoogleMapsTaskGetAdvanced()

> **`protected`** **processGoogleMapsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:858

***

### processGoogleMapsTaskPost()

> **`protected`** **processGoogleMapsTaskPost**(`response`): `Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

#### Source

main.ts:740

***

### processGoogleMapsTasksFixed()

> **`protected`** **processGoogleMapsTasksFixed**(`response`): `Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

#### Source

main.ts:814

***

### processGoogleMapsTasksReady()

> **`protected`** **processGoogleMapsTasksReady**(`response`): `Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

#### Source

main.ts:777

***

### processGoogleNewsLiveAdvanced()

> **`protected`** **processGoogleNewsLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:1431

***

### processGoogleNewsLiveHtml()

> **`protected`** **processGoogleNewsLiveHtml**(`response`): `Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

#### Source

main.ts:1473

***

### processGoogleNewsTaskGetAdvanced()

> **`protected`** **processGoogleNewsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:1346

***

### processGoogleNewsTaskGetHtml()

> **`protected`** **processGoogleNewsTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:1389

***

### processGoogleNewsTaskPost()

> **`protected`** **processGoogleNewsTaskPost**(`response`): `Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

#### Source

main.ts:1229

***

### processGoogleNewsTasksFixed()

> **`protected`** **processGoogleNewsTasksFixed**(`response`): `Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

#### Source

main.ts:1303

***

### processGoogleNewsTasksReady()

> **`protected`** **processGoogleNewsTasksReady**(`response`): `Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

#### Source

main.ts:1266

***

### processGoogleOrganicLiveAdvanced()

> **`protected`** **processGoogleOrganicLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:656

***

### processGoogleOrganicLiveHtml()

> **`protected`** **processGoogleOrganicLiveHtml**(`response`): `Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

#### Source

main.ts:698

***

### processGoogleOrganicLiveRegular()

> **`protected`** **processGoogleOrganicLiveRegular**(`response`): `Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

#### Source

main.ts:614

***

### processGoogleOrganicTaskGetAdvanced()

> **`protected`** **processGoogleOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:529

***

### processGoogleOrganicTaskGetHtml()

> **`protected`** **processGoogleOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:572

***

### processGoogleOrganicTaskGetRegular()

> **`protected`** **processGoogleOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

#### Source

main.ts:486

***

### processGoogleOrganicTaskPost()

> **`protected`** **processGoogleOrganicTaskPost**(`response`): `Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

#### Source

main.ts:332

***

### processGoogleOrganicTasksFixed()

> **`protected`** **processGoogleOrganicTasksFixed**(`response`): `Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

#### Source

main.ts:443

***

### processGoogleOrganicTasksReady()

> **`protected`** **processGoogleOrganicTasksReady**(`response`): `Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

#### Source

main.ts:369

***

### processGoogleSearchByImageTaskGetAdvanced()

> **`protected`** **processGoogleSearchByImageTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:2119

***

### processGoogleSearchByImageTaskPost()

> **`protected`** **processGoogleSearchByImageTaskPost**(`response`): `Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

#### Source

main.ts:2002

***

### processGoogleSearchByImageTasksFixed()

> **`protected`** **processGoogleSearchByImageTasksFixed**(`response`): `Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

#### Source

main.ts:2076

***

### processGoogleSearchByImageTasksReady()

> **`protected`** **processGoogleSearchByImageTasksReady**(`response`): `Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

#### Source

main.ts:2039

***

### processNaverOrganicTaskGetAdvanced()

> **`protected`** **processNaverOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:5478

***

### processNaverOrganicTaskGetHtml()

> **`protected`** **processNaverOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:5521

***

### processNaverOrganicTaskGetRegular()

> **`protected`** **processNaverOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

#### Source

main.ts:5435

***

### processNaverOrganicTaskPost()

> **`protected`** **processNaverOrganicTaskPost**(`response`): `Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

#### Source

main.ts:5318

***

### processNaverOrganicTasksFixed()

> **`protected`** **processNaverOrganicTasksFixed**(`response`): `Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

#### Source

main.ts:5392

***

### processNaverOrganicTasksReady()

> **`protected`** **processNaverOrganicTasksReady**(`response`): `Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

#### Source

main.ts:5355

***

### processScreenshot()

> **`protected`** **processScreenshot**(`response`): `Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

#### Source

main.ts:129

***

### processSerpBaiduLanguages()

> **`protected`** **processSerpBaiduLanguages**(`response`): `Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

#### Source

main.ts:5031

***

### processSerpBaiduLocations()

> **`protected`** **processSerpBaiduLocations**(`response`): `Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

#### Source

main.ts:4949

***

### processSerpBaiduLocationsCountry()

> **`protected`** **processSerpBaiduLocationsCountry**(`response`): `Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

#### Source

main.ts:4994

***

### processSerpBingLanguages()

> **`protected`** **processSerpBingLanguages**(`response`): `Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

#### Source

main.ts:3043

***

### processSerpBingLocations()

> **`protected`** **processSerpBingLocations**(`response`): `Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

#### Source

main.ts:2961

***

### processSerpBingLocationsCountry()

> **`protected`** **processSerpBingLocationsCountry**(`response`): `Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

#### Source

main.ts:3006

***

### processSerpErrors()

> **`protected`** **processSerpErrors**(`response`): `Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

#### Source

main.ts:87

***

### processSerpGoogleLanguages()

> **`protected`** **processSerpGoogleLanguages**(`response`): `Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

#### Source

main.ts:290

***

### processSerpGoogleLocations()

> **`protected`** **processSerpGoogleLocations**(`response`): `Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

#### Source

main.ts:208

***

### processSerpGoogleLocationsCountry()

> **`protected`** **processSerpGoogleLocationsCountry**(`response`): `Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

#### Source

main.ts:253

***

### processSerpIdList()

> **`protected`** **processSerpIdList**(`response`): `Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

#### Source

main.ts:45

***

### processSerpSeznamLanguages()

> **`protected`** **processSerpSeznamLanguages**(`response`): `Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

#### Source

main.ts:5640

***

### processSerpSeznamLocations()

> **`protected`** **processSerpSeznamLocations**(`response`): `Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

#### Source

main.ts:5558

***

### processSerpSeznamLocationsCountry()

> **`protected`** **processSerpSeznamLocationsCountry**(`response`): `Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

#### Source

main.ts:5603

***

### processSerpYahooLanguages()

> **`protected`** **processSerpYahooLanguages**(`response`): `Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

#### Source

main.ts:4541

***

### processSerpYahooLocations()

> **`protected`** **processSerpYahooLocations**(`response`): `Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

#### Source

main.ts:4459

***

### processSerpYahooLocationsCountry()

> **`protected`** **processSerpYahooLocationsCountry**(`response`): `Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

#### Source

main.ts:4504

***

### processSerpYoutubeLanguages()

> **`protected`** **processSerpYoutubeLanguages**(`response`): `Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

#### Source

main.ts:3819

***

### processSerpYoutubeLocations()

> **`protected`** **processSerpYoutubeLocations**(`response`): `Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

#### Source

main.ts:3737

***

### processSerpYoutubeLocationsCountry()

> **`protected`** **processSerpYoutubeLocationsCountry**(`response`): `Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

#### Source

main.ts:3782

***

### processSeznamOrganicTaskGetAdvanced()

> **`protected`** **processSeznamOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:5842

***

### processSeznamOrganicTaskGetHtml()

> **`protected`** **processSeznamOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:5885

***

### processSeznamOrganicTaskGetRegular()

> **`protected`** **processSeznamOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

#### Source

main.ts:5799

***

### processSeznamOrganicTaskPost()

> **`protected`** **processSeznamOrganicTaskPost**(`response`): `Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

#### Source

main.ts:5682

***

### processSeznamOrganicTasksFixed()

> **`protected`** **processSeznamOrganicTasksFixed**(`response`): `Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

#### Source

main.ts:5756

***

### processSeznamOrganicTasksReady()

> **`protected`** **processSeznamOrganicTasksReady**(`response`): `Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

#### Source

main.ts:5719

***

### processTasksReady()

> **`protected`** **processTasksReady**(`response`): `Promise`\<[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)\>

#### Source

main.ts:406

***

### processYahooOrganicLiveAdvanced()

> **`protected`** **processYahooOrganicLiveAdvanced**(`response`): `Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:4870

***

### processYahooOrganicLiveHtml()

> **`protected`** **processYahooOrganicLiveHtml**(`response`): `Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

#### Source

main.ts:4912

***

### processYahooOrganicLiveRegular()

> **`protected`** **processYahooOrganicLiveRegular**(`response`): `Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

#### Source

main.ts:4828

***

### processYahooOrganicTaskGetAdvanced()

> **`protected`** **processYahooOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:4743

***

### processYahooOrganicTaskGetHtml()

> **`protected`** **processYahooOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

#### Source

main.ts:4786

***

### processYahooOrganicTaskGetRegular()

> **`protected`** **processYahooOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

#### Source

main.ts:4700

***

### processYahooOrganicTaskPost()

> **`protected`** **processYahooOrganicTaskPost**(`response`): `Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

#### Source

main.ts:4583

***

### processYahooOrganicTasksFixed()

> **`protected`** **processYahooOrganicTasksFixed**(`response`): `Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

#### Source

main.ts:4657

***

### processYahooOrganicTasksReady()

> **`protected`** **processYahooOrganicTasksReady**(`response`): `Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

#### Source

main.ts:4620

***

### processYoutubeVideoCommentsLiveAdvanced()

> **`protected`** **processYoutubeVideoCommentsLiveAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:4422

***

### processYoutubeVideoCommentsTaskGetAdvanced()

> **`protected`** **processYoutubeVideoCommentsTaskGetAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:4380

***

### processYoutubeVideoCommentsTaskPost()

> **`protected`** **processYoutubeVideoCommentsTaskPost**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

#### Source

main.ts:4263

***

### processYoutubeVideoCommentsTasksFixed()

> **`protected`** **processYoutubeVideoCommentsTasksFixed**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

#### Source

main.ts:4337

***

### processYoutubeVideoCommentsTasksReady()

> **`protected`** **processYoutubeVideoCommentsTasksReady**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

#### Source

main.ts:4300

***

### processYoutubeVideoInfoLiveAdvanced()

> **`protected`** **processYoutubeVideoInfoLiveAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:4020

***

### processYoutubeVideoInfoTaskGetAdvanced()

> **`protected`** **processYoutubeVideoInfoTaskGetAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:3978

***

### processYoutubeVideoInfoTaskPost()

> **`protected`** **processYoutubeVideoInfoTaskPost**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

#### Source

main.ts:3861

***

### processYoutubeVideoInfoTasksFixed()

> **`protected`** **processYoutubeVideoInfoTasksFixed**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

#### Source

main.ts:3935

***

### processYoutubeVideoInfoTasksReady()

> **`protected`** **processYoutubeVideoInfoTasksReady**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

#### Source

main.ts:3898

***

### processYoutubeVideoSubtitlesLiveAdvanced()

> **`protected`** **processYoutubeVideoSubtitlesLiveAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

#### Source

main.ts:4221

***

### processYoutubeVideoSubtitlesTaskGetAdvanced()

> **`protected`** **processYoutubeVideoSubtitlesTaskGetAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

#### Source

main.ts:4179

***

### processYoutubeVideoSubtitlesTaskPost()

> **`protected`** **processYoutubeVideoSubtitlesTaskPost**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

#### Source

main.ts:4062

***

### processYoutubeVideoSubtitlesTasksFixed()

> **`protected`** **processYoutubeVideoSubtitlesTasksFixed**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

#### Source

main.ts:4136

***

### processYoutubeVideoSubtitlesTasksReady()

> **`protected`** **processYoutubeVideoSubtitlesTasksReady**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

#### Parameters

• **response**: `Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

#### Source

main.ts:4099

***

### screenshot()

> **screenshot**(`body`): `Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

#### Parameters

• **body**: [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

Successful operation

#### Source

main.ts:109

***

### serpBaiduLanguages()

> **serpBaiduLanguages**(): `Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:5015

***

### serpBaiduLocations()

> **serpBaiduLocations**(): `Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:4933

***

### serpBaiduLocationsCountry()

> **serpBaiduLocationsCountry**(`country`): `Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

Successful operation

#### Source

main.ts:4975

***

### serpBingLanguages()

> **serpBingLanguages**(): `Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:3027

***

### serpBingLocations()

> **serpBingLocations**(): `Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:2945

***

### serpBingLocationsCountry()

> **serpBingLocationsCountry**(`country`): `Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

Successful operation

#### Source

main.ts:2987

***

### serpErrors()

> **serpErrors**(`body`): `Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

#### Parameters

• **body**: [`SerpErrorsRequestInfo`](SerpErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

Successful operation

#### Source

main.ts:67

***

### serpGoogleLanguages()

> **serpGoogleLanguages**(): `Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:274

***

### serpGoogleLocations()

> **serpGoogleLocations**(): `Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:192

***

### serpGoogleLocationsCountry()

> **serpGoogleLocationsCountry**(`country`): `Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

Successful operation

#### Source

main.ts:234

***

### serpIdList()

> **serpIdList**(`body`): `Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

#### Parameters

• **body**: [`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

Successful operation

#### Source

main.ts:25

***

### serpSeznamLanguages()

> **serpSeznamLanguages**(): `Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:5624

***

### serpSeznamLocations()

> **serpSeznamLocations**(): `Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:5542

***

### serpSeznamLocationsCountry()

> **serpSeznamLocationsCountry**(`country`): `Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

Successful operation

#### Source

main.ts:5584

***

### serpYahooLanguages()

> **serpYahooLanguages**(): `Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:4525

***

### serpYahooLocations()

> **serpYahooLocations**(): `Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:4443

***

### serpYahooLocationsCountry()

> **serpYahooLocationsCountry**(`country`): `Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

Successful operation

#### Source

main.ts:4485

***

### serpYoutubeLanguages()

> **serpYoutubeLanguages**(): `Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

Successful operation

#### Source

main.ts:3803

***

### serpYoutubeLocations()

> **serpYoutubeLocations**(): `Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

Successful operation

#### Source

main.ts:3721

***

### serpYoutubeLocationsCountry()

> **serpYoutubeLocationsCountry**(`country`): `Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

#### Parameters

• **country**: `string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

Successful operation

#### Source

main.ts:3763

***

### seznamOrganicTaskGetAdvanced()

> **seznamOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:5823

***

### seznamOrganicTaskGetHtml()

> **seznamOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:5866

***

### seznamOrganicTaskGetRegular()

> **seznamOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:5780

***

### seznamOrganicTaskPost()

> **seznamOrganicTaskPost**(`body`): `Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:5662

***

### seznamOrganicTasksFixed()

> **seznamOrganicTasksFixed**(): `Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:5740

***

### seznamOrganicTasksReady()

> **seznamOrganicTasksReady**(): `Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:5703

***

### tasksReady()

> **tasksReady**(): `Promise`\<[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:390

***

### yahooOrganicLiveAdvanced()

> **yahooOrganicLiveAdvanced**(`body`): `Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4850

***

### yahooOrganicLiveHtml()

> **yahooOrganicLiveHtml**(`body`): `Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:4892

***

### yahooOrganicLiveRegular()

> **yahooOrganicLiveRegular**(`body`): `Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:4808

***

### yahooOrganicTaskGetAdvanced()

> **yahooOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4724

***

### yahooOrganicTaskGetHtml()

> **yahooOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

#### Source

main.ts:4767

***

### yahooOrganicTaskGetRegular()

> **yahooOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

#### Source

main.ts:4681

***

### yahooOrganicTaskPost()

> **yahooOrganicTaskPost**(`body`): `Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpTaskRequestInfo`](SerpTaskRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:4563

***

### yahooOrganicTasksFixed()

> **yahooOrganicTasksFixed**(): `Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4641

***

### yahooOrganicTasksReady()

> **yahooOrganicTasksReady**(): `Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:4604

***

### youtubeVideoCommentsLiveAdvanced()

> **youtubeVideoCommentsLiveAdvanced**(`body`): `Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4402

***

### youtubeVideoCommentsTaskGetAdvanced()

> **youtubeVideoCommentsTaskGetAdvanced**(`id`): `Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4361

***

### youtubeVideoCommentsTaskPost()

> **youtubeVideoCommentsTaskPost**(`body`): `Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:4243

***

### youtubeVideoCommentsTasksFixed()

> **youtubeVideoCommentsTasksFixed**(): `Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4321

***

### youtubeVideoCommentsTasksReady()

> **youtubeVideoCommentsTasksReady**(): `Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:4284

***

### youtubeVideoInfoLiveAdvanced()

> **youtubeVideoInfoLiveAdvanced**(`body`): `Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4000

***

### youtubeVideoInfoTaskGetAdvanced()

> **youtubeVideoInfoTaskGetAdvanced**(`id`): `Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:3959

***

### youtubeVideoInfoTaskPost()

> **youtubeVideoInfoTaskPost**(`body`): `Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:3841

***

### youtubeVideoInfoTasksFixed()

> **youtubeVideoInfoTasksFixed**(): `Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:3919

***

### youtubeVideoInfoTasksReady()

> **youtubeVideoInfoTasksReady**(): `Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:3882

***

### youtubeVideoSubtitlesLiveAdvanced()

> **youtubeVideoSubtitlesLiveAdvanced**(`body`): `Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

#### Parameters

• **body**: [`SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4201

***

### youtubeVideoSubtitlesTaskGetAdvanced()

> **youtubeVideoSubtitlesTaskGetAdvanced**(`id`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

#### Parameters

• **id**: `string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4160

***

### youtubeVideoSubtitlesTaskPost()

> **youtubeVideoSubtitlesTaskPost**(`body`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

#### Parameters

• **body**: [`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

Successful operation

#### Source

main.ts:4042

***

### youtubeVideoSubtitlesTasksFixed()

> **youtubeVideoSubtitlesTasksFixed**(): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

Successful operation

#### Source

main.ts:4120

***

### youtubeVideoSubtitlesTasksReady()

> **youtubeVideoSubtitlesTasksReady**(): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

Successful operation

#### Source

main.ts:4083
