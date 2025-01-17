[**Documentation**](../README.md)

***

[Documentation](../README.md) / PopularProductsElement

# Class: PopularProductsElement

Defined in: main.ts:34643

## Implements

- [`IPopularProductsElement`](../interfaces/IPopularProductsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PopularProductsElement()

> **new PopularProductsElement**(`data`?): [`PopularProductsElement`](PopularProductsElement.md)

Defined in: main.ts:34663

#### Parameters

##### data?

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md)

#### Returns

[`PopularProductsElement`](PopularProductsElement.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:34649

description

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`description`](../interfaces/IPopularProductsElement.md#description)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:34654

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`image_url`](../interfaces/IPopularProductsElement.md#image_url)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:34656

price indicated in the element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`price`](../interfaces/IPopularProductsElement.md#price)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:34659

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`rating`](../interfaces/IPopularProductsElement.md#rating)

***

### seller?

> `optional` **seller**: `string`

Defined in: main.ts:34651

seller of the product

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`seller`](../interfaces/IPopularProductsElement.md#seller)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34647

title of a given link element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`title`](../interfaces/IPopularProductsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34645

type of element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`type`](../interfaces/IPopularProductsElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34672

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:34695

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`PopularProductsElement`](PopularProductsElement.md)

Defined in: main.ts:34688

#### Parameters

##### data

`any`

#### Returns

[`PopularProductsElement`](PopularProductsElement.md)
