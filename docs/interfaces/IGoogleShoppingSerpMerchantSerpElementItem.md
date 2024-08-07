**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IGoogleShoppingSerpMerchantSerpElementItem

# Interface: IGoogleShoppingSerpMerchantSerpElementItem

## Extends

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### additional\_specifications?

> **`optional`** **additional\_specifications**: `Object`

object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:176921

***

### currency?

> **`optional`** **currency**: `string`

currency in the ISO format
example:
USD

#### Source

main.ts:176903

***

### data\_docid?

> **`optional`** **data\_docid**: `string`

unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076

#### Source

main.ts:176915

***

### delivery\_info?

> **`optional`** **delivery\_info**: [`DeliveryInfo`](../classes/DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Source

main.ts:176944

***

### description?

> **`optional`** **description**: `string`

description of the product in Google Shopping SERP

#### Source

main.ts:176884

***

### domain?

> **`optional`** **domain**: `string`

domain in SERP

#### Source

main.ts:176880

***

### is\_best\_match?

> **`optional`** **is\_best\_match**: `boolean`

“best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null

#### Source

main.ts:176929

***

### old\_price?

> **`optional`** **old\_price**: `number`

product old price
displayed if the product price has been changed
example:
499

#### Source

main.ts:176899

***

### position?

> **`optional`** **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Source

main.ts:176876

***

### price?

> **`optional`** **price**: `number`

product price
example:
384.99

#### Source

main.ts:176894

***

### product\_id?

> **`optional`** **product\_id**: `string`

unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Source

main.ts:176910

***

### product\_images?

> **`optional`** **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Source

main.ts:176938

***

### product\_rating?

> **`optional`** **product\_rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Source

main.ts:176932

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Source

main.ts:176872

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:176869

***

### reviews\_count?

> **`optional`** **reviews\_count**: `number`

number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null

#### Source

main.ts:176925

***

### seller?

> **`optional`** **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Source

main.ts:176918

***

### shop\_ad\_aclk?

> **`optional`** **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Source

main.ts:176941

***

### shop\_rating?

> **`optional`** **shop\_rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the popularity rate of the seller based on user reviews

#### Source

main.ts:176935

***

### shopping\_url?

> **`optional`** **shopping\_url**: `string`

URL to the product page on Google Shopping

#### Source

main.ts:176888

***

### stores\_count\_info?

> **`optional`** **stores\_count\_info**: [`StoresCountInfo`](../classes/StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Source

main.ts:176947

***

### tags?

> **`optional`** **tags**: `string`[]

tags assigned to the product

#### Source

main.ts:176890

***

### title?

> **`optional`** **title**: `string`

title of the element

#### Source

main.ts:176882

***

### url?

> **`optional`** **url**: `string`

URL to the product page on the seller’s website

#### Source

main.ts:176886

***

### xpath?

> **`optional`** **xpath**: `string`

XPath of the element

#### Source

main.ts:176878
