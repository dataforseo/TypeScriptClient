[Documentation](../README.md) / [Exports](../modules.md) / BaseProductInformationRowItem

# Class: BaseProductInformationRowItem

## Hierarchy

- **`BaseProductInformationRowItem`**

  ↳ [`ProductInformationImageRow`](ProductInformationImageRow.md)

  ↳ [`ProductInformationTextRow`](ProductInformationTextRow.md)

  ↳ [`ProductInformationVideoRow`](ProductInformationVideoRow.md)

## Implements

- [`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](BaseProductInformationRowItem.md#constructor)

### Properties

- [\_discriminator](BaseProductInformationRowItem.md#_discriminator)

### Methods

- [init](BaseProductInformationRowItem.md#init)
- [toJSON](BaseProductInformationRowItem.md#tojson)
- [fromJS](BaseProductInformationRowItem.md#fromjs)

## Constructors

### constructor

• **new BaseProductInformationRowItem**(`data?`): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBaseProductInformationRowItem`](../interfaces/IBaseProductInformationRowItem.md) |

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Defined in

main.ts:22299

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Defined in

main.ts:22297

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

main.ts:22309

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

main.ts:22340

___

### fromJS

▸ **fromJS**(`data`): [`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`BaseProductInformationRowItem`](BaseProductInformationRowItem.md)

#### Defined in

main.ts:22318
