[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsLiveAdvancedResultInfo

# Class: SerpGoogleNewsLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleNewsLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleNewsLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleNewsLiveAdvancedResultInfo.md#item_types)
- [items](SerpGoogleNewsLiveAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleNewsLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleNewsLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleNewsLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleNewsLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleNewsLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleNewsLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleNewsLiveAdvancedResultInfo.md#spell)
- [type](SerpGoogleNewsLiveAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleNewsLiveAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleNewsLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleNewsLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsLiveAdvancedResultInfo**(`data?`): [`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:43131](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43131)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:43108](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43108)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:43113](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43113)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
top_stories, news_search

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:43121](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43121)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#items)

#### Defined in

[main.ts:43127](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43127)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:43125](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43125)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:43097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43097)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:43105](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43105)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:43103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43103)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:43101](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43101)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:43123](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43123)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:43116](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43116)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleNewsLiveAdvancedResultInfo](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#type)

#### Defined in

[main.ts:43099](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43099)

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

[main.ts:43140](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43140)

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

[main.ts:43176](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43176)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:43169](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43169)
