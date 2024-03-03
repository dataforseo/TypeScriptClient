[Documentation](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTaskGetHtmlResultInfo

# Class: AppDataGoogleAppListTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppListTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](AppDataGoogleAppListTaskGetHtmlResultInfo.md#datetime)
- [items](AppDataGoogleAppListTaskGetHtmlResultInfo.md#items)
- [items\_count](AppDataGoogleAppListTaskGetHtmlResultInfo.md#items_count)
- [keyword](AppDataGoogleAppListTaskGetHtmlResultInfo.md#keyword)
- [language\_code](AppDataGoogleAppListTaskGetHtmlResultInfo.md#language_code)
- [location\_code](AppDataGoogleAppListTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](AppDataGoogleAppListTaskGetHtmlResultInfo.md#se_domain)
- [type](AppDataGoogleAppListTaskGetHtmlResultInfo.md#type)

### Methods

- [init](AppDataGoogleAppListTaskGetHtmlResultInfo.md#init)
- [toJSON](AppDataGoogleAppListTaskGetHtmlResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppListTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppListTaskGetHtmlResultInfo**(`data?`): [`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppListTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md) |

#### Returns

[`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:179171

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[datetime](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:179163

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[items](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:179167

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[items_count](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:179165

___

### keyword

• `Optional` **keyword**: `string`

app collection received in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[keyword](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:179150

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[language_code](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:179158

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[location_code](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:179156

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:179154

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[type](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:179152

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

main.ts:179180

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

main.ts:179208

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppListTaskGetHtmlResultInfo`](AppDataGoogleAppListTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:179201
