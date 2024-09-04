[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo

# Class: KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo()

> **new KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Defined in

main.ts:131291

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:131283

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:131287

***

### function?

> `optional` **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#function)

#### Defined in

main.ts:131281

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#id)

#### Defined in

main.ts:131277

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#se)

#### Defined in

main.ts:131279

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:131285

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:131300

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:131322

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Defined in

main.ts:131315
