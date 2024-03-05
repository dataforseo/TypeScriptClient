[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskGetHtmlResultInfo

# Class: SerpNaverOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpNaverOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](SerpNaverOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpNaverOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpNaverOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpNaverOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpNaverOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpNaverOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpNaverOrganicTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpNaverOrganicTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpNaverOrganicTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskGetHtmlResultInfo**(`data?`): [`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:68558](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68558)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResultInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:68550](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68550)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResultInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:68554](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68554)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResultInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:68552](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68552)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResultInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:68537](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68537)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResultInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:68545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68545)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResultInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:68543](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68543)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResultInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:68541](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68541)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpNaverOrganicTaskGetHtmlResultInfo](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpNaverOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:68539](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68539)

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

[main.ts:68567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68567)

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

[main.ts:68595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68595)

___

### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskGetHtmlResultInfo`](SerpNaverOrganicTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:68588](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68588)
