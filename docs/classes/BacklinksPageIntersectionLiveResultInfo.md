[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BacklinksPageIntersectionLiveResultInfo

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

[main.ts:138169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138169)

## Properties

### items

• `Optional` **items**: [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[IBacklinksPageIntersectionLiveResultInfo](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[items](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#items)

#### Defined in

[main.ts:138165](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138165)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IBacklinksPageIntersectionLiveResultInfo](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[items_count](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#items_count)

#### Defined in

[main.ts:138163](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138163)

___


### targets

• `Optional` **targets**: `Object`

targets from a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IBacklinksPageIntersectionLiveResultInfo](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[targets](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#targets)

#### Defined in

[main.ts:138159](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138159)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results relevant the request

#### Implementation of

[IBacklinksPageIntersectionLiveResultInfo](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[total_count](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#total_count)

#### Defined in

[main.ts:138161](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138161)

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

[main.ts:138178](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138178)

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

[main.ts:138208](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138208)

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

[main.ts:138201](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L138201)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")