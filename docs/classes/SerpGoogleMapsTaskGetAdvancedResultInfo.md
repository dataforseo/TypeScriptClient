[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleMapsTaskGetAdvancedResultInfo

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

main.ts:38994

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results
Note: to check location-specific results, follow the provided check url, scroll up and down, then click the “Search this area” button

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:38971

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

main.ts:38976

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

main.ts:38984

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:38990

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:38988

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:38959

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:38967

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:38965

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:38963

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:38986

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:38979

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleMapsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:38961

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

main.ts:39003

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

main.ts:39039

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

main.ts:39032
