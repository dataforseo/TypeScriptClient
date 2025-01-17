[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveAdvancedResultInfo

# Class: SerpBingOrganicLiveAdvancedResultInfo

Defined in: main.ts:65897

## Implements

- [`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveAdvancedResultInfo()

> **new SerpBingOrganicLiveAdvancedResultInfo**(`data`?): [`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

Defined in: main.ts:65937

#### Parameters

##### data?

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md)

#### Returns

[`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:65911

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:65916

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:65927

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:65933

items featured in the faq_box

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:65931

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:65900

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:65908

language code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:65906

location code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:65922

search refinement chips
equals null

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:65904

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:65929

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:65919

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:65902

type of element

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:65946

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:65983

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

Defined in: main.ts:65976

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)
