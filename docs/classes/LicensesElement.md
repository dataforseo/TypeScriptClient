[Documentation](../README.md) / [Exports](../modules.md) / LicensesElement

# Class: LicensesElement

## Implements

- [`ILicensesElement`](../interfaces/ILicensesElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LicensesElement.md#constructor)

### Properties

- [domain](LicensesElement.md#domain)
- [title](LicensesElement.md#title)
- [type](LicensesElement.md#type)
- [url](LicensesElement.md#url)

### Methods

- [init](LicensesElement.md#init)
- [toJSON](LicensesElement.md#tojson)
- [fromJS](LicensesElement.md#fromjs)

## Constructors

### constructor

• **new LicensesElement**(`data?`): [`LicensesElement`](LicensesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILicensesElement`](../interfaces/ILicensesElement.md) |

#### Returns

[`LicensesElement`](LicensesElement.md)

#### Defined in

main.ts:33370

## Properties

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ILicensesElement](../interfaces/ILicensesElement.md).[domain](../interfaces/ILicensesElement.md#domain)

#### Defined in

main.ts:33366

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ILicensesElement](../interfaces/ILicensesElement.md).[title](../interfaces/ILicensesElement.md#title)

#### Defined in

main.ts:33362

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ILicensesElement](../interfaces/ILicensesElement.md).[type](../interfaces/ILicensesElement.md#type)

#### Defined in

main.ts:33360

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ILicensesElement](../interfaces/ILicensesElement.md).[url](../interfaces/ILicensesElement.md#url)

#### Defined in

main.ts:33364

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

main.ts:33379

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

main.ts:33399

___

### fromJS

▸ **fromJS**(`data`): [`LicensesElement`](LicensesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LicensesElement`](LicensesElement.md)

#### Defined in

main.ts:33392
