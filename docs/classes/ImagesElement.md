[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ImagesElement

# Class: ImagesElement

## Implements

- [`IImagesElement`](../interfaces/IImagesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImagesElement()

> **new ImagesElement**(`data`?): [`ImagesElement`](ImagesElement.md)

#### Parameters

• **data?**: [`IImagesElement`](../interfaces/IImagesElement.md)

#### Returns

[`ImagesElement`](ImagesElement.md)

#### Defined in

main.ts:28461

## Properties

### alt?

> `optional` **alt**: `string`

alt tag of the image

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`alt`](../interfaces/IImagesElement.md#alt)

#### Defined in

main.ts:28452

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`image_url`](../interfaces/IImagesElement.md#image_url)

#### Defined in

main.ts:28457

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`type`](../interfaces/IImagesElement.md#type)

#### Defined in

main.ts:28450

***

### url?

> `optional` **url**: `string`

URL link

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`url`](../interfaces/IImagesElement.md#url)

#### Defined in

main.ts:28454

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:28470

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:28490

***

### fromJS()

> `static` **fromJS**(`data`): [`ImagesElement`](ImagesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImagesElement`](ImagesElement.md)

#### Defined in

main.ts:28483
