[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppInfoTaskGetAdvancedResultInfo

# Class: AppDataAppleAppInfoTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [app\_id](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#app_id)
- [check\_url](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#datetime)
- [items](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items)
- [items\_count](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

### Methods

- [init](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#init)
- [toJSON](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppInfoTaskGetAdvancedResultInfo**(`data?`): [`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md) |

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:184678](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184678)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

application id received in a POST request

#### Implementation of

[IAppDataAppleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[app_id](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#app_id)

#### Defined in

[main.ts:184654](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184654)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IAppDataAppleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:184663](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184663)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataAppleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:184668](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184668)

___


### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found app info

#### Implementation of

[IAppDataAppleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[items](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:184674](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184674)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array

#### Implementation of

[IAppDataAppleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:184672](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184672)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataAppleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:184660](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184660)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataAppleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:184658](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184658)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataAppleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:184656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184656)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[IAppDataAppleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/IAppDataAppleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:184670](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184670)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:184687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184687)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:184716](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184716)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppInfoTaskGetAdvancedResultInfo`](AppDataAppleAppInfoTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:184709](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L184709)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")