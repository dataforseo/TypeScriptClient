[dataforseo-client](../README.md) / [Exports](../modules.md) / IGoogleShoppingSerpMerchantSerpElementItem

# Interface: IGoogleShoppingSerpMerchantSerpElementItem

## Hierarchy

- [`IBaseMerchantSerpElementItem`](IBaseMerchantSerpElementItem.md)

  ↳ **`IGoogleShoppingSerpMerchantSerpElementItem`**

## Implemented by

- [`GoogleShoppingSerpMerchantSerpElementItem`](../classes/GoogleShoppingSerpMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [additional\_specifications](IGoogleShoppingSerpMerchantSerpElementItem.md#additional_specifications)
- [currency](IGoogleShoppingSerpMerchantSerpElementItem.md#currency)
- [data\_docid](IGoogleShoppingSerpMerchantSerpElementItem.md#data_docid)
- [delivery\_info](IGoogleShoppingSerpMerchantSerpElementItem.md#delivery_info)
- [description](IGoogleShoppingSerpMerchantSerpElementItem.md#description)
- [domain](IGoogleShoppingSerpMerchantSerpElementItem.md#domain)
- [is\_best\_match](IGoogleShoppingSerpMerchantSerpElementItem.md#is_best_match)
- [old\_price](IGoogleShoppingSerpMerchantSerpElementItem.md#old_price)
- [position](IGoogleShoppingSerpMerchantSerpElementItem.md#position)
- [price](IGoogleShoppingSerpMerchantSerpElementItem.md#price)
- [product\_id](IGoogleShoppingSerpMerchantSerpElementItem.md#product_id)
- [product\_images](IGoogleShoppingSerpMerchantSerpElementItem.md#product_images)
- [product\_rating](IGoogleShoppingSerpMerchantSerpElementItem.md#product_rating)
- [rank\_absolute](IGoogleShoppingSerpMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](IGoogleShoppingSerpMerchantSerpElementItem.md#rank_group)
- [reviews\_count](IGoogleShoppingSerpMerchantSerpElementItem.md#reviews_count)
- [seller](IGoogleShoppingSerpMerchantSerpElementItem.md#seller)
- [shop\_ad\_aclk](IGoogleShoppingSerpMerchantSerpElementItem.md#shop_ad_aclk)
- [shop\_rating](IGoogleShoppingSerpMerchantSerpElementItem.md#shop_rating)
- [shopping\_url](IGoogleShoppingSerpMerchantSerpElementItem.md#shopping_url)
- [stores\_count\_info](IGoogleShoppingSerpMerchantSerpElementItem.md#stores_count_info)
- [tags](IGoogleShoppingSerpMerchantSerpElementItem.md#tags)
- [title](IGoogleShoppingSerpMerchantSerpElementItem.md#title)
- [url](IGoogleShoppingSerpMerchantSerpElementItem.md#url)
- [xpath](IGoogleShoppingSerpMerchantSerpElementItem.md#xpath)

## Properties

### additional\_specifications

• `Optional` **additional\_specifications**: `Object`

object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:164904](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164904)

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Defined in

[main.ts:164886](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164886)

___

### data\_docid

• `Optional` **data\_docid**: `string`

unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076

#### Defined in

[main.ts:164898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164898)

___

### delivery\_info

• `Optional` **delivery\_info**: [`DeliveryInfo`](../classes/DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Defined in

[main.ts:164927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164927)

___

### description

• `Optional` **description**: `string`

description of the product in Google Shopping SERP

#### Defined in

[main.ts:164867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164867)

___

### domain

• `Optional` **domain**: `string`

domain in SERP

#### Defined in

[main.ts:164863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164863)

___

### is\_best\_match

• `Optional` **is\_best\_match**: `boolean`

“best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null

#### Defined in

[main.ts:164912](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164912)

___

### old\_price

• `Optional` **old\_price**: `number`

product old price
displayed if the product price has been changed
example:
499

#### Defined in

[main.ts:164882](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164882)

___

### position

• `Optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Defined in

[main.ts:164859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164859)

___

### price

• `Optional` **price**: `number`

product price
example:
384.99

#### Defined in

[main.ts:164877](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164877)

___

### product\_id

• `Optional` **product\_id**: `string`

unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Defined in

[main.ts:164893](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164893)

___

### product\_images

• `Optional` **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Defined in

[main.ts:164921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164921)

___

### product\_rating

• `Optional` **product\_rating**: [`RatingElement`](../classes/RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Defined in

[main.ts:164915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164915)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Defined in

[main.ts:164855](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164855)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

[main.ts:164852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164852)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null

#### Defined in

[main.ts:164908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164908)

___

### seller

• `Optional` **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Defined in

[main.ts:164901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164901)

___

### shop\_ad\_aclk

• `Optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Defined in

[main.ts:164924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164924)

___

### shop\_rating

• `Optional` **shop\_rating**: [`RatingElement`](../classes/RatingElement.md)

shop rating
the popularity rate of the seller based on user reviews

#### Defined in

[main.ts:164918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164918)

___

### shopping\_url

• `Optional` **shopping\_url**: `string`

URL to the product page on Google Shopping

#### Defined in

[main.ts:164871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164871)

___

### stores\_count\_info

• `Optional` **stores\_count\_info**: [`StoresCountInfo`](../classes/StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Defined in

[main.ts:164930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164930)

___

### tags

• `Optional` **tags**: `string`[]

tags assigned to the product

#### Defined in

[main.ts:164873](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164873)

___

### title

• `Optional` **title**: `string`

title of the element

#### Defined in

[main.ts:164865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164865)

___

### url

• `Optional` **url**: `string`

URL to the product page on the seller’s website

#### Defined in

[main.ts:164869](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164869)

___

### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Defined in

[main.ts:164861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164861)
