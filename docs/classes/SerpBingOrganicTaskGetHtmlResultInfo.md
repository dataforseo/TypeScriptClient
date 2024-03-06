[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskGetHtmlResultInfo

# Class: SerpBingOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpBingOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](SerpBingOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpBingOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpBingOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpBingOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpBingOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpBingOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpBingOrganicTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpBingOrganicTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpBingOrganicTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskGetHtmlResultInfo**(`data?`): [`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:54754](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54754)

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

[main.ts:54746](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54746)

___


### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

[main.ts:54750](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54750)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

[main.ts:54748](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54748)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

[main.ts:54733](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54733)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

[main.ts:54741](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54741)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

[main.ts:54739](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54739)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

[main.ts:54737](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54737)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpBingOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

[main.ts:54735](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54735)

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

[main.ts:54763](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54763)

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

[main.ts:54791](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54791)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskGetHtmlResultInfo`](SerpBingOrganicTaskGetHtmlResultInfo.md)

#### Defined in

[main.ts:54784](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54784)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")