[Documentation](../README.md) / [Exports](../modules.md) / ProductVariation

# Class: ProductVariation

## Implements

- [`IProductVariation`](../interfaces/IProductVariation.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductVariation.md#constructor)

### Properties

- [product\_id](ProductVariation.md#product_id)
- [title](ProductVariation.md#title)
- [type](ProductVariation.md#type)
- [url](ProductVariation.md#url)

### Methods

- [init](ProductVariation.md#init)
- [toJSON](ProductVariation.md#tojson)
- [fromJS](ProductVariation.md#fromjs)

## Constructors

### constructor

• **new ProductVariation**(`data?`): [`ProductVariation`](ProductVariation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductVariation`](../interfaces/IProductVariation.md) |

#### Returns

[`ProductVariation`](ProductVariation.md)

#### Defined in

main.ts:169205

## Properties

### product\_id

• `Optional` **product\_id**: `string`

product ID in a POST array
learn more about the parameter in this help center guide

#### Implementation of

[IProductVariation](../interfaces/IProductVariation.md).[product_id](../interfaces/IProductVariation.md#product_id)

#### Defined in

main.ts:169196

___

### title

• `Optional` **title**: `string`

name of the product seller

#### Implementation of

[IProductVariation](../interfaces/IProductVariation.md).[title](../interfaces/IProductVariation.md#title)

#### Defined in

main.ts:169198

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IProductVariation](../interfaces/IProductVariation.md).[type](../interfaces/IProductVariation.md#type)

#### Defined in

main.ts:169193

___

### url

• `Optional` **url**: `string`

seller url
url of the webpage on the seller’s website where the product is sold

#### Implementation of

[IProductVariation](../interfaces/IProductVariation.md).[url](../interfaces/IProductVariation.md#url)

#### Defined in

main.ts:169201

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

main.ts:169214

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

main.ts:169234

___

### fromJS

▸ **fromJS**(`data`): [`ProductVariation`](ProductVariation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductVariation`](ProductVariation.md)

#### Defined in

main.ts:169227
