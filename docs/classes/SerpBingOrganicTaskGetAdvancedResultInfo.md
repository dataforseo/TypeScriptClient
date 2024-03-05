[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicTaskGetAdvancedResultInfo

# Class: SerpBingOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpBingOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpBingOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpBingOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpBingOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpBingOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpBingOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpBingOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpBingOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpBingOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpBingOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpBingOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](SerpBingOrganicTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpBingOrganicTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpBingOrganicTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpBingOrganicTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicTaskGetAdvancedResultInfo**(`data?`): [`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:54506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54506)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:54482](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54482)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:54487](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54487)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:54495](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54495)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:54502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54502)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:54499](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54499)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:54471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54471)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:54479](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54479)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:54477](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54477)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:54475](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54475)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:54497](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54497)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:54490](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54490)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:54473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54473)

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

[main.ts:54515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54515)

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

[main.ts:54551](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54551)

___

### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:54544](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L54544)
