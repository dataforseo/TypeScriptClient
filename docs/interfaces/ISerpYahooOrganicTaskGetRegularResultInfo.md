[Documentation](../README.md) / [Exports](../modules.md) / ISerpYahooOrganicTaskGetRegularResultInfo

# Interface: ISerpYahooOrganicTaskGetRegularResultInfo

## Implemented by

- [`SerpYahooOrganicTaskGetRegularResultInfo`](../classes/SerpYahooOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpYahooOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](ISerpYahooOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](ISerpYahooOrganicTaskGetRegularResultInfo.md#item_types)
- [items](ISerpYahooOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](ISerpYahooOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](ISerpYahooOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](ISerpYahooOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](ISerpYahooOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](ISerpYahooOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](ISerpYahooOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](ISerpYahooOrganicTaskGetRegularResultInfo.md#spell)
- [type](ISerpYahooOrganicTaskGetRegularResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:66224

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:66229

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
organic
note that this array contains all types of search results found in the returned SERP;

#### Defined in

main.ts:66238

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

items in SERP

#### Defined in

main.ts:66244

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:66242

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:66213

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:66221

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:66219

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:66217

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:66240

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:66232

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:66215
