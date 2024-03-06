[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / AppDataGoogleAppReviewsTaskGetHtmlResultInfo

# Class: AppDataGoogleAppReviewsTaskGetHtmlResultInfo

## Implements

- [`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#constructor)

### Properties

- [app\_id](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#app_id)
- [datetime](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#datetime)
- [items](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items)
- [items\_count](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items_count)
- [language\_code](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#se_domain)
- [type](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#type)

### Methods

- [init](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#init)
- [toJSON](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#tojson)
- [fromJS](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new AppDataGoogleAppReviewsTaskGetHtmlResultInfo**(`data?`): [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAppDataGoogleAppReviewsTaskGetHtmlResultInfo`](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md) |

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:181699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181699)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

app id received in a POST array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[app_id](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#app_id)

#### Defined in

[main.ts:181678](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181678)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[datetime](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:181691](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181691)

___


### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

HTML pages and related data

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[items](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:181695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181695)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[items_count](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:181693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181693)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[language_code](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:181686](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181686)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[location_code](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:181684](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181684)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[se_domain](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:181682](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181682)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IAppDataGoogleAppReviewsTaskGetHtmlResultInfo](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md).[type](../interfaces/IAppDataGoogleAppReviewsTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:181680](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181680)

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

[main.ts:181708](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181708)

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

[main.ts:181736](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181736)

___


### fromJS

▸ **fromJS**(`data`): [`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AppDataGoogleAppReviewsTaskGetHtmlResultInfo`](AppDataGoogleAppReviewsTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:181729](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L181729)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")