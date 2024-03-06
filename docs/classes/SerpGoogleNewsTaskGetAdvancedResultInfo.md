[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsTaskGetAdvancedResultInfo

# Class: SerpGoogleNewsTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleNewsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleNewsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleNewsTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleNewsTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleNewsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleNewsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleNewsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleNewsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleNewsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleNewsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleNewsTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleNewsTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleNewsTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleNewsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleNewsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleNewsTaskGetAdvancedResultInfo`](SerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleNewsTaskGetAdvancedResultInfo`](SerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:42652](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42652)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:42628](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42628)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:42633](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42633)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
top_stories, news_search

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:42641](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42641)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:42648](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42648)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:42645](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42645)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:42617](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42617)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:42625](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42625)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:42623](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42623)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:42621](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42621)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:42643](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42643)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:42636](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42636)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleNewsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:42619](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42619)

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

[main.ts:42661](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42661)

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

[main.ts:42697](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42697)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsTaskGetAdvancedResultInfo`](SerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsTaskGetAdvancedResultInfo`](SerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:42690](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L42690)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")