[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveRegularResultInfo

# Class: SerpYahooOrganicLiveRegularResultInfo

Defined in: main.ts:77108

## Implements

- [`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveRegularResultInfo()

> **new SerpYahooOrganicLiveRegularResultInfo**(`data`?): [`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

Defined in: main.ts:77151

#### Parameters

##### data?

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md)

#### Returns

[`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:77122

direct URL to search engine results
You can use it to make sure that we provided exact results

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:77127

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:77141

types of search results found in SERP
contains types of all search results (items) found in the returned SERP
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video;
note that this array contains all types of search results found in the returned SERP;
however, this endpoint provides data for organic, paid, and featured_snippet types only;
to get all items (including SERP features and rich snippets) found in the returned SERP, please refer to the Yahoo Organiс Advanced SERP endpoint

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:77147

items in SERP

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:77145

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:77111

keyword received in a POST array
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:77119

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:77117

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:77133

search refinement chips
equals null

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`refinement_chips`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:77115

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:77143

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:77130

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:77113

type of element

#### Implementation of

[`ISerpYahooOrganicLiveRegularResultInfo`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicLiveRegularResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:77160

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:77197

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)

Defined in: main.ts:77190

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicLiveRegularResultInfo`](SerpYahooOrganicLiveRegularResultInfo.md)
