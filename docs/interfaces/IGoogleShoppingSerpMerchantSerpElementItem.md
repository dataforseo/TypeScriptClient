[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IGoogleShoppingSerpMerchantSerpElementItem

# Interface: IGoogleShoppingSerpMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### additional\_specifications?

> `optional` **additional\_specifications**: `object`

object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:178753

***

### currency?

> `optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

main.ts:178735

***

### data\_docid?

> `optional` **data\_docid**: `string`

unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076

#### Defined in

main.ts:178747

***

### delivery\_info?

> `optional` **delivery\_info**: [`DeliveryInfo`](../classes/DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

main.ts:178776

***

### description?

> `optional` **description**: `string`

description of the product in Google Shopping SERP

#### Defined in

main.ts:178716

***

### domain?

> `optional` **domain**: `string`

domain in SERP

#### Defined in

main.ts:178712

***

### is\_best\_match?

> `optional` **is\_best\_match**: `boolean`

“best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null

#### Defined in

main.ts:178761

***

### old\_price?

> `optional` **old\_price**: `number`

product old price
displayed if the product price has been changed
example:
499

#### Defined in

main.ts:178731

***

### position?

> `optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Defined in

main.ts:178708

***

### price?

> `optional` **price**: `number`

product price
example:
384.99

#### Defined in

main.ts:178726

***

### product\_id?

> `optional` **product\_id**: `string`

unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Defined in

main.ts:178742

***

### product\_images?

> `optional` **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Defined in

main.ts:178770

***

### product\_rating?

> `optional` **product\_rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Defined in

main.ts:178764

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

main.ts:178704

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:178701

***

### reviews\_count?

> `optional` **reviews\_count**: `number`

number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null

#### Defined in

main.ts:178757

***

### seller?

> `optional` **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

main.ts:178750

***

### shop\_ad\_aclk?

> `optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

main.ts:178773

***

### shop\_rating?

> `optional` **shop\_rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the popularity rate of the seller based on user reviews

#### Defined in

main.ts:178767

***

### shopping\_url?

> `optional` **shopping\_url**: `string`

URL to the product page on Google Shopping

#### Defined in

main.ts:178720

***

### stores\_count\_info?

> `optional` **stores\_count\_info**: [`StoresCountInfo`](../classes/StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Defined in

main.ts:178779

***

### tags?

> `optional` **tags**: `string`[]

tags assigned to the product

#### Defined in

main.ts:178722

***

### title?

> `optional` **title**: `string`

title of the element

#### Defined in

main.ts:178714

***

### url?

> `optional` **url**: `string`

URL to the product page on the seller’s website

#### Defined in

main.ts:178718

***

### xpath?

> `optional` **xpath**: `string`

XPath of the element

#### Defined in

main.ts:178710
