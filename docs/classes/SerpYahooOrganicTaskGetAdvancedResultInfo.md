**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskGetAdvancedResultInfo

# Class: SerpYahooOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskGetAdvancedResultInfo(data)

> **new SerpYahooOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:67487

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:67463

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:67468

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:67476

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:67483

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:67480

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:67452

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:67460

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:67458

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:67456

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:67478

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:67471

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpYahooOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:67454

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:67496

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:67532

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicTaskGetAdvancedResultInfo`](SerpYahooOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:67525
