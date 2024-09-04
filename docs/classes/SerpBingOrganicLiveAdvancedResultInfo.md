[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpBingOrganicLiveAdvancedResultInfo

# Class: SerpBingOrganicLiveAdvancedResultInfo

## Implements

- [`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpBingOrganicLiveAdvancedResultInfo()

> **new SerpBingOrganicLiveAdvancedResultInfo**(`data`?): [`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md)

#### Returns

[`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:58788

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:58764

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:58769

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
answer_box, carousel, events, featured_snippet, hotels_pack, images, jobs, local_pack, map, organic, paid, people_also_ask, people_also_search, questions_and_answers,recipes, related_searches, shopping, top_stories, video

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:58777

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:58784

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:58781

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:58753

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:58761

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:58759

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:58757

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:58779

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:58772

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpBingOrganicLiveAdvancedResultInfo`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpBingOrganicLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:58755

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:58797

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:58833

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpBingOrganicLiveAdvancedResultInfo`](SerpBingOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:58826
