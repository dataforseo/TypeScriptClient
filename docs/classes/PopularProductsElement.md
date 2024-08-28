[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / PopularProductsElement

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

main.ts:33834

## Properties

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`description`](../interfaces/IPopularProductsElement.md#description)

#### Defined in

main.ts:33821

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the image

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`image_url`](../interfaces/IPopularProductsElement.md#image_url)

#### Defined in

main.ts:33825

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

price indicated in the element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`price`](../interfaces/IPopularProductsElement.md#price)

#### Defined in

main.ts:33827

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`rating`](../interfaces/IPopularProductsElement.md#rating)

#### Defined in

main.ts:33830

***

### seller?

> `optional` **seller**: `string`

seller of the product

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`seller`](../interfaces/IPopularProductsElement.md#seller)

#### Defined in

main.ts:33823

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`title`](../interfaces/IPopularProductsElement.md#title)

#### Defined in

main.ts:33819

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPopularProductsElement`](../interfaces/IPopularProductsElement.md).[`type`](../interfaces/IPopularProductsElement.md#type)

#### Defined in

main.ts:33817

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:33843

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:33866

***

### fromJS()

> `static` **fromJS**(`data`): [`PopularProductsElement`](PopularProductsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`PopularProductsElement`](PopularProductsElement.md)

#### Defined in

main.ts:33859
