[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleEventsLiveAdvancedResultInfo

# Class: SerpGoogleEventsLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleEventsLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleEventsLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleEventsLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleEventsLiveAdvancedResultInfo.md#item_types)
- [items](SerpGoogleEventsLiveAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleEventsLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleEventsLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleEventsLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleEventsLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleEventsLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleEventsLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleEventsLiveAdvancedResultInfo.md#spell)
- [type](SerpGoogleEventsLiveAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleEventsLiveAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleEventsLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleEventsLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleEventsLiveAdvancedResultInfo**(`data?`): [`SerpGoogleEventsLiveAdvancedResultInfo`](SerpGoogleEventsLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleEventsLiveAdvancedResultInfo`](SerpGoogleEventsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:45484

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:45460

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:45465

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:45472

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:45480

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:45478

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:45449

___

### language\_code

• `Optional` **language\_code**: `string`

language code
in this case, the value will be null

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:45458

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:45455

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:45453

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:45476

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:45468

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleEventsLiveAdvancedResultInfo](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:45451

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

main.ts:45493

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

main.ts:45529

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleEventsLiveAdvancedResultInfo`](SerpGoogleEventsLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleEventsLiveAdvancedResultInfo`](SerpGoogleEventsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:45522
