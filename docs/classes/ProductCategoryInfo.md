[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductCategoryInfo

# Class: ProductCategoryInfo

## Implements

- [`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductCategoryInfo.md#constructor)

### Properties

- [category](ProductCategoryInfo.md#category)
- [url](ProductCategoryInfo.md#url)

### Methods

- [init](ProductCategoryInfo.md#init)
- [toJSON](ProductCategoryInfo.md#tojson)
- [fromJS](ProductCategoryInfo.md#fromjs)

## Constructors

### constructor

• **new ProductCategoryInfo**(`data?`): [`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductCategoryInfo`](../interfaces/IProductCategoryInfo.md) |

#### Returns

[`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Defined in

[main.ts:172385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172385)

## Properties

### category

• `Optional` **category**: `string`

product category name

#### Implementation of

[IProductCategoryInfo](../interfaces/IProductCategoryInfo.md).[category](../interfaces/IProductCategoryInfo.md#category)

#### Defined in

[main.ts:172378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172378)

___

### url

• `Optional` **url**: `string`

product category URL
indicates the browse path on Amazon with the unique browse node ID (product category ID on Amazon)

#### Implementation of

[IProductCategoryInfo](../interfaces/IProductCategoryInfo.md).[url](../interfaces/IProductCategoryInfo.md#url)

#### Defined in

[main.ts:172381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172381)

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

[main.ts:172394](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172394)

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

[main.ts:172412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172412)

___

### fromJS

▸ **fromJS**(`data`): [`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductCategoryInfo`](ProductCategoryInfo.md)

#### Defined in

[main.ts:172405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172405)
