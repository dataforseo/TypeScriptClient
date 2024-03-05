[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTaskGetHtmlResultInfo

# Class: SerpGoogleLocalFinderTaskGetHtmlResultInfo

## Implements

- [`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#datetime)
- [items](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTaskGetHtmlResultInfo**(`data?`): [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTaskGetHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:40764](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40764)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:40756](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40756)

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:40760](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40760)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:40758](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40758)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:40743](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40743)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:40751](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40751)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:40749](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40749)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:40747](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40747)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleLocalFinderTaskGetHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpGoogleLocalFinderTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:40745](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40745)

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

[main.ts:40773](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40773)

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

[main.ts:40801](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40801)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTaskGetHtmlResultInfo`](SerpGoogleLocalFinderTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:40794](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L40794)
