[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTaskGetAdvancedResultInfo

# Class: SerpGoogleLocalFinderTaskGetAdvancedResultInfo

Defined in: main.ts:43723

## Implements

- [`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTaskGetAdvancedResultInfo()

> **new SerpGoogleLocalFinderTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

Defined in: main.ts:43762

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:43737

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:43742

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:43752

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:43758

items of the element

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:43756

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:43726

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:43734

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:43732

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:43747

search refinement chips

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:43730

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:43754

total number of results in SERP

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:43745

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:43728

type of element

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:43771

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:43808

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

Defined in: main.ts:43801

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)
