[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTasksReadyResultInfo

# Class: KeywordsDataBingKeywordPerformanceTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordPerformanceTasksReadyResultInfo()

> **new KeywordsDataBingKeywordPerformanceTasksReadyResultInfo**(`data`?): [`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Defined in

main.ts:144741

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:144733

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:144737

***

### function?

> `optional` **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#function)

#### Defined in

main.ts:144731

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#id)

#### Defined in

main.ts:144727

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#se)

#### Defined in

main.ts:144729

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:144735

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:144750

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:144772

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](KeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Defined in

main.ts:144765
