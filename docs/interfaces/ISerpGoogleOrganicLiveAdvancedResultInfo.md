**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpGoogleOrganicLiveAdvancedResultInfo

# Interface: ISerpGoogleOrganicLiveAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:38767

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:38772

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, app, carousel, multi_carousel, featured_snippet, google_flights, google_reviews, google_posts, images, jobs, knowledge_graph, local_pack, hotels_pack, map, organic, paid, people_also_ask, related_searches, people_also_search, shopping, top_stories, twitter, video, events, mention_carousel, recipes, top_sights, scholarly_articles, popular_products, podcasts, questions_and_answers, find_results_on, stocks_box, visual_stories, commercial_units, local_services, google_hotels, math_solver, currency_box, product_considerations, found_on_web, short_videos, refine_products, explore_brands, perspectives, discussions_and_forums

#### Source

main.ts:38780

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Source

main.ts:38787

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:38784

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Source

main.ts:38756

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:38764

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:38762

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:38760

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Source

main.ts:38782

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Source

main.ts:38775

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:38758
