[Documentation](../README.md) / [Exports](../modules.md) / BacklinksPageIntersectionLiveResultInfo

# Class: BacklinksPageIntersectionLiveResultInfo

## Implements

- [`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BacklinksPageIntersectionLiveResultInfo.md#constructor)

### Properties

- [items](BacklinksPageIntersectionLiveResultInfo.md#items)
- [items\_count](BacklinksPageIntersectionLiveResultInfo.md#items_count)
- [targets](BacklinksPageIntersectionLiveResultInfo.md#targets)
- [total\_count](BacklinksPageIntersectionLiveResultInfo.md#total_count)

### Methods

- [init](BacklinksPageIntersectionLiveResultInfo.md#init)
- [toJSON](BacklinksPageIntersectionLiveResultInfo.md#tojson)
- [fromJS](BacklinksPageIntersectionLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BacklinksPageIntersectionLiveResultInfo**(`data?`): [`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md) |

#### Returns

[`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:143590

## Properties

### items

• `Optional` **items**: [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[IBacklinksPageIntersectionLiveResultInfo](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[items](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:143586

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksPageIntersectionLiveResultInfo](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[items_count](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:143584

___

### targets

• `Optional` **targets**: `Object`

targets from a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IBacklinksPageIntersectionLiveResultInfo](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[targets](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#targets)

#### Defined in

main.ts:143580

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results relevant the request

#### Implementation of

[IBacklinksPageIntersectionLiveResultInfo](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[total_count](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:143582

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

main.ts:143599

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

main.ts:143629

___

### fromJS

▸ **fromJS**(`data`): [`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

#### Defined in

main.ts:143622
