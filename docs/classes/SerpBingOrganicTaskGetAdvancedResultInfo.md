[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskGetAdvancedResultInfo

# Class: SerpBingOrganicTaskGetAdvancedResultInfo

Defined in: main.ts:64583

## Implements

- [`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskGetAdvancedResultInfo()

> **new SerpBingOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:64624

#### Parameters

##### data?

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:64597

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:64602

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:64613

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:64620

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:64617

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:64586

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:64594

language code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:64592

location code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:64608

search refinement chips
equals null

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:64590

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:64615

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:64605

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:64588

type of element

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:64633

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:64670

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:64663

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)
