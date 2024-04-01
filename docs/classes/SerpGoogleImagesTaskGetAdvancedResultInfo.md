[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTaskGetAdvancedResultInfo

# Class: SerpGoogleImagesTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTaskGetAdvancedResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleImagesTaskGetAdvancedResultInfo.md#check_url)
- [datetime](SerpGoogleImagesTaskGetAdvancedResultInfo.md#datetime)
- [item\_types](SerpGoogleImagesTaskGetAdvancedResultInfo.md#item_types)
- [items](SerpGoogleImagesTaskGetAdvancedResultInfo.md#items)
- [items\_count](SerpGoogleImagesTaskGetAdvancedResultInfo.md#items_count)
- [keyword](SerpGoogleImagesTaskGetAdvancedResultInfo.md#keyword)
- [language\_code](SerpGoogleImagesTaskGetAdvancedResultInfo.md#language_code)
- [location\_code](SerpGoogleImagesTaskGetAdvancedResultInfo.md#location_code)
- [se\_domain](SerpGoogleImagesTaskGetAdvancedResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleImagesTaskGetAdvancedResultInfo.md#se_results_count)
- [spell](SerpGoogleImagesTaskGetAdvancedResultInfo.md#spell)
- [type](SerpGoogleImagesTaskGetAdvancedResultInfo.md#type)

### Methods

- [init](SerpGoogleImagesTaskGetAdvancedResultInfo.md#init)
- [toJSON](SerpGoogleImagesTaskGetAdvancedResultInfo.md#tojson)
- [fromJS](SerpGoogleImagesTaskGetAdvancedResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTaskGetAdvancedResultInfo**(`data?`): [`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md) |

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:46984

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[check_url](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:46961

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[datetime](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:46966

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
carousel, images_search, related_searches

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[item_types](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:46974

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

contains keywords and images related to the specified search term

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[items](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:46980

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[items_count](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:46978

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[keyword](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:46950

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[language_code](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:46958

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[location_code](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:46956

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[se_domain](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:46954

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[se_results_count](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:46976

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[spell](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:46969

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleImagesTaskGetAdvancedResultInfo](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md).[type](../interfaces/ISerpGoogleImagesTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:46952

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

main.ts:46993

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

main.ts:47029

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTaskGetAdvancedResultInfo`](SerpGoogleImagesTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:47022
