[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataAppleAppSearchesTaskGetAdvancedResultInfo

# Class: AppDataAppleAppSearchesTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#check_url)
- [datetime](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#datetime)
- [items](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items)
- [items\_count](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items_count)
- [keyword](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_results_count)

### Methods

- [init](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#init)
- [toJSON](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppSearchesTaskGetAdvancedResultInfo**(`data?`): [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppSearchesTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md) |

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:183656](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183656)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:183641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183641)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:183646](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183646)

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[items](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:183652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183652)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:183650](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183650)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST request

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[keyword](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:183632](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183632)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:183638](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183638)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:183636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183636)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:183634](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183634)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[IAppDataAppleAppSearchesTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/IAppDataAppleAppSearchesTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:183648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183648)

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

[main.ts:183665](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183665)

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

[main.ts:183694](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183694)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppSearchesTaskGetAdvancedResultInfo`](AppDataAppleAppSearchesTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:183687](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L183687)
