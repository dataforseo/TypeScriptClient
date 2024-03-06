[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpBingOrganicLiveAdvancedResultInfo

# Class: SerpBingOrganicLiveAdvancedResultInfo

## Implements

- [`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpBingOrganicLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpBingOrganicLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpBingOrganicLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpBingOrganicLiveAdvancedResultInfo.md#item_types)
- [items](SerpBingOrganicLiveAdvancedResultInfo.md#items)
- [items\_count](SerpBingOrganicLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpBingOrganicLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpBingOrganicLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpBingOrganicLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpBingOrganicLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpBingOrganicLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpBingOrganicLiveAdvancedResultInfo.md#spell)
- [type](SerpBingOrganicLiveAdvancedResultInfo.md#type)

### Methods

- [init](SerpBingOrganicLiveAdvancedResultInfo.md#init)
- [toJSON](SerpBingOrganicLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpBingOrganicLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpBingOrganicLiveAdvancedResultInfo**(`data?`): [`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md) |

#### Returns

[`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:55245](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55245)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:55222](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55222)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:55227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55227)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:55235](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55235)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items featured in the faq_box

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[items](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#items)

#### Defined in

[main.ts:55241](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55241)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:55239](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55239)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:55211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55211)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:55219](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55219)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:55217](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55217)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:55215](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55215)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:55237](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55237)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:55230](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55230)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpBingOrganicLiveAdvancedResultInfo](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[type](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#type)

#### Defined in

[main.ts:55213](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55213)

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

[main.ts:55254](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55254)

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

[main.ts:55290](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55290)

___


### fromJS

▸ **fromJS**(`data`): [`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:55283](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L55283)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")