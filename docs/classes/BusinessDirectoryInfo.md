[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / BusinessDirectoryInfo

# Class: BusinessDirectoryInfo

## Implements

- [`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BusinessDirectoryInfo.md#constructor)

### Properties

- [items](BusinessDirectoryInfo.md#items)
- [title](BusinessDirectoryInfo.md#title)

### Methods

- [init](BusinessDirectoryInfo.md#init)
- [toJSON](BusinessDirectoryInfo.md#tojson)
- [fromJS](BusinessDirectoryInfo.md#fromjs)

## Constructors

### constructor

• **new BusinessDirectoryInfo**(`data?`): [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBusinessDirectoryInfo`](../interfaces/IBusinessDirectoryInfo.md) |

#### Returns

[`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Defined in

[main.ts:191313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191313)

## Properties

### items

• `Optional` **items**: [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)[]

encountered item types
types of search engine results encountered in the items array;
possible item types: google_business_info

#### Implementation of

[IBusinessDirectoryInfo](../interfaces/IBusinessDirectoryInfo.md).[items](../interfaces/IBusinessDirectoryInfo.md#items)

#### Defined in

[main.ts:191309](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191309)

___


### title

• `Optional` **title**: `string`

title of the element
domain of the online menu system

#### Implementation of

[IBusinessDirectoryInfo](../interfaces/IBusinessDirectoryInfo.md).[title](../interfaces/IBusinessDirectoryInfo.md#title)

#### Defined in

[main.ts:191305](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191305)

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

[main.ts:191322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191322)

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

[main.ts:191344](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191344)

___


### fromJS

▸ **fromJS**(`data`): [`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BusinessDirectoryInfo`](BusinessDirectoryInfo.md)

#### Defined in

[main.ts:191337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L191337)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")