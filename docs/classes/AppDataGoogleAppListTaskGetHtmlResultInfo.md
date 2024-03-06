[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppListTaskGetHtmlResultInfo

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

[main.ts:179051](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179051)

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

[main.ts:179043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179043)

___


### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[items](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:179047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179047)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[items_count](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:179045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179045)

___


### keyword

• `Optional` **keyword**: `string`

app collection received in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[keyword](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:179030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179030)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[language_code](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:179038](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179038)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[location_code](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:179036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179036)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:179034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179034)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAppDataGoogleAppListTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md).[type](../interfaces/IAppDataGoogleAppListTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:179032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179032)

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

[main.ts:179060](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179060)

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

[main.ts:179088](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179088)

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

[main.ts:179081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L179081)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")