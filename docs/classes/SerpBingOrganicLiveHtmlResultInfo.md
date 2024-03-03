[Documentation](../README.md) / [Exports](../modules.md) / SerpBingOrganicLiveHtmlResultInfo

# Class: SerpBingOrganicLiveHtmlResultInfo

## Implements

- [`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicLiveHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpBingOrganicLiveHtmlResultInfo.md#datetime)
- [items](SerpBingOrganicLiveHtmlResultInfo.md#items)
- [items\_count](SerpBingOrganicLiveHtmlResultInfo.md#items_count)
- [keyword](SerpBingOrganicLiveHtmlResultInfo.md#keyword)
- [language\_code](SerpBingOrganicLiveHtmlResultInfo.md#language_code)
- [location\_code](SerpBingOrganicLiveHtmlResultInfo.md#location_code)
- [se\_domain](SerpBingOrganicLiveHtmlResultInfo.md#se_domain)
- [type](SerpBingOrganicLiveHtmlResultInfo.md#type)

### Methods

- [init](SerpBingOrganicLiveHtmlResultInfo.md#init)
- [toJSON](SerpBingOrganicLiveHtmlResultInfo.md#tojson)
- [fromJS](SerpBingOrganicLiveHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicLiveHtmlResultInfo**(`data?`): [`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicLiveHtmlResultInfo`](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md) |

#### Returns

[`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:55636

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingOrganicLiveHtmlResultInfo](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[datetime](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:55628

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpBingOrganicLiveHtmlResultInfo](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[items](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:55632

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingOrganicLiveHtmlResultInfo](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[items_count](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:55630

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingOrganicLiveHtmlResultInfo](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[keyword](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:55615

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingOrganicLiveHtmlResultInfo](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[language_code](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:55623

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingOrganicLiveHtmlResultInfo](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[location_code](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:55621

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingOrganicLiveHtmlResultInfo](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[se_domain](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:55619

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingOrganicLiveHtmlResultInfo](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md).[type](../interfaces/ISerpBingOrganicLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:55617

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

main.ts:55645

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

main.ts:55673

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicLiveHtmlResultInfo`](SerpBingOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:55666
