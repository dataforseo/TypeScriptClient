[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTasksReadyResultInfo

# Class: SerpYoutubeVideoSubtitlesTasksReadyResultInfo

Defined in: main.ts:71770

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesTasksReadyResultInfo()

> **new SerpYoutubeVideoSubtitlesTasksReadyResultInfo**(`data`?): [`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

Defined in: main.ts:71795

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:71780

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:71788

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:71791

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:71785

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:71773

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:71775

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:71778

type of search engine
example: video_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:71782

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:71804

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:71828

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

Defined in: main.ts:71821

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)
