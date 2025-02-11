[**Documentation**](../README.md)

***

[Documentation](../README.md) / ProductSeller

# Class: ProductSeller

Defined in: main.ts:190840

## Implements

- [`IProductSeller`](../interfaces/IProductSeller.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ProductSeller()

> **new ProductSeller**(`data`?): [`ProductSeller`](ProductSeller.md)

Defined in: main.ts:190862

#### Parameters

##### data?

[`IProductSeller`](../interfaces/IProductSeller.md)

#### Returns

[`ProductSeller`](ProductSeller.md)

## Properties

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

Defined in: main.ts:190858

delivery information
product delivery information

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`delivery_info`](../interfaces/IProductSeller.md#delivery_info)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:190855

product price
product price details on the seller’s website

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`price`](../interfaces/IProductSeller.md#price)

***

### seller\_rating?

> `optional` **seller\_rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:190849

rating of the seller

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`seller_rating`](../interfaces/IProductSeller.md#seller_rating)

***

### seller\_review\_count?

> `optional` **seller\_review\_count**: `number`

Defined in: main.ts:190852

number of seller reviews
number of reviews on the product seller’s account

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`seller_review_count`](../interfaces/IProductSeller.md#seller_review_count)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:190844

product title

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`title`](../interfaces/IProductSeller.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:190842

type of element

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`type`](../interfaces/IProductSeller.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:190847

seller url
url of the page where the product is sold

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`url`](../interfaces/IProductSeller.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:190871

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:190894

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductSeller`](ProductSeller.md)

Defined in: main.ts:190887

#### Parameters

##### data

`any`

#### Returns

[`ProductSeller`](ProductSeller.md)
