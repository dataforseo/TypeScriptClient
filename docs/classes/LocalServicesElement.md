[Documentation](../README.md) / [Exports](../modules.md) / LocalServicesElement

# Class: LocalServicesElement

## Implements

- [`ILocalServicesElement`](../interfaces/ILocalServicesElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](LocalServicesElement.md#constructor)

### Properties

- [description](LocalServicesElement.md#description)
- [domain](LocalServicesElement.md#domain)
- [profile\_image\_url](LocalServicesElement.md#profile_image_url)
- [rating](LocalServicesElement.md#rating)
- [title](LocalServicesElement.md#title)
- [type](LocalServicesElement.md#type)
- [url](LocalServicesElement.md#url)

### Methods

- [init](LocalServicesElement.md#init)
- [toJSON](LocalServicesElement.md#tojson)
- [fromJS](LocalServicesElement.md#fromjs)

## Constructors

### constructor

• **new LocalServicesElement**(`data?`): [`LocalServicesElement`](LocalServicesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILocalServicesElement`](../interfaces/ILocalServicesElement.md) |

#### Returns

[`LocalServicesElement`](LocalServicesElement.md)

#### Defined in

main.ts:33741

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Implementation of

[ILocalServicesElement](../interfaces/ILocalServicesElement.md).[description](../interfaces/ILocalServicesElement.md#description)

#### Defined in

main.ts:33732

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[ILocalServicesElement](../interfaces/ILocalServicesElement.md).[domain](../interfaces/ILocalServicesElement.md#domain)

#### Defined in

main.ts:33730

___

### profile\_image\_url

• `Optional` **profile\_image\_url**: `string`

URL of the image featured in the element

#### Implementation of

[ILocalServicesElement](../interfaces/ILocalServicesElement.md).[profile_image_url](../interfaces/ILocalServicesElement.md#profile_image_url)

#### Defined in

main.ts:33737

___

### rating

• `Optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[ILocalServicesElement](../interfaces/ILocalServicesElement.md).[rating](../interfaces/ILocalServicesElement.md#rating)

#### Defined in

main.ts:33735

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ILocalServicesElement](../interfaces/ILocalServicesElement.md).[title](../interfaces/ILocalServicesElement.md#title)

#### Defined in

main.ts:33726

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ILocalServicesElement](../interfaces/ILocalServicesElement.md).[type](../interfaces/ILocalServicesElement.md#type)

#### Defined in

main.ts:33724

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[ILocalServicesElement](../interfaces/ILocalServicesElement.md).[url](../interfaces/ILocalServicesElement.md#url)

#### Defined in

main.ts:33728

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

main.ts:33750

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

main.ts:33773

___

### fromJS

▸ **fromJS**(`data`): [`LocalServicesElement`](LocalServicesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`LocalServicesElement`](LocalServicesElement.md)

#### Defined in

main.ts:33766
