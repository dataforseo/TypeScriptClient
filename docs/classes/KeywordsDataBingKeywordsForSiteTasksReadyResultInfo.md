[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingKeywordsForSiteTasksReadyResultInfo

# Class: KeywordsDataBingKeywordsForSiteTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteTasksReadyResultInfo()

> **new KeywordsDataBingKeywordsForSiteTasksReadyResultInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Defined in

main.ts:129962

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:129954

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:129958

***

### function?

> `optional` **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#function)

#### Defined in

main.ts:129952

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#id)

#### Defined in

main.ts:129948

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#se)

#### Defined in

main.ts:129950

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:129956

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:129971

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:129993

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Defined in

main.ts:129986
