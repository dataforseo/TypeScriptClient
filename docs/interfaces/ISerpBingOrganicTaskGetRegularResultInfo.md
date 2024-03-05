[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBingOrganicTaskGetRegularResultInfo

# Interface: ISerpBingOrganicTaskGetRegularResultInfo

## Implemented by

- [`SerpBingOrganicTaskGetRegularResultInfo`](../classes/SerpBingOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpBingOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](ISerpBingOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](ISerpBingOrganicTaskGetRegularResultInfo.md#item_types)
- [items](ISerpBingOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](ISerpBingOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](ISerpBingOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](ISerpBingOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](ISerpBingOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](ISerpBingOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpBingOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](ISerpBingOrganicTaskGetRegularResultInfo.md#spell)
- [type](ISerpBingOrganicTaskGetRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:54334](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54334)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:54339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54339)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Defined in

[main.ts:54346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54346)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items inside the element
array of 8 search queries related to the keyword

#### Defined in

[main.ts:54353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54353)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:54350](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54350)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:54323](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54323)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:54331](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54331)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:54329](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54329)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:54327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54327)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:54348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54348)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:54342](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54342)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:54325](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54325)
