[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleHistoricalSerpsLiveItem

# Class: DataforseoLabsGoogleHistoricalSerpsLiveItem

## Implements

- [`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleHistoricalSerpsLiveItem()

> **new DataforseoLabsGoogleHistoricalSerpsLiveItem**(`data`?): [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Defined in

main.ts:106171

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`check_url`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#check_url)

#### Defined in

main.ts:106142

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`clickstream_etv`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#clickstream_etv)

#### Defined in

main.ts:106167

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`datetime`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#datetime)

#### Defined in

main.ts:106147

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units,  local_services, google_hotels, math_solver

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`item_types`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#item_types)

#### Defined in

main.ts:106155

***

### items?

> `optional` **items**: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`items`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items)

#### Defined in

main.ts:106162

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`items_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#items_count)

#### Defined in

main.ts:106159

***

### keyword?

> `optional` **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`keyword`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#keyword)

#### Defined in

main.ts:106131

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`language_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#language_code)

#### Defined in

main.ts:106139

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`location_code`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#location_code)

#### Defined in

main.ts:106137

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`se_domain`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_domain)

#### Defined in

main.ts:106135

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`se_results_count`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_results_count)

#### Defined in

main.ts:106157

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#se_type)

#### Defined in

main.ts:106128

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`spell`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#spell)

#### Defined in

main.ts:106150

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IDataforseoLabsGoogleHistoricalSerpsLiveItem`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md).[`type`](../interfaces/IDataforseoLabsGoogleHistoricalSerpsLiveItem.md#type)

#### Defined in

main.ts:106133

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:106180

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:106218

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleHistoricalSerpsLiveItem`](DataforseoLabsGoogleHistoricalSerpsLiveItem.md)

#### Defined in

main.ts:106211
