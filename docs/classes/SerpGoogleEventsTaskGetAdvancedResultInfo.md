[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpGoogleEventsTaskGetAdvancedResultInfo

# Class: SerpGoogleEventsTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTaskGetAdvancedResultInfo()

> **new SerpGoogleEventsTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:48045

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:48021

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:48026

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:48033

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:48041

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:48039

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:48010

***

### language\_code?

> `optional` **language\_code**: `string`

language code
in this case, the value will be null

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:48019

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:48016

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:48014

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:48037

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:48029

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:48012

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:48054

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:48090

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:48083
