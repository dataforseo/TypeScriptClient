[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpApi

# Class: SerpApi

Defined in: main.ts:11

## Constructors

### new SerpApi()

> **new SerpApi**(`baseUrl`?, `http`?): [`SerpApi`](SerpApi.md)

Defined in: main.ts:16

#### Parameters

##### baseUrl?

`string`

##### http?

###### fetch

#### Returns

[`SerpApi`](SerpApi.md)

## Properties

### jsonParseReviver()

> `protected` **jsonParseReviver**: (`key`, `value`) => `any` = `undefined`

Defined in: main.ts:14

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`any`

## Methods

### aiSummary()

> **aiSummary**(`body`): `Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

Defined in: main.ts:151

#### Parameters

##### body

[`SerpAiSummaryRequestInfo`](SerpAiSummaryRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

Successful operation

***

### baiduOrganicTaskGetAdvanced()

> **baiduOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:5532

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### baiduOrganicTaskGetHtml()

> **baiduOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:5575

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### baiduOrganicTaskGetRegular()

> **baiduOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:5489

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

***

### baiduOrganicTaskPost()

> **baiduOrganicTaskPost**(`body`): `Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:5371

#### Parameters

##### body

[`SerpBaiduOrganicTaskPostRequestInfo`](SerpBaiduOrganicTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

Successful operation

***

### baiduOrganicTasksFixed()

> **baiduOrganicTasksFixed**(): `Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:5449

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

Successful operation

***

### baiduOrganicTasksReady()

> **baiduOrganicTasksReady**(): `Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:5412

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

Successful operation

***

### bingLocalPackLiveHtml()

> **bingLocalPackLiveHtml**(`body`): `Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

Defined in: main.ts:3998

#### Parameters

##### body

[`SerpBingLocalPackLiveHtmlRequestInfo`](SerpBingLocalPackLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

Successful operation

***

### bingLocalPackLiveRegular()

> **bingLocalPackLiveRegular**(`body`): `Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

Defined in: main.ts:3956

#### Parameters

##### body

[`SerpBingLocalPackLiveRegularRequestInfo`](SerpBingLocalPackLiveRegularRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

Successful operation

***

### bingLocalPackTaskGetHtml()

> **bingLocalPackTaskGetHtml**(`id`): `Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:3915

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### bingLocalPackTaskGetRegular()

> **bingLocalPackTaskGetRegular**(`id`): `Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:3872

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

Successful operation

***

### bingLocalPackTaskPost()

> **bingLocalPackTaskPost**(`body`): `Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

Defined in: main.ts:3754

#### Parameters

##### body

[`SerpBingLocalPackTaskPostRequestInfo`](SerpBingLocalPackTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

Successful operation

***

### bingLocalPackTasksFixed()

> **bingLocalPackTasksFixed**(): `Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

Defined in: main.ts:3832

#### Returns

`Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

Successful operation

***

### bingLocalPackTasksReady()

> **bingLocalPackTasksReady**(): `Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

Defined in: main.ts:3795

#### Returns

`Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

Successful operation

***

### bingOrganicLiveAdvanced()

> **bingOrganicLiveAdvanced**(`body`): `Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:3670

#### Parameters

##### body

[`SerpBingOrganicLiveAdvancedRequestInfo`](SerpBingOrganicLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

Successful operation

***

### bingOrganicLiveHtml()

> **bingOrganicLiveHtml**(`body`): `Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

Defined in: main.ts:3712

#### Parameters

##### body

[`SerpBingOrganicLiveHtmlRequestInfo`](SerpBingOrganicLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

Successful operation

***

### bingOrganicLiveRegular()

> **bingOrganicLiveRegular**(`body`): `Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

Defined in: main.ts:3628

#### Parameters

##### body

[`SerpBingOrganicLiveRegularRequestInfo`](SerpBingOrganicLiveRegularRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

Successful operation

***

### bingOrganicTaskGetAdvanced()

> **bingOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:3544

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### bingOrganicTaskGetHtml()

> **bingOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:3587

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### bingOrganicTaskGetRegular()

> **bingOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:3501

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

***

### bingOrganicTaskPost()

> **bingOrganicTaskPost**(`body`): `Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:3383

#### Parameters

##### body

[`SerpBingOrganicTaskPostRequestInfo`](SerpBingOrganicTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

Successful operation

***

### bingOrganicTasksFixed()

> **bingOrganicTasksFixed**(): `Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:3461

#### Returns

`Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

Successful operation

***

### bingOrganicTasksReady()

> **bingOrganicTasksReady**(): `Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:3424

#### Returns

`Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsAdvertisersTaskGetAdvanced()

> **googleAdsAdvertisersTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo`](SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:3064

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo`](SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleAdsAdvertisersTaskPost()

> **googleAdsAdvertisersTaskPost**(`body`): `Promise`\<[`SerpGoogleAdsAdvertisersTaskPostResponseInfo`](SerpGoogleAdsAdvertisersTaskPostResponseInfo.md)\>

Defined in: main.ts:2983

#### Parameters

##### body

[`SerpGoogleAdsAdvertisersTaskPostRequestInfo`](SerpGoogleAdsAdvertisersTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleAdsAdvertisersTaskPostResponseInfo`](SerpGoogleAdsAdvertisersTaskPostResponseInfo.md)\>

Successful operation

***

### googleAdsAdvertisersTasksReady()

> **googleAdsAdvertisersTasksReady**(): `Promise`\<[`SerpGoogleAdsAdvertisersTasksReadyResponseInfo`](SerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)\>

Defined in: main.ts:3024

#### Returns

`Promise`\<[`SerpGoogleAdsAdvertisersTasksReadyResponseInfo`](SerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAdsSearchTaskGetAdvanced()

> **googleAdsSearchTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](SerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:3223

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](SerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleAdsSearchTaskPost()

> **googleAdsSearchTaskPost**(`body`): `Promise`\<[`SerpGoogleAdsSearchTaskPostResponseInfo`](SerpGoogleAdsSearchTaskPostResponseInfo.md)\>

Defined in: main.ts:3142

#### Parameters

##### body

[`SerpGoogleAdsSearchTaskPostRequestInfo`](SerpGoogleAdsSearchTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleAdsSearchTaskPostResponseInfo`](SerpGoogleAdsSearchTaskPostResponseInfo.md)\>

Successful operation

***

### googleAdsSearchTasksReady()

> **googleAdsSearchTasksReady**(): `Promise`\<[`SerpGoogleAdsSearchTasksReadyResponseInfo`](SerpGoogleAdsSearchTasksReadyResponseInfo.md)\>

Defined in: main.ts:3183

#### Returns

`Promise`\<[`SerpGoogleAdsSearchTasksReadyResponseInfo`](SerpGoogleAdsSearchTasksReadyResponseInfo.md)\>

Successful operation

***

### googleAutocompleteLiveAdvanced()

> **googleAutocompleteLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:2502

#### Parameters

##### body

[`SerpGoogleAutocompleteLiveAdvancedRequestInfo`](SerpGoogleAutocompleteLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleAutocompleteTaskGetAdvanced()

> **googleAutocompleteTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2461

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleAutocompleteTaskPost()

> **googleAutocompleteTaskPost**(`body`): `Promise`\<[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)\>

Defined in: main.ts:2343

#### Parameters

##### body

[`SerpGoogleAutocompleteTaskPostRequestInfo`](SerpGoogleAutocompleteTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)\>

Successful operation

***

### googleAutocompleteTasksFixed()

> **googleAutocompleteTasksFixed**(): `Promise`\<[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)\>

Defined in: main.ts:2421

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)\>

Successful operation

***

### googleAutocompleteTasksReady()

> **googleAutocompleteTasksReady**(): `Promise`\<[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)\>

Defined in: main.ts:2384

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)\>

Successful operation

***

### googleDatasetInfoLiveAdvanced()

> **googleDatasetInfoLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:2904

#### Parameters

##### body

[`SerpGoogleDatasetInfoLiveAdvancedRequestInfo`](SerpGoogleDatasetInfoLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleDatasetInfoTaskGetAdvanced()

> **googleDatasetInfoTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2863

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleDatasetInfoTaskPost()

> **googleDatasetInfoTaskPost**(`body`): `Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:2745

#### Parameters

##### body

[`SerpGoogleDatasetInfoTaskPostRequestInfo`](SerpGoogleDatasetInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

Successful operation

***

### googleDatasetInfoTasksFixed()

> **googleDatasetInfoTasksFixed**(): `Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

Defined in: main.ts:2823

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

Successful operation

***

### googleDatasetInfoTasksReady()

> **googleDatasetInfoTasksReady**(): `Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:2786

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

Successful operation

***

### googleDatasetSearchLiveAdvanced()

> **googleDatasetSearchLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:2703

#### Parameters

##### body

[`SerpGoogleDatasetSearchLiveAdvancedRequestInfo`](SerpGoogleDatasetSearchLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleDatasetSearchTaskGetAdvanced()

> **googleDatasetSearchTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2662

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleDatasetSearchTaskPost()

> **googleDatasetSearchTaskPost**(`body`): `Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

Defined in: main.ts:2544

#### Parameters

##### body

[`SerpGoogleDatasetSearchTaskPostRequestInfo`](SerpGoogleDatasetSearchTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

Successful operation

***

### googleDatasetSearchTasksFixed()

> **googleDatasetSearchTasksFixed**(): `Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

Defined in: main.ts:2622

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

Successful operation

***

### googleDatasetSearchTasksReady()

> **googleDatasetSearchTasksReady**(): `Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

Defined in: main.ts:2585

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

Successful operation

***

### googleEventsLiveAdvanced()

> **googleEventsLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:1654

#### Parameters

##### body

[`SerpGoogleEventsLiveAdvancedRequestInfo`](SerpGoogleEventsLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleEventsTaskGetAdvanced()

> **googleEventsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:1613

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleEventsTaskPost()

> **googleEventsTaskPost**(`body`): `Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

Defined in: main.ts:1495

#### Parameters

##### body

[`SerpGoogleEventsTaskPostRequestInfo`](SerpGoogleEventsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

Successful operation

***

### googleEventsTasksFixed()

> **googleEventsTasksFixed**(): `Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

Defined in: main.ts:1573

#### Returns

`Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

Successful operation

***

### googleEventsTasksReady()

> **googleEventsTasksReady**(): `Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

Defined in: main.ts:1536

#### Returns

`Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleImagesLiveAdvanced()

> **googleImagesLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:1898

#### Parameters

##### body

[`SerpGoogleImagesLiveAdvancedRequestInfo`](SerpGoogleImagesLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleImagesLiveHtml()

> **googleImagesLiveHtml**(`body`): `Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

Defined in: main.ts:1940

#### Parameters

##### body

[`SerpGoogleImagesLiveHtmlRequestInfo`](SerpGoogleImagesLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

Successful operation

***

### googleImagesTaskGetAdvanced()

> **googleImagesTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:1814

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleImagesTaskGetHtml()

> **googleImagesTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:1857

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleImagesTaskPost()

> **googleImagesTaskPost**(`body`): `Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

Defined in: main.ts:1696

#### Parameters

##### body

[`SerpGoogleImagesTaskPostRequestInfo`](SerpGoogleImagesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

Successful operation

***

### googleImagesTasksFixed()

> **googleImagesTasksFixed**(): `Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

Defined in: main.ts:1774

#### Returns

`Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

Successful operation

***

### googleImagesTasksReady()

> **googleImagesTasksReady**(): `Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

Defined in: main.ts:1737

#### Returns

`Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

Successful operation

***

### googleJobsTaskGetAdvanced()

> **googleJobsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2259

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleJobsTaskGetHtml()

> **googleJobsTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:2302

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleJobsTaskPost()

> **googleJobsTaskPost**(`body`): `Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

Defined in: main.ts:2141

#### Parameters

##### body

[`SerpGoogleJobsTaskPostRequestInfo`](SerpGoogleJobsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

Successful operation

***

### googleJobsTasksFixed()

> **googleJobsTasksFixed**(): `Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

Defined in: main.ts:2219

#### Returns

`Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

Successful operation

***

### googleJobsTasksReady()

> **googleJobsTasksReady**(): `Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

Defined in: main.ts:2182

#### Returns

`Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleLocalFinderLiveAdvanced()

> **googleLocalFinderLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:1125

#### Parameters

##### body

[`SerpGoogleLocalFinderLiveAdvancedRequestInfo`](SerpGoogleLocalFinderLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleLocalFinderLiveHtml()

> **googleLocalFinderLiveHtml**(`body`): `Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

Defined in: main.ts:1167

#### Parameters

##### body

[`SerpGoogleLocalFinderLiveHtmlRequestInfo`](SerpGoogleLocalFinderLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

Successful operation

***

### googleLocalFinderTaskGetAdvanced()

> **googleLocalFinderTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:1041

#### Parameters

##### id

`string`

task identifier
a universally unique identifier (UUID)
unique task identifier in our system
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleLocalFinderTaskGetHtml()

> **googleLocalFinderTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:1084

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleLocalFinderTaskPost()

> **googleLocalFinderTaskPost**(`body`): `Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

Defined in: main.ts:922

#### Parameters

##### body

[`SerpGoogleLocalFinderTaskPostRequestInfo`](SerpGoogleLocalFinderTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

Successful operation

***

### googleLocalFinderTasksFixed()

> **googleLocalFinderTasksFixed**(): `Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

Defined in: main.ts:1000

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

Successful operation

***

### googleLocalFinderTasksReady()

> **googleLocalFinderTasksReady**(): `Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

Defined in: main.ts:963

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

Successful operation

***

### googleMapsLiveAdvanced()

> **googleMapsLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:880

#### Parameters

##### body

[`SerpGoogleMapsLiveAdvancedRequestInfo`](SerpGoogleMapsLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleMapsTaskGetAdvanced()

> **googleMapsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:839

#### Parameters

##### id

`string`

task identifier
a universally unique identifier (UUID)
unique task identifier in our system
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleMapsTaskPost()

> **googleMapsTaskPost**(`body`): `Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

Defined in: main.ts:720

#### Parameters

##### body

[`SerpGoogleMapsTaskPostRequestInfo`](SerpGoogleMapsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

Successful operation

***

### googleMapsTasksFixed()

> **googleMapsTasksFixed**(): `Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

Defined in: main.ts:798

#### Returns

`Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

Successful operation

***

### googleMapsTasksReady()

> **googleMapsTasksReady**(): `Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

Defined in: main.ts:761

#### Returns

`Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleNewsLiveAdvanced()

> **googleNewsLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:1411

#### Parameters

##### body

[`SerpGoogleNewsLiveAdvancedRequestInfo`](SerpGoogleNewsLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleNewsLiveHtml()

> **googleNewsLiveHtml**(`body`): `Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

Defined in: main.ts:1453

#### Parameters

##### body

[`SerpGoogleNewsLiveHtmlRequestInfo`](SerpGoogleNewsLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

Successful operation

***

### googleNewsTaskGetAdvanced()

> **googleNewsTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:1327

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleNewsTaskGetHtml()

> **googleNewsTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:1370

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleNewsTaskPost()

> **googleNewsTaskPost**(`body`): `Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

Defined in: main.ts:1209

#### Parameters

##### body

[`SerpGoogleNewsTaskPostRequestInfo`](SerpGoogleNewsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

Successful operation

***

### googleNewsTasksFixed()

> **googleNewsTasksFixed**(): `Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

Defined in: main.ts:1287

#### Returns

`Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

Successful operation

***

### googleNewsTasksReady()

> **googleNewsTasksReady**(): `Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:1250

#### Returns

`Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

Successful operation

***

### googleOrganicLiveAdvanced()

> **googleOrganicLiveAdvanced**(`body`): `Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:636

#### Parameters

##### body

[`SerpGoogleOrganicLiveAdvancedRequestInfo`](SerpGoogleOrganicLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

Successful operation

***

### googleOrganicLiveHtml()

> **googleOrganicLiveHtml**(`body`): `Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

Defined in: main.ts:678

#### Parameters

##### body

[`SerpGoogleOrganicLiveHtmlRequestInfo`](SerpGoogleOrganicLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

Successful operation

***

### googleOrganicLiveRegular()

> **googleOrganicLiveRegular**(`body`): `Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

Defined in: main.ts:594

#### Parameters

##### body

[`SerpGoogleOrganicLiveRegularRequestInfo`](SerpGoogleOrganicLiveRegularRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

Successful operation

***

### googleOrganicTaskGetAdvanced()

> **googleOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:510

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleOrganicTaskGetHtml()

> **googleOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:553

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### googleOrganicTaskGetRegular()

> **googleOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:467

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

***

### googleOrganicTaskPost()

> **googleOrganicTaskPost**(`body`): `Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:312

#### Parameters

##### body

[`SerpGoogleOrganicTaskPostRequestInfo`](SerpGoogleOrganicTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

Successful operation

***

### googleOrganicTasksFixed()

> **googleOrganicTasksFixed**(): `Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:427

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

Successful operation

***

### googleOrganicTasksReady()

> **googleOrganicTasksReady**(): `Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:353

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

Successful operation

***

### googleSearchByImageTaskGetAdvanced()

> **googleSearchByImageTaskGetAdvanced**(`id`): `Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2100

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### googleSearchByImageTaskPost()

> **googleSearchByImageTaskPost**(`body`): `Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

Defined in: main.ts:1982

#### Parameters

##### body

[`SerpGoogleSearchByImageTaskPostRequestInfo`](SerpGoogleSearchByImageTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

Successful operation

***

### googleSearchByImageTasksFixed()

> **googleSearchByImageTasksFixed**(): `Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

Defined in: main.ts:2060

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

Successful operation

***

### googleSearchByImageTasksReady()

> **googleSearchByImageTasksReady**(): `Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

Defined in: main.ts:2023

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

Successful operation

***

### naverOrganicTaskGetAdvanced()

> **naverOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:5777

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### naverOrganicTaskGetHtml()

> **naverOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:5820

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### naverOrganicTaskGetRegular()

> **naverOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:5734

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

***

### naverOrganicTaskPost()

> **naverOrganicTaskPost**(`body`): `Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:5616

#### Parameters

##### body

[`SerpNaverOrganicTaskPostRequestInfo`](SerpNaverOrganicTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

Successful operation

***

### naverOrganicTasksFixed()

> **naverOrganicTasksFixed**(): `Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:5694

#### Returns

`Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

Successful operation

***

### naverOrganicTasksReady()

> **naverOrganicTasksReady**(): `Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:5657

#### Returns

`Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

Successful operation

***

### processAiSummary()

> `protected` **processAiSummary**(`response`): `Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

Defined in: main.ts:171

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpAiSummaryResponseInfo`](SerpAiSummaryResponseInfo.md)\>

***

### processBaiduOrganicTaskGetAdvanced()

> `protected` **processBaiduOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:5551

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetAdvancedResponseInfo`](SerpBaiduOrganicTaskGetAdvancedResponseInfo.md)\>

***

### processBaiduOrganicTaskGetHtml()

> `protected` **processBaiduOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:5594

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetHtmlResponseInfo`](SerpBaiduOrganicTaskGetHtmlResponseInfo.md)\>

***

### processBaiduOrganicTaskGetRegular()

> `protected` **processBaiduOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:5508

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskGetRegularResponseInfo`](SerpBaiduOrganicTaskGetRegularResponseInfo.md)\>

***

### processBaiduOrganicTaskPost()

> `protected` **processBaiduOrganicTaskPost**(`response`): `Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:5391

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTaskPostResponseInfo`](SerpBaiduOrganicTaskPostResponseInfo.md)\>

***

### processBaiduOrganicTasksFixed()

> `protected` **processBaiduOrganicTasksFixed**(`response`): `Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:5465

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksFixedResponseInfo`](SerpBaiduOrganicTasksFixedResponseInfo.md)\>

***

### processBaiduOrganicTasksReady()

> `protected` **processBaiduOrganicTasksReady**(`response`): `Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:5428

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBaiduOrganicTasksReadyResponseInfo`](SerpBaiduOrganicTasksReadyResponseInfo.md)\>

***

### processBingLocalPackLiveHtml()

> `protected` **processBingLocalPackLiveHtml**(`response`): `Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

Defined in: main.ts:4018

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLocalPackLiveHtmlResponseInfo`](SerpBingLocalPackLiveHtmlResponseInfo.md)\>

***

### processBingLocalPackLiveRegular()

> `protected` **processBingLocalPackLiveRegular**(`response`): `Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

Defined in: main.ts:3976

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLocalPackLiveRegularResponseInfo`](SerpBingLocalPackLiveRegularResponseInfo.md)\>

***

### processBingLocalPackTaskGetHtml()

> `protected` **processBingLocalPackTaskGetHtml**(`response`): `Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:3934

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetHtmlResponseInfo`](SerpBingLocalPackTaskGetHtmlResponseInfo.md)\>

***

### processBingLocalPackTaskGetRegular()

> `protected` **processBingLocalPackTaskGetRegular**(`response`): `Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:3891

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTaskGetRegularResponseInfo`](SerpBingLocalPackTaskGetRegularResponseInfo.md)\>

***

### processBingLocalPackTaskPost()

> `protected` **processBingLocalPackTaskPost**(`response`): `Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

Defined in: main.ts:3774

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTaskPostResponseInfo`](SerpBingLocalPackTaskPostResponseInfo.md)\>

***

### processBingLocalPackTasksFixed()

> `protected` **processBingLocalPackTasksFixed**(`response`): `Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

Defined in: main.ts:3848

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTasksFixedResponseInfo`](SerpBingLocalPackTasksFixedResponseInfo.md)\>

***

### processBingLocalPackTasksReady()

> `protected` **processBingLocalPackTasksReady**(`response`): `Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

Defined in: main.ts:3811

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLocalPackTasksReadyResponseInfo`](SerpBingLocalPackTasksReadyResponseInfo.md)\>

***

### processBingOrganicLiveAdvanced()

> `protected` **processBingOrganicLiveAdvanced**(`response`): `Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:3690

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingOrganicLiveAdvancedResponseInfo`](SerpBingOrganicLiveAdvancedResponseInfo.md)\>

***

### processBingOrganicLiveHtml()

> `protected` **processBingOrganicLiveHtml**(`response`): `Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

Defined in: main.ts:3732

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingOrganicLiveHtmlResponseInfo`](SerpBingOrganicLiveHtmlResponseInfo.md)\>

***

### processBingOrganicLiveRegular()

> `protected` **processBingOrganicLiveRegular**(`response`): `Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

Defined in: main.ts:3648

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingOrganicLiveRegularResponseInfo`](SerpBingOrganicLiveRegularResponseInfo.md)\>

***

### processBingOrganicTaskGetAdvanced()

> `protected` **processBingOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:3563

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetAdvancedResponseInfo`](SerpBingOrganicTaskGetAdvancedResponseInfo.md)\>

***

### processBingOrganicTaskGetHtml()

> `protected` **processBingOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:3606

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetHtmlResponseInfo`](SerpBingOrganicTaskGetHtmlResponseInfo.md)\>

***

### processBingOrganicTaskGetRegular()

> `protected` **processBingOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:3520

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingOrganicTaskGetRegularResponseInfo`](SerpBingOrganicTaskGetRegularResponseInfo.md)\>

***

### processBingOrganicTaskPost()

> `protected` **processBingOrganicTaskPost**(`response`): `Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:3403

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingOrganicTaskPostResponseInfo`](SerpBingOrganicTaskPostResponseInfo.md)\>

***

### processBingOrganicTasksFixed()

> `protected` **processBingOrganicTasksFixed**(`response`): `Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:3477

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingOrganicTasksFixedResponseInfo`](SerpBingOrganicTasksFixedResponseInfo.md)\>

***

### processBingOrganicTasksReady()

> `protected` **processBingOrganicTasksReady**(`response`): `Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:3440

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingOrganicTasksReadyResponseInfo`](SerpBingOrganicTasksReadyResponseInfo.md)\>

***

### processGoogleAdsAdvertisersTaskGetAdvanced()

> `protected` **processGoogleAdsAdvertisersTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo`](SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:3083

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo`](SerpGoogleAdsAdvertisersTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleAdsAdvertisersTaskPost()

> `protected` **processGoogleAdsAdvertisersTaskPost**(`response`): `Promise`\<[`SerpGoogleAdsAdvertisersTaskPostResponseInfo`](SerpGoogleAdsAdvertisersTaskPostResponseInfo.md)\>

Defined in: main.ts:3003

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAdsAdvertisersTaskPostResponseInfo`](SerpGoogleAdsAdvertisersTaskPostResponseInfo.md)\>

***

### processGoogleAdsAdvertisersTasksReady()

> `protected` **processGoogleAdsAdvertisersTasksReady**(`response`): `Promise`\<[`SerpGoogleAdsAdvertisersTasksReadyResponseInfo`](SerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)\>

Defined in: main.ts:3040

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAdsAdvertisersTasksReadyResponseInfo`](SerpGoogleAdsAdvertisersTasksReadyResponseInfo.md)\>

***

### processGoogleAdsSearchTaskGetAdvanced()

> `protected` **processGoogleAdsSearchTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](SerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:3242

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAdsSearchTaskGetAdvancedResponseInfo`](SerpGoogleAdsSearchTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleAdsSearchTaskPost()

> `protected` **processGoogleAdsSearchTaskPost**(`response`): `Promise`\<[`SerpGoogleAdsSearchTaskPostResponseInfo`](SerpGoogleAdsSearchTaskPostResponseInfo.md)\>

Defined in: main.ts:3162

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAdsSearchTaskPostResponseInfo`](SerpGoogleAdsSearchTaskPostResponseInfo.md)\>

***

### processGoogleAdsSearchTasksReady()

> `protected` **processGoogleAdsSearchTasksReady**(`response`): `Promise`\<[`SerpGoogleAdsSearchTasksReadyResponseInfo`](SerpGoogleAdsSearchTasksReadyResponseInfo.md)\>

Defined in: main.ts:3199

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAdsSearchTasksReadyResponseInfo`](SerpGoogleAdsSearchTasksReadyResponseInfo.md)\>

***

### processGoogleAutocompleteLiveAdvanced()

> `protected` **processGoogleAutocompleteLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:2522

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteLiveAdvancedResponseInfo`](SerpGoogleAutocompleteLiveAdvancedResponseInfo.md)\>

***

### processGoogleAutocompleteTaskGetAdvanced()

> `protected` **processGoogleAutocompleteTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2480

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTaskGetAdvancedResponseInfo`](SerpGoogleAutocompleteTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleAutocompleteTaskPost()

> `protected` **processGoogleAutocompleteTaskPost**(`response`): `Promise`\<[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)\>

Defined in: main.ts:2363

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTaskPostResponseInfo`](SerpGoogleAutocompleteTaskPostResponseInfo.md)\>

***

### processGoogleAutocompleteTasksFixed()

> `protected` **processGoogleAutocompleteTasksFixed**(`response`): `Promise`\<[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)\>

Defined in: main.ts:2437

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTasksFixedResponseInfo`](SerpGoogleAutocompleteTasksFixedResponseInfo.md)\>

***

### processGoogleAutocompleteTasksReady()

> `protected` **processGoogleAutocompleteTasksReady**(`response`): `Promise`\<[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)\>

Defined in: main.ts:2400

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAutocompleteTasksReadyResponseInfo`](SerpGoogleAutocompleteTasksReadyResponseInfo.md)\>

***

### processGoogleDatasetInfoLiveAdvanced()

> `protected` **processGoogleDatasetInfoLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:2924

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoLiveAdvancedResponseInfo`](SerpGoogleDatasetInfoLiveAdvancedResponseInfo.md)\>

***

### processGoogleDatasetInfoTaskGetAdvanced()

> `protected` **processGoogleDatasetInfoTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2882

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleDatasetInfoTaskPost()

> `protected` **processGoogleDatasetInfoTaskPost**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:2765

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTaskPostResponseInfo`](SerpGoogleDatasetInfoTaskPostResponseInfo.md)\>

***

### processGoogleDatasetInfoTasksFixed()

> `protected` **processGoogleDatasetInfoTasksFixed**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

Defined in: main.ts:2839

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksFixedResponseInfo`](SerpGoogleDatasetInfoTasksFixedResponseInfo.md)\>

***

### processGoogleDatasetInfoTasksReady()

> `protected` **processGoogleDatasetInfoTasksReady**(`response`): `Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:2802

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetInfoTasksReadyResponseInfo`](SerpGoogleDatasetInfoTasksReadyResponseInfo.md)\>

***

### processGoogleDatasetSearchLiveAdvanced()

> `protected` **processGoogleDatasetSearchLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:2723

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchLiveAdvancedResponseInfo`](SerpGoogleDatasetSearchLiveAdvancedResponseInfo.md)\>

***

### processGoogleDatasetSearchTaskGetAdvanced()

> `protected` **processGoogleDatasetSearchTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2681

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleDatasetSearchTaskPost()

> `protected` **processGoogleDatasetSearchTaskPost**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

Defined in: main.ts:2564

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTaskPostResponseInfo`](SerpGoogleDatasetSearchTaskPostResponseInfo.md)\>

***

### processGoogleDatasetSearchTasksFixed()

> `protected` **processGoogleDatasetSearchTasksFixed**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

Defined in: main.ts:2638

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksFixedResponseInfo`](SerpGoogleDatasetSearchTasksFixedResponseInfo.md)\>

***

### processGoogleDatasetSearchTasksReady()

> `protected` **processGoogleDatasetSearchTasksReady**(`response`): `Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

Defined in: main.ts:2601

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleDatasetSearchTasksReadyResponseInfo`](SerpGoogleDatasetSearchTasksReadyResponseInfo.md)\>

***

### processGoogleEventsLiveAdvanced()

> `protected` **processGoogleEventsLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:1674

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleEventsLiveAdvancedResponseInfo`](SerpGoogleEventsLiveAdvancedResponseInfo.md)\>

***

### processGoogleEventsTaskGetAdvanced()

> `protected` **processGoogleEventsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:1632

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleEventsTaskGetAdvancedResponseInfo`](SerpGoogleEventsTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleEventsTaskPost()

> `protected` **processGoogleEventsTaskPost**(`response`): `Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

Defined in: main.ts:1515

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleEventsTaskPostResponseInfo`](SerpGoogleEventsTaskPostResponseInfo.md)\>

***

### processGoogleEventsTasksFixed()

> `protected` **processGoogleEventsTasksFixed**(`response`): `Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

Defined in: main.ts:1589

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleEventsTasksFixedResponseInfo`](SerpGoogleEventsTasksFixedResponseInfo.md)\>

***

### processGoogleEventsTasksReady()

> `protected` **processGoogleEventsTasksReady**(`response`): `Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

Defined in: main.ts:1552

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleEventsTasksReadyResponseInfo`](SerpGoogleEventsTasksReadyResponseInfo.md)\>

***

### processGoogleImagesLiveAdvanced()

> `protected` **processGoogleImagesLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:1918

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleImagesLiveAdvancedResponseInfo`](SerpGoogleImagesLiveAdvancedResponseInfo.md)\>

***

### processGoogleImagesLiveHtml()

> `protected` **processGoogleImagesLiveHtml**(`response`): `Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

Defined in: main.ts:1960

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleImagesLiveHtmlResponseInfo`](SerpGoogleImagesLiveHtmlResponseInfo.md)\>

***

### processGoogleImagesTaskGetAdvanced()

> `protected` **processGoogleImagesTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:1833

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetAdvancedResponseInfo`](SerpGoogleImagesTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleImagesTaskGetHtml()

> `protected` **processGoogleImagesTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:1876

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTaskGetHtmlResponseInfo`](SerpGoogleImagesTaskGetHtmlResponseInfo.md)\>

***

### processGoogleImagesTaskPost()

> `protected` **processGoogleImagesTaskPost**(`response`): `Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

Defined in: main.ts:1716

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTaskPostResponseInfo`](SerpGoogleImagesTaskPostResponseInfo.md)\>

***

### processGoogleImagesTasksFixed()

> `protected` **processGoogleImagesTasksFixed**(`response`): `Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

Defined in: main.ts:1790

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTasksFixedResponseInfo`](SerpGoogleImagesTasksFixedResponseInfo.md)\>

***

### processGoogleImagesTasksReady()

> `protected` **processGoogleImagesTasksReady**(`response`): `Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

Defined in: main.ts:1753

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleImagesTasksReadyResponseInfo`](SerpGoogleImagesTasksReadyResponseInfo.md)\>

***

### processGoogleJobsTaskGetAdvanced()

> `protected` **processGoogleJobsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2278

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetAdvancedResponseInfo`](SerpGoogleJobsTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleJobsTaskGetHtml()

> `protected` **processGoogleJobsTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:2321

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTaskGetHtmlResponseInfo`](SerpGoogleJobsTaskGetHtmlResponseInfo.md)\>

***

### processGoogleJobsTaskPost()

> `protected` **processGoogleJobsTaskPost**(`response`): `Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

Defined in: main.ts:2161

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTaskPostResponseInfo`](SerpGoogleJobsTaskPostResponseInfo.md)\>

***

### processGoogleJobsTasksFixed()

> `protected` **processGoogleJobsTasksFixed**(`response`): `Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

Defined in: main.ts:2235

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTasksFixedResponseInfo`](SerpGoogleJobsTasksFixedResponseInfo.md)\>

***

### processGoogleJobsTasksReady()

> `protected` **processGoogleJobsTasksReady**(`response`): `Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

Defined in: main.ts:2198

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleJobsTasksReadyResponseInfo`](SerpGoogleJobsTasksReadyResponseInfo.md)\>

***

### processGoogleLocalFinderLiveAdvanced()

> `protected` **processGoogleLocalFinderLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:1145

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveAdvancedResponseInfo`](SerpGoogleLocalFinderLiveAdvancedResponseInfo.md)\>

***

### processGoogleLocalFinderLiveHtml()

> `protected` **processGoogleLocalFinderLiveHtml**(`response`): `Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

Defined in: main.ts:1187

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderLiveHtmlResponseInfo`](SerpGoogleLocalFinderLiveHtmlResponseInfo.md)\>

***

### processGoogleLocalFinderTaskGetAdvanced()

> `protected` **processGoogleLocalFinderTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:1060

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetAdvancedResponseInfo`](SerpGoogleLocalFinderTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleLocalFinderTaskGetHtml()

> `protected` **processGoogleLocalFinderTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:1103

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskGetHtmlResponseInfo`](SerpGoogleLocalFinderTaskGetHtmlResponseInfo.md)\>

***

### processGoogleLocalFinderTaskPost()

> `protected` **processGoogleLocalFinderTaskPost**(`response`): `Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

Defined in: main.ts:942

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTaskPostResponseInfo`](SerpGoogleLocalFinderTaskPostResponseInfo.md)\>

***

### processGoogleLocalFinderTasksFixed()

> `protected` **processGoogleLocalFinderTasksFixed**(`response`): `Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

Defined in: main.ts:1016

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksFixedResponseInfo`](SerpGoogleLocalFinderTasksFixedResponseInfo.md)\>

***

### processGoogleLocalFinderTasksReady()

> `protected` **processGoogleLocalFinderTasksReady**(`response`): `Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

Defined in: main.ts:979

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLocalFinderTasksReadyResponseInfo`](SerpGoogleLocalFinderTasksReadyResponseInfo.md)\>

***

### processGoogleMapsLiveAdvanced()

> `protected` **processGoogleMapsLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:900

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleMapsLiveAdvancedResponseInfo`](SerpGoogleMapsLiveAdvancedResponseInfo.md)\>

***

### processGoogleMapsTaskGetAdvanced()

> `protected` **processGoogleMapsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:858

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleMapsTaskGetAdvancedResponseInfo`](SerpGoogleMapsTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleMapsTaskPost()

> `protected` **processGoogleMapsTaskPost**(`response`): `Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

Defined in: main.ts:740

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleMapsTaskPostResponseInfo`](SerpGoogleMapsTaskPostResponseInfo.md)\>

***

### processGoogleMapsTasksFixed()

> `protected` **processGoogleMapsTasksFixed**(`response`): `Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

Defined in: main.ts:814

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleMapsTasksFixedResponseInfo`](SerpGoogleMapsTasksFixedResponseInfo.md)\>

***

### processGoogleMapsTasksReady()

> `protected` **processGoogleMapsTasksReady**(`response`): `Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

Defined in: main.ts:777

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleMapsTasksReadyResponseInfo`](SerpGoogleMapsTasksReadyResponseInfo.md)\>

***

### processGoogleNewsLiveAdvanced()

> `protected` **processGoogleNewsLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:1431

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleNewsLiveAdvancedResponseInfo`](SerpGoogleNewsLiveAdvancedResponseInfo.md)\>

***

### processGoogleNewsLiveHtml()

> `protected` **processGoogleNewsLiveHtml**(`response`): `Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

Defined in: main.ts:1473

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleNewsLiveHtmlResponseInfo`](SerpGoogleNewsLiveHtmlResponseInfo.md)\>

***

### processGoogleNewsTaskGetAdvanced()

> `protected` **processGoogleNewsTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:1346

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetAdvancedResponseInfo`](SerpGoogleNewsTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleNewsTaskGetHtml()

> `protected` **processGoogleNewsTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:1389

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTaskGetHtmlResponseInfo`](SerpGoogleNewsTaskGetHtmlResponseInfo.md)\>

***

### processGoogleNewsTaskPost()

> `protected` **processGoogleNewsTaskPost**(`response`): `Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

Defined in: main.ts:1229

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTaskPostResponseInfo`](SerpGoogleNewsTaskPostResponseInfo.md)\>

***

### processGoogleNewsTasksFixed()

> `protected` **processGoogleNewsTasksFixed**(`response`): `Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

Defined in: main.ts:1303

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTasksFixedResponseInfo`](SerpGoogleNewsTasksFixedResponseInfo.md)\>

***

### processGoogleNewsTasksReady()

> `protected` **processGoogleNewsTasksReady**(`response`): `Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

Defined in: main.ts:1266

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleNewsTasksReadyResponseInfo`](SerpGoogleNewsTasksReadyResponseInfo.md)\>

***

### processGoogleOrganicLiveAdvanced()

> `protected` **processGoogleOrganicLiveAdvanced**(`response`): `Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:656

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveAdvancedResponseInfo`](SerpGoogleOrganicLiveAdvancedResponseInfo.md)\>

***

### processGoogleOrganicLiveHtml()

> `protected` **processGoogleOrganicLiveHtml**(`response`): `Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

Defined in: main.ts:698

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveHtmlResponseInfo`](SerpGoogleOrganicLiveHtmlResponseInfo.md)\>

***

### processGoogleOrganicLiveRegular()

> `protected` **processGoogleOrganicLiveRegular**(`response`): `Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

Defined in: main.ts:614

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicLiveRegularResponseInfo`](SerpGoogleOrganicLiveRegularResponseInfo.md)\>

***

### processGoogleOrganicTaskGetAdvanced()

> `protected` **processGoogleOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:529

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetAdvancedResponseInfo`](SerpGoogleOrganicTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleOrganicTaskGetHtml()

> `protected` **processGoogleOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:572

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetHtmlResponseInfo`](SerpGoogleOrganicTaskGetHtmlResponseInfo.md)\>

***

### processGoogleOrganicTaskGetRegular()

> `protected` **processGoogleOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:486

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskGetRegularResponseInfo`](SerpGoogleOrganicTaskGetRegularResponseInfo.md)\>

***

### processGoogleOrganicTaskPost()

> `protected` **processGoogleOrganicTaskPost**(`response`): `Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:332

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTaskPostResponseInfo`](SerpGoogleOrganicTaskPostResponseInfo.md)\>

***

### processGoogleOrganicTasksFixed()

> `protected` **processGoogleOrganicTasksFixed**(`response`): `Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:443

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksFixedResponseInfo`](SerpGoogleOrganicTasksFixedResponseInfo.md)\>

***

### processGoogleOrganicTasksReady()

> `protected` **processGoogleOrganicTasksReady**(`response`): `Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:369

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleOrganicTasksReadyResponseInfo`](SerpGoogleOrganicTasksReadyResponseInfo.md)\>

***

### processGoogleSearchByImageTaskGetAdvanced()

> `protected` **processGoogleSearchByImageTaskGetAdvanced**(`response`): `Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:2119

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskGetAdvancedResponseInfo`](SerpGoogleSearchByImageTaskGetAdvancedResponseInfo.md)\>

***

### processGoogleSearchByImageTaskPost()

> `protected` **processGoogleSearchByImageTaskPost**(`response`): `Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

Defined in: main.ts:2002

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTaskPostResponseInfo`](SerpGoogleSearchByImageTaskPostResponseInfo.md)\>

***

### processGoogleSearchByImageTasksFixed()

> `protected` **processGoogleSearchByImageTasksFixed**(`response`): `Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

Defined in: main.ts:2076

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksFixedResponseInfo`](SerpGoogleSearchByImageTasksFixedResponseInfo.md)\>

***

### processGoogleSearchByImageTasksReady()

> `protected` **processGoogleSearchByImageTasksReady**(`response`): `Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

Defined in: main.ts:2039

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleSearchByImageTasksReadyResponseInfo`](SerpGoogleSearchByImageTasksReadyResponseInfo.md)\>

***

### processNaverOrganicTaskGetAdvanced()

> `protected` **processNaverOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:5796

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetAdvancedResponseInfo`](SerpNaverOrganicTaskGetAdvancedResponseInfo.md)\>

***

### processNaverOrganicTaskGetHtml()

> `protected` **processNaverOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:5839

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetHtmlResponseInfo`](SerpNaverOrganicTaskGetHtmlResponseInfo.md)\>

***

### processNaverOrganicTaskGetRegular()

> `protected` **processNaverOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:5753

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTaskGetRegularResponseInfo`](SerpNaverOrganicTaskGetRegularResponseInfo.md)\>

***

### processNaverOrganicTaskPost()

> `protected` **processNaverOrganicTaskPost**(`response`): `Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:5636

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTaskPostResponseInfo`](SerpNaverOrganicTaskPostResponseInfo.md)\>

***

### processNaverOrganicTasksFixed()

> `protected` **processNaverOrganicTasksFixed**(`response`): `Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:5710

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTasksFixedResponseInfo`](SerpNaverOrganicTasksFixedResponseInfo.md)\>

***

### processNaverOrganicTasksReady()

> `protected` **processNaverOrganicTasksReady**(`response`): `Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:5673

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpNaverOrganicTasksReadyResponseInfo`](SerpNaverOrganicTasksReadyResponseInfo.md)\>

***

### processScreenshot()

> `protected` **processScreenshot**(`response`): `Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

Defined in: main.ts:129

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

***

### processSerpBaiduLanguages()

> `protected` **processSerpBaiduLanguages**(`response`): `Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

Defined in: main.ts:5349

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

***

### processSerpBaiduLocations()

> `protected` **processSerpBaiduLocations**(`response`): `Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

Defined in: main.ts:5267

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

***

### processSerpBaiduLocationsCountry()

> `protected` **processSerpBaiduLocationsCountry**(`response`): `Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

Defined in: main.ts:5312

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

***

### processSerpBingLanguages()

> `protected` **processSerpBingLanguages**(`response`): `Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

Defined in: main.ts:3361

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

***

### processSerpBingLocations()

> `protected` **processSerpBingLocations**(`response`): `Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

Defined in: main.ts:3279

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

***

### processSerpBingLocationsCountry()

> `protected` **processSerpBingLocationsCountry**(`response`): `Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

Defined in: main.ts:3324

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

***

### processSerpErrors()

> `protected` **processSerpErrors**(`response`): `Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

Defined in: main.ts:87

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

***

### processSerpGoogleAdsAdvertisersLocations()

> `protected` **processSerpGoogleAdsAdvertisersLocations**(`response`): `Promise`\<[`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)\>

Defined in: main.ts:2961

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)\>

***

### processSerpGoogleAdsSearchLocations()

> `protected` **processSerpGoogleAdsSearchLocations**(`response`): `Promise`\<[`SerpGoogleAdsSearchLocationsResponseInfo`](SerpGoogleAdsSearchLocationsResponseInfo.md)\>

Defined in: main.ts:3120

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleAdsSearchLocationsResponseInfo`](SerpGoogleAdsSearchLocationsResponseInfo.md)\>

***

### processSerpGoogleLanguages()

> `protected` **processSerpGoogleLanguages**(`response`): `Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

Defined in: main.ts:290

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

***

### processSerpGoogleLocations()

> `protected` **processSerpGoogleLocations**(`response`): `Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

Defined in: main.ts:208

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

***

### processSerpGoogleLocationsCountry()

> `protected` **processSerpGoogleLocationsCountry**(`response`): `Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

Defined in: main.ts:253

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

***

### processSerpIdList()

> `protected` **processSerpIdList**(`response`): `Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

Defined in: main.ts:45

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

***

### processSerpSeznamLanguages()

> `protected` **processSerpSeznamLanguages**(`response`): `Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

Defined in: main.ts:5958

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

***

### processSerpSeznamLocations()

> `protected` **processSerpSeznamLocations**(`response`): `Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

Defined in: main.ts:5876

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

***

### processSerpSeznamLocationsCountry()

> `protected` **processSerpSeznamLocationsCountry**(`response`): `Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

Defined in: main.ts:5921

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

***

### processSerpYahooLanguages()

> `protected` **processSerpYahooLanguages**(`response`): `Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

Defined in: main.ts:4859

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

***

### processSerpYahooLocations()

> `protected` **processSerpYahooLocations**(`response`): `Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

Defined in: main.ts:4777

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

***

### processSerpYahooLocationsCountry()

> `protected` **processSerpYahooLocationsCountry**(`response`): `Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

Defined in: main.ts:4822

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

***

### processSerpYoutubeLanguages()

> `protected` **processSerpYoutubeLanguages**(`response`): `Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

Defined in: main.ts:4137

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

***

### processSerpYoutubeLocations()

> `protected` **processSerpYoutubeLocations**(`response`): `Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

Defined in: main.ts:4055

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

***

### processSerpYoutubeLocationsCountry()

> `protected` **processSerpYoutubeLocationsCountry**(`response`): `Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

Defined in: main.ts:4100

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

***

### processSeznamOrganicTaskGetAdvanced()

> `protected` **processSeznamOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:6160

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

***

### processSeznamOrganicTaskGetHtml()

> `protected` **processSeznamOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:6203

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

***

### processSeznamOrganicTaskGetRegular()

> `protected` **processSeznamOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:6117

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

***

### processSeznamOrganicTaskPost()

> `protected` **processSeznamOrganicTaskPost**(`response`): `Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:6000

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

***

### processSeznamOrganicTasksFixed()

> `protected` **processSeznamOrganicTasksFixed**(`response`): `Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:6074

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

***

### processSeznamOrganicTasksReady()

> `protected` **processSeznamOrganicTasksReady**(`response`): `Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:6037

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

***

### processTasksReady()

> `protected` **processTasksReady**(`response`): `Promise`\<[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)\>

Defined in: main.ts:406

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)\>

***

### processYahooOrganicLiveAdvanced()

> `protected` **processYahooOrganicLiveAdvanced**(`response`): `Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:5188

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

***

### processYahooOrganicLiveHtml()

> `protected` **processYahooOrganicLiveHtml**(`response`): `Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

Defined in: main.ts:5230

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

***

### processYahooOrganicLiveRegular()

> `protected` **processYahooOrganicLiveRegular**(`response`): `Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

Defined in: main.ts:5146

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

***

### processYahooOrganicTaskGetAdvanced()

> `protected` **processYahooOrganicTaskGetAdvanced**(`response`): `Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:5061

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

***

### processYahooOrganicTaskGetHtml()

> `protected` **processYahooOrganicTaskGetHtml**(`response`): `Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:5104

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

***

### processYahooOrganicTaskGetRegular()

> `protected` **processYahooOrganicTaskGetRegular**(`response`): `Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:5018

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

***

### processYahooOrganicTaskPost()

> `protected` **processYahooOrganicTaskPost**(`response`): `Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:4901

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

***

### processYahooOrganicTasksFixed()

> `protected` **processYahooOrganicTasksFixed**(`response`): `Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:4975

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

***

### processYahooOrganicTasksReady()

> `protected` **processYahooOrganicTasksReady**(`response`): `Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:4938

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

***

### processYoutubeVideoCommentsLiveAdvanced()

> `protected` **processYoutubeVideoCommentsLiveAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:4740

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

***

### processYoutubeVideoCommentsTaskGetAdvanced()

> `protected` **processYoutubeVideoCommentsTaskGetAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:4698

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

***

### processYoutubeVideoCommentsTaskPost()

> `protected` **processYoutubeVideoCommentsTaskPost**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

Defined in: main.ts:4581

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

***

### processYoutubeVideoCommentsTasksFixed()

> `protected` **processYoutubeVideoCommentsTasksFixed**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

Defined in: main.ts:4655

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

***

### processYoutubeVideoCommentsTasksReady()

> `protected` **processYoutubeVideoCommentsTasksReady**(`response`): `Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

Defined in: main.ts:4618

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

***

### processYoutubeVideoInfoLiveAdvanced()

> `protected` **processYoutubeVideoInfoLiveAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:4338

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

***

### processYoutubeVideoInfoTaskGetAdvanced()

> `protected` **processYoutubeVideoInfoTaskGetAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:4296

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

***

### processYoutubeVideoInfoTaskPost()

> `protected` **processYoutubeVideoInfoTaskPost**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:4179

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

***

### processYoutubeVideoInfoTasksFixed()

> `protected` **processYoutubeVideoInfoTasksFixed**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

Defined in: main.ts:4253

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

***

### processYoutubeVideoInfoTasksReady()

> `protected` **processYoutubeVideoInfoTasksReady**(`response`): `Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:4216

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

***

### processYoutubeVideoSubtitlesLiveAdvanced()

> `protected` **processYoutubeVideoSubtitlesLiveAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:4539

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

***

### processYoutubeVideoSubtitlesTaskGetAdvanced()

> `protected` **processYoutubeVideoSubtitlesTaskGetAdvanced**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:4497

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

***

### processYoutubeVideoSubtitlesTaskPost()

> `protected` **processYoutubeVideoSubtitlesTaskPost**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

Defined in: main.ts:4380

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

***

### processYoutubeVideoSubtitlesTasksFixed()

> `protected` **processYoutubeVideoSubtitlesTasksFixed**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

Defined in: main.ts:4454

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

***

### processYoutubeVideoSubtitlesTasksReady()

> `protected` **processYoutubeVideoSubtitlesTasksReady**(`response`): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

Defined in: main.ts:4417

#### Parameters

##### response

`Response`

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

***

### screenshot()

> **screenshot**(`body`): `Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

Defined in: main.ts:109

#### Parameters

##### body

[`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpScreenshotResponseInfo`](SerpScreenshotResponseInfo.md)\>

Successful operation

***

### serpBaiduLanguages()

> **serpBaiduLanguages**(): `Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

Defined in: main.ts:5333

#### Returns

`Promise`\<[`SerpBaiduLanguagesResponseInfo`](SerpBaiduLanguagesResponseInfo.md)\>

Successful operation

***

### serpBaiduLocations()

> **serpBaiduLocations**(): `Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

Defined in: main.ts:5251

#### Returns

`Promise`\<[`SerpBaiduLocationsResponseInfo`](SerpBaiduLocationsResponseInfo.md)\>

Successful operation

***

### serpBaiduLocationsCountry()

> **serpBaiduLocationsCountry**(`country`): `Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

Defined in: main.ts:5293

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpBaiduLocationsCountryResponseInfo`](SerpBaiduLocationsCountryResponseInfo.md)\>

Successful operation

***

### serpBingLanguages()

> **serpBingLanguages**(): `Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

Defined in: main.ts:3345

#### Returns

`Promise`\<[`SerpBingLanguagesResponseInfo`](SerpBingLanguagesResponseInfo.md)\>

Successful operation

***

### serpBingLocations()

> **serpBingLocations**(): `Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

Defined in: main.ts:3263

#### Returns

`Promise`\<[`SerpBingLocationsResponseInfo`](SerpBingLocationsResponseInfo.md)\>

Successful operation

***

### serpBingLocationsCountry()

> **serpBingLocationsCountry**(`country`): `Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

Defined in: main.ts:3305

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpBingLocationsCountryResponseInfo`](SerpBingLocationsCountryResponseInfo.md)\>

Successful operation

***

### serpErrors()

> **serpErrors**(`body`): `Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

Defined in: main.ts:67

#### Parameters

##### body

[`SerpErrorsRequestInfo`](SerpErrorsRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpErrorsResponseInfo`](SerpErrorsResponseInfo.md)\>

Successful operation

***

### serpGoogleAdsAdvertisersLocations()

> **serpGoogleAdsAdvertisersLocations**(): `Promise`\<[`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)\>

Defined in: main.ts:2945

#### Returns

`Promise`\<[`SerpGoogleAdsAdvertisersLocationsResponseInfo`](SerpGoogleAdsAdvertisersLocationsResponseInfo.md)\>

Successful operation

***

### serpGoogleAdsSearchLocations()

> **serpGoogleAdsSearchLocations**(): `Promise`\<[`SerpGoogleAdsSearchLocationsResponseInfo`](SerpGoogleAdsSearchLocationsResponseInfo.md)\>

Defined in: main.ts:3104

#### Returns

`Promise`\<[`SerpGoogleAdsSearchLocationsResponseInfo`](SerpGoogleAdsSearchLocationsResponseInfo.md)\>

Successful operation

***

### serpGoogleLanguages()

> **serpGoogleLanguages**(): `Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

Defined in: main.ts:274

#### Returns

`Promise`\<[`SerpGoogleLanguagesResponseInfo`](SerpGoogleLanguagesResponseInfo.md)\>

Successful operation

***

### serpGoogleLocations()

> **serpGoogleLocations**(): `Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

Defined in: main.ts:192

#### Returns

`Promise`\<[`SerpGoogleLocationsResponseInfo`](SerpGoogleLocationsResponseInfo.md)\>

Successful operation

***

### serpGoogleLocationsCountry()

> **serpGoogleLocationsCountry**(`country`): `Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

Defined in: main.ts:234

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpGoogleLocationsCountryResponseInfo`](SerpGoogleLocationsCountryResponseInfo.md)\>

Successful operation

***

### serpIdList()

> **serpIdList**(`body`): `Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

Defined in: main.ts:25

#### Parameters

##### body

[`SerpIdListRequestInfo`](SerpIdListRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpIdListResponseInfo`](SerpIdListResponseInfo.md)\>

Successful operation

***

### serpSeznamLanguages()

> **serpSeznamLanguages**(): `Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

Defined in: main.ts:5942

#### Returns

`Promise`\<[`SerpSeznamLanguagesResponseInfo`](SerpSeznamLanguagesResponseInfo.md)\>

Successful operation

***

### serpSeznamLocations()

> **serpSeznamLocations**(): `Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

Defined in: main.ts:5860

#### Returns

`Promise`\<[`SerpSeznamLocationsResponseInfo`](SerpSeznamLocationsResponseInfo.md)\>

Successful operation

***

### serpSeznamLocationsCountry()

> **serpSeznamLocationsCountry**(`country`): `Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

Defined in: main.ts:5902

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpSeznamLocationsCountryResponseInfo`](SerpSeznamLocationsCountryResponseInfo.md)\>

Successful operation

***

### serpYahooLanguages()

> **serpYahooLanguages**(): `Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

Defined in: main.ts:4843

#### Returns

`Promise`\<[`SerpYahooLanguagesResponseInfo`](SerpYahooLanguagesResponseInfo.md)\>

Successful operation

***

### serpYahooLocations()

> **serpYahooLocations**(): `Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

Defined in: main.ts:4761

#### Returns

`Promise`\<[`SerpYahooLocationsResponseInfo`](SerpYahooLocationsResponseInfo.md)\>

Successful operation

***

### serpYahooLocationsCountry()

> **serpYahooLocationsCountry**(`country`): `Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

Defined in: main.ts:4803

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpYahooLocationsCountryResponseInfo`](SerpYahooLocationsCountryResponseInfo.md)\>

Successful operation

***

### serpYoutubeLanguages()

> **serpYoutubeLanguages**(): `Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

Defined in: main.ts:4121

#### Returns

`Promise`\<[`SerpYoutubeLanguagesResponseInfo`](SerpYoutubeLanguagesResponseInfo.md)\>

Successful operation

***

### serpYoutubeLocations()

> **serpYoutubeLocations**(): `Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

Defined in: main.ts:4039

#### Returns

`Promise`\<[`SerpYoutubeLocationsResponseInfo`](SerpYoutubeLocationsResponseInfo.md)\>

Successful operation

***

### serpYoutubeLocationsCountry()

> **serpYoutubeLocationsCountry**(`country`): `Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

Defined in: main.ts:4081

#### Parameters

##### country

`string`

country ISO code
optional field
specify the ISO code if you want to filter the list of locations by country
example:
us

#### Returns

`Promise`\<[`SerpYoutubeLocationsCountryResponseInfo`](SerpYoutubeLocationsCountryResponseInfo.md)\>

Successful operation

***

### seznamOrganicTaskGetAdvanced()

> **seznamOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:6141

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetAdvancedResponseInfo`](SerpSeznamOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### seznamOrganicTaskGetHtml()

> **seznamOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:6184

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetHtmlResponseInfo`](SerpSeznamOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### seznamOrganicTaskGetRegular()

> **seznamOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:6098

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskGetRegularResponseInfo`](SerpSeznamOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

***

### seznamOrganicTaskPost()

> **seznamOrganicTaskPost**(`body`): `Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:5980

#### Parameters

##### body

[`SerpSeznamOrganicTaskPostRequestInfo`](SerpSeznamOrganicTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpSeznamOrganicTaskPostResponseInfo`](SerpSeznamOrganicTaskPostResponseInfo.md)\>

Successful operation

***

### seznamOrganicTasksFixed()

> **seznamOrganicTasksFixed**(): `Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:6058

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksFixedResponseInfo`](SerpSeznamOrganicTasksFixedResponseInfo.md)\>

Successful operation

***

### seznamOrganicTasksReady()

> **seznamOrganicTasksReady**(): `Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:6021

#### Returns

`Promise`\<[`SerpSeznamOrganicTasksReadyResponseInfo`](SerpSeznamOrganicTasksReadyResponseInfo.md)\>

Successful operation

***

### tasksReady()

> **tasksReady**(): `Promise`\<[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)\>

Defined in: main.ts:390

#### Returns

`Promise`\<[`SerpTasksReadyResponseInfo`](SerpTasksReadyResponseInfo.md)\>

Successful operation

***

### yahooOrganicLiveAdvanced()

> **yahooOrganicLiveAdvanced**(`body`): `Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:5168

#### Parameters

##### body

[`SerpYahooOrganicLiveAdvancedRequestInfo`](SerpYahooOrganicLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYahooOrganicLiveAdvancedResponseInfo`](SerpYahooOrganicLiveAdvancedResponseInfo.md)\>

Successful operation

***

### yahooOrganicLiveHtml()

> **yahooOrganicLiveHtml**(`body`): `Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

Defined in: main.ts:5210

#### Parameters

##### body

[`SerpYahooOrganicLiveHtmlRequestInfo`](SerpYahooOrganicLiveHtmlRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYahooOrganicLiveHtmlResponseInfo`](SerpYahooOrganicLiveHtmlResponseInfo.md)\>

Successful operation

***

### yahooOrganicLiveRegular()

> **yahooOrganicLiveRegular**(`body`): `Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

Defined in: main.ts:5126

#### Parameters

##### body

[`SerpYahooOrganicLiveRegularRequestInfo`](SerpYahooOrganicLiveRegularRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYahooOrganicLiveRegularResponseInfo`](SerpYahooOrganicLiveRegularResponseInfo.md)\>

Successful operation

***

### yahooOrganicTaskGetAdvanced()

> **yahooOrganicTaskGetAdvanced**(`id`): `Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:5042

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetAdvancedResponseInfo`](SerpYahooOrganicTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### yahooOrganicTaskGetHtml()

> **yahooOrganicTaskGetHtml**(`id`): `Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

Defined in: main.ts:5085

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetHtmlResponseInfo`](SerpYahooOrganicTaskGetHtmlResponseInfo.md)\>

Successful operation

***

### yahooOrganicTaskGetRegular()

> **yahooOrganicTaskGetRegular**(`id`): `Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

Defined in: main.ts:4999

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYahooOrganicTaskGetRegularResponseInfo`](SerpYahooOrganicTaskGetRegularResponseInfo.md)\>

Successful operation

***

### yahooOrganicTaskPost()

> **yahooOrganicTaskPost**(`body`): `Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

Defined in: main.ts:4881

#### Parameters

##### body

[`SerpYahooOrganicTaskPostRequestInfo`](SerpYahooOrganicTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYahooOrganicTaskPostResponseInfo`](SerpYahooOrganicTaskPostResponseInfo.md)\>

Successful operation

***

### yahooOrganicTasksFixed()

> **yahooOrganicTasksFixed**(): `Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

Defined in: main.ts:4959

#### Returns

`Promise`\<[`SerpYahooOrganicTasksFixedResponseInfo`](SerpYahooOrganicTasksFixedResponseInfo.md)\>

Successful operation

***

### yahooOrganicTasksReady()

> **yahooOrganicTasksReady**(): `Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

Defined in: main.ts:4922

#### Returns

`Promise`\<[`SerpYahooOrganicTasksReadyResponseInfo`](SerpYahooOrganicTasksReadyResponseInfo.md)\>

Successful operation

***

### youtubeVideoCommentsLiveAdvanced()

> **youtubeVideoCommentsLiveAdvanced**(`body`): `Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:4720

#### Parameters

##### body

[`SerpYoutubeVideoCommentsLiveAdvancedRequestInfo`](SerpYoutubeVideoCommentsLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsLiveAdvancedResponseInfo`](SerpYoutubeVideoCommentsLiveAdvancedResponseInfo.md)\>

Successful operation

***

### youtubeVideoCommentsTaskGetAdvanced()

> **youtubeVideoCommentsTaskGetAdvanced**(`id`): `Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:4679

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### youtubeVideoCommentsTaskPost()

> **youtubeVideoCommentsTaskPost**(`body`): `Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

Defined in: main.ts:4561

#### Parameters

##### body

[`SerpYoutubeVideoCommentsTaskPostRequestInfo`](SerpYoutubeVideoCommentsTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTaskPostResponseInfo`](SerpYoutubeVideoCommentsTaskPostResponseInfo.md)\>

Successful operation

***

### youtubeVideoCommentsTasksFixed()

> **youtubeVideoCommentsTasksFixed**(): `Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

Defined in: main.ts:4639

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksFixedResponseInfo`](SerpYoutubeVideoCommentsTasksFixedResponseInfo.md)\>

Successful operation

***

### youtubeVideoCommentsTasksReady()

> **youtubeVideoCommentsTasksReady**(): `Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

Defined in: main.ts:4602

#### Returns

`Promise`\<[`SerpYoutubeVideoCommentsTasksReadyResponseInfo`](SerpYoutubeVideoCommentsTasksReadyResponseInfo.md)\>

Successful operation

***

### youtubeVideoInfoLiveAdvanced()

> **youtubeVideoInfoLiveAdvanced**(`body`): `Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:4318

#### Parameters

##### body

[`SerpYoutubeVideoInfoLiveAdvancedRequestInfo`](SerpYoutubeVideoInfoLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoLiveAdvancedResponseInfo`](SerpYoutubeVideoInfoLiveAdvancedResponseInfo.md)\>

Successful operation

***

### youtubeVideoInfoTaskGetAdvanced()

> **youtubeVideoInfoTaskGetAdvanced**(`id`): `Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:4277

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### youtubeVideoInfoTaskPost()

> **youtubeVideoInfoTaskPost**(`body`): `Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

Defined in: main.ts:4159

#### Parameters

##### body

[`SerpYoutubeVideoInfoTaskPostRequestInfo`](SerpYoutubeVideoInfoTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTaskPostResponseInfo`](SerpYoutubeVideoInfoTaskPostResponseInfo.md)\>

Successful operation

***

### youtubeVideoInfoTasksFixed()

> **youtubeVideoInfoTasksFixed**(): `Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

Defined in: main.ts:4237

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksFixedResponseInfo`](SerpYoutubeVideoInfoTasksFixedResponseInfo.md)\>

Successful operation

***

### youtubeVideoInfoTasksReady()

> **youtubeVideoInfoTasksReady**(): `Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

Defined in: main.ts:4200

#### Returns

`Promise`\<[`SerpYoutubeVideoInfoTasksReadyResponseInfo`](SerpYoutubeVideoInfoTasksReadyResponseInfo.md)\>

Successful operation

***

### youtubeVideoSubtitlesLiveAdvanced()

> **youtubeVideoSubtitlesLiveAdvanced**(`body`): `Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

Defined in: main.ts:4519

#### Parameters

##### body

[`SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)\>

Successful operation

***

### youtubeVideoSubtitlesTaskGetAdvanced()

> **youtubeVideoSubtitlesTaskGetAdvanced**(`id`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

Defined in: main.ts:4478

#### Parameters

##### id

`string`

task identifier
unique task identifier in our system in the UUID format
you will be able to use it within 30 days to request the results of the task at any time

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo`](SerpYoutubeVideoSubtitlesTaskGetAdvancedResponseInfo.md)\>

Successful operation

***

### youtubeVideoSubtitlesTaskPost()

> **youtubeVideoSubtitlesTaskPost**(`body`): `Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

Defined in: main.ts:4360

#### Parameters

##### body

[`SerpYoutubeVideoSubtitlesTaskPostRequestInfo`](SerpYoutubeVideoSubtitlesTaskPostRequestInfo.md)[]

(optional)

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTaskPostResponseInfo`](SerpYoutubeVideoSubtitlesTaskPostResponseInfo.md)\>

Successful operation

***

### youtubeVideoSubtitlesTasksFixed()

> **youtubeVideoSubtitlesTasksFixed**(): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

Defined in: main.ts:4438

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksFixedResponseInfo`](SerpYoutubeVideoSubtitlesTasksFixedResponseInfo.md)\>

Successful operation

***

### youtubeVideoSubtitlesTasksReady()

> **youtubeVideoSubtitlesTasksReady**(): `Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

Defined in: main.ts:4401

#### Returns

`Promise`\<[`SerpYoutubeVideoSubtitlesTasksReadyResponseInfo`](SerpYoutubeVideoSubtitlesTasksReadyResponseInfo.md)\>

Successful operation
