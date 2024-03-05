[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackLiveRegularResultInfo

# Class: SerpBingLocalPackLiveRegularResultInfo

## Implements

- [`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackLiveRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpBingLocalPackLiveRegularResultInfo.md#check_url)
- [datetime](SerpBingLocalPackLiveRegularResultInfo.md#datetime)
- [item\_types](SerpBingLocalPackLiveRegularResultInfo.md#item_types)
- [items](SerpBingLocalPackLiveRegularResultInfo.md#items)
- [items\_count](SerpBingLocalPackLiveRegularResultInfo.md#items_count)
- [keyword](SerpBingLocalPackLiveRegularResultInfo.md#keyword)
- [language\_code](SerpBingLocalPackLiveRegularResultInfo.md#language_code)
- [location\_code](SerpBingLocalPackLiveRegularResultInfo.md#location_code)
- [se\_domain](SerpBingLocalPackLiveRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpBingLocalPackLiveRegularResultInfo.md#se_results_count)
- [spell](SerpBingLocalPackLiveRegularResultInfo.md#spell)
- [type](SerpBingLocalPackLiveRegularResultInfo.md#type)

### Methods

- [init](SerpBingLocalPackLiveRegularResultInfo.md#init)
- [toJSON](SerpBingLocalPackLiveRegularResultInfo.md#tojson)
- [fromJS](SerpBingLocalPackLiveRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackLiveRegularResultInfo**(`data?`): [`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md) |

#### Returns

[`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

#### Defined in

[main.ts:56729](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56729)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[check_url](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#check_url)

#### Defined in

[main.ts:56706](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56706)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[datetime](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#datetime)

#### Defined in

[main.ts:56711](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56711)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[item_types](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#item_types)

#### Defined in

[main.ts:56719](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56719)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[items](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#items)

#### Defined in

[main.ts:56725](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56725)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[items_count](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#items_count)

#### Defined in

[main.ts:56723](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56723)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[keyword](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#keyword)

#### Defined in

[main.ts:56695](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56695)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[language_code](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#language_code)

#### Defined in

[main.ts:56703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56703)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[location_code](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#location_code)

#### Defined in

[main.ts:56701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56701)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[se_domain](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#se_domain)

#### Defined in

[main.ts:56699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56699)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[se_results_count](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#se_results_count)

#### Defined in

[main.ts:56721](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56721)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[spell](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#spell)

#### Defined in

[main.ts:56714](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56714)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingLocalPackLiveRegularResultInfo](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[type](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#type)

#### Defined in

[main.ts:56697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56697)

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

[main.ts:56738](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56738)

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

[main.ts:56774](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56774)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

#### Defined in

[main.ts:56767](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56767)
