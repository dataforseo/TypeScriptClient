[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo()

> **new SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:66973

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:66948

***

### comments\_count?

> `optional` **comments\_count**: `number`

number of comments on the video

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`comments_count`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#comments_count)

#### Defined in

main.ts:66965

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:66953

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_comment

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:66961

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:66969

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:66967

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:66945

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:66943

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:66941

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:66956

***

### title?

> `optional` **title**: `string`

title of the video

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`title`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#title)

#### Defined in

main.ts:66963

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md#video_id)

#### Defined in

main.ts:66939

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:66982

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:67018

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo`](SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:67011
