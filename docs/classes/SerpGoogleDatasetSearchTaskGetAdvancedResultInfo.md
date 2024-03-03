[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetSearchTaskGetAdvancedResultInfo

# Class: SerpGoogleDatasetSearchTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#language_code)
- [se\_domain](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#spell)

### Methods

- [init](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetSearchTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:51252

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:51230

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:51235

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:51242

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:51248

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:51246

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:51223

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:51227

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:51225

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:51244

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:51238

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

main.ts:51261

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

main.ts:51295

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetSearchTaskGetAdvancedResultInfo`](SerpGoogleDatasetSearchTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:51288
