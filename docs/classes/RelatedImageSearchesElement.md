[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedImageSearchesElement

# Class: RelatedImageSearchesElement

Defined in: main.ts:32091

## Implements

- [`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RelatedImageSearchesElement()

> **new RelatedImageSearchesElement**(`data`?): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

Defined in: main.ts:32106

#### Parameters

##### data?

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

## Properties

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:32097

alt tag of the image

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`alt`](../interfaces/IRelatedImageSearchesElement.md#alt)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:32102

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`image_url`](../interfaces/IRelatedImageSearchesElement.md#image_url)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32095

title of a given link element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`title`](../interfaces/IRelatedImageSearchesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:32093

type of element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`type`](../interfaces/IRelatedImageSearchesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:32099

relevant URL

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`url`](../interfaces/IRelatedImageSearchesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32115

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:32136

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

Defined in: main.ts:32129

#### Parameters

##### data

`any`

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)
