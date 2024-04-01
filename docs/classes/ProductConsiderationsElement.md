[Documentation](../README.md) / [Exports](../modules.md) / ProductConsiderationsElement

# Class: ProductConsiderationsElement

## Implements

- [`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductConsiderationsElement.md#constructor)

### Properties

- [consideration\_category](ProductConsiderationsElement.md#consideration_category)
- [expanded\_element](ProductConsiderationsElement.md#expanded_element)
- [title](ProductConsiderationsElement.md#title)
- [type](ProductConsiderationsElement.md#type)

### Methods

- [init](ProductConsiderationsElement.md#init)
- [toJSON](ProductConsiderationsElement.md#tojson)
- [fromJS](ProductConsiderationsElement.md#fromjs)

## Constructors

### constructor

• **new ProductConsiderationsElement**(`data?`): [`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductConsiderationsElement`](../interfaces/IProductConsiderationsElement.md) |

#### Returns

[`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Defined in

main.ts:35482

## Properties

### consideration\_category

• `Optional` **consideration\_category**: `string`

category of the consideration element
the category is indicated just above the title fo the consideration element

#### Implementation of

[IProductConsiderationsElement](../interfaces/IProductConsiderationsElement.md).[consideration_category](../interfaces/IProductConsiderationsElement.md#consideration_category)

#### Defined in

main.ts:35476

___

### expanded\_element

• `Optional` **expanded\_element**: [`ProductConsiderationsExpandedElement`](ProductConsiderationsExpandedElement.md)

expanded element

#### Implementation of

[IProductConsiderationsElement](../interfaces/IProductConsiderationsElement.md).[expanded_element](../interfaces/IProductConsiderationsElement.md#expanded_element)

#### Defined in

main.ts:35478

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IProductConsiderationsElement](../interfaces/IProductConsiderationsElement.md).[title](../interfaces/IProductConsiderationsElement.md#title)

#### Defined in

main.ts:35473

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IProductConsiderationsElement](../interfaces/IProductConsiderationsElement.md).[type](../interfaces/IProductConsiderationsElement.md#type)

#### Defined in

main.ts:35471

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

main.ts:35491

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

main.ts:35511

___

### fromJS

▸ **fromJS**(`data`): [`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductConsiderationsElement`](ProductConsiderationsElement.md)

#### Defined in

main.ts:35504
