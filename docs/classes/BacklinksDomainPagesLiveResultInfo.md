[Documentation](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesLiveResultInfo

# Class: BacklinksDomainPagesLiveResultInfo

## Implements

- [`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainPagesLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksDomainPagesLiveResultInfo.md#items)
- [items\_count](BacklinksDomainPagesLiveResultInfo.md#items_count)
- [target](BacklinksDomainPagesLiveResultInfo.md#target)
- [total\_count](BacklinksDomainPagesLiveResultInfo.md#total_count)

### Methods

- [init](BacklinksDomainPagesLiveResultInfo.md#init)
- [toJSON](BacklinksDomainPagesLiveResultInfo.md#tojson)
- [fromJS](BacklinksDomainPagesLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainPagesLiveResultInfo**(`data?`): [`BacklinksDomainPagesLiveResultInfo`](BacklinksDomainPagesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md) |

#### Returns

[`BacklinksDomainPagesLiveResultInfo`](BacklinksDomainPagesLiveResultInfo.md)

#### Defined in

main.ts:133577

## Properties

### items

• `Optional` **items**: [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)[]

items array

#### Implementation of

[IBacklinksDomainPagesLiveResultInfo](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[items](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#items)

#### Defined in

main.ts:133573

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the items array

#### Implementation of

[IBacklinksDomainPagesLiveResultInfo](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[items_count](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#items_count)

#### Defined in

main.ts:133571

___

### target

• `Optional` **target**: `string`

target in a POST array

#### Implementation of

[IBacklinksDomainPagesLiveResultInfo](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[target](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#target)

#### Defined in

main.ts:133567

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IBacklinksDomainPagesLiveResultInfo](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[total_count](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#total_count)

#### Defined in

main.ts:133569

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

main.ts:133586

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

main.ts:133610

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainPagesLiveResultInfo`](BacklinksDomainPagesLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainPagesLiveResultInfo`](BacklinksDomainPagesLiveResultInfo.md)

#### Defined in

main.ts:133603
