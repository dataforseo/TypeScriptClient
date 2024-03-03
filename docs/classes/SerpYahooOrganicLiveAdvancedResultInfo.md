[Documentation](../README.md) / [Exports](../modules.md) / SerpYahooOrganicLiveAdvancedResultInfo

# Class: SerpYahooOrganicLiveAdvancedResultInfo

## Implements

- [`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicLiveAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpYahooOrganicLiveAdvancedResultInfo.md#check_url)
- [datetime](SerpYahooOrganicLiveAdvancedResultInfo.md#datetime)
- [item\_types](SerpYahooOrganicLiveAdvancedResultInfo.md#item_types)
- [items](SerpYahooOrganicLiveAdvancedResultInfo.md#items)
- [items\_count](SerpYahooOrganicLiveAdvancedResultInfo.md#items_count)
- [keyword](SerpYahooOrganicLiveAdvancedResultInfo.md#keyword)
- [language\_code](SerpYahooOrganicLiveAdvancedResultInfo.md#language_code)
- [location\_code](SerpYahooOrganicLiveAdvancedResultInfo.md#location_code)
- [se\_domain](SerpYahooOrganicLiveAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpYahooOrganicLiveAdvancedResultInfo.md#se_results_count)
- [spell](SerpYahooOrganicLiveAdvancedResultInfo.md#spell)
- [type](SerpYahooOrganicLiveAdvancedResultInfo.md#type)

### Methods

- [init](SerpYahooOrganicLiveAdvancedResultInfo.md#init)
- [toJSON](SerpYahooOrganicLiveAdvancedResultInfo.md#tojson)
- [fromJS](SerpYahooOrganicLiveAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicLiveAdvancedResultInfo**(`data?`): [`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md) |

#### Returns

[`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:64903

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[check_url](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:64880

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[datetime](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:64885

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[item_types](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:64893

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items featured in the faq_box

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[items](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:64899

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[items_count](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:64897

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[keyword](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:64869

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[language_code](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:64877

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[location_code](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:64875

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[se_domain](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:64873

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:64895

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[spell](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:64888

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpYahooOrganicLiveAdvancedResultInfo](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[type](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:64871

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

main.ts:64912

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

main.ts:64948

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:64941
