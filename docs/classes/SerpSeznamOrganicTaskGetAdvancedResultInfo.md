[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTaskGetAdvancedResultInfo

# Class: SerpSeznamOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTaskGetAdvancedResultInfo**(`data?`): [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:70420](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70420)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:70396](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70396)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:70401](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70401)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:70409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70409)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:70416](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70416)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:70413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70413)

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:70385](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70385)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:70393](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70393)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:70391](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70391)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:70389](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70389)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:70411](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70411)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:70404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70404)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpSeznamOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:70387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70387)

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

[main.ts:70429](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70429)

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

[main.ts:70465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70465)

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:70458](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L70458)
