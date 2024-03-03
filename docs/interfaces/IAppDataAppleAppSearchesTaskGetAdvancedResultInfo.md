[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppleAppSearchesTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppSearchesTaskGetAdvancedResultInfo

## Implemented by

- [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../classes/AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#datetime)
- [items](IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items)
- [items\_count](IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items_count)
- [keyword](IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_results_count)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Defined in

main.ts:183848

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:183853

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found apps

#### Defined in

main.ts:183859

___

### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array

#### Defined in

main.ts:183857

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST request

#### Defined in

main.ts:183839

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:183845

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:183843

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:183841

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

main.ts:183855
