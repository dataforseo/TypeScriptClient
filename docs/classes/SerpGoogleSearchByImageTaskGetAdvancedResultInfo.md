[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleSearchByImageTaskGetAdvancedResultInfo

# Class: SerpGoogleSearchByImageTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#datetime)
- [image\_url](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#image_url)
- [item\_types](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleSearchByImageTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:48054](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48054)

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

[main.ts:48029](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48029)

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

[main.ts:48034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48034)

___

### image\_url

• `Optional` **image\_url**: `string`

URL specified in a POST array

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[image_url](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#image_url)

#### Defined in

[main.ts:48016](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48016)

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
organic,
images

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

[main.ts:48043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48043)

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items)

#### Defined in

[main.ts:48050](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48050)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

[main.ts:48047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48047)

___

### keyword

• `Optional` **keyword**: `string`

keyword Google associated with the specified image

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

[main.ts:48018](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48018)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

[main.ts:48026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48026)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

[main.ts:48024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48024)

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

[main.ts:48022](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48022)

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

[main.ts:48045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48045)

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#spell)

#### Defined in

[main.ts:48037](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48037)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleSearchByImageTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#type)

#### Defined in

[main.ts:48020](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48020)

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

[main.ts:48063](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48063)

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

[main.ts:48100](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48100)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Defined in

[main.ts:48093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L48093)
