[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsLiveAdvancedResultInfo

# Class: SerpGoogleEventsLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleEventsLiveAdvancedResultInfo()

> **new SerpGoogleEventsLiveAdvancedResultInfo**(`data`?): [`SerpGoogleEventsLiveAdvancedResultInfo`](SerpGoogleEventsLiveAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleEventsLiveAdvancedResultInfo`](SerpGoogleEventsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:49637

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:49611

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:49616

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
possible item types:
event_item

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:49625

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items of the element

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:49633

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:49631

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:49600

***

### language\_code?

> `optional` **language\_code**: `string`

language code
in this case, the value will be null

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:49609

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:49606

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:49621

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:49604

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP
in this case, the value will be 0
this search engine does not indicate the total number of results

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:49629

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:49619

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleEventsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleEventsLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:49602

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:49646

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:49683

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleEventsLiveAdvancedResultInfo`](SerpGoogleEventsLiveAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleEventsLiveAdvancedResultInfo`](SerpGoogleEventsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:49676
