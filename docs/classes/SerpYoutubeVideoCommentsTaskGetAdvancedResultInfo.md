[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

Defined in: main.ts:73934

## Implements

- [`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo()

> **new SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:73973

#### Parameters

##### data?

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:73945

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#check_url)

***

### comments\_count?

> `optional` **comments\_count**: `number`

Defined in: main.ts:73965

number of comments on the video

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`comments_count`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#comments_count)

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:73950

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#datetime)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:73961

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_comment

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#item_types)

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)[]

Defined in: main.ts:73969

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:73967

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:73942

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:73940

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#location_code)

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](RefinementChipsInfo.md)

Defined in: main.ts:73956

search refinement chips
equals null

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`refinement_chips`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#refinement_chips)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:73938

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#se_domain)

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

Defined in: main.ts:73953

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#spell)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:73963

title of the video

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#title)

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:73936

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#video_id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:73982

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:74019

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

Defined in: main.ts:74012

#### Parameters

##### data

`any`

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)
