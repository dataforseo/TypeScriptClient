[Documentation](../README.md) / [Exports](../modules.md) / SerpYahooOrganicLiveHtmlResultInfo

# Class: SerpYahooOrganicLiveHtmlResultInfo

## Implements

- [`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicLiveHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpYahooOrganicLiveHtmlResultInfo.md#datetime)
- [items](SerpYahooOrganicLiveHtmlResultInfo.md#items)
- [items\_count](SerpYahooOrganicLiveHtmlResultInfo.md#items_count)
- [keyword](SerpYahooOrganicLiveHtmlResultInfo.md#keyword)
- [language\_code](SerpYahooOrganicLiveHtmlResultInfo.md#language_code)
- [location\_code](SerpYahooOrganicLiveHtmlResultInfo.md#location_code)
- [se\_domain](SerpYahooOrganicLiveHtmlResultInfo.md#se_domain)
- [type](SerpYahooOrganicLiveHtmlResultInfo.md#type)

### Methods

- [init](SerpYahooOrganicLiveHtmlResultInfo.md#init)
- [toJSON](SerpYahooOrganicLiveHtmlResultInfo.md#tojson)
- [fromJS](SerpYahooOrganicLiveHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicLiveHtmlResultInfo**(`data?`): [`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicLiveHtmlResultInfo`](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md) |

#### Returns

[`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:65150

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYahooOrganicLiveHtmlResultInfo](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[datetime](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:65142

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpYahooOrganicLiveHtmlResultInfo](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[items](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:65146

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYahooOrganicLiveHtmlResultInfo](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[items_count](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:65144

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpYahooOrganicLiveHtmlResultInfo](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[keyword](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:65129

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYahooOrganicLiveHtmlResultInfo](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[language_code](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:65137

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYahooOrganicLiveHtmlResultInfo](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[location_code](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:65135

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYahooOrganicLiveHtmlResultInfo](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[se_domain](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:65133

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpYahooOrganicLiveHtmlResultInfo](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md).[type](../interfaces/ISerpYahooOrganicLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:65131

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

main.ts:65159

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

main.ts:65187

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicLiveHtmlResultInfo`](SerpYahooOrganicLiveHtmlResultInfo.md)

#### Defined in

main.ts:65180
