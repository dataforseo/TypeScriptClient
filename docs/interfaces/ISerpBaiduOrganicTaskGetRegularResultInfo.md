[Documentation](../README.md) / [Exports](../modules.md) / ISerpBaiduOrganicTaskGetRegularResultInfo

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

main.ts:66862

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:66867

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
organic, paid

#### Defined in

main.ts:66875

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

main.ts:66881

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:66879

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:66851

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:66859

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:66857

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:66855

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:66877

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:66870

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:66853
