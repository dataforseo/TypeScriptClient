**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTaskGetAdvancedResultInfo

# Class: SerpBaiduOrganicTaskGetAdvancedResultInfo

## Implements

- [`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskGetAdvancedResultInfo(data)

> **new SerpBaiduOrganicTaskGetAdvancedResultInfo**(`data`?): [`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:71439

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:71415

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:71420

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
images, local_pack, map, organic, paid, related_searches, video, stocks_box, dictionary, shopping

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:71428

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:71435

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:71432

***

### keyword?

> **`optional`** **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#keyword)

#### Source

main.ts:71404

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:71412

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:71410

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:71408

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#se_results_count)

#### Source

main.ts:71430

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:71423

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`ISerpBaiduOrganicTaskGetAdvancedResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md).[`type`](../interfaces/ISerpBaiduOrganicTaskGetAdvancedResultInfo.md#type)

#### Source

main.ts:71406

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:71448

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:71484

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTaskGetAdvancedResultInfo`](SerpBaiduOrganicTaskGetAdvancedResultInfo.md)

#### Source

main.ts:71477
