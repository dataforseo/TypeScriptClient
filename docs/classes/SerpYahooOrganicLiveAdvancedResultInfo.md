[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpYahooOrganicLiveAdvancedResultInfo

# Class: SerpYahooOrganicLiveAdvancedResultInfo

## Implements

- [`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYahooOrganicLiveAdvancedResultInfo()

> **new SerpYahooOrganicLiveAdvancedResultInfo**(`data`?): [`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md)

#### Returns

[`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:69758

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:69735

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:69740

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item types:
featured_snippet, images, local_pack, hotels_pack, organic, paid, people_also_ask, related_searches, shopping, recipes, top_stories, video

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:69748

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

items featured in the faq_box

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:69754

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:69752

***

### keyword?

> `optional` **keyword**: `string`

keyword received in a POST array
the keyword is returned with decoded %## (plus symbol ‘+’ will be decoded to a space character)

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`keyword`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#keyword)

#### Defined in

main.ts:69724

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:69732

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:69730

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:69728

***

### se\_results\_count?

> `optional` **se\_results\_count**: `number`

total number of results in SERP

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`se_results_count`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#se_results_count)

#### Defined in

main.ts:69750

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:69743

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`ISerpYahooOrganicLiveAdvancedResultInfo`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md).[`type`](../interfaces/ISerpYahooOrganicLiveAdvancedResultInfo.md#type)

#### Defined in

main.ts:69726

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:69767

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:69803

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYahooOrganicLiveAdvancedResultInfo`](SerpYahooOrganicLiveAdvancedResultInfo.md)

#### Defined in

main.ts:69796
