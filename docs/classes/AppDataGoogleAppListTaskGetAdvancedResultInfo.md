[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppListTaskGetAdvancedResultInfo

## Implements

- [`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#check_url)
- [datetime](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#datetime)
- [items](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#items)
- [items\_count](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#items_count)
- [keyword](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_results_count)

### Methods

- [init](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#init)
- [toJSON](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTaskGetAdvancedResultInfo**(`data?`): [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md) |

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:178829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178829)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:178813](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178813)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:178818](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178818)

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[items](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:178825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178825)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:178823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178823)

___

### keyword

• `Optional` **keyword**: `string`

app collection received in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[keyword](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:178804](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178804)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:178810](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178810)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:178808](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178808)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:178806](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178806)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[IAppDataGoogleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/IAppDataGoogleAppListTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:178820](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178820)

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

[main.ts:178838](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178838)

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

[main.ts:178867](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178867)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTaskGetAdvancedResultInfo`](AppDataGoogleAppListTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:178860](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178860)
