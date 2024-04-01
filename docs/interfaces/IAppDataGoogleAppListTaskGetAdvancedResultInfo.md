[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppListTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppListTaskGetAdvancedResultInfo

## Implemented by

- [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](../classes/AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#datetime)
- [items](IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items)
- [items\_count](IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items_count)
- [keyword](IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_results_count)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:184354

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:184359

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found apps

#### Defined in

main.ts:184366

___

### items\_count

• `Optional` **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:184364

___

### keyword

• `Optional` **keyword**: `string`

app collection received in a POST array

#### Defined in

main.ts:184345

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:184351

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:184349

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:184347

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

main.ts:184361
