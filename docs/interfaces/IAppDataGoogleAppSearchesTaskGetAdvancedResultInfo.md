[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo

## Implemented by

- [`AppDataGoogleAppSearchesTaskGetAdvancedResultInfo`](../classes/AppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#datetime)
- [items](IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#items)
- [items\_count](IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#items_count)
- [keyword](IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](IAppDataGoogleAppSearchesTaskGetAdvancedResultInfo.md#se_results_count)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:178012

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:178017

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found apps

#### Defined in

main.ts:178023

___

### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array

#### Defined in

main.ts:178021

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST request

#### Defined in

main.ts:178003

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:178009

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:178007

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:178005

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

main.ts:178019
