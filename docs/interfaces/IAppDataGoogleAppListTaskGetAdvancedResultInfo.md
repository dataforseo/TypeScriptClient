[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataGoogleAppListTaskGetAdvancedResultInfo

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

[main.ts:178901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178901)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:178906](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178906)

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found apps

#### Defined in

[main.ts:178913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178913)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Defined in

[main.ts:178911](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178911)

___

### keyword

• `Optional` **keyword**: `string`

app collection received in a POST array

#### Defined in

[main.ts:178892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178892)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:178898](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178898)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:178896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178896)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:178894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178894)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

[main.ts:178908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178908)
