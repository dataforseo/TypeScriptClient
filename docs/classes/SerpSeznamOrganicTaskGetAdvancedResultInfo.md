**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpSeznamOrganicTaskGetAdvancedResultInfo

# Class: SerpSeznamOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpSeznamOrganicTaskGetAdvancedResultInfo(data)

> **new SerpSeznamOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:74368

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:74344

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:74349

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, organic, related_searches, top_stories, featured_snippet, video

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:74357

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:74364

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:74361

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:74333

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:74341

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:74339

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:74337

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:74359

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:74352

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpSeznamOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpSeznamOrganicTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:74335

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:74377

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:74413

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpSeznamOrganicTaskGetAdvancedResultInfo`](SerpSeznamOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:74406
