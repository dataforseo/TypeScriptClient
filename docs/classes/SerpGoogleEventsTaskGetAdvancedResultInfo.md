[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsTaskGetAdvancedResultInfo

# Class: SerpGoogleEventsTaskGetAdvancedResultInfo

Defined in: main.ts:49083

## Implements

- [`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsTaskGetAdvancedResultInfo()

> **new SerpGoogleEventsTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:49123

#### Parameters

##### data?

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:49097

direct URL to search engine results

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:49102

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:49111

types of search results found in SERP
possible item types:
event_item

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:49119

items of the element

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:49117

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:49086

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:49095

language code
in this case, the value will be null

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:49092

location code in a POST array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:49107

search refinement chips

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:49090

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:49115

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:49105

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:49088

type of element

#### Implementation of

[`ISerpGoogleEventsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleEventsTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:49132

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:49169

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:49162

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleEventsTaskGetAdvancedResultInfo`](SerpGoogleEventsTaskGetAdvancedResultInfo.md)
