[dataforseo-client](../README.md) / [Exports](../modules.md) / AmazonAmazonPaidSerpElementItem

# Class: AmazonAmazonPaidSerpElementItem

## Hierarchy

- [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)

  ↳ **`AmazonAmazonPaidSerpElementItem`**

## Implements

- [`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonAmazonPaidSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AmazonAmazonPaidSerpElementItem.md#_discriminator)
- [bought\_past\_month](AmazonAmazonPaidSerpElementItem.md#bought_past_month)
- [currency](AmazonAmazonPaidSerpElementItem.md#currency)
- [data\_asin](AmazonAmazonPaidSerpElementItem.md#data_asin)
- [delivery\_info](AmazonAmazonPaidSerpElementItem.md#delivery_info)
- [domain](AmazonAmazonPaidSerpElementItem.md#domain)
- [image\_url](AmazonAmazonPaidSerpElementItem.md#image_url)
- [is\_amazon\_choice](AmazonAmazonPaidSerpElementItem.md#is_amazon_choice)
- [is\_best\_seller](AmazonAmazonPaidSerpElementItem.md#is_best_seller)
- [price\_from](AmazonAmazonPaidSerpElementItem.md#price_from)
- [price\_to](AmazonAmazonPaidSerpElementItem.md#price_to)
- [rank\_absolute](AmazonAmazonPaidSerpElementItem.md#rank_absolute)
- [rank\_group](AmazonAmazonPaidSerpElementItem.md#rank_group)
- [rating](AmazonAmazonPaidSerpElementItem.md#rating)
- [special\_offers](AmazonAmazonPaidSerpElementItem.md#special_offers)
- [title](AmazonAmazonPaidSerpElementItem.md#title)
- [url](AmazonAmazonPaidSerpElementItem.md#url)
- [xpath](AmazonAmazonPaidSerpElementItem.md#xpath)

### Methods

- [init](AmazonAmazonPaidSerpElementItem.md#init)
- [toJSON](AmazonAmazonPaidSerpElementItem.md#tojson)
- [fromJS](AmazonAmazonPaidSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AmazonAmazonPaidSerpElementItem**(`data?`): [`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonAmazonPaidSerpElementItem`](../interfaces/IAmazonAmazonPaidSerpElementItem.md) |

#### Returns

[`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[constructor](BaseAmazonSerpElementItem.md#constructor)

#### Defined in

[main.ts:170707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170707)

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[_discriminator](BaseAmazonSerpElementItem.md#_discriminator)

#### Defined in

[main.ts:20756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L20756)

___

### bought\_past\_month

• `Optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[bought_past_month](../interfaces/IAmazonAmazonPaidSerpElementItem.md#bought_past_month)

#### Defined in

[main.ts:170672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170672)

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[currency](../interfaces/IAmazonAmazonPaidSerpElementItem.md#currency)

#### Defined in

[main.ts:170684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170684)

___

### data\_asin

• `Optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[data_asin](../interfaces/IAmazonAmazonPaidSerpElementItem.md#data_asin)

#### Defined in

[main.ts:170692](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170692)

___

### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[delivery_info](../interfaces/IAmazonAmazonPaidSerpElementItem.md#delivery_info)

#### Defined in

[main.ts:170703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170703)

___

### domain

• `Optional` **domain**: `string`

Amazon domain

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[domain](../interfaces/IAmazonAmazonPaidSerpElementItem.md#domain)

#### Defined in

[main.ts:170664](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170664)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the product image featured in the results

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[image_url](../interfaces/IAmazonAmazonPaidSerpElementItem.md#image_url)

#### Defined in

[main.ts:170670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170670)

___

### is\_amazon\_choice

• `Optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[is_amazon_choice](../interfaces/IAmazonAmazonPaidSerpElementItem.md#is_amazon_choice)

#### Defined in

[main.ts:170697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170697)

___

### is\_best\_seller

• `Optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[is_best_seller](../interfaces/IAmazonAmazonPaidSerpElementItem.md#is_best_seller)

#### Defined in

[main.ts:170700](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170700)

___

### price\_from

• `Optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[price_from](../interfaces/IAmazonAmazonPaidSerpElementItem.md#price_from)

#### Defined in

[main.ts:170676](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170676)

___

### price\_to

• `Optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[price_to](../interfaces/IAmazonAmazonPaidSerpElementItem.md#price_to)

#### Defined in

[main.ts:170680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170680)

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements found in Amazon SERP

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[rank_absolute](../interfaces/IAmazonAmazonPaidSerpElementItem.md#rank_absolute)

#### Defined in

[main.ts:170660](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170660)

___

### rank\_group

• `Optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[rank_group](../interfaces/IAmazonAmazonPaidSerpElementItem.md#rank_group)

#### Defined in

[main.ts:170657](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170657)

___

### rating

• `Optional` **rating**: [`RatingElement`](RatingElement.md)

product rating info

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[rating](../interfaces/IAmazonAmazonPaidSerpElementItem.md#rating)

#### Defined in

[main.ts:170694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170694)

___

### special\_offers

• `Optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[special_offers](../interfaces/IAmazonAmazonPaidSerpElementItem.md#special_offers)

#### Defined in

[main.ts:170687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170687)

___

### title

• `Optional` **title**: `string`

product title

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[title](../interfaces/IAmazonAmazonPaidSerpElementItem.md#title)

#### Defined in

[main.ts:170666](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170666)

___

### url

• `Optional` **url**: `string`

the URL of the product page

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[url](../interfaces/IAmazonAmazonPaidSerpElementItem.md#url)

#### Defined in

[main.ts:170668](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170668)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAmazonAmazonPaidSerpElementItem](../interfaces/IAmazonAmazonPaidSerpElementItem.md).[xpath](../interfaces/IAmazonAmazonPaidSerpElementItem.md#xpath)

#### Defined in

[main.ts:170662](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170662)

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

[main.ts:170712](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170712)

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

[main.ts:170750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170750)

___

### fromJS

▸ **fromJS**(`data`): [`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonAmazonPaidSerpElementItem`](AmazonAmazonPaidSerpElementItem.md)

#### Overrides

[BaseAmazonSerpElementItem](BaseAmazonSerpElementItem.md).[fromJS](BaseAmazonSerpElementItem.md#fromjs)

#### Defined in

[main.ts:170743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170743)
