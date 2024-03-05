[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppSearchesTaskGetHtmlResultInfo

# Class: AppDataGoogleAppSearchesTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#datetime)
- [items](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items)
- [items\_count](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items_count)
- [keyword](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#keyword)
- [language\_code](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#language_code)
- [location\_code](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#se_domain)
- [type](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#type)

### Methods

- [init](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#init)
- [toJSON](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppSearchesTaskGetHtmlResultInfo**(`data?`): [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppSearchesTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md) |

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:178041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178041)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[datetime](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:178033](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178033)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[items](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:178037](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178037)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[items_count](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:178035](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178035)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST request

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[keyword](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:178020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178020)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[language_code](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:178028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178028)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[location_code](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:178026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178026)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:178024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178024)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAppDataGoogleAppSearchesTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md).[type](../interfaces/IAppDataGoogleAppSearchesTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:178022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178022)

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

[main.ts:178050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178050)

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

[main.ts:178078](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178078)

___

### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppSearchesTaskGetHtmlResultInfo`](AppDataGoogleAppSearchesTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:178071](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L178071)
