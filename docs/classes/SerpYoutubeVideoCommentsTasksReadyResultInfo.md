[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTasksReadyResultInfo

# Class: SerpYoutubeVideoCommentsTasksReadyResultInfo

Defined in: main.ts:73414

## Implements

- [`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTasksReadyResultInfo()

> **new SerpYoutubeVideoCommentsTasksReadyResultInfo**(`data`?): [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

Defined in: main.ts:73439

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:73424

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:73432

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:73435

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:73429

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:73417

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:73419

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:73422

type of search engine
example: video_comments

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:73426

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:73448

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:73472

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

Defined in: main.ts:73465

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)
