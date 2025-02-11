[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderLiveAdvancedResultInfo

# Class: SerpGoogleLocalFinderLiveAdvancedResultInfo

Defined in: main.ts:44471

## Implements

- [`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderLiveAdvancedResultInfo()

> **new SerpGoogleLocalFinderLiveAdvancedResultInfo**(`data`?): [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

Defined in: main.ts:44510

#### Parameters

##### data?

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:44485

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:44490

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:44500

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:44506

items of the element

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:44504

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:44474

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:44482

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:44480

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:44495

search refinement chips

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:44478

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:44502

total number of results in SERP

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:44493

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:44476

type of element

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:44519

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:44556

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

Defined in: main.ts:44549

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)
