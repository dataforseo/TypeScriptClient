[dataforseo-client](../README.md) / [Exports](../modules.md) / AmazonSerpElement

# Class: AmazonSerpElement

## Implements

- [`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AmazonSerpElement.md#constructor)

### Properties

- [bought\_past\_month](AmazonSerpElement.md#bought_past_month)
- [currency](AmazonSerpElement.md#currency)
- [data\_asin](AmazonSerpElement.md#data_asin)
- [delivery\_info](AmazonSerpElement.md#delivery_info)
- [domain](AmazonSerpElement.md#domain)
- [image\_url](AmazonSerpElement.md#image_url)
- [is\_amazon\_choice](AmazonSerpElement.md#is_amazon_choice)
- [is\_best\_seller](AmazonSerpElement.md#is_best_seller)
- [price\_from](AmazonSerpElement.md#price_from)
- [price\_to](AmazonSerpElement.md#price_to)
- [rating](AmazonSerpElement.md#rating)
- [special\_offers](AmazonSerpElement.md#special_offers)
- [title](AmazonSerpElement.md#title)
- [type](AmazonSerpElement.md#type)
- [url](AmazonSerpElement.md#url)
- [xpath](AmazonSerpElement.md#xpath)

### Methods

- [init](AmazonSerpElement.md#init)
- [toJSON](AmazonSerpElement.md#tojson)
- [fromJS](AmazonSerpElement.md#fromjs)

## Constructors

### constructor

• **new AmazonSerpElement**(`data?`): [`AmazonSerpElement`](AmazonSerpElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAmazonSerpElement`](../interfaces/IAmazonSerpElement.md) |

#### Returns

[`AmazonSerpElement`](AmazonSerpElement.md)

#### Defined in

[main.ts:170885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170885)

## Properties

### bought\_past\_month

• `Optional` **bought\_past\_month**: `number`

number of product purchases in the past month

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[bought_past_month](../interfaces/IAmazonSerpElement.md#bought_past_month)

#### Defined in

[main.ts:170850](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170850)

___

### currency

• `Optional` **currency**: `string`

currency in the ISO format
example:
USD

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[currency](../interfaces/IAmazonSerpElement.md#currency)

#### Defined in

[main.ts:170862](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170862)

___

### data\_asin

• `Optional` **data\_asin**: `string`

unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[data_asin](../interfaces/IAmazonSerpElement.md#data_asin)

#### Defined in

[main.ts:170870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170870)

___

### delivery\_info

• `Optional` **delivery\_info**: [`AmazonDeliveryInfo`](AmazonDeliveryInfo.md)

delivery information
delivery information including free and fast delivery date ranges

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[delivery_info](../interfaces/IAmazonSerpElement.md#delivery_info)

#### Defined in

[main.ts:170881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170881)

___

### domain

• `Optional` **domain**: `string`

Amazon domain

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[domain](../interfaces/IAmazonSerpElement.md#domain)

#### Defined in

[main.ts:170842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170842)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the product image featured in the results

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[image_url](../interfaces/IAmazonSerpElement.md#image_url)

#### Defined in

[main.ts:170848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170848)

___

### is\_amazon\_choice

• `Optional` **is\_amazon\_choice**: `boolean`

“Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[is_amazon_choice](../interfaces/IAmazonSerpElement.md#is_amazon_choice)

#### Defined in

[main.ts:170875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170875)

___

### is\_best\_seller

• `Optional` **is\_best\_seller**: `boolean`

“Best Seller” label
if the value is true, the product is marked with the “Best Seller” label

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[is_best_seller](../interfaces/IAmazonSerpElement.md#is_best_seller)

#### Defined in

[main.ts:170878](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170878)

___

### price\_from

• `Optional` **price\_from**: `number`

the regular price of a product
example:
49.98

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[price_from](../interfaces/IAmazonSerpElement.md#price_from)

#### Defined in

[main.ts:170854](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170854)

___

### price\_to

• `Optional` **price\_to**: `number`

the upper limit of the product price range
example:
384.99

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[price_to](../interfaces/IAmazonSerpElement.md#price_to)

#### Defined in

[main.ts:170858](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170858)

___

### rating

• `Optional` **rating**: [`RatingElement`](RatingElement.md)

product rating info

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[rating](../interfaces/IAmazonSerpElement.md#rating)

#### Defined in

[main.ts:170872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170872)

___

### special\_offers

• `Optional` **special\_offers**: `string`[]

special offer details
contains special offer details, including coupon and Subscribe & Save discounts

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[special_offers](../interfaces/IAmazonSerpElement.md#special_offers)

#### Defined in

[main.ts:170865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170865)

___

### title

• `Optional` **title**: `string`

product title

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[title](../interfaces/IAmazonSerpElement.md#title)

#### Defined in

[main.ts:170844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170844)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[type](../interfaces/IAmazonSerpElement.md#type)

#### Defined in

[main.ts:170838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170838)

___

### url

• `Optional` **url**: `string`

the URL of the product page

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[url](../interfaces/IAmazonSerpElement.md#url)

#### Defined in

[main.ts:170846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170846)

___

### xpath

• `Optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[IAmazonSerpElement](../interfaces/IAmazonSerpElement.md).[xpath](../interfaces/IAmazonSerpElement.md#xpath)

#### Defined in

[main.ts:170840](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170840)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:170894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170894)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:170930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170930)

___

### fromJS

▸ **fromJS**(`data`): [`AmazonSerpElement`](AmazonSerpElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AmazonSerpElement`](AmazonSerpElement.md)

#### Defined in

[main.ts:170923](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L170923)
