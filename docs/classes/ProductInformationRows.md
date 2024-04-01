[Documentation](../README.md) / [Exports](../modules.md) / ProductInformationRows

# Class: ProductInformationRows

## Implements

- [`IProductInformationRows`](../interfaces/IProductInformationRows.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInformationRows.md#constructor)

### Properties

- [rows](ProductInformationRows.md#rows)
- [title](ProductInformationRows.md#title)
- [type](ProductInformationRows.md#type)

### Methods

- [init](ProductInformationRows.md#init)
- [toJSON](ProductInformationRows.md#tojson)
- [fromJS](ProductInformationRows.md#fromjs)

## Constructors

### constructor

• **new ProductInformationRows**(`data?`): [`ProductInformationRows`](ProductInformationRows.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInformationRows`](../interfaces/IProductInformationRows.md) |

#### Returns

[`ProductInformationRows`](ProductInformationRows.md)

#### Defined in

main.ts:178119

## Properties

### rows

• `Optional` **rows**: [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)[]

rows containing related product information

#### Implementation of

[IProductInformationRows](../interfaces/IProductInformationRows.md).[rows](../interfaces/IProductInformationRows.md#rows)

#### Defined in

main.ts:178115

___

### title

• `Optional` **title**: `string`

title under which related product information appears on the Amazon product page

#### Implementation of

[IProductInformationRows](../interfaces/IProductInformationRows.md).[title](../interfaces/IProductInformationRows.md#title)

#### Defined in

main.ts:178113

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IProductInformationRows](../interfaces/IProductInformationRows.md).[type](../interfaces/IProductInformationRows.md#type)

#### Defined in

main.ts:178111

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

main.ts:178128

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

main.ts:178151

___

### fromJS

▸ **fromJS**(`data`): [`ProductInformationRows`](ProductInformationRows.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInformationRows`](ProductInformationRows.md)

#### Defined in

main.ts:178144
