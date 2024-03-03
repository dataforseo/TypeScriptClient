[Documentation](../README.md) / [Exports](../modules.md) / FoundOnWebElement

# Class: FoundOnWebElement

## Implements

- [`IFoundOnWebElement`](../interfaces/IFoundOnWebElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FoundOnWebElement.md#constructor)

### Properties

- [image](FoundOnWebElement.md#image)
- [subtitle](FoundOnWebElement.md#subtitle)
- [title](FoundOnWebElement.md#title)
- [type](FoundOnWebElement.md#type)

### Methods

- [init](FoundOnWebElement.md#init)
- [toJSON](FoundOnWebElement.md#tojson)
- [fromJS](FoundOnWebElement.md#fromjs)

## Constructors

### constructor

• **new FoundOnWebElement**(`data?`): [`FoundOnWebElement`](FoundOnWebElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFoundOnWebElement`](../interfaces/IFoundOnWebElement.md) |

#### Returns

[`FoundOnWebElement`](FoundOnWebElement.md)

#### Defined in

main.ts:34862

## Properties

### image

• `Optional` **image**: [`ImagesElement`](ImagesElement.md)

image of the element

#### Implementation of

[IFoundOnWebElement](../interfaces/IFoundOnWebElement.md).[image](../interfaces/IFoundOnWebElement.md#image)

#### Defined in

main.ts:34858

___

### subtitle

• `Optional` **subtitle**: `string`

subtitle of the element

#### Implementation of

[IFoundOnWebElement](../interfaces/IFoundOnWebElement.md).[subtitle](../interfaces/IFoundOnWebElement.md#subtitle)

#### Defined in

main.ts:34856

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[IFoundOnWebElement](../interfaces/IFoundOnWebElement.md).[title](../interfaces/IFoundOnWebElement.md#title)

#### Defined in

main.ts:34854

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IFoundOnWebElement](../interfaces/IFoundOnWebElement.md).[type](../interfaces/IFoundOnWebElement.md#type)

#### Defined in

main.ts:34852

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

main.ts:34871

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

main.ts:34891

___

### fromJS

▸ **fromJS**(`data`): [`FoundOnWebElement`](FoundOnWebElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FoundOnWebElement`](FoundOnWebElement.md)

#### Defined in

main.ts:34884
