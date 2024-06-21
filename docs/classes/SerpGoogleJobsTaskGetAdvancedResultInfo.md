**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpGoogleJobsTaskGetAdvancedResultInfo

# Class: SerpGoogleJobsTaskGetAdvancedResultInfo

## Implements

- [`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleJobsTaskGetAdvancedResultInfo(data)

> **new SerpGoogleJobsTaskGetAdvancedResultInfo**(`data`?): [`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:51429

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:51406

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:51411

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
google_jobs_item

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:51419

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:51425

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:51423

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:51395

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:51403

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:51401

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:51399

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:51421

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:51414

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleJobsTaskGetAdvancedResultInfo`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleJobsTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:51397

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:51438

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:51474

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpGoogleJobsTaskGetAdvancedResultInfo`](SerpGoogleJobsTaskGetAdvancedResultInfo.md)

#### Source

main.ts:51467
