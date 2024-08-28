[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ProductSeller

# Class: ProductSeller

## Implements

- [`IProductSeller`](../interfaces/IProductSeller.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductSeller()

> **new ProductSeller**(`data`?): [`ProductSeller`](ProductSeller.md)

#### Parameters

• **data?**: [`IProductSeller`](../interfaces/IProductSeller.md)

#### Returns

[`ProductSeller`](ProductSeller.md)

#### Defined in

main.ts:182866

## Properties

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

delivery information
product delivery information

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`delivery_info`](../interfaces/IProductSeller.md#delivery_info)

#### Defined in

main.ts:182862

***

### price?

> `optional` **price**: [`Price`](Price.md)

product price
product price details on the seller’s website

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`price`](../interfaces/IProductSeller.md#price)

#### Defined in

main.ts:182859

***

### seller\_rating?

> `optional` **seller\_rating**: [`RatingElement`](RatingElement.md)

rating of the seller

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`seller_rating`](../interfaces/IProductSeller.md#seller_rating)

#### Defined in

main.ts:182853

***

### seller\_review\_count?

> `optional` **seller\_review\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`seller_review_count`](../interfaces/IProductSeller.md#seller_review_count)

#### Defined in

main.ts:182856

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`title`](../interfaces/IProductSeller.md#title)

#### Defined in

main.ts:182848

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`type`](../interfaces/IProductSeller.md#type)

#### Defined in

main.ts:182846

***

### url?

> `optional` **url**: `string`

seller url
url of the page where the product is sold

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`url`](../interfaces/IProductSeller.md#url)

#### Defined in

main.ts:182851

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:182875

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:182898

***

### fromJS()

> `static` **fromJS**(`data`): [`ProductSeller`](ProductSeller.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductSeller`](ProductSeller.md)

#### Defined in

main.ts:182891
