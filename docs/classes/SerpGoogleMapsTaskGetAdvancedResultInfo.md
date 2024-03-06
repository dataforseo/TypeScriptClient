[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleMapsTaskGetAdvancedResultInfo

# Class: SerpGoogleMapsTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleMapsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleMapsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleMapsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleMapsTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleMapsTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleMapsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleMapsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleMapsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleMapsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleMapsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleMapsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleMapsTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleMapsTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleMapsTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleMapsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleMapsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleMapsTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:38852](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38852)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results
Note: to check location-specific results, follow the provided check url, scroll up and down, then click the “Search this area” button

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:38829](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38829)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:38834](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38834)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
maps_search, maps_paid_item

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:38842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38842)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:38848](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38848)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:38846](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38846)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:38817](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38817)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:38825](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38825)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:38823](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38823)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:38821](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38821)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:38844](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38844)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:38837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38837)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:38819](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38819)

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

[main.ts:38861](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38861)

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

[main.ts:38897](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38897)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:38890](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L38890)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")