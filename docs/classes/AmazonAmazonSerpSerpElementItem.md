**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new AmazonAmazonSerpSerpElementItem(data)

> **new AmazonAmazonSerpSerpElementItem**(`data`?): [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Parameters

• **data?**: [`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md)

#### Returns

[`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Source

main.ts:105582

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Source

main.ts:21825

***

### asin?

> **`optional`** **asin**: `string`

ASIN of the product
learn more about ASIN in this help center guide

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`asin`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#asin)

#### Source

main.ts:105542

***

### bought\_past\_month?

> **`optional`** **bought\_past\_month**: `number`

number of product purchases in the past month

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`bought_past_month`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#bought_past_month)

#### Source

main.ts:105573

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`currency`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#currency)

#### Source

main.ts:105556

***

### data\_asin?

> **`optional`** **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`data_asin`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#data_asin)

#### Source

main.ts:105578

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#delivery_info)

#### Source

main.ts:105571

***

### description?

> **`optional`** **description**: `string`

description of the product

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`description`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#description)

#### Source

main.ts:105539

***

### domain?

> **`optional`** **domain**: `string`

Amazon domain

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`domain`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#domain)

#### Source

main.ts:105533

***

### image\_url?

> **`optional`** **image\_url**: `string`

URL of the product image featured in the results

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`image_url`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#image_url)

#### Source

main.ts:105544

***

### is\_amazon\_choice?

> **`optional`** **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`is_amazon_choice`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#is_amazon_choice)

#### Source

main.ts:105565

***

### is\_best\_seller?

> **`optional`** **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`is_best_seller`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#is_best_seller)

#### Source

main.ts:105562

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in Amazon SERP
can take the following values:
left, right

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#position)

#### Source

main.ts:105529

***

### price\_from?

> **`optional`** **price\_from**: `number`

the regular price of a product
example:
49.98

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`price_from`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#price_from)

#### Source

main.ts:105548

***

### price\_to?

> **`optional`** **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`price_to`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#price_to)

#### Source

main.ts:105552

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rank_absolute)

#### Source

main.ts:105525

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rank_group)

#### Source

main.ts:105522

***

### rating?

> **`optional`** **rating**: [`RatingElement`](RatingElement.md)

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rating)

#### Source

main.ts:105568

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`se_type`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#se_type)

#### Source

main.ts:105519

***

### special\_offers?

> **`optional`** **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`special_offers`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#special_offers)

#### Source

main.ts:105559

***

### title?

> **`optional`** **title**: `string`

product title

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#title)

#### Source

main.ts:105535

***

### url?

> **`optional`** **url**: `string`

URL of the product page

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`url`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#url)

#### Source

main.ts:105537

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#xpath)

#### Source

main.ts:105531

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Source

main.ts:105587

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Source

main.ts:105629

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Source

main.ts:105622
