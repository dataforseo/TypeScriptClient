[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBaiduOrganicTaskGetRegularResultInfo

# Interface: ISerpBaiduOrganicTaskGetRegularResultInfo

## Implemented by

- [`SerpBaiduOrganicTaskGetRegularResultInfo`](../classes/SerpBaiduOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpBaiduOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](ISerpBaiduOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](ISerpBaiduOrganicTaskGetRegularResultInfo.md#item_types)
- [items](ISerpBaiduOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](ISerpBaiduOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](ISerpBaiduOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](ISerpBaiduOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](ISerpBaiduOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](ISerpBaiduOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpBaiduOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](ISerpBaiduOrganicTaskGetRegularResultInfo.md#spell)
- [type](ISerpBaiduOrganicTaskGetRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:66718](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66718)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:66723](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66723)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
organic, paid

#### Defined in

[main.ts:66731](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66731)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

[main.ts:66737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66737)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:66735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66735)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:66707](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66707)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:66715](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66715)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:66713](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66713)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:66711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66711)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:66733](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66733)

___


### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:66726](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66726)

___


### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:66709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L66709)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")