**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo

# Class: KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo(data)

> **new KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo**(`data`?): [`KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Source

main.ts:133176

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:133168

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:133172

***

### function?

> **`optional`** **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#function)

#### Source

main.ts:133166

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#id)

#### Source

main.ts:133162

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#se)

#### Source

main.ts:133164

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md#tag)

#### Source

main.ts:133170

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:133185

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:133207

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo`](KeywordsDataBingKeywordsForKeywordsTasksReadyResultInfo.md)

#### Source

main.ts:133200
