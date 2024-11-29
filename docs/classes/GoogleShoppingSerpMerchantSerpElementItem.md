[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleShoppingSerpMerchantSerpElementItem

# Class: GoogleShoppingSerpMerchantSerpElementItem

## Extends

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)

## Implements

- [`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GoogleShoppingSerpMerchantSerpElementItem()

> **new GoogleShoppingSerpMerchantSerpElementItem**(`data`?): [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Parameters

##### data?

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md)

#### Returns

[`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Defined in

main.ts:186269

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21722

***

### additional\_specifications?

> `optional` **additional\_specifications**: `object`

object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`additional_specifications`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#additional_specifications)

#### Defined in

main.ts:186239

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`currency`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#currency)

#### Defined in

main.ts:186221

***

### data\_docid?

> `optional` **data\_docid**: `string`

unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`data_docid`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#data_docid)

#### Defined in

main.ts:186233

***

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`delivery_info`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#delivery_info)

#### Defined in

main.ts:186262

***

### description?

> `optional` **description**: `string`

description of the product in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`description`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#description)

#### Defined in

main.ts:186202

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`domain`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#domain)

#### Defined in

main.ts:186198

***

### is\_best\_match?

> `optional` **is\_best\_match**: `boolean`

“best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`is_best_match`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#is_best_match)

#### Defined in

main.ts:186247

***

### old\_price?

> `optional` **old\_price**: `number`

product old price
displayed if the product price has been changed
example:
499

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`old_price`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#old_price)

#### Defined in

main.ts:186217

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`position`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#position)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`position`](BaseMerchantSerpElementItem.md#position)

#### Defined in

main.ts:21720

***

### price?

> `optional` **price**: `number`

product price
example:
384.99

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`price`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#price)

#### Defined in

main.ts:186212

***

### product\_id?

> `optional` **product\_id**: `string`

unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`product_id`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_id)

#### Defined in

main.ts:186228

***

### product\_images?

> `optional` **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`product_images`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_images)

#### Defined in

main.ts:186256

***

### product\_rating?

> `optional` **product\_rating**: [`RatingElement`](RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`product_rating`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_rating)

#### Defined in

main.ts:186250

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_absolute`](BaseMerchantSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21716

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`rank_group`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#rank_group)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`rank_group`](BaseMerchantSerpElementItem.md#rank_group)

#### Defined in

main.ts:21713

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#reviews_count)

#### Defined in

main.ts:186243

***

### seller?

> `optional` **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`seller`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#seller)

#### Defined in

main.ts:186236

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shop_ad_aclk)

#### Defined in

main.ts:186259

***

### shop\_rating?

> `optional` **shop\_rating**: [`RatingElement`](RatingElement.md)

shop rating
the popularity rate of the seller based on user reviews

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`shop_rating`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shop_rating)

#### Defined in

main.ts:186253

***

### shopping\_url?

> `optional` **shopping\_url**: `string`

URL to the product page on Google Shopping

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`shopping_url`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shopping_url)

#### Defined in

main.ts:186206

***

### stores\_count\_info?

> `optional` **stores\_count\_info**: [`StoresCountInfo`](StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`stores_count_info`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#stores_count_info)

#### Defined in

main.ts:186265

***

### tags?

> `optional` **tags**: `string`[]

tags assigned to the product

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`tags`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#tags)

#### Defined in

main.ts:186208

***

### title?

> `optional` **title**: `string`

title of the element

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`title`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#title)

#### Defined in

main.ts:186200

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`type`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#type)

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`type`](BaseMerchantSerpElementItem.md#type)

#### Defined in

main.ts:21710

***

### url?

> `optional` **url**: `string`

URL to the product page on the seller’s website

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`url`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#url)

#### Defined in

main.ts:186204

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`xpath`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#xpath)

#### Defined in

main.ts:186196

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Defined in

main.ts:186274

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

main.ts:186327

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

main.ts:186320
