[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpSeznamOrganicTaskGetAdvancedResultInfo

# Class: SerpSeznamOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskGetAdvancedResultInfo()

> **new SerpSeznamOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:75487

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:75463

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:75468

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:75476

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:75483

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:75480

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:75452

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:75460

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:75458

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:75456

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:75478

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:75471

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:75454

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:75496

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:75532

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:75525
