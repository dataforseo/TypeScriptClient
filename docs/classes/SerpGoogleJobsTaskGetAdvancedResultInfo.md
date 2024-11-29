[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTaskGetAdvancedResultInfo

# Class: SerpGoogleJobsTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTaskGetAdvancedResultInfo()

> **new SerpGoogleJobsTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:54705

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:54680

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:54685

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
google_jobs_item

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:54695

***

### items?

> `optional` **items**: [`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)[]

items of the element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:54701

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:54699

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:54669

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:54677

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:54675

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:54690

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:54673

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:54697

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:54688

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:54671

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:54714

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:54751

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:54744
