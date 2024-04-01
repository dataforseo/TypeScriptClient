[Documentation](../README.md) / [Exports](../modules.md) / ProductInformationVideoRow

# Class: ProductInformationVideoRow

## Hierarchy

- [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

  ↳ **`ProductInformationVideoRow`**

## Implements

- [`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ProductInformationVideoRow.md#constructor)

### Properties

- [\_discriminator](ProductInformationVideoRow.md#_discriminator)
- [preview](ProductInformationVideoRow.md#preview)
- [url](ProductInformationVideoRow.md#url)

### Methods

- [init](ProductInformationVideoRow.md#init)
- [toJSON](ProductInformationVideoRow.md#tojson)
- [fromJS](ProductInformationVideoRow.md#fromjs)

## Constructors

### constructor

• **new ProductInformationVideoRow**(`data?`): [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IProductInformationVideoRow`](../interfaces/IProductInformationVideoRow.md) |

#### Returns

[`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[constructor](BaseProductInformationRowItem.md#constructor)

#### Defined in

main.ts:178692

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[_discriminator](BaseProductInformationRowItem.md#_discriminator)

#### Defined in

main.ts:22297

___

### preview

• `Optional` **preview**: `string`

URL of the preview image for the related video

#### Implementation of

[IProductInformationVideoRow](../interfaces/IProductInformationVideoRow.md).[preview](../interfaces/IProductInformationVideoRow.md#preview)

#### Defined in

main.ts:178686

___

### url

• `Optional` **url**: `string`

URL of the image

#### Implementation of

[IProductInformationVideoRow](../interfaces/IProductInformationVideoRow.md).[url](../interfaces/IProductInformationVideoRow.md#url)

#### Defined in

main.ts:178688

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

main.ts:178697

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

main.ts:178716

___

### fromJS

▸ **fromJS**(`data`): [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ProductInformationVideoRow`](ProductInformationVideoRow.md)

#### Overrides

[BaseProductInformationRowItem](BaseProductInformationRowItem.md).[fromJS](BaseProductInformationRowItem.md#fromjs)

#### Defined in

main.ts:178709
