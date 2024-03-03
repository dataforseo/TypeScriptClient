[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppleAppListTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppListTaskGetAdvancedResultInfo

## Implemented by

- [`AppDataAppleAppListTaskGetAdvancedResultInfo`](../classes/AppDataAppleAppListTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [check\_url](IAppDataAppleAppListTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IAppDataAppleAppListTaskGetAdvancedResultInfo.md#datetime)
- [items](IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items)
- [items\_count](IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items_count)
- [keyword](IAppDataAppleAppListTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](IAppDataAppleAppListTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IAppDataAppleAppListTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_results_count)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Defined in

main.ts:185644

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:185649

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found apps
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:185657

___

### items\_count

• `Optional` **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

main.ts:185654

___

### keyword

• `Optional` **keyword**: `string`

app collection received in a POST array

#### Defined in

main.ts:185635

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:185641

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:185639

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:185637

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

main.ts:185651
