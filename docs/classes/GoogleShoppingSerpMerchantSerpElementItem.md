**Documentation** • [Readme](../README.md) \| [API](../globals.md)

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

### new GoogleShoppingSerpMerchantSerpElementItem(data)

> **new GoogleShoppingSerpMerchantSerpElementItem**(`data`?): [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Parameters

• **data?**: [`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md)

#### Returns

[`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`constructor`](BaseMerchantSerpElementItem.md#constructors)

#### Source

main.ts:170173

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`_discriminator`](BaseMerchantSerpElementItem.md#_discriminator)

#### Source

main.ts:20444

***

### additional\_specifications?

> **`optional`** **additional\_specifications**: `Object`

object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`additional_specifications`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#additional_specifications)

#### Source

main.ts:170143

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`currency`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#currency)

#### Source

main.ts:170125

***

### data\_docid?

> **`optional`** **data\_docid**: `string`

unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`data_docid`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#data_docid)

#### Source

main.ts:170137

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`delivery_info`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#delivery_info)

#### Source

main.ts:170166

***

### description?

> **`optional`** **description**: `string`

description of the product in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`description`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#description)

#### Source

main.ts:170106

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`domain`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#domain)

#### Source

main.ts:170102

***

### is\_best\_match?

> **`optional`** **is\_best\_match**: `boolean`

“best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`is_best_match`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#is_best_match)

#### Source

main.ts:170151

***

### old\_price?

> **`optional`** **old\_price**: `number`

product old price
displayed if the product price has been changed
example:
499

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`old_price`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#old_price)

#### Source

main.ts:170121

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`position`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#position)

#### Source

main.ts:170098

***

### price?

> **`optional`** **price**: `number`

product price
example:
384.99

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`price`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#price)

#### Source

main.ts:170116

***

### product\_id?

> **`optional`** **product\_id**: `string`

unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`product_id`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_id)

#### Source

main.ts:170132

***

### product\_images?

> **`optional`** **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`product_images`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_images)

#### Source

main.ts:170160

***

### product\_rating?

> **`optional`** **product\_rating**: [`RatingElement`](RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`product_rating`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_rating)

#### Source

main.ts:170154

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#rank_absolute)

#### Source

main.ts:170094

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`rank_group`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#rank_group)

#### Source

main.ts:170091

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`reviews_count`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#reviews_count)

#### Source

main.ts:170147

***

### seller?

> **`optional`** **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`seller`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#seller)

#### Source

main.ts:170140

***

### shop\_ad\_aclk?

> **`optional`** **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`shop_ad_aclk`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shop_ad_aclk)

#### Source

main.ts:170163

***

### shop\_rating?

> **`optional`** **shop\_rating**: [`RatingElement`](RatingElement.md)

shop rating
the popularity rate of the seller based on user reviews

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`shop_rating`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shop_rating)

#### Source

main.ts:170157

***

### shopping\_url?

> **`optional`** **shopping\_url**: `string`

URL to the product page on Google Shopping

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`shopping_url`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shopping_url)

#### Source

main.ts:170110

***

### stores\_count\_info?

> **`optional`** **stores\_count\_info**: [`StoresCountInfo`](StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`stores_count_info`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#stores_count_info)

#### Source

main.ts:170169

***

### tags?

> **`optional`** **tags**: `string`[]

tags assigned to the product

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`tags`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#tags)

#### Source

main.ts:170112

***

### title?

> **`optional`** **title**: `string`

title of the element

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`title`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#title)

#### Source

main.ts:170104

***

### url?

> **`optional`** **url**: `string`

URL to the product page on the seller’s website

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`url`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#url)

#### Source

main.ts:170108

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Implementation of

[`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[`xpath`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#xpath)

#### Source

main.ts:170100

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`init`](BaseMerchantSerpElementItem.md#init)

#### Source

main.ts:170178

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`toJSON`](BaseMerchantSerpElementItem.md#tojson)

#### Source

main.ts:170234

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Overrides

[`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md).[`fromJS`](BaseMerchantSerpElementItem.md#fromjs)

#### Source

main.ts:170227
