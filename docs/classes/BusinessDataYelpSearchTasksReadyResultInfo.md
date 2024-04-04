**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataYelpSearchTasksReadyResultInfo

# Class: BusinessDataYelpSearchTasksReadyResultInfo

## Implements

- [`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataYelpSearchTasksReadyResultInfo(data)

> **new BusinessDataYelpSearchTasksReadyResultInfo**(`data`?): [`BusinessDataYelpSearchTasksReadyResultInfo`](BusinessDataYelpSearchTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md)

#### Returns

[`BusinessDataYelpSearchTasksReadyResultInfo`](BusinessDataYelpSearchTasksReadyResultInfo.md)

#### Source

main.ts:209154

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:209146

***

### endpoint?

> **`optional`** **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#endpoint)

#### Source

main.ts:209150

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#id)

#### Source

main.ts:209138

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task
can take the following values: yelp

#### Implementation of

[`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#se)

#### Source

main.ts:209141

***

### se\_type?

> **`optional`** **se\_type**: `string`

type of search engine
can take the following values: search

#### Implementation of

[`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#se_type)

#### Source

main.ts:209144

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataYelpSearchTasksReadyResultInfo`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataYelpSearchTasksReadyResultInfo.md#tag)

#### Source

main.ts:209148

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:209163

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:209185

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataYelpSearchTasksReadyResultInfo`](BusinessDataYelpSearchTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataYelpSearchTasksReadyResultInfo`](BusinessDataYelpSearchTasksReadyResultInfo.md)

#### Source

main.ts:209178
