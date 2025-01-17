[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTaskGetRegularResultInfo

# Class: SerpBingOrganicTaskGetRegularResultInfo

Defined in: main.ts:64285

## Implements

- [`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicTaskGetRegularResultInfo()

> **new SerpBingOrganicTaskGetRegularResultInfo**(`data`?): [`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

Defined in: main.ts:64325

#### Parameters

##### data?

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:64299

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:64304

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:64314

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types: organic, paid

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:64321

items inside the element
array of 8 search queries related to the keyword

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:64318

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:64288

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:64296

language code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:64294

location code in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:64310

search refinement chips
equals null

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:64292

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:64316

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:64307

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:64290

type of element

#### Implementation of

[`ISerpBingOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpBingOrganicTaskGetRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:64334

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:64371

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)

Defined in: main.ts:64364

#### Parameters

##### data

`any`

#### Returns

[`SerpBingOrganicTaskGetRegularResultInfo`](SerpBingOrganicTaskGetRegularResultInfo.md)
