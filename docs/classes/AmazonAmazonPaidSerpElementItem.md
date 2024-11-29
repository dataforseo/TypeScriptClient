[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonAmazonPaidSerpElementItem

# Class: AmazonAmazonPaidSerpElementItem

## Extends

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

## Implements

- [`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonAmazonPaidSerpElementItem()

> **new AmazonAmazonPaidSerpElementItem**(`data`?): [`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Parameters

##### data?

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md)

#### Returns

[`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`constructor`](BaseAmazonSerpElementItem.md#constructors)

#### Defined in

main.ts:192409

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`_discriminator`](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

main.ts:23218

***

### bought\_past\_month?

> `optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`bought_past_month`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#bought_past_month)

#### Defined in

main.ts:192374

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`currency`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#currency)

#### Defined in

main.ts:192386

***

### data\_asin?

> `optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`data_asin`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#data_asin)

#### Defined in

main.ts:192394

***

### delivery\_info?

> `optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`delivery_info`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#delivery_info)

#### Defined in

main.ts:192405

***

### domain?

> `optional` **domain**: `string`

Amazon domain

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`domain`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#domain)

#### Defined in

main.ts:192366

***

### image\_url?

> `optional` **image\_url**: `string`

URL of the product image featured in the results

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`image_url`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#image_url)

#### Defined in

main.ts:192372

***

### is\_amazon\_choice?

> `optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`is_amazon_choice`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#is_amazon_choice)

#### Defined in

main.ts:192399

***

### is\_best\_seller?

> `optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`is_best_seller`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#is_best_seller)

#### Defined in

main.ts:192402

***

### price\_from?

> `optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`price_from`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#price_from)

#### Defined in

main.ts:192378

***

### price\_to?

> `optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`price_to`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#price_to)

#### Defined in

main.ts:192382

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`rank_absolute`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_absolute`](BaseAmazonSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:23214

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`rank_group`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#rank_group)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`rank_group`](BaseAmazonSerpElementItem.md#rank_group)

#### Defined in

main.ts:23211

***

### rating?

> `optional` **rating**: [`RatingElement`](RatingElement.md)

product rating info

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`rating`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#rating)

#### Defined in

main.ts:192396

***

### special\_offers?

> `optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`special_offers`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#special_offers)

#### Defined in

main.ts:192389

***

### title?

> `optional` **title**: `string`

product title

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`title`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#title)

#### Defined in

main.ts:192368

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`type`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#type)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`type`](BaseAmazonSerpElementItem.md#type)

#### Defined in

main.ts:23208

***

### url?

> `optional` **url**: `string`

the URL of the product page

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`url`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#url)

#### Defined in

main.ts:192370

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[`xpath`](../interfaces/IAmazonAmazonPaidSerpElementItem.md#xpath)

#### Inherited from

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`xpath`](BaseAmazonSerpElementItem.md#xpath)

#### Defined in

main.ts:23216

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`init`](BaseAmazonSerpElementItem.md#init)

#### Defined in

main.ts:192414

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`toJSON`](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

main.ts:192449

***

### fromJS()

> `static` **fromJS**(`data`): [`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Overrides

[`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md).[`fromJS`](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

main.ts:192442
