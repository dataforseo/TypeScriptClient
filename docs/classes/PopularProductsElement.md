**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / PopularProductsElement

# Class: PopularProductsElement

## Implements

- [`IPopularProductsElement`](../interfaces/IPopularProductsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PopularProductsElement(data)

> **new PopularProductsElement**(`data`?): [`PopularProductsElement`](PopularProductsElement.md)

#### Parameters

• **data?**: [`IPopularProductsElement`](../interfaces/IPopularProductsElement.md)

#### Returns

[`PopularProductsElement`](PopularProductsElement.md)

#### Source

main.ts:33111

## Properties

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`description`](../interfaces/IPopularProductsElement.md#description)

#### Source

main.ts:33098

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the image

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`image_url`](../interfaces/IPopularProductsElement.md#image_url)

#### Source

main.ts:33102

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`price`](../interfaces/IPopularProductsElement.md#price)

#### Source

main.ts:33104

***

### rating?

> **`optional`** **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`rating`](../interfaces/IPopularProductsElement.md#rating)

#### Source

main.ts:33107

***

### seller?

> **`optional`** **seller**: `string`

seller of the product

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`seller`](../interfaces/IPopularProductsElement.md#seller)

#### Source

main.ts:33100

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`title`](../interfaces/IPopularProductsElement.md#title)

#### Source

main.ts:33096

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`type`](../interfaces/IPopularProductsElement.md#type)

#### Source

main.ts:33094

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:33120

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:33143

***

### fromJS()

> **`static`** **fromJS**(`data`): [`PopularProductsElement`](PopularProductsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`PopularProductsElement`](PopularProductsElement.md)

#### Source

main.ts:33136
