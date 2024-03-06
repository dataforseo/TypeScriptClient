[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpYahooOrganicLiveRegularResultInfo

# Class: SerpYahooOrganicLiveRegularResultInfo

## Implements

- [`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicLiveRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpYahooOrganicLiveRegularResultInfo.md#check_url)
- [datetime](SerpYahooOrganicLiveRegularResultInfo.md#datetime)
- [item\_types](SerpYahooOrganicLiveRegularResultInfo.md#item_types)
- [items](SerpYahooOrganicLiveRegularResultInfo.md#items)
- [items\_count](SerpYahooOrganicLiveRegularResultInfo.md#items_count)
- [keyword](SerpYahooOrganicLiveRegularResultInfo.md#keyword)
- [language\_code](SerpYahooOrganicLiveRegularResultInfo.md#language_code)
- [location\_code](SerpYahooOrganicLiveRegularResultInfo.md#location_code)
- [se\_domain](SerpYahooOrganicLiveRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpYahooOrganicLiveRegularResultInfo.md#se_results_count)
- [spell](SerpYahooOrganicLiveRegularResultInfo.md#spell)
- [type](SerpYahooOrganicLiveRegularResultInfo.md#type)

### Methods

- [init](SerpYahooOrganicLiveRegularResultInfo.md#init)
- [toJSON](SerpYahooOrganicLiveRegularResultInfo.md#tojson)
- [fromJS](SerpYahooOrganicLiveRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicLiveRegularResultInfo**(`data?`): [`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md) |

#### Returns

[`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Defined in

[main.ts:64500](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64500)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
You can use it to make sure that we provided exact results

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[check_url](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#check_url)

#### Defined in

[main.ts:64478](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64478)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[datetime](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#datetime)

#### Defined in

[main.ts:64483](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64483)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP
Possible item types: organic

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[item_types](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#item_types)

#### Defined in

[main.ts:64490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64490)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[items](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#items)

#### Defined in

[main.ts:64496](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64496)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[items_count](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#items_count)

#### Defined in

[main.ts:64494](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64494)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[keyword](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#keyword)

#### Defined in

[main.ts:64467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64467)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[language_code](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#language_code)

#### Defined in

[main.ts:64475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64475)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[location_code](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#location_code)

#### Defined in

[main.ts:64473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64473)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[se_domain](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#se_domain)

#### Defined in

[main.ts:64471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64471)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[se_results_count](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#se_results_count)

#### Defined in

[main.ts:64492](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64492)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[spell](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#spell)

#### Defined in

[main.ts:64486](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64486)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpYahooOrganicLiveRegularResultInfo](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[type](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#type)

#### Defined in

[main.ts:64469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64469)

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

[main.ts:64509](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64509)

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

[main.ts:64545](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64545)

___


### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

#### Defined in

[main.ts:64538](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L64538)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")