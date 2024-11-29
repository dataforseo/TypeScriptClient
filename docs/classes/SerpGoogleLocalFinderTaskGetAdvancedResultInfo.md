[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTaskGetAdvancedResultInfo

# Class: SerpGoogleLocalFinderTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderTaskGetAdvancedResultInfo()

> **new SerpGoogleLocalFinderTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:43746

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:43721

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:43726

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:43736

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items of the element

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:43742

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:43740

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:43710

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:43718

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:43716

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:43731

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:43714

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:43738

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:43729

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleLocalFinderTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:43712

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:43755

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:43792

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderTaskGetAdvancedResultInfo`](SerpGoogleLocalFinderTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:43785
