[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonAmazonSerpSerpElementItem

# Class: AmazonAmazonSerpSerpElementItem

Defined in: main.ts:113104

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonSerpSerpElementItem()

> **new AmazonAmazonSerpSerpElementItem**(`data`?): [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

Defined in: main.ts:113161

#### Parameters

##### data?

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md)

#### Returns

[`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23218

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### asin?

> `optional` **asin**: `string`

Defined in: main.ts:113119

ASIN of the product
learn more about ASIN in this help center guide

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`asin`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#asin)

***

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

Defined in: main.ts:113150

number of product purchases in the past month

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`bought_past_month`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#bought_past_month)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:113133

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`currency`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#currency)

***

### data\_asin?

> `optional` **data\_asin**: `string`

Defined in: main.ts:113157

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`data_asin`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#data_asin)

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

Defined in: main.ts:113148

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#delivery_info)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:113152

description of the product

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`description`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:113112

Amazon domain

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`domain`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:113121

URL of the product image featured in the results

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`image_url`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#image_url)

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

Defined in: main.ts:113142

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`is_amazon_choice`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#is_amazon_choice)

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

Defined in: main.ts:113139

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`is_best_seller`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#is_best_seller)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:113110

the alignment of the element in Amazon SERP
can take the following values:
left, right

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`position`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#position)

***

### price\_from?

> `optional` **price\_from**: `number`

Defined in: main.ts:113125

the regular price of a product
example:
49.98

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`price_from`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#price_from)

***

### price\_to?

> `optional` **price\_to**: `number`

Defined in: main.ts:113129

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`price_to`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#price_to)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23214

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23211

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:113145

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rating)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:113106

search engine type

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`se_type`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#se_type)

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

Defined in: main.ts:113136

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`special_offers`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#special_offers)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:113114

product title

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23208

type of element

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:113116

URL of the product page

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`url`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:23216

the XPath of the element

#### Implementation of

[`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonSerpSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:113166

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:113205

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

Defined in: main.ts:113198

#### Parameters

##### data

`any`

#### Returns

[`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
