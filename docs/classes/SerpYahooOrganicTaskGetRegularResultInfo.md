[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTaskGetRegularResultInfo

# Class: SerpYahooOrganicTaskGetRegularResultInfo

## Implements

- [`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicTaskGetRegularResultInfo()

> **new SerpYahooOrganicTaskGetRegularResultInfo**(`data`?): [`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Parameters

##### data?

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md)

#### Returns

[`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:76087

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#check_url)

#### Defined in

main.ts:76058

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#datetime)

#### Defined in

main.ts:76063

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video;
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic, paid, and featured_snippet types only;
to get all items (including SERP features and rich snippets) found in the returned SERP, please refer to the Yahoo Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#item_types)

#### Defined in

main.ts:76077

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#items)

#### Defined in

main.ts:76083

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#items_count)

#### Defined in

main.ts:76081

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#keyword)

#### Defined in

main.ts:76047

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#language_code)

#### Defined in

main.ts:76055

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#location_code)

#### Defined in

main.ts:76053

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

search refinement chips
equals null

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#refinement_chips)

#### Defined in

main.ts:76069

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#se_domain)

#### Defined in

main.ts:76051

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#se_results_count)

#### Defined in

main.ts:76079

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#spell)

#### Defined in

main.ts:76066

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpYahooOrganicTaskGetRegularResultInfo`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicTaskGetRegularResultInfo.md#type)

#### Defined in

main.ts:76049

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:76096

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:76133

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicTaskGetRegularResultInfo`](SerpYahooOrganicTaskGetRegularResultInfo.md)

#### Defined in

main.ts:76126
