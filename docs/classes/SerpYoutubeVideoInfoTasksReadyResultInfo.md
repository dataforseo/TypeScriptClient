**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoTasksReadyResultInfo

# Class: SerpYoutubeVideoInfoTasksReadyResultInfo

## Implements

- [`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoTasksReadyResultInfo(data)

> **new SerpYoutubeVideoInfoTasksReadyResultInfo**(`data`?): [`SerpYoutubeVideoInfoTasksReadyResultInfo`](SerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Returns

[`SerpYoutubeVideoInfoTasksReadyResultInfo`](SerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Source

main.ts:60490

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:60475

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:60483

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:60486

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:60480

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#id)

#### Source

main.ts:60468

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#se)

#### Source

main.ts:60470

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: video_info

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#se_type)

#### Source

main.ts:60473

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoInfoTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoInfoTasksReadyResultInfo.md#tag)

#### Source

main.ts:60477

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:60499

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:60523

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoInfoTasksReadyResultInfo`](SerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoInfoTasksReadyResultInfo`](SerpYoutubeVideoInfoTasksReadyResultInfo.md)

#### Source

main.ts:60516
