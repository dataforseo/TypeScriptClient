[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskGetAdvancedResultInfo

# Class: SerpBingOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskGetAdvancedResultInfo()

> **new SerpBingOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:64594

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:64567

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:64572

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:64583

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:64590

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:64587

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:64556

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:64564

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:64562

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips
equals null

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:64578

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:64560

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:64585

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:64575

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpBingOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:64558

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:64603

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:64640

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTaskGetAdvancedResultInfo`](SerpBingOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:64633
