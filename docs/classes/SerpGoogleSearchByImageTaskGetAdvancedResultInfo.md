[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTaskGetAdvancedResultInfo

# Class: SerpGoogleSearchByImageTaskGetAdvancedResultInfo

Defined in: main.ts:53390

## Implements

- [`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleSearchByImageTaskGetAdvancedResultInfo()

> **new SerpGoogleSearchByImageTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

Defined in: main.ts:53431

#### Parameters

##### data?

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:53405

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:53410

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#datetime)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:53392

URL specified in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`image_url`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#image_url)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:53421

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
organic,
images

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:53427

items featured in the faq_box

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:53425

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:53394

keyword Google associated with the specified image

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:53402

language code in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:53400

location code in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:53415

search refinement chips

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:53398

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:53423

total number of results in SERP

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:53413

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:53396

type of element

#### Implementation of

[`ISerpGoogleSearchByImageTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleSearchByImageTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:53440

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:53478

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)

Defined in: main.ts:53471

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleSearchByImageTaskGetAdvancedResultInfo`](SerpGoogleSearchByImageTaskGetAdvancedResultInfo.md)
