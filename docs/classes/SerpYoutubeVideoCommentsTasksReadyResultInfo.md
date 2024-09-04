[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYoutubeVideoCommentsTasksReadyResultInfo

# Class: SerpYoutubeVideoCommentsTasksReadyResultInfo

## Implements

- [`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTasksReadyResultInfo()

> **new SerpYoutubeVideoCommentsTasksReadyResultInfo**(`data`?): [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Defined in

main.ts:66424

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:66409

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:66417

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:66420

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#endpoint_regular)

#### Defined in

main.ts:66414

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:66402

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:66404

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
example: video_comments

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:66407

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksReadyResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:66411

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:66433

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:66457

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoCommentsTasksReadyResultInfo`](SerpYoutubeVideoCommentsTasksReadyResultInfo.md)

#### Defined in

main.ts:66450
