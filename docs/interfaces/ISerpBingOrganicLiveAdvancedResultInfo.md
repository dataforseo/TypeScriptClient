[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBingOrganicLiveAdvancedResultInfo

# Interface: ISerpBingOrganicLiveAdvancedResultInfo

## Implemented by

- [`SerpBingOrganicLiveAdvancedResultInfo`](../classes/SerpBingOrganicLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpBingOrganicLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpBingOrganicLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpBingOrganicLiveAdvancedResultInfo.md#item_types)
- [items](ISerpBingOrganicLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpBingOrganicLiveAdvancedResultInfo.md#items_count)
- [keyword](ISerpBingOrganicLiveAdvancedResultInfo.md#keyword)
- [language\_code](ISerpBingOrganicLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpBingOrganicLiveAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpBingOrganicLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpBingOrganicLiveAdvancedResultInfo.md#se_results_count)
- [spell](ISerpBingOrganicLiveAdvancedResultInfo.md#spell)
- [type](ISerpBingOrganicLiveAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:55334](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55334)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:55339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55339)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video

#### Defined in

[main.ts:55347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55347)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items featured in the faq_box

#### Defined in

[main.ts:55353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55353)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:55351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55351)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:55323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55323)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:55331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55331)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:55329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55329)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:55327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55327)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:55349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55349)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:55342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55342)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:55325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55325)
