[Documentation](../README.md) / [Exports](../modules.md) / FormatsElement

# Class: FormatsElement

## Implements

- [`IFormatsElement`](../interfaces/IFormatsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](FormatsElement.md#constructor)

### Properties

- [format](FormatsElement.md#format)
- [size](FormatsElement.md#size)
- [type](FormatsElement.md#type)

### Methods

- [init](FormatsElement.md#init)
- [toJSON](FormatsElement.md#tojson)
- [fromJS](FormatsElement.md#fromjs)

## Constructors

### constructor

• **new FormatsElement**(`data?`): [`FormatsElement`](FormatsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFormatsElement`](../interfaces/IFormatsElement.md) |

#### Returns

[`FormatsElement`](FormatsElement.md)

#### Defined in

main.ts:50713

## Properties

### format

• `Optional` **format**: `string`

type of file format of the dataset
for example: zip, html, csv

#### Implementation of

[IFormatsElement](../interfaces/IFormatsElement.md).[format](../interfaces/IFormatsElement.md#format)

#### Defined in

main.ts:50707

___

### size

• `Optional` **size**: `string`

file size in bytes

#### Implementation of

[IFormatsElement](../interfaces/IFormatsElement.md).[size](../interfaces/IFormatsElement.md#size)

#### Defined in

main.ts:50709

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IFormatsElement](../interfaces/IFormatsElement.md).[type](../interfaces/IFormatsElement.md#type)

#### Defined in

main.ts:50704

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

main.ts:50722

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

main.ts:50741

___

### fromJS

▸ **fromJS**(`data`): [`FormatsElement`](FormatsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`FormatsElement`](FormatsElement.md)

#### Defined in

main.ts:50734
