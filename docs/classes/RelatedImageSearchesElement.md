[Documentation](../README.md) / [Exports](../modules.md) / RelatedImageSearchesElement

# Class: RelatedImageSearchesElement

## Implements

- [`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](RelatedImageSearchesElement.md#constructor)

### Properties

- [alt](RelatedImageSearchesElement.md#alt)
- [image\_url](RelatedImageSearchesElement.md#image_url)
- [title](RelatedImageSearchesElement.md#title)
- [type](RelatedImageSearchesElement.md#type)
- [url](RelatedImageSearchesElement.md#url)

### Methods

- [init](RelatedImageSearchesElement.md#init)
- [toJSON](RelatedImageSearchesElement.md#tojson)
- [fromJS](RelatedImageSearchesElement.md#fromjs)

## Constructors

### constructor

• **new RelatedImageSearchesElement**(`data?`): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md) |

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Defined in

main.ts:29556

## Properties

### alt

• `Optional` **alt**: `string`

alt tag of the image

#### Implementation of

[IRelatedImageSearchesElement](../interfaces/IRelatedImageSearchesElement.md).[alt](../interfaces/IRelatedImageSearchesElement.md#alt)

#### Defined in

main.ts:29547

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[IRelatedImageSearchesElement](../interfaces/IRelatedImageSearchesElement.md).[image_url](../interfaces/IRelatedImageSearchesElement.md#image_url)

#### Defined in

main.ts:29552

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IRelatedImageSearchesElement](../interfaces/IRelatedImageSearchesElement.md).[title](../interfaces/IRelatedImageSearchesElement.md#title)

#### Defined in

main.ts:29545

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IRelatedImageSearchesElement](../interfaces/IRelatedImageSearchesElement.md).[type](../interfaces/IRelatedImageSearchesElement.md#type)

#### Defined in

main.ts:29543

___

### url

• `Optional` **url**: `string`

relevant URL

#### Implementation of

[IRelatedImageSearchesElement](../interfaces/IRelatedImageSearchesElement.md).[url](../interfaces/IRelatedImageSearchesElement.md#url)

#### Defined in

main.ts:29549

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

main.ts:29565

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

main.ts:29586

___

### fromJS

▸ **fromJS**(`data`): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Defined in

main.ts:29579
