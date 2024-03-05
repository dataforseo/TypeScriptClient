[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductsTaskGetAdvancedResultInfo

# Interface: IMerchantGoogleProductsTaskGetAdvancedResultInfo

## Implemented by

- [`MerchantGoogleProductsTaskGetAdvancedResultInfo`](../classes/MerchantGoogleProductsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#item_types)
- [items](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items)
- [items\_count](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#se_domain)
- [spell](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#spell)
- [type](IMerchantGoogleProductsTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to Google Shopping results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:165493](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165493)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:165498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165498)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in Google Shopping SERP
contains types of all search results (items) found in the returned SERP
possible item types:
google_shopping_sponsored_carousel, google_shopping_paid, google_shopping_serp

#### Defined in

[main.ts:165506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165506)

___

### items

• `Optional` **items**: [`BaseMerchantSerpElementItem`](../classes/BaseMerchantSerpElementItem.md)[]

additional items present in the element
contains a list of related keywords;
if there are none, equals null

#### Defined in

[main.ts:165512](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165512)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:165508](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165508)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:165482](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165482)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:165490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165490)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:165488](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165488)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:165486](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165486)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:165501](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165501)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:165484](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L165484)
