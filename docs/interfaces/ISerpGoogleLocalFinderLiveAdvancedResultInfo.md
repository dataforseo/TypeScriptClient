[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleLocalFinderLiveAdvancedResultInfo

# Interface: ISerpGoogleLocalFinderLiveAdvancedResultInfo

## Implemented by

- [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](../classes/SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#spell)
- [type](ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Defined in

[main.ts:41346](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41346)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:41351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41351)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Defined in

[main.ts:41359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41359)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

[main.ts:41365](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41365)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:41363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41363)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:41335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41335)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:41343](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41343)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:41341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41341)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:41339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41339)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:41361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41361)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:41354](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41354)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:41337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L41337)
