[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksDomainPagesLiveResultInfo

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

[main.ts:133433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133433)

## Properties

### items

• `Optional` **items**: [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)[]

items array

#### Implementation of

[IBacklinksDomainPagesLiveResultInfo](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[items](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#items)

#### Defined in

[main.ts:133429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133429)

___

### items\_count

• `Optional` **items\_count**: `number`

number of items in the items array

#### Implementation of

[IBacklinksDomainPagesLiveResultInfo](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[items_count](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#items_count)

#### Defined in

[main.ts:133427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133427)

___

### target

• `Optional` **target**: `string`

target in a POST array

#### Implementation of

[IBacklinksDomainPagesLiveResultInfo](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[target](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#target)

#### Defined in

[main.ts:133423](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133423)

___

### total\_count

• `Optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[IBacklinksDomainPagesLiveResultInfo](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[total_count](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#total_count)

#### Defined in

[main.ts:133425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133425)

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

[main.ts:133442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133442)

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

[main.ts:133466](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133466)

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

[main.ts:133459](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L133459)
