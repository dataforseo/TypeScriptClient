[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / PopularProductsElement

# Class: PopularProductsElement

## Implements

- [`IPopularProductsElement`](../interfaces/IPopularProductsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PopularProductsElement()

> **new PopularProductsElement**(`data`?): [`PopularProductsElement`](PopularProductsElement.md)

#### Parameters

• **data?**: [`IPopularProductsElement`](../interfaces/IPopularProductsElement.md)

#### Returns

[`PopularProductsElement`](PopularProductsElement.md)

#### Defined in

main.ts:32868

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`description`](../interfaces/IPopularProductsElement.md#description)

#### Defined in

main.ts:32855

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`image_url`](../interfaces/IPopularProductsElement.md#image_url)

#### Defined in

main.ts:32859

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`price`](../interfaces/IPopularProductsElement.md#price)

#### Defined in

main.ts:32861

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`rating`](../interfaces/IPopularProductsElement.md#rating)

#### Defined in

main.ts:32864

***

### seller?

> `optional` **seller**: `string`

seller of the product

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`seller`](../interfaces/IPopularProductsElement.md#seller)

#### Defined in

main.ts:32857

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`title`](../interfaces/IPopularProductsElement.md#title)

#### Defined in

main.ts:32853

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`type`](../interfaces/IPopularProductsElement.md#type)

#### Defined in

main.ts:32851

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:32877

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:32900

***

### fromJS()

> `static` **fromJS**(`data`): [`PopularProductsElement`](PopularProductsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`PopularProductsElement`](PopularProductsElement.md)

#### Defined in

main.ts:32893
