[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDataBusinessListingsSearchLiveResultInfo

# Class: BusinessDataBusinessListingsSearchLiveResultInfo

## Implements

- [`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDataBusinessListingsSearchLiveResultInfo.md#constructor)

### Properties

- [count](BusinessDataBusinessListingsSearchLiveResultInfo.md#count)
- [items](BusinessDataBusinessListingsSearchLiveResultInfo.md#items)
- [offset](BusinessDataBusinessListingsSearchLiveResultInfo.md#offset)
- [offset\_token](BusinessDataBusinessListingsSearchLiveResultInfo.md#offset_token)
- [total\_count](BusinessDataBusinessListingsSearchLiveResultInfo.md#total_count)

### Methods

- [init](BusinessDataBusinessListingsSearchLiveResultInfo.md#init)
- [toJSON](BusinessDataBusinessListingsSearchLiveResultInfo.md#tojson)
- [fromJS](BusinessDataBusinessListingsSearchLiveResultInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDataBusinessListingsSearchLiveResultInfo**(`data?`): [`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDataBusinessListingsSearchLiveResultInfo`](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md) |

#### Returns

[`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Defined in

[main.ts:189379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189379)

## Properties

### count

• `Optional` **count**: `number`

item types
the number of items in the items array

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResultInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[count](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#count)

#### Defined in

[main.ts:189365](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189365)

___


### items

• `Optional` **items**: [`BusinessDataBusinessListingsSearchLiveItem`](BusinessDataBusinessListingsSearchLiveItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResultInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[items](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#items)

#### Defined in

[main.ts:189375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189375)

___


### offset

• `Optional` **offset**: `number`

offset in the results array of returned businesses

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResultInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[offset](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset)

#### Defined in

[main.ts:189367](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189367)

___


### offset\_token

• `Optional` **offset\_token**: `string`

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResultInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[offset_token](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#offset_token)

#### Defined in

[main.ts:189371](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189371)

___


### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Implementation of

[IBusinessDataBusinessListingsSearchLiveResultInfo](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md).[total_count](../interfaces/IBusinessDataBusinessListingsSearchLiveResultInfo.md#total_count)

#### Defined in

[main.ts:189362](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189362)

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

[main.ts:189388](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189388)

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

[main.ts:189413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189413)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDataBusinessListingsSearchLiveResultInfo`](BusinessDataBusinessListingsSearchLiveResultInfo.md)

#### Defined in

[main.ts:189406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L189406)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")