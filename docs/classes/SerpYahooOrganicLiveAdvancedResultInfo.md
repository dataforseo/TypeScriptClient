[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicLiveAdvancedResultInfo

# Class: SerpYahooOrganicLiveAdvancedResultInfo

Defined in: main.ts:77612

## Implements

- [`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveAdvancedResultInfo()

> **new SerpYahooOrganicLiveAdvancedResultInfo**(`data`?): [`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

Defined in: main.ts:77652

#### Parameters

##### data?

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md)

#### Returns

[`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:77626

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:77631

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:77642

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

Defined in: main.ts:77648

items featured in the faq_box

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:77646

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#items_count)

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:77615

keyword received in a POST array
the keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#keyword)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:77623

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:77621

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:77637

search refinement chips
equals null

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:77619

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#se_domain)

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

Defined in: main.ts:77644

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#se_results_count)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:77634

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#spell)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:77617

type of element

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:77661

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:77698

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

Defined in: main.ts:77691

#### Parameters

##### data

`any`

#### Returns

[`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)
