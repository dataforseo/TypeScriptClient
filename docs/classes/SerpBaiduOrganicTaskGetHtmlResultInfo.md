[Documentation](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTaskGetHtmlResultInfo

# Class: SerpBaiduOrganicTaskGetHtmlResultInfo

## Implements

- [`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTaskGetHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpBaiduOrganicTaskGetHtmlResultInfo.md#datetime)
- [items](SerpBaiduOrganicTaskGetHtmlResultInfo.md#items)
- [items\_count](SerpBaiduOrganicTaskGetHtmlResultInfo.md#items_count)
- [keyword](SerpBaiduOrganicTaskGetHtmlResultInfo.md#keyword)
- [language\_code](SerpBaiduOrganicTaskGetHtmlResultInfo.md#language_code)
- [location\_code](SerpBaiduOrganicTaskGetHtmlResultInfo.md#location_code)
- [se\_domain](SerpBaiduOrganicTaskGetHtmlResultInfo.md#se_domain)
- [type](SerpBaiduOrganicTaskGetHtmlResultInfo.md#type)

### Methods

- [init](SerpBaiduOrganicTaskGetHtmlResultInfo.md#init)
- [toJSON](SerpBaiduOrganicTaskGetHtmlResultInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTaskGetHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTaskGetHtmlResultInfo**(`data?`): [`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTaskGetHtmlResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md) |

#### Returns

[`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:67428

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[datetime](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#datetime)

#### Defined in

main.ts:67420

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[items](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#items)

#### Defined in

main.ts:67424

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[items_count](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#items_count)

#### Defined in

main.ts:67422

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[keyword](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#keyword)

#### Defined in

main.ts:67407

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[language_code](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#language_code)

#### Defined in

main.ts:67415

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[location_code](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#location_code)

#### Defined in

main.ts:67413

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[se_domain](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:67411

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBaiduOrganicTaskGetHtmlResultInfo](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md).[type](../interfaces/ISerpBaiduOrganicTaskGetHtmlResultInfo.md#type)

#### Defined in

main.ts:67409

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

main.ts:67437

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

main.ts:67465

___

### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTaskGetHtmlResultInfo`](SerpBaiduOrganicTaskGetHtmlResultInfo.md)

#### Defined in

main.ts:67458
