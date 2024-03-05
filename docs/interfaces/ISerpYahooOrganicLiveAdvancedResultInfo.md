[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicLiveAdvancedResultInfo

# Interface: ISerpYahooOrganicLiveAdvancedResultInfo

## Implemented by

- [`SerpYahooOrganicLiveAdvancedResultInfo`](../classes/SerpYahooOrganicLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpYahooOrganicLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpYahooOrganicLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpYahooOrganicLiveAdvancedResultInfo.md#item_types)
- [items](ISerpYahooOrganicLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpYahooOrganicLiveAdvancedResultInfo.md#items_count)
- [keyword](ISerpYahooOrganicLiveAdvancedResultInfo.md#keyword)
- [language\_code](ISerpYahooOrganicLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpYahooOrganicLiveAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpYahooOrganicLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpYahooOrganicLiveAdvancedResultInfo.md#se_results_count)
- [spell](ISerpYahooOrganicLiveAdvancedResultInfo.md#spell)
- [type](ISerpYahooOrganicLiveAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:64848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64848)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:64853](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64853)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Defined in

[main.ts:64861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64861)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items featured in the faq_box

#### Defined in

[main.ts:64867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64867)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:64865](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64865)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:64837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64837)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:64845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64845)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:64843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64843)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:64841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64841)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:64863](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64863)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:64856](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64856)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:64839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64839)
