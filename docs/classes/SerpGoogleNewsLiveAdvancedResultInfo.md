[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsLiveAdvancedResultInfo

# Class: SerpGoogleNewsLiveAdvancedResultInfo

Defined in: main.ts:47167

## Implements

- [`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsLiveAdvancedResultInfo()

> **new SerpGoogleNewsLiveAdvancedResultInfo**(`data`?): [`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

Defined in: main.ts:47206

#### Parameters

##### data?

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:47181

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:47186

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:47196

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
top_stories, news_search

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)[]

Defined in: main.ts:47202

items of the element

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:47200

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:47170

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:47178

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:47176

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:47191

search refinement chips

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:47174

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:47198

total number of results in SERP

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:47189

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:47172

type of element

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:47215

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:47252

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

Defined in: main.ts:47245

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)
