[Documentation](../README.md) / [Exports](../modules.md) / AppDataAppleAppListTaskGetAdvancedResultInfo

# Class: AppDataAppleAppListTaskGetAdvancedResultInfo

## Implements

- [`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataAppleAppListTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](AppDataAppleAppListTaskGetAdvancedResultInfo.md#check_url)
- [datetime](AppDataAppleAppListTaskGetAdvancedResultInfo.md#datetime)
- [items](AppDataAppleAppListTaskGetAdvancedResultInfo.md#items)
- [items\_count](AppDataAppleAppListTaskGetAdvancedResultInfo.md#items_count)
- [keyword](AppDataAppleAppListTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](AppDataAppleAppListTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](AppDataAppleAppListTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](AppDataAppleAppListTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](AppDataAppleAppListTaskGetAdvancedResultInfo.md#se_results_count)

### Methods

- [init](AppDataAppleAppListTaskGetAdvancedResultInfo.md#init)
- [toJSON](AppDataAppleAppListTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](AppDataAppleAppListTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataAppleAppListTaskGetAdvancedResultInfo**(`data?`): [`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataAppleAppListTaskGetAdvancedResultInfo`](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md) |

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:185572

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
in this case, the value will be null

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:185555

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:185560

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found apps
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[items](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:185568

___

### items\_count

• `Optional` **items\_count**: `number`

the number of app items in the results array
you can get more results by using the depth parameter when setting a task

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:185565

___

### keyword

• `Optional` **keyword**: `string`

app collection received in a POST array

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[keyword](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:185546

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:185552

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:185550

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:185548

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[IAppDataAppleAppListTaskGetAdvancedResultInfo](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/IAppDataAppleAppListTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:185562

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

main.ts:185581

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

main.ts:185610

___

### fromJS

▸ **fromJS**(`data`): [`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataAppleAppListTaskGetAdvancedResultInfo`](AppDataAppleAppListTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:185603
