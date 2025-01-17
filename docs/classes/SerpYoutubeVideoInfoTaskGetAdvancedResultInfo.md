[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoInfoTaskGetAdvancedResultInfo

Defined in: main.ts:70744

## Implements

- [`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoTaskGetAdvancedResultInfo()

> **new SerpYoutubeVideoInfoTaskGetAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:70779

#### Parameters

##### data?

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:70755

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#check_url)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:70760

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:70771

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_video_info

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)[]

Defined in: main.ts:70775

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:70773

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:70752

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:70750

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:70766

search refinement chips
equals null

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:70748

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#se_domain)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:70763

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#spell)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:70746

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#video_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:70788

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:70823

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

Defined in: main.ts:70816

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)
