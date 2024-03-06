[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / GoogleShoppingSerpMerchantSerpElementItem

# Class: GoogleShoppingSerpMerchantSerpElementItem

## Hierarchy

- [`BaseMerchantSerpElementItem`](BaseMerchantSerpElementItem.md)
  
  ↳ **`GoogleShoppingSerpMerchantSerpElementItem`**

## Implements

- [`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](GoogleShoppingSerpMerchantSerpElementItem.md#constructor)

### Properties

- [\_discriminator](GoogleShoppingSerpMerchantSerpElementItem.md#_discriminator)
- [additional\_specifications](GoogleShoppingSerpMerchantSerpElementItem.md#additional_specifications)
- [currency](GoogleShoppingSerpMerchantSerpElementItem.md#currency)
- [data\_docid](GoogleShoppingSerpMerchantSerpElementItem.md#data_docid)
- [delivery\_info](GoogleShoppingSerpMerchantSerpElementItem.md#delivery_info)
- [description](GoogleShoppingSerpMerchantSerpElementItem.md#description)
- [domain](GoogleShoppingSerpMerchantSerpElementItem.md#domain)
- [is\_best\_match](GoogleShoppingSerpMerchantSerpElementItem.md#is_best_match)
- [old\_price](GoogleShoppingSerpMerchantSerpElementItem.md#old_price)
- [position](GoogleShoppingSerpMerchantSerpElementItem.md#position)
- [price](GoogleShoppingSerpMerchantSerpElementItem.md#price)
- [product\_id](GoogleShoppingSerpMerchantSerpElementItem.md#product_id)
- [product\_images](GoogleShoppingSerpMerchantSerpElementItem.md#product_images)
- [product\_rating](GoogleShoppingSerpMerchantSerpElementItem.md#product_rating)
- [rank\_absolute](GoogleShoppingSerpMerchantSerpElementItem.md#rank_absolute)
- [rank\_group](GoogleShoppingSerpMerchantSerpElementItem.md#rank_group)
- [reviews\_count](GoogleShoppingSerpMerchantSerpElementItem.md#reviews_count)
- [seller](GoogleShoppingSerpMerchantSerpElementItem.md#seller)
- [shop\_ad\_aclk](GoogleShoppingSerpMerchantSerpElementItem.md#shop_ad_aclk)
- [shop\_rating](GoogleShoppingSerpMerchantSerpElementItem.md#shop_rating)
- [shopping\_url](GoogleShoppingSerpMerchantSerpElementItem.md#shopping_url)
- [stores\_count\_info](GoogleShoppingSerpMerchantSerpElementItem.md#stores_count_info)
- [tags](GoogleShoppingSerpMerchantSerpElementItem.md#tags)
- [title](GoogleShoppingSerpMerchantSerpElementItem.md#title)
- [url](GoogleShoppingSerpMerchantSerpElementItem.md#url)
- [xpath](GoogleShoppingSerpMerchantSerpElementItem.md#xpath)

### Methods

- [init](GoogleShoppingSerpMerchantSerpElementItem.md#init)
- [toJSON](GoogleShoppingSerpMerchantSerpElementItem.md#tojson)
- [fromJS](GoogleShoppingSerpMerchantSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new GoogleShoppingSerpMerchantSerpElementItem**(`data?`): [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGoogleShoppingSerpMerchantSerpElementItem`](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md) |

#### Returns

[`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[constructor](BaseMerchantSerpElementItem.md#constructor)

#### Defined in

[main.ts:164738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164738)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[_discriminator](BaseMerchantSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:19988](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L19988)

___


### additional\_specifications

• `Optional` **additional\_specifications**: `Object`

object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint

#### Index signature

▪ [key: `string`]: `string`

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[additional_specifications](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#additional_specifications)

#### Defined in

[main.ts:164708](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164708)

___


### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[currency](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#currency)

#### Defined in

[main.ts:164690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164690)

___


### data\_docid

• `Optional` **data\_docid**: `string`

unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[data_docid](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#data_docid)

#### Defined in

[main.ts:164702](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164702)

___


### delivery\_info

• `Optional` **delivery\_info**: [`DeliveryInfo`](DeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[delivery_info](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#delivery_info)

#### Defined in

[main.ts:164731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164731)

___


### description

• `Optional` **description**: `string`

description of the product in Google Shopping SERP

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[description](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#description)

#### Defined in

[main.ts:164671](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164671)

___


### domain

• `Optional` **domain**: `string`

domain in SERP

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[domain](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#domain)

#### Defined in

[main.ts:164667](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164667)

___


### is\_best\_match

• `Optional` **is\_best\_match**: `boolean`

“best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[is_best_match](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#is_best_match)

#### Defined in

[main.ts:164716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164716)

___


### old\_price

• `Optional` **old\_price**: `number`

product old price
displayed if the product price has been changed
example:
499

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[old_price](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#old_price)

#### Defined in

[main.ts:164686](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164686)

___


### position

• `Optional` **position**: `string`

alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[position](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#position)

#### Defined in

[main.ts:164663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164663)

___


### price

• `Optional` **price**: `number`

product price
example:
384.99

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[price](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#price)

#### Defined in

[main.ts:164681](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164681)

___


### product\_id

• `Optional` **product\_id**: `string`

unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[product_id](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_id)

#### Defined in

[main.ts:164697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164697)

___


### product\_images

• `Optional` **product\_images**: `string`[]

URLs to the images of the product
the first URL in the array is the featured image of the product

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[product_images](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_images)

#### Defined in

[main.ts:164725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164725)

___


### product\_rating

• `Optional` **product\_rating**: [`RatingElement`](RatingElement.md)

product rating
the product popularity rate based on product reviews

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[product_rating](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#product_rating)

#### Defined in

[main.ts:164719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164719)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[rank_absolute](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:164659](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164659)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[rank_group](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#rank_group)

#### Defined in

[main.ts:164656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164656)

___


### reviews\_count

• `Optional` **reviews\_count**: `number`

number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[reviews_count](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#reviews_count)

#### Defined in

[main.ts:164712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164712)

___


### seller

• `Optional` **seller**: `string`

name of the seller
the name of the company that placed a corresponding product on Google Shopping

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[seller](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#seller)

#### Defined in

[main.ts:164705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164705)

___


### shop\_ad\_aclk

• `Optional` **shop\_ad\_aclk**: `string`

unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[shop_ad_aclk](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shop_ad_aclk)

#### Defined in

[main.ts:164728](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164728)

___


### shop\_rating

• `Optional` **shop\_rating**: [`RatingElement`](RatingElement.md)

shop rating
the popularity rate of the seller based on user reviews

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[shop_rating](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shop_rating)

#### Defined in

[main.ts:164722](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164722)

___


### shopping\_url

• `Optional` **shopping\_url**: `string`

URL to the product page on Google Shopping

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[shopping_url](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#shopping_url)

#### Defined in

[main.ts:164675](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164675)

___


### stores\_count\_info

• `Optional` **stores\_count\_info**: [`StoresCountInfo`](StoresCountInfo.md)

stores count information
contains information about the number of stores that offer the same product

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[stores_count_info](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#stores_count_info)

#### Defined in

[main.ts:164734](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164734)

___


### tags

• `Optional` **tags**: `string`[]

tags assigned to the product

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[tags](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#tags)

#### Defined in

[main.ts:164677](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164677)

___


### title

• `Optional` **title**: `string`

title of the element

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[title](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#title)

#### Defined in

[main.ts:164669](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164669)

___


### url

• `Optional` **url**: `string`

URL to the product page on the seller’s website

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[url](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#url)

#### Defined in

[main.ts:164673](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164673)

___


### xpath

• `Optional` **xpath**: `string`

XPath of the element

#### Implementation of

[IGoogleShoppingSerpMerchantSerpElementItem](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md).[xpath](../interfaces/IGoogleShoppingSerpMerchantSerpElementItem.md#xpath)

#### Defined in

[main.ts:164665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164665)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[init](BaseMerchantSerpElementItem.md#init)

#### Defined in

[main.ts:164743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164743)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[toJSON](BaseMerchantSerpElementItem.md#tojson)

#### Defined in

[main.ts:164799](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164799)

___


### fromJS

▸ **fromJS**(`data`): [`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GoogleShoppingSerpMerchantSerpElementItem`](GoogleShoppingSerpMerchantSerpElementItem.md)

#### Overrides

[BaseMerchantSerpElementItem](BaseMerchantSerpElementItem.md).[fromJS](BaseMerchantSerpElementItem.md#fromjs)

#### Defined in

[main.ts:164792](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L164792)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")