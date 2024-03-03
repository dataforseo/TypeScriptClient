[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoLiveAdvancedResultInfo

# Class: SerpGoogleDatasetInfoLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#item_types)
- [items](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#language_code)
- [se\_domain](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#spell)

### Methods

- [init](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoLiveAdvancedResultInfo**(`data?`): [`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoLiveAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:53046

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:53024

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:53029

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:53036

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:53042

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:53040

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:53017

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:53021

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:53019

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:53038

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleDatasetInfoLiveAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleDatasetInfoLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:53032

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

main.ts:53055

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

main.ts:53089

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoLiveAdvancedResultInfo`](SerpGoogleDatasetInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:53082
