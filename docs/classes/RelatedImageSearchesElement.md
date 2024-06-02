**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / RelatedImageSearchesElement

# Class: RelatedImageSearchesElement

## Implements

- [`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RelatedImageSearchesElement(data)

> **new RelatedImageSearchesElement**(`data`?): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Parameters

• **data?**: [`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Source

main.ts:29799

## Properties

### alt?

> **`optional`** **alt**: `string`

alt tag of the image

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`alt`](../interfaces/IRelatedImageSearchesElement.md#alt)

#### Source

main.ts:29790

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`image_url`](../interfaces/IRelatedImageSearchesElement.md#image_url)

#### Source

main.ts:29795

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`title`](../interfaces/IRelatedImageSearchesElement.md#title)

#### Source

main.ts:29788

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`type`](../interfaces/IRelatedImageSearchesElement.md#type)

#### Source

main.ts:29786

***

### url?

> **`optional`** **url**: `string`

relevant URL

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`url`](../interfaces/IRelatedImageSearchesElement.md#url)

#### Source

main.ts:29792

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:29808

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:29829

***

### fromJS()

> **`static`** **fromJS**(`data`): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Source

main.ts:29822
