[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleMapsLiveAdvancedResultInfo

# Class: SerpGoogleMapsLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsLiveAdvancedResultInfo()

> **new SerpGoogleMapsLiveAdvancedResultInfo**(`data`?): [`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:40767

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results
Note: to check location-specific results, follow the provided check url, scroll up and down, then click the “Search this area” button

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:40744

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:40749

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
maps_search, maps_paid_item

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:40757

***

### items?

> `optional` **items**: [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:40763

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:40761

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:40732

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:40740

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:40738

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:40736

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:40759

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:40752

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleMapsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleMapsLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:40734

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:40776

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:40812

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:40805
