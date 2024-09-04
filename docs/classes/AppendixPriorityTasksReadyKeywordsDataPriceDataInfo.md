[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppendixPriorityTasksReadyKeywordsDataPriceDataInfo

# Class: AppendixPriorityTasksReadyKeywordsDataPriceDataInfo

## Implements

- [`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppendixPriorityTasksReadyKeywordsDataPriceDataInfo()

> **new AppendixPriorityTasksReadyKeywordsDataPriceDataInfo**(`data`?): [`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Parameters

• **data?**: [`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Returns

[`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Defined in

main.ts:220891

## Properties

### cost?

> `optional` **cost**: `number`

cost, USD

#### Implementation of

[`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md).[`cost`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#cost)

#### Defined in

main.ts:220887

***

### cost\_type?

> `optional` **cost\_type**: `string`

charge type
can take the following values:
per_result – charge for every row in the result array
per_request – charge for a GET or POST request

#### Implementation of

[`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md).[`cost_type`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#cost_type)

#### Defined in

main.ts:220885

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:220900

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:220918

***

### fromJS()

> `static` **fromJS**(`data`): [`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Defined in

main.ts:220911
