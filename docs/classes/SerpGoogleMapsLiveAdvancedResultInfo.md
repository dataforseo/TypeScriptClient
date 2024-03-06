[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleMapsLiveAdvancedResultInfo

# Class: SerpGoogleMapsLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleMapsLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleMapsLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleMapsLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleMapsLiveAdvancedResultInfo.md#item_types)
- [items](SerpGoogleMapsLiveAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleMapsLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleMapsLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleMapsLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleMapsLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleMapsLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleMapsLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleMapsLiveAdvancedResultInfo.md#spell)
- [type](SerpGoogleMapsLiveAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleMapsLiveAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleMapsLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleMapsLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleMapsLiveAdvancedResultInfo**(`data?`): [`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:39410](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39410)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results
Note: to check location-specific results, follow the provided check url, scroll up and down, then click the “Search this area” button

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:39387](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39387)

___


### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:39392](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39392)

___


### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
maps_search, maps_paid_item

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:39400](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39400)

___


### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#items)

#### Defined in

[main.ts:39406](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39406)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:39404](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39404)

___


### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:39375](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39375)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:39383](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39383)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:39381](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39381)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:39379](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39379)

___


### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:39402](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39402)

___


### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:39395](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39395)

___


### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleMapsLiveAdvancedResultInfo](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#type)

#### Defined in

[main.ts:39377](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39377)

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

[main.ts:39419](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39419)

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

[main.ts:39455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39455)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

#### Defined in

[main.ts:39448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39448)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")