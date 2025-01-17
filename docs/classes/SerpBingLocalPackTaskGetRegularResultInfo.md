[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingLocalPackTaskGetRegularResultInfo

# Class: SerpBingLocalPackTaskGetRegularResultInfo

Defined in: main.ts:67471

## Implements

- [`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpBingLocalPackTaskGetRegularResultInfo()

> **new SerpBingLocalPackTaskGetRegularResultInfo**(`data`?): [`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

Defined in: main.ts:67511

#### Parameters

##### data?

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md)

#### Returns

[`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:67485

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:67490

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:67501

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
local_pack

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:67507

elements of search results found in SERP

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:67505

the number of results returned in the items array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:67474

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:67482

language code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:67480

location code in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:67496

search refinement chips
equals null

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:67478

search engine domain in a POST array

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:67503

total number of results in SERP

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:67493

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:67476

type of element

#### Implementation of

[`ISerpBingLocalPackTaskGetRegularResultInfo`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpBingLocalPackTaskGetRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:67520

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:67557

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)

Defined in: main.ts:67550

#### Parameters

##### data

`any`

#### Returns

[`SerpBingLocalPackTaskGetRegularResultInfo`](SerpBingLocalPackTaskGetRegularResultInfo.md)
