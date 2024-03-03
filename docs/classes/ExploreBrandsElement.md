[Documentation](../README.md) / [Exports](../modules.md) / ExploreBrandsElement

# Class: ExploreBrandsElement

## Implements

- [`IExploreBrandsElement`](../interfaces/IExploreBrandsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ExploreBrandsElement.md#constructor)

### Properties

- [description](ExploreBrandsElement.md#description)
- [domain](ExploreBrandsElement.md#domain)
- [image\_url](ExploreBrandsElement.md#image_url)
- [title](ExploreBrandsElement.md#title)
- [type](ExploreBrandsElement.md#type)
- [url](ExploreBrandsElement.md#url)
- [xpath](ExploreBrandsElement.md#xpath)

### Methods

- [init](ExploreBrandsElement.md#init)
- [toJSON](ExploreBrandsElement.md#tojson)
- [fromJS](ExploreBrandsElement.md#fromjs)

## Constructors

### constructor

• **new ExploreBrandsElement**(`data?`): [`ExploreBrandsElement`](ExploreBrandsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IExploreBrandsElement`](../interfaces/IExploreBrandsElement.md) |

#### Returns

[`ExploreBrandsElement`](ExploreBrandsElement.md)

#### Defined in

main.ts:35348

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[IExploreBrandsElement](../interfaces/IExploreBrandsElement.md).[description](../interfaces/IExploreBrandsElement.md#description)

#### Defined in

main.ts:35340

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IExploreBrandsElement](../interfaces/IExploreBrandsElement.md).[domain](../interfaces/IExploreBrandsElement.md#domain)

#### Defined in

main.ts:35338

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image

#### Implementation of

[IExploreBrandsElement](../interfaces/IExploreBrandsElement.md).[image_url](../interfaces/IExploreBrandsElement.md#image_url)

#### Defined in

main.ts:35342

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IExploreBrandsElement](../interfaces/IExploreBrandsElement.md).[title](../interfaces/IExploreBrandsElement.md#title)

#### Defined in

main.ts:35334

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IExploreBrandsElement](../interfaces/IExploreBrandsElement.md).[type](../interfaces/IExploreBrandsElement.md#type)

#### Defined in

main.ts:35332

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IExploreBrandsElement](../interfaces/IExploreBrandsElement.md).[url](../interfaces/IExploreBrandsElement.md#url)

#### Defined in

main.ts:35336

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IExploreBrandsElement](../interfaces/IExploreBrandsElement.md).[xpath](../interfaces/IExploreBrandsElement.md#xpath)

#### Defined in

main.ts:35344

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

main.ts:35357

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

main.ts:35380

___

### fromJS

▸ **fromJS**(`data`): [`ExploreBrandsElement`](ExploreBrandsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ExploreBrandsElement`](ExploreBrandsElement.md)

#### Defined in

main.ts:35373
