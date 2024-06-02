**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoCommentsLiveAdvancedResultInfo

# Class: SerpYoutubeVideoCommentsLiveAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoCommentsLiveAdvancedResultInfo(data)

> **new SerpYoutubeVideoCommentsLiveAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Source

main.ts:65932

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#check_url)

#### Source

main.ts:65907

***

### comments\_count?

> **`optional`** **comments\_count**: `number`

number of comments on the video

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`comments_count`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#comments_count)

#### Source

main.ts:65924

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#datetime)

#### Source

main.ts:65912

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_comment

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#item_types)

#### Source

main.ts:65920

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#items)

#### Source

main.ts:65928

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#items_count)

#### Source

main.ts:65926

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#language_code)

#### Source

main.ts:65904

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#location_code)

#### Source

main.ts:65902

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#se_domain)

#### Source

main.ts:65900

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#spell)

#### Source

main.ts:65915

***

### title?

> **`optional`** **title**: `string`

title of the video

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`title`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#title)

#### Source

main.ts:65922

***

### video\_id?

> **`optional`** **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoCommentsLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoCommentsLiveAdvancedResultInfo.md#video_id)

#### Source

main.ts:65898

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:65941

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:65977

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoCommentsLiveAdvancedResultInfo`](SerpYoutubeVideoCommentsLiveAdvancedResultInfo.md)

#### Source

main.ts:65970
