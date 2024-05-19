**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ProductSeller

# Class: ProductSeller

## Implements

- [`IProductSeller`](../interfaces/IProductSeller.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ProductSeller(data)

> **new ProductSeller**(`data`?): [`ProductSeller`](ProductSeller.md)

#### Parameters

• **data?**: [`IProductSeller`](../interfaces/IProductSeller.md)

#### Returns

[`ProductSeller`](ProductSeller.md)

#### Source

main.ts:176808

## Properties

### delivery\_info?

> **`optional`** **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

delivery information
product delivery information

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`delivery_info`](../interfaces/IProductSeller.md#delivery_info)

#### Source

main.ts:176804

***

### price?

> **`optional`** **price**: [`PriceInfo`](PriceInfo.md)

product price
product price details on the seller’s website

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`price`](../interfaces/IProductSeller.md#price)

#### Source

main.ts:176801

***

### seller\_rating?

> **`optional`** **seller\_rating**: [`RatingElement`](RatingElement.md)

rating of the seller

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`seller_rating`](../interfaces/IProductSeller.md#seller_rating)

#### Source

main.ts:176795

***

### seller\_review\_count?

> **`optional`** **seller\_review\_count**: `number`

number of seller reviews
number of reviews on the product seller’s account

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`seller_review_count`](../interfaces/IProductSeller.md#seller_review_count)

#### Source

main.ts:176798

***

### title?

> **`optional`** **title**: `string`

product title

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`title`](../interfaces/IProductSeller.md#title)

#### Source

main.ts:176790

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`type`](../interfaces/IProductSeller.md#type)

#### Source

main.ts:176788

***

### url?

> **`optional`** **url**: `string`

seller url
url of the page where the product is sold

#### Implementation of

[`IProductSeller`](../interfaces/IProductSeller.md).[`url`](../interfaces/IProductSeller.md#url)

#### Source

main.ts:176793

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:176817

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:176840

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ProductSeller`](ProductSeller.md)

#### Parameters

• **data**: `any`

#### Returns

[`ProductSeller`](ProductSeller.md)

#### Source

main.ts:176833
