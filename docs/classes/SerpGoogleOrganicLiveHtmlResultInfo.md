[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicLiveHtmlResultInfo

# Class: SerpGoogleOrganicLiveHtmlResultInfo

## Implements

- [`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicLiveHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleOrganicLiveHtmlResultInfo.md#datetime)
- [items](SerpGoogleOrganicLiveHtmlResultInfo.md#items)
- [items\_count](SerpGoogleOrganicLiveHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleOrganicLiveHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleOrganicLiveHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleOrganicLiveHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleOrganicLiveHtmlResultInfo.md#se_domain)
- [type](SerpGoogleOrganicLiveHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleOrganicLiveHtmlResultInfo.md#init)
- [toJSON](SerpGoogleOrganicLiveHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleOrganicLiveHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicLiveHtmlResultInfo**(`data?`): [`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicLiveHtmlResultInfo`](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md) |

#### Returns

[`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Defined in

[main.ts:37118](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37118)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResultInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:37110](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37110)

___


### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResultInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[items](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#items)

#### Defined in

[main.ts:37114](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37114)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResultInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:37112](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37112)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResultInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:37097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37097)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResultInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:37105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37105)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResultInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:37103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37103)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResultInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:37101](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37101)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleOrganicLiveHtmlResultInfo](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md).[type](../interfaces/ISerpGoogleOrganicLiveHtmlResultInfo.md#type)

#### Defined in

[main.ts:37099](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37099)

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

[main.ts:37127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37127)

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

[main.ts:37155](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37155)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicLiveHtmlResultInfo`](SerpGoogleOrganicLiveHtmlResultInfo.md)

#### Defined in

[main.ts:37148](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L37148)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")