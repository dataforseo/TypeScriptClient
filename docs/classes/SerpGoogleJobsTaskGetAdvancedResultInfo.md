[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleJobsTaskGetAdvancedResultInfo

# Class: SerpGoogleJobsTaskGetAdvancedResultInfo

Defined in: main.ts:54682

## Implements

- [`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTaskGetAdvancedResultInfo()

> **new SerpGoogleJobsTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:54721

#### Parameters

##### data?

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:54696

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:54701

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:54711

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
google_jobs_item

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`SerpGoogleJobsTaskGetAdvancedItem`](SerpGoogleJobsTaskGetAdvancedItem.md)[]

Defined in: main.ts:54717

items of the element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:54715

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:54685

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:54693

language code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:54691

location code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:54706

search refinement chips

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:54689

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:54713

total number of results in SERP

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:54704

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:54687

type of element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:54730

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:54767

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:54760

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)
