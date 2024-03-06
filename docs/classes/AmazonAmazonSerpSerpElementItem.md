[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AmazonAmazonSerpSerpElementItem

# Class: AmazonAmazonSerpSerpElementItem

## Hierarchy

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)
  
  ↳ **`AmazonAmazonSerpSerpElementItem`**

## Implements

- [`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonAmazonSerpSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AmazonAmazonSerpSerpElementItem.md#_discriminator)
- [asin](AmazonAmazonSerpSerpElementItem.md#asin)
- [bought\_past\_month](AmazonAmazonSerpSerpElementItem.md#bought_past_month)
- [currency](AmazonAmazonSerpSerpElementItem.md#currency)
- [data\_asin](AmazonAmazonSerpSerpElementItem.md#data_asin)
- [delivery\_info](AmazonAmazonSerpSerpElementItem.md#delivery_info)
- [description](AmazonAmazonSerpSerpElementItem.md#description)
- [domain](AmazonAmazonSerpSerpElementItem.md#domain)
- [image\_url](AmazonAmazonSerpSerpElementItem.md#image_url)
- [is\_amazon\_choice](AmazonAmazonSerpSerpElementItem.md#is_amazon_choice)
- [is\_best\_seller](AmazonAmazonSerpSerpElementItem.md#is_best_seller)
- [position](AmazonAmazonSerpSerpElementItem.md#position)
- [price\_from](AmazonAmazonSerpSerpElementItem.md#price_from)
- [price\_to](AmazonAmazonSerpSerpElementItem.md#price_to)
- [rank\_absolute](AmazonAmazonSerpSerpElementItem.md#rank_absolute)
- [rank\_group](AmazonAmazonSerpSerpElementItem.md#rank_group)
- [rating](AmazonAmazonSerpSerpElementItem.md#rating)
- [se\_type](AmazonAmazonSerpSerpElementItem.md#se_type)
- [special\_offers](AmazonAmazonSerpSerpElementItem.md#special_offers)
- [title](AmazonAmazonSerpSerpElementItem.md#title)
- [url](AmazonAmazonSerpSerpElementItem.md#url)
- [xpath](AmazonAmazonSerpSerpElementItem.md#xpath)

### Methods

- [init](AmazonAmazonSerpSerpElementItem.md#init)
- [toJSON](AmazonAmazonSerpSerpElementItem.md#tojson)
- [fromJS](AmazonAmazonSerpSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AmazonAmazonSerpSerpElementItem**(`data?`): [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonAmazonSerpSerpElementItem`](../interfaces/IAmazonAmazonSerpSerpElementItem.md) |

#### Returns

[`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[constructor](BaseAmazonSerpElementItem.md#constructor)

#### Defined in

[main.ts:99885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99885)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[_discriminator](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20756)

___


### asin

• `Optional` **asin**: `string`

ASIN of the product
learn more about ASIN in this help center guide

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[asin](../interfaces/IAmazonAmazonSerpSerpElementItem.md#asin)

#### Defined in

[main.ts:99845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99845)

___


### bought\_past\_month

• `Optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[bought_past_month](../interfaces/IAmazonAmazonSerpSerpElementItem.md#bought_past_month)

#### Defined in

[main.ts:99876](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99876)

___


### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[currency](../interfaces/IAmazonAmazonSerpSerpElementItem.md#currency)

#### Defined in

[main.ts:99859](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99859)

___


### data\_asin

• `Optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[data_asin](../interfaces/IAmazonAmazonSerpSerpElementItem.md#data_asin)

#### Defined in

[main.ts:99881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99881)

___


### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[delivery_info](../interfaces/IAmazonAmazonSerpSerpElementItem.md#delivery_info)

#### Defined in

[main.ts:99874](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99874)

___


### description

• `Optional` **description**: `string`

description of the product

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[description](../interfaces/IAmazonAmazonSerpSerpElementItem.md#description)

#### Defined in

[main.ts:99842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99842)

___


### domain

• `Optional` **domain**: `string`

Amazon domain

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[domain](../interfaces/IAmazonAmazonSerpSerpElementItem.md#domain)

#### Defined in

[main.ts:99836](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99836)

___


### image\_url

• `Optional` **image\_url**: `string`

URL of the product image featured in the results

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[image_url](../interfaces/IAmazonAmazonSerpSerpElementItem.md#image_url)

#### Defined in

[main.ts:99847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99847)

___


### is\_amazon\_choice

• `Optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[is_amazon_choice](../interfaces/IAmazonAmazonSerpSerpElementItem.md#is_amazon_choice)

#### Defined in

[main.ts:99868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99868)

___


### is\_best\_seller

• `Optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[is_best_seller](../interfaces/IAmazonAmazonSerpSerpElementItem.md#is_best_seller)

#### Defined in

[main.ts:99865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99865)

___


### position

• `Optional` **position**: `string`

the alignment of the element in Amazon SERP
can take the following values:
left, right

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[position](../interfaces/IAmazonAmazonSerpSerpElementItem.md#position)

#### Defined in

[main.ts:99832](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99832)

___


### price\_from

• `Optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[price_from](../interfaces/IAmazonAmazonSerpSerpElementItem.md#price_from)

#### Defined in

[main.ts:99851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99851)

___


### price\_to

• `Optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[price_to](../interfaces/IAmazonAmazonSerpSerpElementItem.md#price_to)

#### Defined in

[main.ts:99855](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99855)

___


### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in Amazon SERP
absolute position among all the elements in SERP

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[rank_absolute](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:99828](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99828)

___


### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[rank_group](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rank_group)

#### Defined in

[main.ts:99825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99825)

___


### rating

• `Optional` **rating**: [`RatingElement`](RatingElement.md)

the item’s rating
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[rating](../interfaces/IAmazonAmazonSerpSerpElementItem.md#rating)

#### Defined in

[main.ts:99871](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99871)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[se_type](../interfaces/IAmazonAmazonSerpSerpElementItem.md#se_type)

#### Defined in

[main.ts:99822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99822)

___


### special\_offers

• `Optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[special_offers](../interfaces/IAmazonAmazonSerpSerpElementItem.md#special_offers)

#### Defined in

[main.ts:99862](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99862)

___


### title

• `Optional` **title**: `string`

product title

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[title](../interfaces/IAmazonAmazonSerpSerpElementItem.md#title)

#### Defined in

[main.ts:99838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99838)

___


### url

• `Optional` **url**: `string`

URL of the product page

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[url](../interfaces/IAmazonAmazonSerpSerpElementItem.md#url)

#### Defined in

[main.ts:99840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99840)

___


### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAmazonAmazonSerpSerpElementItem](../interfaces/IAmazonAmazonSerpSerpElementItem.md).[xpath](../interfaces/IAmazonAmazonSerpSerpElementItem.md#xpath)

#### Defined in

[main.ts:99834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99834)

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

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[init](BaseAmazonSerpElementItem.md#init)

#### Defined in

[main.ts:99890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99890)

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

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[toJSON](BaseAmazonSerpElementItem.md#tojson)

#### Defined in

[main.ts:99932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99932)

___


### fromJS

▸ **fromJS**(`data`): [`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonAmazonSerpSerpElementItem`](AmazonAmazonSerpSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[fromJS](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

[main.ts:99925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L99925)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")