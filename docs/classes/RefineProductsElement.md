[Documentation](../README.md) / [Exports](../modules.md) / RefineProductsElement

# Class: RefineProductsElement

## Implements

- [`IRefineProductsElement`](../interfaces/IRefineProductsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RefineProductsElement.md#constructor)

### Properties

- [image\_url](RefineProductsElement.md#image_url)
- [keyword](RefineProductsElement.md#keyword)
- [refine\_type](RefineProductsElement.md#refine_type)
- [title](RefineProductsElement.md#title)
- [type](RefineProductsElement.md#type)
- [xpath](RefineProductsElement.md#xpath)

### Methods

- [init](RefineProductsElement.md#init)
- [toJSON](RefineProductsElement.md#tojson)
- [fromJS](RefineProductsElement.md#fromjs)

## Constructors

### constructor

• **new RefineProductsElement**(`data?`): [`RefineProductsElement`](RefineProductsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRefineProductsElement`](../interfaces/IRefineProductsElement.md) |

#### Returns

[`RefineProductsElement`](RefineProductsElement.md)

#### Defined in

main.ts:35160

## Properties

### image\_url

• `Optional` **image\_url**: `string`

URL of the image

#### Implementation of

[IRefineProductsElement](../interfaces/IRefineProductsElement.md).[image_url](../interfaces/IRefineProductsElement.md#image_url)

#### Defined in

main.ts:35150

___

### keyword

• `Optional` **keyword**: `string`

keyword for the related refined search

#### Implementation of

[IRefineProductsElement](../interfaces/IRefineProductsElement.md).[keyword](../interfaces/IRefineProductsElement.md#keyword)

#### Defined in

main.ts:35152

___

### refine\_type

• `Optional` **refine\_type**: `string`

type of search refinement

#### Implementation of

[IRefineProductsElement](../interfaces/IRefineProductsElement.md).[refine_type](../interfaces/IRefineProductsElement.md#refine_type)

#### Defined in

main.ts:35154

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IRefineProductsElement](../interfaces/IRefineProductsElement.md).[title](../interfaces/IRefineProductsElement.md#title)

#### Defined in

main.ts:35148

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IRefineProductsElement](../interfaces/IRefineProductsElement.md).[type](../interfaces/IRefineProductsElement.md#type)

#### Defined in

main.ts:35146

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IRefineProductsElement](../interfaces/IRefineProductsElement.md).[xpath](../interfaces/IRefineProductsElement.md#xpath)

#### Defined in

main.ts:35156

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

main.ts:35169

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

main.ts:35191

___

### fromJS

▸ **fromJS**(`data`): [`RefineProductsElement`](RefineProductsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RefineProductsElement`](RefineProductsElement.md)

#### Defined in

main.ts:35184
