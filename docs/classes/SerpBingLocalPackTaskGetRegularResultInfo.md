[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingLocalPackTaskGetRegularResultInfo

# Class: SerpBingLocalPackTaskGetRegularResultInfo

## Implements

- [`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingLocalPackTaskGetRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpBingLocalPackTaskGetRegularResultInfo.md#check_url)
- [datetime](SerpBingLocalPackTaskGetRegularResultInfo.md#datetime)
- [item\_types](SerpBingLocalPackTaskGetRegularResultInfo.md#item_types)
- [items](SerpBingLocalPackTaskGetRegularResultInfo.md#items)
- [items\_count](SerpBingLocalPackTaskGetRegularResultInfo.md#items_count)
- [keyword](SerpBingLocalPackTaskGetRegularResultInfo.md#keyword)
- [language\_code](SerpBingLocalPackTaskGetRegularResultInfo.md#language_code)
- [location\_code](SerpBingLocalPackTaskGetRegularResultInfo.md#location_code)
- [se\_domain](SerpBingLocalPackTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpBingLocalPackTaskGetRegularResultInfo.md#se_results_count)
- [spell](SerpBingLocalPackTaskGetRegularResultInfo.md#spell)
- [type](SerpBingLocalPackTaskGetRegularResultInfo.md#type)

### Methods

- [init](SerpBingLocalPackTaskGetRegularResultInfo.md#init)
- [toJSON](SerpBingLocalPackTaskGetRegularResultInfo.md#tojson)
- [fromJS](SerpBingLocalPackTaskGetRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingLocalPackTaskGetRegularResultInfo**(`data?`): [`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md) |

#### Returns

[`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Defined in

[main.ts:56251](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56251)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[check_url](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#check_url)

#### Defined in

[main.ts:56228](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56228)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[datetime](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#datetime)

#### Defined in

[main.ts:56233](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56233)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[item_types](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#item_types)

#### Defined in

[main.ts:56241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56241)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[items](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#items)

#### Defined in

[main.ts:56247](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56247)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[items_count](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#items_count)

#### Defined in

[main.ts:56245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56245)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[keyword](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#keyword)

#### Defined in

[main.ts:56217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56217)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[language_code](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#language_code)

#### Defined in

[main.ts:56225](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56225)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[location_code](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#location_code)

#### Defined in

[main.ts:56223](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56223)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[se_domain](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#se_domain)

#### Defined in

[main.ts:56221](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56221)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[se_results_count](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

[main.ts:56243](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56243)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[spell](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#spell)

#### Defined in

[main.ts:56236](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56236)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingLocalPackTaskGetRegularResultInfo](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[type](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#type)

#### Defined in

[main.ts:56219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56219)

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

[main.ts:56260](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56260)

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

[main.ts:56296](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56296)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Defined in

[main.ts:56289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L56289)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")