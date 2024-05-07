**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSerpsLiveItem

# Class: DataforseoLabsGoogleHistoricalSerpsLiveItem

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSerpsLiveItem(data)

> **new DataforseoLabsGoogleHistoricalSerpsLiveItem**(`data`?): [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Source

main.ts:95635

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`check_url`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#check_url)

#### Source

main.ts:95611

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`datetime`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#datetime)

#### Source

main.ts:95616

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units,  local_services, google_hotels, math_solver

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`item_types`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#item_types)

#### Source

main.ts:95624

***

### items?

> **`optional`** **items**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items)

#### Source

main.ts:95631

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items_count)

#### Source

main.ts:95628

***

### keyword?

> **`optional`** **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#keyword)

#### Source

main.ts:95600

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#language_code)

#### Source

main.ts:95608

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#location_code)

#### Source

main.ts:95606

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`se_domain`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_domain)

#### Source

main.ts:95604

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`se_results_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_results_count)

#### Source

main.ts:95626

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_type)

#### Source

main.ts:95597

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`spell`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#spell)

#### Source

main.ts:95619

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#type)

#### Source

main.ts:95602

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:95644

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:95681

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Source

main.ts:95674
