**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpNaverOrganicTaskGetAdvancedResultInfo

# Class: SerpNaverOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpNaverOrganicTaskGetAdvancedResultInfo(data)

> **new SerpNaverOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:70707

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:70683

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:70688

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:70696

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:70703

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:70700

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:70672

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:70680

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:70678

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:70676

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:70698

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:70691

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpNaverOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpNaverOrganicTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:70674

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:70716

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:70752

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpNaverOrganicTaskGetAdvancedResultInfo`](SerpNaverOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:70745
