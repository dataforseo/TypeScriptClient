[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoLabsGoogleHistoricalSerpsLiveItem

# Interface: IDataforseoLabsGoogleHistoricalSerpsLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:98225

***

### clickstream\_etv?

> `optional` **clickstream\_etv**: `number`

estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article https://dataforseo.com/help-center/whats-clickstream-estimated-traffic-volume-and-how-is-it-calculated

#### Defined in

main.ts:98250

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:98230

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units,  local_services, google_hotels, math_solver

#### Defined in

main.ts:98238

***

### items?

> `optional` **items**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Defined in

main.ts:98245

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:98242

***

### keyword?

> `optional` **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Defined in

main.ts:98214

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:98222

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:98220

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:98218

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Defined in

main.ts:98240

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:98211

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:98233

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:98216
