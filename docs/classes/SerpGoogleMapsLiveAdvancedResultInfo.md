[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleMapsLiveAdvancedResultInfo

# Class: SerpGoogleMapsLiveAdvancedResultInfo

Defined in: main.ts:42587

## Implements

- [`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsLiveAdvancedResultInfo()

> **new SerpGoogleMapsLiveAdvancedResultInfo**(`data`?): [`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

Defined in: main.ts:42627

#### Parameters

##### data?

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:42602

direct URL to search engine results
you can use it to make sure that we provided exact results
Note: to check location-specific results, follow the provided check url, scroll up and down, then click the “Search this area” button

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:42607

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:42617

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
maps_search, maps_paid_item

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)[]

Defined in: main.ts:42623

items of the element

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:42621

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:42590

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:42598

language code in a POST array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:42596

location code in a POST array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:42612

search refinement chips

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:42594

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:42619

total number of results in SERP

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:42610

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:42592

type of element

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:42636

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:42673

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

Defined in: main.ts:42666

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)
