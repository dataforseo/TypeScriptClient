[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYoutubeVideoCommentsTasksFixedResultInfo

# Class: SerpYoutubeVideoCommentsTasksFixedResultInfo

## Implements

- [`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTasksFixedResultInfo()

> **new SerpYoutubeVideoCommentsTasksFixedResultInfo**(`data`?): [`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Defined in

main.ts:65393

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#date_fixed)

#### Defined in

main.ts:65378

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:65386

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_html)

#### Defined in

main.ts:65389

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#endpoint_regular)

#### Defined in

main.ts:65383

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#id)

#### Defined in

main.ts:65371

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se)

#### Defined in

main.ts:65373

***

### se\_type?

> `optional` **se\_type**: `string`

type of search engine
can take the following values: video_comments

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#se_type)

#### Defined in

main.ts:65376

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`ISerpYoutubeVideoCommentsTasksFixedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYoutubeVideoCommentsTasksFixedResultInfo.md#tag)

#### Defined in

main.ts:65380

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:65402

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:65426

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoCommentsTasksFixedResultInfo`](SerpYoutubeVideoCommentsTasksFixedResultInfo.md)

#### Defined in

main.ts:65419
