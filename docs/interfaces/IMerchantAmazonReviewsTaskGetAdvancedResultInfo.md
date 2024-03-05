[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantAmazonReviewsTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonReviewsTaskGetAdvancedResultInfo

## Implemented by

- [`MerchantAmazonReviewsTaskGetAdvancedResultInfo`](../classes/MerchantAmazonReviewsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [asin](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#asin)
- [check\_url](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#datetime)
- [image](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#image)
- [item\_types](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#item_types)
- [items](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items)
- [items\_count](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#location_code)
- [rating](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#rating)
- [reviews\_count](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#reviews_count)
- [se\_domain](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#se_domain)
- [spell](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#spell)
- [title](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#title)
- [type](IMerchantAmazonReviewsTaskGetAdvancedResultInfo.md#type)

## Properties

### asin

• `Optional` **asin**: `string`

asin received in a POST array

#### Defined in

[main.ts:175905](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175905)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:175916](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175916)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:175921](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175921)

___

### image

• `Optional` **image**: [`ImagesElement`](../classes/ImagesElement.md)

product image data

#### Defined in

[main.ts:175929](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175929)

___

### item\_types

• `Optional` **item\_types**: `string`[]

type of search results in Amazon SERP
contains types of search results (items) found in Amazon SERP;
possible item types:
amazon_review_item

#### Defined in

[main.ts:175939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175939)

___

### items

• `Optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

found reviews
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:175945](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175945)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:175942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175942)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:175913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175913)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:175911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175911)

___

### rating

• `Optional` **rating**: [`RatingElement`](../classes/RatingElement.md)

rating of the product on Amazon
popularity rate based on reviews and displayed in SERP

#### Defined in

[main.ts:175932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175932)

___

### reviews\_count

• `Optional` **reviews\_count**: `number`

the total number of reviews

#### Defined in

[main.ts:175934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175934)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:175909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175909)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:175924](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175924)

___

### title

• `Optional` **title**: `string`

title of the product on Amazon
the title of the product for which the reviews are collected

#### Defined in

[main.ts:175927](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175927)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:175907](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L175907)
