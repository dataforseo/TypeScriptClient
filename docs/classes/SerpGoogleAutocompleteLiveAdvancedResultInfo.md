[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleAutocompleteLiveAdvancedResultInfo

# Class: SerpGoogleAutocompleteLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#item_types)
- [items](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#spell)
- [type](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleAutocompleteLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleAutocompleteLiveAdvancedResultInfo**(`data?`): [`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleAutocompleteLiveAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Defined in

main.ts:51902

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:51879

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:51884

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:51892

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:51898

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:51896

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:51868

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:51876

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:51874

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:51872

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:51894

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:51887

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleAutocompleteLiveAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleAutocompleteLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:51870

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

main.ts:51911

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

main.ts:51947

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleAutocompleteLiveAdvancedResultInfo`](SerpGoogleAutocompleteLiveAdvancedResultInfo.md)

#### Defined in

main.ts:51940
