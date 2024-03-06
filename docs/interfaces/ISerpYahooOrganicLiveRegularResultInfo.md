[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicLiveRegularResultInfo

# Interface: ISerpYahooOrganicLiveRegularResultInfo

## Implemented by

- [`SerpYahooOrganicLiveRegularResultInfo`](../classes/SerpYahooOrganicLiveRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpYahooOrganicLiveRegularResultInfo.md#check_url)
- [datetime](ISerpYahooOrganicLiveRegularResultInfo.md#datetime)
- [item\_types](ISerpYahooOrganicLiveRegularResultInfo.md#item_types)
- [items](ISerpYahooOrganicLiveRegularResultInfo.md#items)
- [items\_count](ISerpYahooOrganicLiveRegularResultInfo.md#items_count)
- [keyword](ISerpYahooOrganicLiveRegularResultInfo.md#keyword)
- [language\_code](ISerpYahooOrganicLiveRegularResultInfo.md#language_code)
- [location\_code](ISerpYahooOrganicLiveRegularResultInfo.md#location_code)
- [se\_domain](ISerpYahooOrganicLiveRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpYahooOrganicLiveRegularResultInfo.md#se_results_count)
- [spell](ISerpYahooOrganicLiveRegularResultInfo.md#spell)
- [type](ISerpYahooOrganicLiveRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
You can use it to make sure that we provided exact results

#### Defined in

[main.ts:64589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64589)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:64594](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64594)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
Possible item types: organic

#### Defined in

[main.ts:64601](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64601)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

[main.ts:64607](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64607)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:64605](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64605)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:64578](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64578)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:64586](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64586)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:64584](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64584)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:64582](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64582)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:64603](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64603)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:64597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64597)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:64580](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64580)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")