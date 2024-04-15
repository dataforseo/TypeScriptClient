**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SerpYoutubeVideoInfoTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoInfoTaskGetAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoTaskGetAdvancedResultInfo(data)

> **new SerpYoutubeVideoInfoTaskGetAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Source

main.ts:61215

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#check_url)

#### Source

main.ts:61194

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#datetime)

#### Source

main.ts:61199

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_video_info

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#item_types)

#### Source

main.ts:61207

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items)

#### Source

main.ts:61211

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items_count)

#### Source

main.ts:61209

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#language_code)

#### Source

main.ts:61191

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#location_code)

#### Source

main.ts:61189

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Source

main.ts:61187

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#spell)

#### Source

main.ts:61202

***

### video\_id?

> **`optional`** **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#video_id)

#### Source

main.ts:61185

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:61224

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:61258

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Source

main.ts:61251
