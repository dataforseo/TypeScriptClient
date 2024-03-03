[Documentation](../README.md) / [Exports](../modules.md) / TwitterElement

# Class: TwitterElement

## Implements

- [`ITwitterElement`](../interfaces/ITwitterElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](TwitterElement.md#constructor)

### Properties

- [date](TwitterElement.md#date)
- [timestamp](TwitterElement.md#timestamp)
- [tweet](TwitterElement.md#tweet)
- [type](TwitterElement.md#type)
- [url](TwitterElement.md#url)

### Methods

- [init](TwitterElement.md#init)
- [toJSON](TwitterElement.md#tojson)
- [fromJS](TwitterElement.md#fromjs)

## Constructors

### constructor

• **new TwitterElement**(`data?`): [`TwitterElement`](TwitterElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ITwitterElement`](../interfaces/ITwitterElement.md) |

#### Returns

[`TwitterElement`](TwitterElement.md)

#### Defined in

main.ts:29141

## Properties

### date

• `Optional` **date**: `string`

the date when the page source of the element was published

#### Implementation of

[ITwitterElement](../interfaces/ITwitterElement.md).[date](../interfaces/ITwitterElement.md#date)

#### Defined in

main.ts:29130

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ITwitterElement](../interfaces/ITwitterElement.md).[timestamp](../interfaces/ITwitterElement.md#timestamp)

#### Defined in

main.ts:29135

___

### tweet

• `Optional` **tweet**: `string`

tweet message

#### Implementation of

[ITwitterElement](../interfaces/ITwitterElement.md).[tweet](../interfaces/ITwitterElement.md#tweet)

#### Defined in

main.ts:29128

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ITwitterElement](../interfaces/ITwitterElement.md).[type](../interfaces/ITwitterElement.md#type)

#### Defined in

main.ts:29126

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ITwitterElement](../interfaces/ITwitterElement.md).[url](../interfaces/ITwitterElement.md#url)

#### Defined in

main.ts:29137

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

main.ts:29150

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

main.ts:29171

___

### fromJS

▸ **fromJS**(`data`): [`TwitterElement`](TwitterElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`TwitterElement`](TwitterElement.md)

#### Defined in

main.ts:29164
