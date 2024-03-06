[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicTaskGetAdvancedResultInfo

# Interface: ISerpYahooOrganicTaskGetAdvancedResultInfo

## Implemented by

- [`SerpYahooOrganicTaskGetAdvancedResultInfo`](../classes/SerpYahooOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpYahooOrganicTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:64111](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64111)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:64116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64116)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Defined in

[main.ts:64124](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64124)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

[main.ts:64131](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64131)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:64128](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64128)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:64100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64100)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:64108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64108)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:64106](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64106)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:64104](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64104)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:64126](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64126)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:64119](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64119)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:64102](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64102)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")