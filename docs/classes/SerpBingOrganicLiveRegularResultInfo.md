[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveRegularResultInfo

# Class: SerpBingOrganicLiveRegularResultInfo

Defined in: main.ts:65319

## Implements

- [`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveRegularResultInfo()

> **new SerpBingOrganicLiveRegularResultInfo**(`data`?): [`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

Defined in: main.ts:65359

#### Parameters

##### data?

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md)

#### Returns

[`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:65333

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:65338

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:65348

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:65355

items inside the element
array of 8 search queries related to the keyword

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`items`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:65352

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:65322

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:65330

language code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:65328

location code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:65344

search refinement chips
equals null

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:65326

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:65350

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:65341

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:65324

type of element

#### Implementation of

[`ISerpBingOrganicLiveRegularResultInfo`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md).[`type`](../interfaces/ISerpBingOrganicLiveRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:65368

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:65405

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)

Defined in: main.ts:65398

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicLiveRegularResultInfo`](SerpBingOrganicLiveRegularResultInfo.md)
