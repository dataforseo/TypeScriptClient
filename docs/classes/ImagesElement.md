**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ImagesElement

# Class: ImagesElement

## Implements

- [`IImagesElement`](../interfaces/IImagesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ImagesElement(data)

> **new ImagesElement**(`data`?): [`ImagesElement`](ImagesElement.md)

#### Parameters

• **data?**: [`IImagesElement`](../interfaces/IImagesElement.md)

#### Returns

[`ImagesElement`](ImagesElement.md)

#### Source

main.ts:27835

## Properties

### alt?

> **`optional`** **alt**: `string`

alt tag of the image

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`alt`](../interfaces/IImagesElement.md#alt)

#### Source

main.ts:27826

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`image_url`](../interfaces/IImagesElement.md#image_url)

#### Source

main.ts:27831

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`type`](../interfaces/IImagesElement.md#type)

#### Source

main.ts:27824

***

### url?

> **`optional`** **url**: `string`

URL link

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`url`](../interfaces/IImagesElement.md#url)

#### Source

main.ts:27828

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:27844

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:27864

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ImagesElement`](ImagesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`ImagesElement`](ImagesElement.md)

#### Source

main.ts:27857
