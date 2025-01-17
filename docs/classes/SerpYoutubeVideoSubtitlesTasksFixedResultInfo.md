[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesTasksFixedResultInfo

# Class: SerpYoutubeVideoSubtitlesTasksFixedResultInfo

Defined in: main.ts:71982

## Implements

- [`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoSubtitlesTasksFixedResultInfo()

> **new SerpYoutubeVideoSubtitlesTasksFixedResultInfo**(`data`?): [`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

Defined in: main.ts:72007

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:71992

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:72000

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:72003

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:71997

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:71985

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:71987

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:71990

type of search engine
can take the following values: video_subtitles

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:71994

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoSubtitlesTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoSubtitlesTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:72016

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:72040

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)

Defined in: main.ts:72033

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoSubtitlesTasksFixedResultInfo`](SerpYoutubeVideoSubtitlesTasksFixedResultInfo.md)
