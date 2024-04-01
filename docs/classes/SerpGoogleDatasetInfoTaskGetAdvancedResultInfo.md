[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleDatasetInfoTaskGetAdvancedResultInfo

# Class: SerpGoogleDatasetInfoTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#language_code)
- [se\_domain](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#spell)

### Methods

- [init](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleDatasetInfoTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:54911

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:54889

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:54894

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item type: dataset

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:54901

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:54907

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:54905

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:54882

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:54886

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:54884

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:54903

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:54897

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

main.ts:54920

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

main.ts:54954

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleDatasetInfoTaskGetAdvancedResultInfo`](SerpGoogleDatasetInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:54947
