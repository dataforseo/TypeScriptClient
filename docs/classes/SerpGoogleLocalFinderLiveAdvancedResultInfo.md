**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderLiveAdvancedResultInfo

# Class: SerpGoogleLocalFinderLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleLocalFinderLiveAdvancedResultInfo(data)

> **new SerpGoogleLocalFinderLiveAdvancedResultInfo**(`data`?): [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Source

main.ts:42026

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided exact results

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#check_url)

#### Source

main.ts:42003

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#datetime)

#### Source

main.ts:42008

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#item_types)

#### Source

main.ts:42016

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items)

#### Source

main.ts:42022

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#items_count)

#### Source

main.ts:42020

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#keyword)

#### Source

main.ts:41992

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#language_code)

#### Source

main.ts:42000

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#location_code)

#### Source

main.ts:41998

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_domain)

#### Source

main.ts:41996

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:42018

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#spell)

#### Source

main.ts:42011

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleLocalFinderLiveAdvancedResultInfo`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleLocalFinderLiveAdvancedResultInfo.md#type)

#### Source

main.ts:41994

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:42035

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:42071

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleLocalFinderLiveAdvancedResultInfo`](SerpGoogleLocalFinderLiveAdvancedResultInfo.md)

#### Source

main.ts:42064
