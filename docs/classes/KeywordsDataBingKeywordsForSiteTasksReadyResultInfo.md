**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordsForSiteTasksReadyResultInfo

# Class: KeywordsDataBingKeywordsForSiteTasksReadyResultInfo

## Implements

- [`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingKeywordsForSiteTasksReadyResultInfo(data)

> **new KeywordsDataBingKeywordsForSiteTasksReadyResultInfo**(`data`?): [`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Source

main.ts:133237

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:133229

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:133233

***

### function?

> **`optional`** **function**: `string`

type of the task

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#function)

#### Source

main.ts:133227

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#id)

#### Source

main.ts:133223

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#se)

#### Source

main.ts:133225

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md#tag)

#### Source

main.ts:133231

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:133246

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:133268

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingKeywordsForSiteTasksReadyResultInfo`](KeywordsDataBingKeywordsForSiteTasksReadyResultInfo.md)

#### Source

main.ts:133261
