[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderLiveAdvancedResultInfo

# Class: SerpGoogleLocalFinderLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderLiveAdvancedResultInfo()

> **new SerpGoogleLocalFinderLiveAdvancedResultInfo**(`data`?): [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Defined in

main.ts:44494

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:44469

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:44474

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:44484

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items of the element

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:44490

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:44488

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:44458

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:44466

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:44464

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:44479

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:44462

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:44486

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:44477

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:44460

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:44503

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:44540

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Defined in

main.ts:44533
