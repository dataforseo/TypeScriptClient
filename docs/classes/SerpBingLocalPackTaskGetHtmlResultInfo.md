[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTaskGetHtmlResultInfo

# Class: SerpBingLocalPackTaskGetHtmlResultInfo

## Implements

- [`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpBingLocalPackTaskGetHtmlResultInfo.md#datetime)
- [items](SerpBingLocalPackTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpBingLocalPackTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpBingLocalPackTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpBingLocalPackTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpBingLocalPackTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpBingLocalPackTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpBingLocalPackTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpBingLocalPackTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpBingLocalPackTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpBingLocalPackTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTaskGetHtmlResultInfo**(`data?`): [`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTaskGetHtmlResultInfo`](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:56498](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56498)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResultInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:56490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56490)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResultInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:56494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56494)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResultInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:56492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56492)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResultInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:56477](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56477)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResultInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:56485](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56485)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResultInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:56483](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56483)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResultInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:56481](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56481)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingLocalPackTaskGetHtmlResultInfo](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpBingLocalPackTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:56479](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56479)

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

[main.ts:56507](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56507)

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

[main.ts:56535](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56535)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTaskGetHtmlResultInfo`](SerpBingLocalPackTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:56528](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56528)
