[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AmazonSerpElement

# Class: AmazonSerpElement

## Implements

- [`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonSerpElement()

> **new AmazonSerpElement**(`data`?): [`AmazonSerpElement`](AmazonSerpElement.md)

#### Parameters

• **data?**: [`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md)

#### Returns

[`AmazonSerpElement`](AmazonSerpElement.md)

#### Defined in

main.ts:184752

## Properties

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`bought_past_month`](../interfaces/IAmazonSerpElement.md#bought_past_month)

#### Defined in

main.ts:184717

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`currency`](../interfaces/IAmazonSerpElement.md#currency)

#### Defined in

main.ts:184729

***

### data\_asin?

> `optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`data_asin`](../interfaces/IAmazonSerpElement.md#data_asin)

#### Defined in

main.ts:184737

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`delivery_info`](../interfaces/IAmazonSerpElement.md#delivery_info)

#### Defined in

main.ts:184748

***

### domain?

> `optional` **domain**: `string`

Amazon domain

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`domain`](../interfaces/IAmazonSerpElement.md#domain)

#### Defined in

main.ts:184709

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the product image featured in the results

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`image_url`](../interfaces/IAmazonSerpElement.md#image_url)

#### Defined in

main.ts:184715

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`is_amazon_choice`](../interfaces/IAmazonSerpElement.md#is_amazon_choice)

#### Defined in

main.ts:184742

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`is_best_seller`](../interfaces/IAmazonSerpElement.md#is_best_seller)

#### Defined in

main.ts:184745

***

### price\_from?

> `optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`price_from`](../interfaces/IAmazonSerpElement.md#price_from)

#### Defined in

main.ts:184721

***

### price\_to?

> `optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`price_to`](../interfaces/IAmazonSerpElement.md#price_to)

#### Defined in

main.ts:184725

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

product rating info

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`rating`](../interfaces/IAmazonSerpElement.md#rating)

#### Defined in

main.ts:184739

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`special_offers`](../interfaces/IAmazonSerpElement.md#special_offers)

#### Defined in

main.ts:184732

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`title`](../interfaces/IAmazonSerpElement.md#title)

#### Defined in

main.ts:184711

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`type`](../interfaces/IAmazonSerpElement.md#type)

#### Defined in

main.ts:184705

***

### url?

> `optional` **url**: `string`

the URL of the product page

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`url`](../interfaces/IAmazonSerpElement.md#url)

#### Defined in

main.ts:184713

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md).[`xpath`](../interfaces/IAmazonSerpElement.md#xpath)

#### Defined in

main.ts:184707

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:184761

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:184797

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonSerpElement`](AmazonSerpElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonSerpElement`](AmazonSerpElement.md)

#### Defined in

main.ts:184790
