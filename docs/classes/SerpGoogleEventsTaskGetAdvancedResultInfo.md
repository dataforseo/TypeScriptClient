[**Documentation**](../README.md)

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

##### data?

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:49123

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:49097

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

main.ts:49102

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:49111

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items of the element

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:49119

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:49117

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:49086

***

### language\_code?

> `optional` **language\_code**: `string`

language code
in this case, the value will be null

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:49095

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:49092

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:49107

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:49090

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:49115

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:49105

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:49088

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:49132

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:49169

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:49162
