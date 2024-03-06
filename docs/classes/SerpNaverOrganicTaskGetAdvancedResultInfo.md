[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpNaverOrganicTaskGetAdvancedResultInfo

# Class: SerpNaverOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpNaverOrganicTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpNaverOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpNaverOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpNaverOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpNaverOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpNaverOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpNaverOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpNaverOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpNaverOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpNaverOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpNaverOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpNaverOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](SerpNaverOrganicTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpNaverOrganicTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpNaverOrganicTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpNaverOrganicTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpNaverOrganicTaskGetAdvancedResultInfo**(`data?`): [`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:68310](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68310)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:68286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68286)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:68291](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68291)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:68299](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68299)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:68306](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68306)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:68303](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68303)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:68275](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68275)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:68283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68283)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:68281](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68281)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:68279](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68279)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:68301](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68301)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:68294](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68294)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpNaverOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:68277](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68277)

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

[main.ts:68319](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68319)

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

[main.ts:68355](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68355)

___


### fromJS

▸ **fromJS**(`data`): [`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:68348](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L68348)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")