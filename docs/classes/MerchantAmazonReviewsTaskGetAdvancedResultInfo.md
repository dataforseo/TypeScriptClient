[dataforseo-client](../README.md) / [Exports](../modules.md) / MerchantAmazonReviewsTaskGetAdvancedResultInfo

# Class: MerchantAmazonReviewsTaskGetAdvancedResultInfo

## Implements

- [`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [asin](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#asin)
- [check\_url](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#datetime)
- [image](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#image)
- [item\_types](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#item_types)
- [items](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items)
- [items\_count](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#location_code)
- [rating](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#rating)
- [reviews\_count](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#reviews_count)
- [se\_domain](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#se_domain)
- [spell](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#spell)
- [title](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#title)
- [type](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#init)
- [toJSON](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantAmazonReviewsTaskGetAdvancedResultInfo**(`data?`): [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantAmazonReviewsTaskGetAdvancedResultInfo`](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md) |

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:175822](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175822)

## Properties

### asin

• `Optional` **asin**: `string`

asin received in a POST array

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[asin](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#asin)

#### Defined in

[main.ts:175778](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175778)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:175789](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175789)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:175794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175794)

___

### image

• `Optional` **image**: [`ImagesElement`](ImagesElement.md)

product image data

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[image](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#image)

#### Defined in

[main.ts:175802](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175802)

___

### item\_types

• `Optional` **item\_types**: `string`[]

type of search results in Amazon SERP
contains types of search results (items) found in Amazon SERP;
possible item types:
amazon_review_item

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[item_types](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:175812](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175812)

___

### items

• `Optional` **items**: [`BaseAmazonSerpElementItem`](BaseAmazonSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[items](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:175818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175818)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:175815](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175815)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:175786](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175786)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:175784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175784)

___

### rating

• `Optional` **rating**: [`RatingElement`](RatingElement.md)

rating of the product on Amazon
popularity rate based on reviews and displayed in SERP

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[rating](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#rating)

#### Defined in

[main.ts:175805](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175805)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[reviews_count](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#reviews_count)

#### Defined in

[main.ts:175807](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175807)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:175782](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175782)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[spell](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:175797](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175797)

___

### title

• `Optional` **title**: `string`

title of the product on Amazon
the title of the product for which the reviews are collected

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[title](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#title)

#### Defined in

[main.ts:175800](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175800)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IMerchantAmazonReviewsTaskGetAdvancedResultInfo](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md).[type](../interfaces/IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:175780](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175780)

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

[main.ts:175831](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175831)

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

[main.ts:175870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175870)

___

### fromJS

▸ **fromJS**(`data`): [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:175863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175863)
