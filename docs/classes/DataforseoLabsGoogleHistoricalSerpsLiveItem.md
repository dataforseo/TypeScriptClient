[Documentation](../README.md) / [Exports](../modules.md) / DataforseoLabsGoogleHistoricalSerpsLiveItem

# Class: DataforseoLabsGoogleHistoricalSerpsLiveItem

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#constructor)

### Properties

- [check\_url](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#check_url)
- [datetime](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#datetime)
- [item\_types](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#item_types)
- [items](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#items)
- [items\_count](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#items_count)
- [keyword](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#keyword)
- [language\_code](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#language_code)
- [location\_code](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#location_code)
- [se\_domain](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_domain)
- [se\_results\_count](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_results_count)
- [se\_type](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_type)
- [spell](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#spell)
- [type](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#type)

### Methods

- [init](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#init)
- [toJSON](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#tojson)
- [fromJS](DataforseoLabsGoogleHistoricalSerpsLiveItem.md#fromjs)

## Constructors

### constructor

• **new DataforseoLabsGoogleHistoricalSerpsLiveItem**(`data?`): [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md) |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Defined in

main.ts:94391

## Properties

### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[check_url](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#check_url)

#### Defined in

main.ts:94367

___

### datetime

• `Optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[datetime](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#datetime)

#### Defined in

main.ts:94372

___

### item\_types

• `Optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units,  local_services, google_hotels, math_solver

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[item_types](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#item_types)

#### Defined in

main.ts:94380

___

### items

• `Optional` **items**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[items](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items)

#### Defined in

main.ts:94387

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[items_count](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items_count)

#### Defined in

main.ts:94384

___

### keyword

• `Optional` **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[keyword](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#keyword)

#### Defined in

main.ts:94356

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[language_code](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#language_code)

#### Defined in

main.ts:94364

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[location_code](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#location_code)

#### Defined in

main.ts:94362

___

### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[se_domain](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_domain)

#### Defined in

main.ts:94360

___

### se\_results\_count

• `Optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[se_results_count](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_results_count)

#### Defined in

main.ts:94382

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[se_type](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_type)

#### Defined in

main.ts:94353

___

### spell

• `Optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[spell](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#spell)

#### Defined in

main.ts:94375

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IDataforseoLabsGoogleHistoricalSerpsLiveItem](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[type](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#type)

#### Defined in

main.ts:94358

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

main.ts:94400

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

main.ts:94437

___

### fromJS

▸ **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Defined in

main.ts:94430
