**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppendixPriorityTasksReadyKeywordsDataPriceDataInfo

# Class: AppendixPriorityTasksReadyKeywordsDataPriceDataInfo

## Implements

- [`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixPriorityTasksReadyKeywordsDataPriceDataInfo(data)

> **new AppendixPriorityTasksReadyKeywordsDataPriceDataInfo**(`data`?): [`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Parameters

• **data?**: [`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Returns

[`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Source

main.ts:217256

## Properties

### cost?

> **`optional`** **cost**: `number`

cost, USD

#### Implementation of

[`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md).[`cost`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#cost)

#### Source

main.ts:217252

***

### cost\_type?

> **`optional`** **cost\_type**: `string`

charge type
can take the following values:
per_result – charge for every row in the result array
per_request – charge for a GET or POST request

#### Implementation of

[`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md).[`cost_type`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#cost_type)

#### Source

main.ts:217250

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:217265

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:217283

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Source

main.ts:217276
