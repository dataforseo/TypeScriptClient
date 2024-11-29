[**Documentation**](../README.md)

***

[Documentation](../README.md) / RelatedImageSearchesElement

# Class: RelatedImageSearchesElement

## Implements

- [`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RelatedImageSearchesElement()

> **new RelatedImageSearchesElement**(`data`?): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Parameters

##### data?

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Defined in

main.ts:32106

## Properties

### alt?

> `optional` **alt**: `string`

alt tag of the image

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`alt`](../interfaces/IRelatedImageSearchesElement.md#alt)

#### Defined in

main.ts:32097

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`image_url`](../interfaces/IRelatedImageSearchesElement.md#image_url)

#### Defined in

main.ts:32102

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`title`](../interfaces/IRelatedImageSearchesElement.md#title)

#### Defined in

main.ts:32095

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`type`](../interfaces/IRelatedImageSearchesElement.md#type)

#### Defined in

main.ts:32093

***

### url?

> `optional` **url**: `string`

relevant URL

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`url`](../interfaces/IRelatedImageSearchesElement.md#url)

#### Defined in

main.ts:32099

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:32115

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:32136

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Parameters

##### data

`any`

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Defined in

main.ts:32129
