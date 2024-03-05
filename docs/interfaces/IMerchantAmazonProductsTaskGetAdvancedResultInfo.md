[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantAmazonProductsTaskGetAdvancedResultInfo

# Interface: IMerchantAmazonProductsTaskGetAdvancedResultInfo

## Implemented by

- [`MerchantAmazonProductsTaskGetAdvancedResultInfo`](../classes/MerchantAmazonProductsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [categories](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#categories)
- [check\_url](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#item_types)
- [items](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items)
- [items\_count](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#spell)
- [type](IMerchantAmazonProductsTaskGetAdvancedResultInfo.md#type)

## Properties

### categories

• `Optional` **categories**: `string`[]

amazon product departments and subcategories

#### Defined in

[main.ts:171429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171429)

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Amazon results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:171412](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171412)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:171417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171417)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Amazon SERP
contains types of all search results (items) found in the returned SERP
possible item types:
amazon_serp, amazon_paid, editorial_recommendations, top_rated_from_our_brands, related_searches

#### Defined in

[main.ts:171425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171425)

___

### items

• `Optional` **items**: [`BaseAmazonSerpElementItem`](../classes/BaseAmazonSerpElementItem.md)[]

Amazon product items within the editorial_recommendations element

#### Defined in

[main.ts:171433](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171433)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:171431](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171431)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:171401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171401)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:171409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171409)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:171407](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171407)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:171405](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171405)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

search engine results count

#### Defined in

[main.ts:171427](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171427)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:171420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171420)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:171403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L171403)
