[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpGoogleImagesTaskGetAdvancedResultInfo

# Interface: ISerpGoogleImagesTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleImagesTaskGetAdvancedResultInfo`](../classes/SerpGoogleImagesTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpGoogleImagesTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:46322](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46322)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:46327](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46327)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Defined in

[main.ts:46335](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46335)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

contains keywords and images related to the specified search term

#### Defined in

[main.ts:46341](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46341)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:46339](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46339)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:46311](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46311)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:46319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46319)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:46317](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46317)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:46315](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46315)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:46337](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46337)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:46330](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46330)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:46313](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46313)
