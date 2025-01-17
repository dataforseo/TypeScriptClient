[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskGetRegularResultInfo

# Class: SerpYahooOrganicTaskGetRegularResultInfo

Defined in: main.ts:76044

## Implements

- [`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskGetRegularResultInfo()

> **new SerpYahooOrganicTaskGetRegularResultInfo**(`data`?): [`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

Defined in: main.ts:76087

#### Parameters

##### data?

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:76058

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:76063

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:76077

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video;
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic, paid, and featured_snippet types only;
to get all items (including SERP features and rich snippets) found in the returned SERP, please refer to the Yahoo Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:76083

items in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:76081

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:76047

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:76055

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:76053

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:76069

search refinement chips
equals null

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:76051

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:76079

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:76066

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:76049

type of element

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:76096

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:76133

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

Defined in: main.ts:76126

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)
