[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBaiduOrganicTaskGetRegularResultInfo

# Class: SerpBaiduOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBaiduOrganicTaskGetRegularResultInfo()

> **new SerpBaiduOrganicTaskGetRegularResultInfo**(`data`?): [`SerpBaiduOrganicTaskGetRegularResultInfo`](SerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpBaiduOrganicTaskGetRegularResultInfo`](SerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:70367

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:70344

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:70349

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
organic, paid

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:70357

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:70363

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:70361

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:70333

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:70341

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:70339

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:70337

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:70359

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:70352

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBaiduOrganicTaskGetRegularResultInfo`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpBaiduOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:70335

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:70376

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:70412

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBaiduOrganicTaskGetRegularResultInfo`](SerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBaiduOrganicTaskGetRegularResultInfo`](SerpBaiduOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:70405
