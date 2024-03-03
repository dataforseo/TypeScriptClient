[Documentation](../README.md) / [Exports](../modules.md) / CarouselElement

# Class: CarouselElement

## Implements

- [`ICarouselElement`](../interfaces/ICarouselElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](CarouselElement.md#constructor)

### Properties

- [image\_url](CarouselElement.md#image_url)
- [subtitle](CarouselElement.md#subtitle)
- [title](CarouselElement.md#title)
- [type](CarouselElement.md#type)

### Methods

- [init](CarouselElement.md#init)
- [toJSON](CarouselElement.md#tojson)
- [fromJS](CarouselElement.md#fromjs)

## Constructors

### constructor

• **new CarouselElement**(`data?`): [`CarouselElement`](CarouselElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICarouselElement`](../interfaces/ICarouselElement.md) |

#### Returns

[`CarouselElement`](CarouselElement.md)

#### Defined in

main.ts:30070

## Properties

### image\_url

• `Optional` **image\_url**: `string`

URL of the image

#### Implementation of

[ICarouselElement](../interfaces/ICarouselElement.md).[image_url](../interfaces/ICarouselElement.md#image_url)

#### Defined in

main.ts:30066

___

### subtitle

• `Optional` **subtitle**: `string`

subtitle of the element

#### Implementation of

[ICarouselElement](../interfaces/ICarouselElement.md).[subtitle](../interfaces/ICarouselElement.md#subtitle)

#### Defined in

main.ts:30064

___

### title

• `Optional` **title**: `string`

title of the row

#### Implementation of

[ICarouselElement](../interfaces/ICarouselElement.md).[title](../interfaces/ICarouselElement.md#title)

#### Defined in

main.ts:30062

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ICarouselElement](../interfaces/ICarouselElement.md).[type](../interfaces/ICarouselElement.md#type)

#### Defined in

main.ts:30060

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

main.ts:30079

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

main.ts:30099

___

### fromJS

▸ **fromJS**(`data`): [`CarouselElement`](CarouselElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`CarouselElement`](CarouselElement.md)

#### Defined in

main.ts:30092
