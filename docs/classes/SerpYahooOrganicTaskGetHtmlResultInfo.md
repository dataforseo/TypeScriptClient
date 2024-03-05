[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskGetHtmlResultInfo

# Class: SerpYahooOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpYahooOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](SerpYahooOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpYahooOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpYahooOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpYahooOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpYahooOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpYahooOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpYahooOrganicTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpYahooOrganicTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpYahooOrganicTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskGetHtmlResultInfo**(`data?`): [`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:64270](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64270)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResultInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:64262](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64262)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResultInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:64266](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64266)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResultInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:64264](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64264)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResultInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:64249](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64249)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResultInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:64257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64257)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResultInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:64255](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64255)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResultInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:64253](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64253)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpYahooOrganicTaskGetHtmlResultInfo](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpYahooOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:64251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64251)

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

[main.ts:64279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64279)

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

[main.ts:64307](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64307)

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskGetHtmlResultInfo`](SerpYahooOrganicTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:64300](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64300)
