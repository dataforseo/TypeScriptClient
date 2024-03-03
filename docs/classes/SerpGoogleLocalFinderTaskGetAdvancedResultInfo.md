[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleLocalFinderTaskGetAdvancedResultInfo

# Class: SerpGoogleLocalFinderTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleLocalFinderTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:40659

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:40636

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:40641

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:40649

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:40655

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:40653

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:40625

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:40633

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:40631

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:40629

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:40651

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:40644

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleLocalFinderTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:40627

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

main.ts:40668

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

main.ts:40704

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:40697
