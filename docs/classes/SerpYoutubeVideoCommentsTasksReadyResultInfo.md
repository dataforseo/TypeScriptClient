**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTasksReadyResultInfo

# Class: SerpYoutubeVideoCommentsTasksReadyResultInfo

## Implements

- [`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTasksReadyResultInfo(data)

> **new SerpYoutubeVideoCommentsTasksReadyResultInfo**(`data`?): [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Source

main.ts:65828

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:65813

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:65821

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:65824

***

### endpoint\_regular?

> **`optional`** **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_regular)

#### Source

main.ts:65818

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#id)

#### Source

main.ts:65806

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se)

#### Source

main.ts:65808

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
example: video_comments

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se_type)

#### Source

main.ts:65811

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#tag)

#### Source

main.ts:65815

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:65837

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:65861

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Source

main.ts:65854
