[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskGetAdvancedResultInfo

# Class: SerpYahooOrganicTaskGetAdvancedResultInfo

Defined in: main.ts:76318

## Implements

- [`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskGetAdvancedResultInfo()

> **new SerpYahooOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:76359

#### Parameters

##### data?

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:76332

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:76337

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:76348

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:76355

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:76352

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:76321

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:76329

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:76327

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:76343

search refinement chips
equals null

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:76325

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:76350

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:76340

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:76323

type of element

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:76368

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:76405

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:76398

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)
