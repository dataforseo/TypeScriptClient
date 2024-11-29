[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTasksReadyResultInfo

# Class: SerpYoutubeVideoSubtitlesTasksReadyResultInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesTasksReadyResultInfo()

> **new SerpYoutubeVideoSubtitlesTasksReadyResultInfo**(`data`?): [`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Defined in

main.ts:71795

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:71780

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:71788

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:71791

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:71785

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#id)

#### Defined in

main.ts:71773

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se)

#### Defined in

main.ts:71775

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: video_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:71778

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoSubtitlesTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:71782

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:71804

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:71828

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoSubtitlesTasksReadyResultInfo`](SerpYoutubeVideoSubtitlesTasksReadyResultInfo.md)

#### Defined in

main.ts:71821
