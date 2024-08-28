[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpBingLocalPackTaskGetRegularResultInfo

# Class: SerpBingLocalPackTaskGetRegularResultInfo

## Implements

- [`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTaskGetRegularResultInfo()

> **new SerpBingLocalPackTaskGetRegularResultInfo**(`data`?): [`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md)

#### Returns

[`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Defined in

main.ts:61116

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:61093

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:61098

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:61106

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:61112

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:61110

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:61082

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:61090

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:61088

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:61086

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:61108

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:61101

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:61084

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:61125

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:61161

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

#### Defined in

main.ts:61154
