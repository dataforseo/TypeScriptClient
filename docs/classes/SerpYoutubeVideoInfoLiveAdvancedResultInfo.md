[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpYoutubeVideoInfoLiveAdvancedResultInfo

# Class: SerpYoutubeVideoInfoLiveAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoLiveAdvancedResultInfo()

> **new SerpYoutubeVideoInfoLiveAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:64223

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:64202

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:64207

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_video_info

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:64215

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items)

#### Defined in

main.ts:64219

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:64217

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:64199

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:64197

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:64195

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#spell)

#### Defined in

main.ts:64210

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoLiveAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoInfoLiveAdvancedResultInfo.md#video_id)

#### Defined in

main.ts:64193

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:64232

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:64266

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoInfoLiveAdvancedResultInfo`](SerpYoutubeVideoInfoLiveAdvancedResultInfo.md)

#### Defined in

main.ts:64259
