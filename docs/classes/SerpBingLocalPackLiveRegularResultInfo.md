[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackLiveRegularResultInfo

# Class: SerpBingLocalPackLiveRegularResultInfo

Defined in: main.ts:68227

## Implements

- [`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackLiveRegularResultInfo()

> **new SerpBingLocalPackLiveRegularResultInfo**(`data`?): [`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

Defined in: main.ts:68267

#### Parameters

##### data?

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md)

#### Returns

[`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:68241

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:68246

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:68257

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:68263

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:68261

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:68230

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:68238

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:68236

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:68252

search refinement chips
equals null

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:68234

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:68259

total number of results in SERP

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:68249

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:68232

type of element

#### Implementation of

[`ISerpBingLocalPackLiveRegularResultInfo`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackLiveRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:68276

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:68313

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)

Defined in: main.ts:68306

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocalPackLiveRegularResultInfo`](SerpBingLocalPackLiveRegularResultInfo.md)
