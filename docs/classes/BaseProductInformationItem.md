[Documentation](../README.md) / [Exports](../modules.md) / BaseProductInformationItem

# Class: BaseProductInformationItem

## Hierarchy

- **`BaseProductInformationItem`**

  ↳ [`ProductInformationDetailsItem`](ProductInformationDetailsItem.md)

  ↳ [`ProductInformationTextItem`](ProductInformationTextItem.md)

  ↳ [`ProductInformationExtendedItem`](ProductInformationExtendedItem.md)

## Implements

- [`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseProductInformationItem.md#constructor)

### Properties

- [\_discriminator](BaseProductInformationItem.md#_discriminator)

### Methods

- [init](BaseProductInformationItem.md#init)
- [toJSON](BaseProductInformationItem.md#tojson)
- [fromJS](BaseProductInformationItem.md#fromjs)

## Constructors

### constructor

• **new BaseProductInformationItem**(`data?`): [`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseProductInformationItem`](../interfaces/IBaseProductInformationItem.md) |

#### Returns

[`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Defined in

main.ts:21859

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

main.ts:21857

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

main.ts:21869

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

main.ts:21900

___

### fromJS

▸ **fromJS**(`data`): [`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseProductInformationItem`](BaseProductInformationItem.md)

#### Defined in

main.ts:21878
