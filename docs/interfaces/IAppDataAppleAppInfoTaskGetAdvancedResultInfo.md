[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataAppleAppInfoTaskGetAdvancedResultInfo

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

[main.ts:184741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184741)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:184750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184750)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:184755](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184755)

___


### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)[]

found app info

#### Defined in

[main.ts:184761](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184761)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array

#### Defined in

[main.ts:184759](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184759)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:184747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184747)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:184745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184745)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:184743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184743)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Defined in

[main.ts:184757](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184757)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")