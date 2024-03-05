[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsLiveHtmlResultInfo

# Class: SerpGoogleNewsLiveHtmlResultInfo

## Implements

- [`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsLiveHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleNewsLiveHtmlResultInfo.md#datetime)
- [items](SerpGoogleNewsLiveHtmlResultInfo.md#items)
- [items\_count](SerpGoogleNewsLiveHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleNewsLiveHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleNewsLiveHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleNewsLiveHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleNewsLiveHtmlResultInfo.md#se_domain)
- [type](SerpGoogleNewsLiveHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleNewsLiveHtmlResultInfo.md#init)
- [toJSON](SerpGoogleNewsLiveHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleNewsLiveHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsLiveHtmlResultInfo**(`data?`): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsLiveHtmlResultInfo`](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md) |

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Defined in

[main.ts:43378](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43378)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:43370](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43370)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[items](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items)

#### Defined in

[main.ts:43374](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43374)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:43372](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43372)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:43357](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43357)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:43365](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43365)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:43363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43363)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:43361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43361)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleNewsLiveHtmlResultInfo](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md).[type](../interfaces/ISerpGoogleNewsLiveHtmlResultInfo.md#type)

#### Defined in

[main.ts:43359](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43359)

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

[main.ts:43387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43387)

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

[main.ts:43415](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43415)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsLiveHtmlResultInfo`](SerpGoogleNewsLiveHtmlResultInfo.md)

#### Defined in

[main.ts:43408](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43408)
