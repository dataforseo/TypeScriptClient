[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleEventsTaskGetAdvancedResultInfo

# Class: SerpGoogleEventsTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleEventsTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleEventsTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleEventsTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleEventsTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleEventsTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleEventsTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleEventsTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleEventsTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleEventsTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleEventsTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleEventsTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleEventsTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleEventsTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleEventsTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleEventsTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:44978

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:44954

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:44959

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:44966

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:44974

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:44972

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:44943

___

### language\_code

• `Optional` **language\_code**: `string`

language code
in this case, the value will be null

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:44952

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:44949

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:44947

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:44970

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:44962

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleEventsTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:44945

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

main.ts:44987

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

main.ts:45023

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:45016
