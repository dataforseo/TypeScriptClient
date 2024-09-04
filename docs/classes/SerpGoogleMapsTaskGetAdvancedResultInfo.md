[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpGoogleMapsTaskGetAdvancedResultInfo

# Class: SerpGoogleMapsTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleMapsTaskGetAdvancedResultInfo()

> **new SerpGoogleMapsTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:40209

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results
Note: to check location-specific results, follow the provided check url, scroll up and down, then click the “Search this area” button

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:40186

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:40191

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
maps_search, maps_paid_item

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:40199

***

### items?

> `optional` **items**: [`BaseGoogleMapsSerpElementItem`](BaseGoogleMapsSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:40205

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:40203

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:40174

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:40182

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:40180

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:40178

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:40201

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:40194

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleMapsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleMapsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:40176

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:40218

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:40254

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleMapsTaskGetAdvancedResultInfo`](SerpGoogleMapsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:40247
