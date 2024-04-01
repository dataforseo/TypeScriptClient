[Documentation](../README.md) / [Exports](../modules.md) / BacklinksHistoryLiveResultInfo

# Class: BacklinksHistoryLiveResultInfo

## Implements

- [`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksHistoryLiveResultInfo.md#constructor)

### Properties

- [date\_from](BacklinksHistoryLiveResultInfo.md#date_from)
- [date\_to](BacklinksHistoryLiveResultInfo.md#date_to)
- [items](BacklinksHistoryLiveResultInfo.md#items)
- [items\_count](BacklinksHistoryLiveResultInfo.md#items_count)
- [target](BacklinksHistoryLiveResultInfo.md#target)

### Methods

- [init](BacklinksHistoryLiveResultInfo.md#init)
- [toJSON](BacklinksHistoryLiveResultInfo.md#tojson)
- [fromJS](BacklinksHistoryLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksHistoryLiveResultInfo**(`data?`): [`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksHistoryLiveResultInfo`](../interfaces/IBacklinksHistoryLiveResultInfo.md) |

#### Returns

[`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Defined in

main.ts:135756

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
in the UTC format: “yyyy-mm-dd”
example:
2019-01-01

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[date_from](../interfaces/IBacklinksHistoryLiveResultInfo.md#date_from)

#### Defined in

main.ts:135741

___

### date\_to

• `Optional` **date\_to**: `string`

ending date of the time range
in the UTC format: "yyyy-mm-dd"
example:
"2019-01-15"

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[date_to](../interfaces/IBacklinksHistoryLiveResultInfo.md#date_to)

#### Defined in

main.ts:135746

___

### items

• `Optional` **items**: [`BacklinksHistoryLiveItem`](BacklinksHistoryLiveItem.md)[]

contains historical backlink data for the specified domain
the data is provided month-by-month;
the metrics are aggregated according to the backlinks the specified domain had on the first day of each given month

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[items](../interfaces/IBacklinksHistoryLiveResultInfo.md#items)

#### Defined in

main.ts:135752

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[items_count](../interfaces/IBacklinksHistoryLiveResultInfo.md#items_count)

#### Defined in

main.ts:135748

___

### target

• `Optional` **target**: `string`

target from the POST array

#### Implementation of

[IBacklinksHistoryLiveResultInfo](../interfaces/IBacklinksHistoryLiveResultInfo.md).[target](../interfaces/IBacklinksHistoryLiveResultInfo.md#target)

#### Defined in

main.ts:135736

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

main.ts:135765

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

main.ts:135790

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksHistoryLiveResultInfo`](BacklinksHistoryLiveResultInfo.md)

#### Defined in

main.ts:135783
