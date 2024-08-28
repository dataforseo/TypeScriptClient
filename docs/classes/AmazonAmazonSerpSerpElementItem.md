[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AmazonAmazonSerpSerpElementItem

# Class: AmazonAmazonSerpSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonSerpSerpElementItem()

> **new AmazonAmazonSerpSerpElementItem**(`data`?): [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md)

#### Returns

[`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:106212

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:22007

***

### asin?

> `optional` **asin**: `string`

ASIN of the product
learn more about ASIN in this help center guide

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`asin`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#asin)

#### Defined in

main.ts:106170

***

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`bought_past_month`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#bought_past_month)

#### Defined in

main.ts:106201

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`currency`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#currency)

#### Defined in

main.ts:106184

***

### data\_asin?

> `optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`data_asin`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#data_asin)

#### Defined in

main.ts:106208

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#delivery_info)

#### Defined in

main.ts:106199

***

### description?

> `optional` **description**: `string`

description of the product

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`description`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#description)

#### Defined in

main.ts:106203

***

### domain?

> `optional` **domain**: `string`

Amazon domain

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`domain`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#domain)

#### Defined in

main.ts:106163

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the product image featured in the results

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`image_url`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#image_url)

#### Defined in

main.ts:106172

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`is_amazon_choice`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#is_amazon_choice)

#### Defined in

main.ts:106193

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`is_best_seller`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#is_best_seller)

#### Defined in

main.ts:106190

***

### position?

> `optional` **position**: `string`

the alignment of the element in Amazon SERP
can take the following values:
left, right

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#position)

#### Defined in

main.ts:106159

***

### price\_from?

> `optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`price_from`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#price_from)

#### Defined in

main.ts:106176

***

### price\_to?

> `optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`price_to`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#price_to)

#### Defined in

main.ts:106180

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:106155

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rank_group)

#### Defined in

main.ts:106152

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rating)

#### Defined in

main.ts:106196

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`se_type`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#se_type)

#### Defined in

main.ts:106149

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`special_offers`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#special_offers)

#### Defined in

main.ts:106187

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#title)

#### Defined in

main.ts:106165

***

### url?

> `optional` **url**: `string`

URL of the product page

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`url`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#url)

#### Defined in

main.ts:106167

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#xpath)

#### Defined in

main.ts:106161

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:106217

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:106259

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:106252
