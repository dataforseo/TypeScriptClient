[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBingLocalPackTaskGetRegularResultInfo

# Interface: ISerpBingLocalPackTaskGetRegularResultInfo

## Implemented by

- [`SerpBingLocalPackTaskGetRegularResultInfo`](../classes/SerpBingLocalPackTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpBingLocalPackTaskGetRegularResultInfo.md#check_url)
- [datetime](ISerpBingLocalPackTaskGetRegularResultInfo.md#datetime)
- [item\_types](ISerpBingLocalPackTaskGetRegularResultInfo.md#item_types)
- [items](ISerpBingLocalPackTaskGetRegularResultInfo.md#items)
- [items\_count](ISerpBingLocalPackTaskGetRegularResultInfo.md#items_count)
- [keyword](ISerpBingLocalPackTaskGetRegularResultInfo.md#keyword)
- [language\_code](ISerpBingLocalPackTaskGetRegularResultInfo.md#language_code)
- [location\_code](ISerpBingLocalPackTaskGetRegularResultInfo.md#location_code)
- [se\_domain](ISerpBingLocalPackTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpBingLocalPackTaskGetRegularResultInfo.md#se_results_count)
- [spell](ISerpBingLocalPackTaskGetRegularResultInfo.md#spell)
- [type](ISerpBingLocalPackTaskGetRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:56340](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56340)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:56345](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56345)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Defined in

[main.ts:56353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56353)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:56359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56359)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:56357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56357)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:56329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56329)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:56337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56337)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:56335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56335)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:56333](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56333)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:56355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56355)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:56348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56348)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:56331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56331)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")