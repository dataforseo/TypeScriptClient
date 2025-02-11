[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTaskGetAdvancedResultInfo

# Class: SerpNaverOrganicTaskGetAdvancedResultInfo

Defined in: main.ts:81716

## Implements

- [`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetAdvancedResultInfo()

> **new SerpNaverOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:81757

#### Parameters

##### data?

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:81730

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:81735

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:81746

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:81753

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:81750

the number of results returned in the items array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:81719

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:81727

language code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:81725

location code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:81741

search refinement chips
equals null

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:81723

search engine domain in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:81748

total number of results in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:81738

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:81721

type of element

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:81766

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:81803

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

Defined in: main.ts:81796

#### Parameters

##### data

`any`

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)
