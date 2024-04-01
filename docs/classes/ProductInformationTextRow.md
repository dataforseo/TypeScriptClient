[Documentation](../README.md) / [Exports](../modules.md) / ProductInformationTextRow

# Class: ProductInformationTextRow

## Hierarchy

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

  ↳ **`ProductInformationTextRow`**

## Implements

- [`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInformationTextRow.md#constructor)

### Properties

- [\_discriminator](ProductInformationTextRow.md#_discriminator)
- [text](ProductInformationTextRow.md#text)

### Methods

- [init](ProductInformationTextRow.md#init)
- [toJSON](ProductInformationTextRow.md#tojson)
- [fromJS](ProductInformationTextRow.md#fromjs)

## Constructors

### constructor

• **new ProductInformationTextRow**(`data?`): [`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInformationTextRow`](../interfaces/IProductInformationTextRow.md) |

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[constructor](BaseProductInformationRowItem.md#constructor)

#### Defined in

main.ts:178067

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[_discriminator](BaseProductInformationRowItem.md#_discriminator)

#### Defined in

main.ts:22297

___

### text

• `Optional` **text**: `string`

text specified under the given title within the section_name

#### Implementation of

[IProductInformationTextRow](../interfaces/IProductInformationTextRow.md).[text](../interfaces/IProductInformationTextRow.md#text)

#### Defined in

main.ts:178063

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

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[init](BaseProductInformationRowItem.md#init)

#### Defined in

main.ts:178072

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

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[toJSON](BaseProductInformationRowItem.md#tojson)

#### Defined in

main.ts:178090

___

### fromJS

▸ **fromJS**(`data`): [`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInformationTextRow`](ProductInformationTextRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[fromJS](BaseProductInformationRowItem.md#fromjs)

#### Defined in

main.ts:178083
