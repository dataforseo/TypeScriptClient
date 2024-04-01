[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderLiveHtmlResultInfo

# Class: SerpGoogleLocalFinderLiveHtmlResultInfo

## Implements

- [`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderLiveHtmlResultInfo.md#constructor)

### Properties

- [datetime](SerpGoogleLocalFinderLiveHtmlResultInfo.md#datetime)
- [items](SerpGoogleLocalFinderLiveHtmlResultInfo.md#items)
- [items\_count](SerpGoogleLocalFinderLiveHtmlResultInfo.md#items_count)
- [keyword](SerpGoogleLocalFinderLiveHtmlResultInfo.md#keyword)
- [language\_code](SerpGoogleLocalFinderLiveHtmlResultInfo.md#language_code)
- [location\_code](SerpGoogleLocalFinderLiveHtmlResultInfo.md#location_code)
- [se\_domain](SerpGoogleLocalFinderLiveHtmlResultInfo.md#se_domain)
- [type](SerpGoogleLocalFinderLiveHtmlResultInfo.md#type)

### Methods

- [init](SerpGoogleLocalFinderLiveHtmlResultInfo.md#init)
- [toJSON](SerpGoogleLocalFinderLiveHtmlResultInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderLiveHtmlResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderLiveHtmlResultInfo**(`data?`): [`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderLiveHtmlResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md) |

#### Returns

[`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Defined in

main.ts:42517

## Properties

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[datetime](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#datetime)

#### Defined in

main.ts:42509

___

### items

• `Optional` **items**: [`HtmlItem`](HtmlItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[items](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items)

#### Defined in

main.ts:42513

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[items_count](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#items_count)

#### Defined in

main.ts:42511

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[keyword](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#keyword)

#### Defined in

main.ts:42496

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[language_code](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#language_code)

#### Defined in

main.ts:42504

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[location_code](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#location_code)

#### Defined in

main.ts:42502

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[se_domain](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#se_domain)

#### Defined in

main.ts:42500

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleLocalFinderLiveHtmlResultInfo](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md).[type](../interfaces/ISerpGoogleLocalFinderLiveHtmlResultInfo.md#type)

#### Defined in

main.ts:42498

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

main.ts:42526

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

main.ts:42554

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderLiveHtmlResultInfo`](SerpGoogleLocalFinderLiveHtmlResultInfo.md)

#### Defined in

main.ts:42547
