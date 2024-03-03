[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppInfoTaskGetHtmlResultInfo

# Class: AppDataGoogleAppInfoTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#constructor)

### Properties

- [app\_id](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#app_id)
- [datetime](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#datetime)
- [items](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items)
- [items\_count](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items_count)
- [language\_code](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#language_code)
- [location\_code](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#se_domain)
- [type](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#type)

### Methods

- [init](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#init)
- [toJSON](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppInfoTaskGetHtmlResultInfo**(`data?`): [`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppInfoTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md) |

#### Returns

[`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:180511

## Properties

### app\_id

• `Optional` **app\_id**: `string`

application ID received in a POST request

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[app_id](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#app_id)

#### Defined in

main.ts:180490

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[datetime](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:180503

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[items](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:180507

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[items_count](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:180505

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[language_code](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:180498

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[location_code](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:180496

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:180494

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAppDataGoogleAppInfoTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md).[type](../interfaces/IAppDataGoogleAppInfoTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:180492

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

main.ts:180520

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

main.ts:180548

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppInfoTaskGetHtmlResultInfo`](AppDataGoogleAppInfoTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:180541
