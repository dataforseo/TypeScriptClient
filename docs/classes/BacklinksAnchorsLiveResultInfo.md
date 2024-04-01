[Documentation](../README.md) / [Exports](../modules.md) / BacklinksAnchorsLiveResultInfo

# Class: BacklinksAnchorsLiveResultInfo

## Implements

- [`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksAnchorsLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksAnchorsLiveResultInfo.md#items)
- [items\_count](BacklinksAnchorsLiveResultInfo.md#items_count)
- [target](BacklinksAnchorsLiveResultInfo.md#target)
- [total\_count](BacklinksAnchorsLiveResultInfo.md#total_count)

### Methods

- [init](BacklinksAnchorsLiveResultInfo.md#init)
- [toJSON](BacklinksAnchorsLiveResultInfo.md#tojson)
- [fromJS](BacklinksAnchorsLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksAnchorsLiveResultInfo**(`data?`): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md) |

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Defined in

main.ts:137670

## Properties

### items

• `Optional` **items**: [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)[]

items array

#### Implementation of

[IBacklinksAnchorsLiveResultInfo](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[items](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items)

#### Defined in

main.ts:137666

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[IBacklinksAnchorsLiveResultInfo](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[items_count](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:137664

___

### target

• `Optional` **target**: `string`

target in the post array

#### Implementation of

[IBacklinksAnchorsLiveResultInfo](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[target](../interfaces/IBacklinksAnchorsLiveResultInfo.md#target)

#### Defined in

main.ts:137660

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IBacklinksAnchorsLiveResultInfo](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[total_count](../interfaces/IBacklinksAnchorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:137662

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

main.ts:137679

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

main.ts:137703

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksAnchorsLiveResultInfo`](BacklinksAnchorsLiveResultInfo.md)

#### Defined in

main.ts:137696
