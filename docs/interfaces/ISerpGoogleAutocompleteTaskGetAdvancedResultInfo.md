[Documentation](../README.md) / [Exports](../modules.md) / ISerpGoogleAutocompleteTaskGetAdvancedResultInfo

# Interface: ISerpGoogleAutocompleteTaskGetAdvancedResultInfo

## Implemented by

- [`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../classes/SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#check_url)
- [datetime](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#item_types)
- [items](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items)
- [items\_count](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items_count)
- [keyword](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#spell)
- [type](ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#type)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:51537

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:51542

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

#### Defined in

main.ts:51550

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:51556

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:51554

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Defined in

main.ts:51526

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:51534

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:51532

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:51530

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:51552

___

### spell

• `Optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:51545

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:51528
