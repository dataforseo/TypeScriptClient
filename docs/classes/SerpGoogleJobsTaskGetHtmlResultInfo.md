[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleJobsTaskGetHtmlResultInfo

# Class: SerpGoogleJobsTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleJobsTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleJobsTaskGetHtmlResultInfo.md#datetime)
- [items](SerpGoogleJobsTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpGoogleJobsTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleJobsTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleJobsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleJobsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleJobsTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpGoogleJobsTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleJobsTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpGoogleJobsTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleJobsTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleJobsTaskGetHtmlResultInfo**(`data?`): [`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleJobsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:49556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49556)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:49548](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49548)

___


### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:49552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49552)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:49550](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49550)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:49535](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49535)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:49543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49543)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:49541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49541)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:49539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49539)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleJobsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpGoogleJobsTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:49537](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49537)

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

[main.ts:49565](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49565)

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

[main.ts:49593](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49593)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleJobsTaskGetHtmlResultInfo`](SerpGoogleJobsTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:49586](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L49586)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")