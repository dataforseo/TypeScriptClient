[dataforseo-client](../README.md) / [Exports](../modules.md) / ISerpSeznamOrganicTaskGetRegularResultInfo

# Interface: ISerpSeznamOrganicTaskGetRegularResultInfo

## Implemented by

- [`SerpSeznamOrganicTaskGetRegularResultInfo`](../classes/SerpSeznamOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpSeznamOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](ISerpSeznamOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](ISerpSeznamOrganicTaskGetRegularResultInfo.md#item_types)
- [items](ISerpSeznamOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](ISerpSeznamOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](ISerpSeznamOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](ISerpSeznamOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](ISerpSeznamOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](ISerpSeznamOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpSeznamOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](ISerpSeznamOrganicTaskGetRegularResultInfo.md#spell)
- [type](ISerpSeznamOrganicTaskGetRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:70245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70245)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:70250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70250)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for the organic type only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Seznam Organiс Advanced SERP endpoint

#### Defined in

[main.ts:70261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70261)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

[main.ts:70267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70267)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:70265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70265)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

[main.ts:70234](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70234)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:70242](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70242)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:70240](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70240)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:70238](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70238)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

[main.ts:70263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70263)

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

[main.ts:70253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70253)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:70236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70236)
