[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsLiveAdvancedResultInfo

# Class: SerpGoogleNewsLiveAdvancedResultInfo

## Implements

- [`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleNewsLiveAdvancedResultInfo()

> **new SerpGoogleNewsLiveAdvancedResultInfo**(`data`?): [`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

#### Parameters

##### data?

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md)

#### Returns

[`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:47190

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:47165

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:47170

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
top_stories, news_search

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:47180

***

### items?

> `optional` **items**: [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)[]

items of the element

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:47186

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:47184

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:47154

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:47162

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:47160

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#refinement_chips)

#### Defined in

main.ts:47175

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:47158

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:47182

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:47173

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpGoogleNewsLiveAdvancedResultInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpGoogleNewsLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:47156

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:47199

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:47236

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)

#### Defined in

main.ts:47229
