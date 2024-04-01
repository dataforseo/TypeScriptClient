[Documentation](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppInfoTaskGetAdvancedResultInfo

# Interface: IAppDataGoogleAppInfoTaskGetAdvancedResultInfo

## Implemented by

- [`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../classes/AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#app_id)
- [check\_url](IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#datetime)
- [items](IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items)
- [items\_count](IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

application id received in a POST request

#### Defined in

main.ts:185686

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:185695

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:185700

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found app info

#### Defined in

main.ts:185706

___

### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array

#### Defined in

main.ts:185704

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:185692

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:185690

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:185688

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

main.ts:185702
