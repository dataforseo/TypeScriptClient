[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingLocalPackLiveRegularResultInfo

# Class: SerpBingLocalPackLiveRegularResultInfo

## Implements

- [`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackLiveRegularResultInfo()

> **new SerpBingLocalPackLiveRegularResultInfo**(`data`?): [`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md)

#### Returns

[`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

#### Defined in

main.ts:61594

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#check_url)

#### Defined in

main.ts:61571

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#datetime)

#### Defined in

main.ts:61576

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#item_types)

#### Defined in

main.ts:61584

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#items)

#### Defined in

main.ts:61590

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#items_count)

#### Defined in

main.ts:61588

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#keyword)

#### Defined in

main.ts:61560

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#language_code)

#### Defined in

main.ts:61568

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#location_code)

#### Defined in

main.ts:61566

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#se_domain)

#### Defined in

main.ts:61564

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:61586

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#spell)

#### Defined in

main.ts:61579

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#type)

#### Defined in

main.ts:61562

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:61603

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:61639

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

#### Defined in

main.ts:61632
