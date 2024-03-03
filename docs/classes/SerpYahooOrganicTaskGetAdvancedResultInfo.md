[Documentation](../README.md) / [Exports](../modules.md) / SerpYahooOrganicTaskGetAdvancedResultInfo

# Class: SerpYahooOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpYahooOrganicTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpYahooOrganicTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpYahooOrganicTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpYahooOrganicTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpYahooOrganicTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpYahooOrganicTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpYahooOrganicTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpYahooOrganicTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpYahooOrganicTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpYahooOrganicTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpYahooOrganicTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpYahooOrganicTaskGetAdvancedResultInfo.md#spell)
- [type](SerpYahooOrganicTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpYahooOrganicTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpYahooOrganicTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpYahooOrganicTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpYahooOrganicTaskGetAdvancedResultInfo**(`data?`): [`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:64166

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:64142

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:64147

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:64155

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:64162

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:64159

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:64131

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:64139

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:64137

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:64135

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:64157

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:64150

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpYahooOrganicTaskGetAdvancedResultInfo](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:64133

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

main.ts:64175

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

main.ts:64211

___

### fromJS

▸ **fromJS**(`data`): [`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:64204
