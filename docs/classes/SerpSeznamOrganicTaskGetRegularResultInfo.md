[Documentation](../README.md) / [Exports](../modules.md) / SerpSeznamOrganicTaskGetRegularResultInfo

# Class: SerpSeznamOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpSeznamOrganicTaskGetRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpSeznamOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](SerpSeznamOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](SerpSeznamOrganicTaskGetRegularResultInfo.md#item_types)
- [items](SerpSeznamOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](SerpSeznamOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](SerpSeznamOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](SerpSeznamOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](SerpSeznamOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](SerpSeznamOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpSeznamOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](SerpSeznamOrganicTaskGetRegularResultInfo.md#spell)
- [type](SerpSeznamOrganicTaskGetRegularResultInfo.md#type)

### Methods

- [init](SerpSeznamOrganicTaskGetRegularResultInfo.md#init)
- [toJSON](SerpSeznamOrganicTaskGetRegularResultInfo.md#tojson)
- [fromJS](SerpSeznamOrganicTaskGetRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpSeznamOrganicTaskGetRegularResultInfo**(`data?`): [`SerpSeznamOrganicTaskGetRegularResultInfo`](SerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpSeznamOrganicTaskGetRegularResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md) |

#### Returns

[`SerpSeznamOrganicTaskGetRegularResultInfo`](SerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:70300

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[check_url](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:70274

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[datetime](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:70279

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for the organic type only
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Seznam Organiс Advanced SERP endpoint

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[item_types](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:70290

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[items](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:70296

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[items_count](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:70294

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[keyword](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:70263

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[language_code](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:70271

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[location_code](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:70269

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[se_domain](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:70267

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[se_results_count](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:70292

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[spell](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:70282

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpSeznamOrganicTaskGetRegularResultInfo](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md).[type](../interfaces/ISerpSeznamOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:70265

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

main.ts:70309

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

main.ts:70345

___

### fromJS

▸ **fromJS**(`data`): [`SerpSeznamOrganicTaskGetRegularResultInfo`](SerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpSeznamOrganicTaskGetRegularResultInfo`](SerpSeznamOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:70338
