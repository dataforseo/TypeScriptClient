[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsTaskGetAdvancedResultInfo

# Class: SerpGoogleNewsTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsTaskGetAdvancedResultInfo()

> **new SerpGoogleNewsTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleNewsTaskGetAdvancedResultInfo`](SerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleNewsTaskGetAdvancedResultInfo`](SerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:46406

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:46381

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:46386

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
top_stories, news_search

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:46396

***

### items?

> `optional` **items**: [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:46402

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:46400

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:46370

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:46378

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:46376

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:46391

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:46374

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:46398

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:46389

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleNewsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:46372

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:46415

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:46452

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsTaskGetAdvancedResultInfo`](SerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsTaskGetAdvancedResultInfo`](SerpGoogleNewsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:46445
