[Documentation](../README.md) / [Exports](../modules.md) / SerpAiSummaryResultInfo

# Class: SerpAiSummaryResultInfo

## Implements

- [`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpAiSummaryResultInfo.md#constructor)

### Properties

- [items](SerpAiSummaryResultInfo.md#items)
- [items\_count](SerpAiSummaryResultInfo.md#items_count)

### Methods

- [init](SerpAiSummaryResultInfo.md#init)
- [toJSON](SerpAiSummaryResultInfo.md#tojson)
- [fromJS](SerpAiSummaryResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpAiSummaryResultInfo**(`data?`): [`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpAiSummaryResultInfo`](../interfaces/ISerpAiSummaryResultInfo.md) |

#### Returns

[`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Defined in

main.ts:24411

## Properties

### items

• `Optional` **items**: [`SerpAiSummaryItem`](SerpAiSummaryItem.md)[]

items array

#### Implementation of

[ISerpAiSummaryResultInfo](../interfaces/ISerpAiSummaryResultInfo.md).[items](../interfaces/ISerpAiSummaryResultInfo.md#items)

#### Defined in

main.ts:24407

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[ISerpAiSummaryResultInfo](../interfaces/ISerpAiSummaryResultInfo.md).[items_count](../interfaces/ISerpAiSummaryResultInfo.md#items_count)

#### Defined in

main.ts:24405

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

main.ts:24420

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

main.ts:24442

___

### fromJS

▸ **fromJS**(`data`): [`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpAiSummaryResultInfo`](SerpAiSummaryResultInfo.md)

#### Defined in

main.ts:24435
