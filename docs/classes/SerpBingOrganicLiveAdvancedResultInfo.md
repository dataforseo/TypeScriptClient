**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBingOrganicLiveAdvancedResultInfo

# Class: SerpBingOrganicLiveAdvancedResultInfo

## Implements

- [`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveAdvancedResultInfo(data)

> **new SerpBingOrganicLiveAdvancedResultInfo**(`data`?): [`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md)

#### Returns

[`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Source

main.ts:58709

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#check_url)

#### Source

main.ts:58685

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#datetime)

#### Source

main.ts:58690

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#item_types)

#### Source

main.ts:58698

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#items)

#### Source

main.ts:58705

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#items_count)

#### Source

main.ts:58702

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#keyword)

#### Source

main.ts:58674

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#language_code)

#### Source

main.ts:58682

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#location_code)

#### Source

main.ts:58680

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#se_domain)

#### Source

main.ts:58678

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:58700

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#spell)

#### Source

main.ts:58693

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#type)

#### Source

main.ts:58676

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:58718

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:58754

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Source

main.ts:58747
