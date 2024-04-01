[Documentation](../README.md) / [Exports](../modules.md) / SerpGoogleOrganicTaskGetRegularResultInfo

# Class: SerpGoogleOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleOrganicTaskGetRegularResultInfo.md#constructor)

### Properties

- [check\_url](SerpGoogleOrganicTaskGetRegularResultInfo.md#check_url)
- [datetime](SerpGoogleOrganicTaskGetRegularResultInfo.md#datetime)
- [item\_types](SerpGoogleOrganicTaskGetRegularResultInfo.md#item_types)
- [items](SerpGoogleOrganicTaskGetRegularResultInfo.md#items)
- [items\_count](SerpGoogleOrganicTaskGetRegularResultInfo.md#items_count)
- [keyword](SerpGoogleOrganicTaskGetRegularResultInfo.md#keyword)
- [language\_code](SerpGoogleOrganicTaskGetRegularResultInfo.md#language_code)
- [location\_code](SerpGoogleOrganicTaskGetRegularResultInfo.md#location_code)
- [se\_domain](SerpGoogleOrganicTaskGetRegularResultInfo.md#se_domain)
- [se\_results\_count](SerpGoogleOrganicTaskGetRegularResultInfo.md#se_results_count)
- [spell](SerpGoogleOrganicTaskGetRegularResultInfo.md#spell)
- [type](SerpGoogleOrganicTaskGetRegularResultInfo.md#type)

### Methods

- [init](SerpGoogleOrganicTaskGetRegularResultInfo.md#init)
- [toJSON](SerpGoogleOrganicTaskGetRegularResultInfo.md#tojson)
- [fromJS](SerpGoogleOrganicTaskGetRegularResultInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleOrganicTaskGetRegularResultInfo**(`data?`): [`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleOrganicTaskGetRegularResultInfo`](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md) |

#### Returns

[`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:26405

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[check_url](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:26379

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[datetime](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:26384

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, images, jobs, knowledge_graph, local_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for featured_snippet, organic and paid types only;
to get all items (inlcuding SERP features and rich snippets) found in the returned SERP, please refer to the Google Organiс Advanced SERP endpoint

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[item_types](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:26395

___

### items

• `Optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[items](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:26401

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[items_count](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:26399

___

### keyword

• `Optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[keyword](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:26368

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[language_code](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:26376

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[location_code](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:26374

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[se_domain](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:26372

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[se_results_count](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:26397

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[spell](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:26387

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[ISerpGoogleOrganicTaskGetRegularResultInfo](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md).[type](../interfaces/ISerpGoogleOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:26370

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

main.ts:26414

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

main.ts:26450

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleOrganicTaskGetRegularResultInfo`](SerpGoogleOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:26443
