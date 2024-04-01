[Documentation](../README.md) / [Exports](../modules.md) / IAppDataAppleAppInfoTaskGetAdvancedResultInfo

# Interface: IAppDataAppleAppInfoTaskGetAdvancedResultInfo

## Implemented by

- [`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](../classes/AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#app_id)
- [check\_url](IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#datetime)
- [items](IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items)
- [items\_count](IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

application id received in a POST request

#### Defined in

main.ts:190194

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:190203

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:190208

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found app info

#### Defined in

main.ts:190214

___

### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array

#### Defined in

main.ts:190212

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:190200

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:190198

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:190196

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

main.ts:190210
