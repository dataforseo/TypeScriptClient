[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppInfoTaskGetAdvancedResultInfo

# Class: AppDataGoogleAppInfoTaskGetAdvancedResultInfo

## Implements

- [`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [app\_id](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#app_id)
- [check\_url](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#datetime)
- [items](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items)
- [items\_count](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items_count)
- [language\_code](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

### Methods

- [init](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#init)
- [toJSON](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppInfoTaskGetAdvancedResultInfo**(`data?`): [`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppInfoTaskGetAdvancedResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md) |

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:180290

## Properties

### app\_id

• `Optional` **app\_id**: `string`

application id received in a POST request

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[app_id](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#app_id)

#### Defined in

main.ts:180266

___

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[check_url](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:180275

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[datetime](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:180280

___

### items

• `Optional` **items**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)[]

found app info

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[items](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:180286

___

### items\_count

• `Optional` **items\_count**: `number`

the number of items in the results array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[items_count](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:180284

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[language_code](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:180272

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[location_code](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:180270

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:180268

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

the total number of results

#### Implementation of

[IAppDataGoogleAppInfoTaskGetAdvancedResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/IAppDataGoogleAppInfoTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:180282

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

main.ts:180299

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

main.ts:180328

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppInfoTaskGetAdvancedResultInfo`](AppDataGoogleAppInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:180321
