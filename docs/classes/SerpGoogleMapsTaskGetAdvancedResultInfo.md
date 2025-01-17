[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleMapsTaskGetAdvancedResultInfo

# Class: SerpGoogleMapsTaskGetAdvancedResultInfo

Defined in: main.ts:42021

## Implements

- [`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTaskGetAdvancedResultInfo()

> **new SerpGoogleMapsTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:42061

#### Parameters

##### data?

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:42036

direct URL to search engine results
you can use it to make sure that we provided exact results
Note: to check location-specific results, follow the provided check url, scroll up and down, then click the “Search this area” button

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:42041

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:42051

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
maps_search, maps_paid_item

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)[]

Defined in: main.ts:42057

items of the element

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:42055

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:42024

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:42032

language code in a POST array

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:42030

location code in a POST array

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:42046

search refinement chips

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:42028

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:42053

total number of results in SERP

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:42044

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:42026

type of element

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:42070

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:42107

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:42100

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)
