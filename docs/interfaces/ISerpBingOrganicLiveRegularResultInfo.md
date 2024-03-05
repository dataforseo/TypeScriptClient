[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpBingOrganicLiveRegularResultInfo

# Interface: ISerpBingOrganicLiveRegularResultInfo

## Implemented by

- [`SerpBingOrganicLiveRegularResultInfo`](../classes/SerpBingOrganicLiveRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpBingOrganicLiveRegularResultInfo.md#check_url)
- [datetime](ISerpBingOrganicLiveRegularResultInfo.md#datetime)
- [item\_types](ISerpBingOrganicLiveRegularResultInfo.md#item_types)
- [items](ISerpBingOrganicLiveRegularResultInfo.md#items)
- [items\_count](ISerpBingOrganicLiveRegularResultInfo.md#items_count)
- [keyword](ISerpBingOrganicLiveRegularResultInfo.md#keyword)
- [language\_code](ISerpBingOrganicLiveRegularResultInfo.md#language_code)
- [location\_code](ISerpBingOrganicLiveRegularResultInfo.md#location_code)
- [se\_domain](ISerpBingOrganicLiveRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpBingOrganicLiveRegularResultInfo.md#se_results_count)
- [spell](ISerpBingOrganicLiveRegularResultInfo.md#spell)
- [type](ISerpBingOrganicLiveRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Defined in

[main.ts:55074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55074)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:55079](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55079)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Defined in

[main.ts:55086](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55086)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items inside the element
array of 8 search queries related to the keyword

#### Defined in

[main.ts:55093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55093)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:55090](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55090)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:55063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55063)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:55071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55071)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:55069](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55069)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:55067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55067)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:55088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55088)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:55082](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55082)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:55065](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55065)
