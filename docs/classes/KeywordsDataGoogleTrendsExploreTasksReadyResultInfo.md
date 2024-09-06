[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataGoogleTrendsExploreTasksReadyResultInfo

# Class: KeywordsDataGoogleTrendsExploreTasksReadyResultInfo

## Implements

- [`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsExploreTasksReadyResultInfo()

> **new KeywordsDataGoogleTrendsExploreTasksReadyResultInfo**(`data`?): [`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Defined in

main.ts:123432

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:123424

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:123428

***

### function?

> `optional` **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#function)

#### Defined in

main.ts:123422

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#id)

#### Defined in

main.ts:123418

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#se)

#### Defined in

main.ts:123420

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:123426

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:123441

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:123463

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleTrendsExploreTasksReadyResultInfo`](KeywordsDataGoogleTrendsExploreTasksReadyResultInfo.md)

#### Defined in

main.ts:123456
