[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYoutubeVideoSubtitlesTasksFixedResultInfo

# Class: SerpYoutubeVideoSubtitlesTasksFixedResultInfo

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesTasksFixedResultInfo()

> **new SerpYoutubeVideoSubtitlesTasksFixedResultInfo**(`data`?): [`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Defined in

main.ts:63805

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:63790

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:63798

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:63801

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:63795

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#id)

#### Defined in

main.ts:63783

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se)

#### Defined in

main.ts:63785

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: video_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:63788

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:63792

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:63814

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:63838

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Defined in

main.ts:63831
