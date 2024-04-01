[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleAutocompleteTaskGetAdvancedResultInfo

# Class: SerpGoogleAutocompleteTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleAutocompleteTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleAutocompleteTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:51448

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:51425

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:51430

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
autocomplete

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:51438

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:51444

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:51442

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:51414

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:51422

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:51420

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:51418

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:51440

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:51433

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleAutocompleteTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleAutocompleteTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:51416

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

main.ts:51457

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

main.ts:51493

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleAutocompleteTaskGetAdvancedResultInfo`](SerpGoogleAutocompleteTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:51486
