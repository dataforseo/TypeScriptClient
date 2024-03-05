[dataforseo-client](../README.md) / [Exports](../modules.md) / ProductInformationDetailsItem

# Class: ProductInformationDetailsItem

## Hierarchy

- [`BaseProductInformationItem`](BaseProductInformationItem.md)

  ↳ **`ProductInformationDetailsItem`**

## Implements

- [`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInformationDetailsItem.md#constructor)

### Properties

- [\_discriminator](ProductInformationDetailsItem.md#_discriminator)
- [body](ProductInformationDetailsItem.md#body)
- [section\_name](ProductInformationDetailsItem.md#section_name)

### Methods

- [init](ProductInformationDetailsItem.md#init)
- [toJSON](ProductInformationDetailsItem.md#tojson)
- [fromJS](ProductInformationDetailsItem.md#fromjs)

## Constructors

### constructor

• **new ProductInformationDetailsItem**(`data?`): [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInformationDetailsItem`](../interfaces/IProductInformationDetailsItem.md) |

#### Returns

[`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Overrides

[BaseProductInformationItem](BaseProductInformationItem.md).[constructor](BaseProductInformationItem.md#constructor)

#### Defined in

[main.ts:172442](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172442)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseProductInformationItem](BaseProductInformationItem.md).[_discriminator](BaseProductInformationItem.md#_discriminator)

#### Defined in

[main.ts:21715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L21715)

___

### body

• `Optional` **body**: `Object`

contains information specified about the product within the section_name

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IProductInformationDetailsItem](../interfaces/IProductInformationDetailsItem.md).[body](../interfaces/IProductInformationDetailsItem.md#body)

#### Defined in

[main.ts:172438](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172438)

___

### section\_name

• `Optional` **section\_name**: `string`

name of the section related to product information specified in the contents

#### Implementation of

[IProductInformationDetailsItem](../interfaces/IProductInformationDetailsItem.md).[section_name](../interfaces/IProductInformationDetailsItem.md#section_name)

#### Defined in

[main.ts:172436](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172436)

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

[main.ts:172447](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172447)

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

[main.ts:172472](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172472)

___

### fromJS

▸ **fromJS**(`data`): [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

#### Overrides

[BaseProductInformationItem](BaseProductInformationItem.md).[fromJS](BaseProductInformationItem.md#fromjs)

#### Defined in

[main.ts:172465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L172465)
