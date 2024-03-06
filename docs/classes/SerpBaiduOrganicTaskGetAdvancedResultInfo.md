[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBaiduOrganicTaskGetAdvancedResultInfo

# Class: SerpBaiduOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpBaiduOrganicTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBaiduOrganicTaskGetAdvancedResultInfo**(`data?`): [`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:67036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67036)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:67012](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67012)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:67017](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67017)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video, stocks_box, dictionary, shopping

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:67025](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67025)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:67032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67032)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:67029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67029)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:67001](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67001)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:67009](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67009)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:67007](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67007)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:67005](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67005)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:67027](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67027)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:67020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67020)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBaiduOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:67003](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67003)

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

[main.ts:67045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67045)

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

[main.ts:67081](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67081)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:67074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L67074)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")