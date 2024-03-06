[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleMapsTaskGetAdvancedResultInfo

# Interface: ISerpGoogleMapsTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleMapsTaskGetAdvancedResultInfo`](../classes/SerpGoogleMapsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpGoogleMapsTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results
Note: to check location-specific results, follow the provided check url, scroll up and down, then click the “Search this area” button

#### Defined in

[main.ts:38942](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38942)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:38947](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38947)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
maps_search, maps_paid_item

#### Defined in

[main.ts:38955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38955)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:38961](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38961)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:38959](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38959)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:38930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38930)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:38938](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38938)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:38936](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38936)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:38934](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38934)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:38957](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38957)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:38950](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38950)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:38932](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38932)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")