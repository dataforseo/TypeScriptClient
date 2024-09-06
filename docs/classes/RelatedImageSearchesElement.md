[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / RelatedImageSearchesElement

# Class: RelatedImageSearchesElement

## Implements

- [`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new RelatedImageSearchesElement()

> **new RelatedImageSearchesElement**(`data`?): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Parameters

• **data?**: [`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md)

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Defined in

main.ts:30547

## Properties

### alt?

> `optional` **alt**: `string`

alt tag of the image

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`alt`](../interfaces/IRelatedImageSearchesElement.md#alt)

#### Defined in

main.ts:30538

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`image_url`](../interfaces/IRelatedImageSearchesElement.md#image_url)

#### Defined in

main.ts:30543

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`title`](../interfaces/IRelatedImageSearchesElement.md#title)

#### Defined in

main.ts:30536

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`type`](../interfaces/IRelatedImageSearchesElement.md#type)

#### Defined in

main.ts:30534

***

### url?

> `optional` **url**: `string`

relevant URL

#### Implementation of

[`IRelatedImageSearchesElement`](../interfaces/IRelatedImageSearchesElement.md).[`url`](../interfaces/IRelatedImageSearchesElement.md#url)

#### Defined in

main.ts:30540

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:30556

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:30577

***

### fromJS()

> `static` **fromJS**(`data`): [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)

#### Defined in

main.ts:30570
