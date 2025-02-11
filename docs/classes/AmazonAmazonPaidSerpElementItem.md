[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonAmazonPaidSerpElementItem

# Class: AmazonAmazonPaidSerpElementItem

Defined in: main.ts:192838

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonPaidSerpElementItem()

> **new AmazonAmazonPaidSerpElementItem**(`data`?): [`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

Defined in: main.ts:192883

#### Parameters

##### data?

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md)

#### Returns

[`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23218

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

***

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

Defined in: main.ts:192848

number of product purchases in the past month

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`bought_past_month`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#bought_past_month)

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:192860

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`currency`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#currency)

***

### data\_asin?

> `optional` **data\_asin**: `string`

Defined in: main.ts:192868

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`data_asin`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#data_asin)

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

Defined in: main.ts:192879

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#delivery_info)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:192840

Amazon domain

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`domain`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:192846

URL of the product image featured in the results

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`image_url`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#image_url)

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

Defined in: main.ts:192873

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`is_amazon_choice`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#is_amazon_choice)

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

Defined in: main.ts:192876

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`is_best_seller`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#is_best_seller)

***

### price\_from?

> `optional` **price\_from**: `number`

Defined in: main.ts:192852

the regular price of a product
example:
49.98

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`price_from`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#price_from)

***

### price\_to?

> `optional` **price\_to**: `number`

Defined in: main.ts:192856

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`price_to`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#price_to)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23214

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23211

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

Defined in: main.ts:192870

product rating info

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#rating)

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

Defined in: main.ts:192863

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`special_offers`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#special_offers)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:192842

product title

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23208

type of element

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:192844

the URL of the product page

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`url`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:23216

the XPath of the element

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:192888

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

Defined in: main.ts:192923

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

Defined in: main.ts:192916

#### Parameters

##### data

`any`

#### Returns

[`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)
