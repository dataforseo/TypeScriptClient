[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBaiduOrganicTaskGetAdvancedResultInfo

# Interface: ISerpBaiduOrganicTaskGetAdvancedResultInfo

## Implemented by

- [`SerpBaiduOrganicTaskGetAdvancedResultInfo`](../classes/SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:67125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67125)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:67130](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67130)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video, stocks_box, dictionary, shopping

#### Defined in

[main.ts:67138](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67138)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:67145](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67145)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:67142](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67142)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:67114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67114)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:67122](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67122)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:67120](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67120)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:67118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67118)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:67140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67140)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:67133](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67133)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:67116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67116)
