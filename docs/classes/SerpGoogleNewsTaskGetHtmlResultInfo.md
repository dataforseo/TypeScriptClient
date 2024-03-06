[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTaskGetHtmlResultInfo

# Class: SerpGoogleNewsTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleNewsTaskGetHtmlResultInfo.md#datetime)
- [items](SerpGoogleNewsTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpGoogleNewsTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleNewsTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleNewsTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleNewsTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleNewsTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpGoogleNewsTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleNewsTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpGoogleNewsTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleNewsTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsTaskGetHtmlResultInfo**(`data?`): [`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:42900](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42900)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:42892](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42892)

___


### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:42896](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42896)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:42894](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42894)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:42879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42879)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:42887](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42887)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:42885](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42885)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:42883](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42883)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleNewsTaskGetHtmlResultInfo](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpGoogleNewsTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:42881](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42881)

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

[main.ts:42909](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42909)

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

[main.ts:42937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42937)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsTaskGetHtmlResultInfo`](SerpGoogleNewsTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:42930](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42930)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")