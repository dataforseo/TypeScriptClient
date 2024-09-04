[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpNaverOrganicTaskGetAdvancedResultInfo

# Class: SerpNaverOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetAdvancedResultInfo()

> **new SerpNaverOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:73377

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:73353

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:73358

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:73366

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:73373

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:73370

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:73342

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:73350

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:73348

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:73346

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:73368

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:73361

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#type)

#### Defined in

main.ts:73344

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:73386

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:73422

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:73415
