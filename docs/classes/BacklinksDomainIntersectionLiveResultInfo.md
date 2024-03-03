[Documentation](../README.md) / [Exports](../modules.md) / BacklinksDomainIntersectionLiveResultInfo

# Class: BacklinksDomainIntersectionLiveResultInfo

## Implements

- [`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksDomainIntersectionLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksDomainIntersectionLiveResultInfo.md#items)
- [items\_count](BacklinksDomainIntersectionLiveResultInfo.md#items_count)
- [targets](BacklinksDomainIntersectionLiveResultInfo.md#targets)
- [total\_count](BacklinksDomainIntersectionLiveResultInfo.md#total_count)

### Methods

- [init](BacklinksDomainIntersectionLiveResultInfo.md#init)
- [toJSON](BacklinksDomainIntersectionLiveResultInfo.md#tojson)
- [fromJS](BacklinksDomainIntersectionLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksDomainIntersectionLiveResultInfo**(`data?`): [`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md) |

#### Returns

[`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Defined in

main.ts:137291

## Properties

### items

• `Optional` **items**: [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)[]

contains domain that link to all targets from the POST array

#### Implementation of

[IBacklinksDomainIntersectionLiveResultInfo](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[items](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:137287

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksDomainIntersectionLiveResultInfo](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[items_count](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:137285

___

### targets

• `Optional` **targets**: `Object`

target domains, subdomains or webpages in a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IBacklinksDomainIntersectionLiveResultInfo](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[targets](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#targets)

#### Defined in

main.ts:137281

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results relevant to your request

#### Implementation of

[IBacklinksDomainIntersectionLiveResultInfo](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[total_count](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:137283

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

main.ts:137300

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

main.ts:137330

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Defined in

main.ts:137323
