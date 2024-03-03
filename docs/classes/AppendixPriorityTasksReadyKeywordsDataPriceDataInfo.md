[Documentation](../README.md) / [Exports](../modules.md) / AppendixPriorityTasksReadyKeywordsDataPriceDataInfo

# Class: AppendixPriorityTasksReadyKeywordsDataPriceDataInfo

## Implements

- [`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#constructor)

### Properties

- [cost](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#cost)
- [cost\_type](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#cost_type)

### Methods

- [init](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#init)
- [toJSON](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#tojson)
- [fromJS](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#fromjs)

## Constructors

### constructor

• **new AppendixPriorityTasksReadyKeywordsDataPriceDataInfo**(`data?`): [`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md) |

#### Returns

[`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Defined in

main.ts:209639

## Properties

### cost

• `Optional` **cost**: `number`

cost, USD

#### Implementation of

[IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md).[cost](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#cost)

#### Defined in

main.ts:209635

___

### cost\_type

• `Optional` **cost\_type**: `string`

charge type
can take the following values:
per_result – charge for every row in the result array
per_request – charge for a GET or POST request

#### Implementation of

[IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md).[cost_type](../interfaces/IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md#cost_type)

#### Defined in

main.ts:209633

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:209648

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:209666

___

### fromJS

▸ **fromJS**(`data`): [`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppendixPriorityTasksReadyKeywordsDataPriceDataInfo`](AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.md)

#### Defined in

main.ts:209659
