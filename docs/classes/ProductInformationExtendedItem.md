[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductInformationExtendedItem

# Class: ProductInformationExtendedItem

## Hierarchy

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

  ↳ **`ProductInformationExtendedItem`**

## Implements

- [`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInformationExtendedItem.md#constructor)

### Properties

- [\_discriminator](ProductInformationExtendedItem.md#_discriminator)
- [contents](ProductInformationExtendedItem.md#contents)
- [section\_name](ProductInformationExtendedItem.md#section_name)

### Methods

- [init](ProductInformationExtendedItem.md#init)
- [toJSON](ProductInformationExtendedItem.md#tojson)
- [fromJS](ProductInformationExtendedItem.md#fromjs)

## Constructors

### constructor

• **new ProductInformationExtendedItem**(`data?`): [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInformationExtendedItem`](../interfaces/IProductInformationExtendedItem.md) |

#### Returns

[`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Overrides

[BaseProductInformationItem](BaseProductInformationItem.md).[constructor](BaseProductInformationItem.md#constructor)

#### Defined in

[main.ts:172734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172734)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseProductInformationItem](BaseProductInformationItem.md).[_discriminator](BaseProductInformationItem.md#_discriminator)

#### Defined in

[main.ts:21715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21715)

___

### contents

• `Optional` **contents**: [`ProductInformationRows`](ProductInformationRows.md)[]

contains information specified about the product within the section_name

#### Implementation of

[IProductInformationExtendedItem](../interfaces/IProductInformationExtendedItem.md).[contents](../interfaces/IProductInformationExtendedItem.md#contents)

#### Defined in

[main.ts:172730](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172730)

___

### section\_name

• `Optional` **section\_name**: `string`

name of the section related to product information specified in the contents

#### Implementation of

[IProductInformationExtendedItem](../interfaces/IProductInformationExtendedItem.md).[section_name](../interfaces/IProductInformationExtendedItem.md#section_name)

#### Defined in

[main.ts:172728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172728)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseProductInformationItem](BaseProductInformationItem.md).[init](BaseProductInformationItem.md#init)

#### Defined in

[main.ts:172739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172739)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseProductInformationItem](BaseProductInformationItem.md).[toJSON](BaseProductInformationItem.md#tojson)

#### Defined in

[main.ts:172762](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172762)

___

### fromJS

▸ **fromJS**(`data`): [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

#### Overrides

[BaseProductInformationItem](BaseProductInformationItem.md).[fromJS](BaseProductInformationItem.md#fromjs)

#### Defined in

[main.ts:172755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172755)
