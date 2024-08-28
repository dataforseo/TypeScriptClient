[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / SerpYoutubeVideoInfoTaskGetAdvancedResultInfo

# Class: SerpYoutubeVideoInfoTaskGetAdvancedResultInfo

## Implements

- [`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SerpYoutubeVideoInfoTaskGetAdvancedResultInfo()

> **new SerpYoutubeVideoInfoTaskGetAdvancedResultInfo**(`data`?): [`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data?**: [`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:63819

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`check_url`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#check_url)

#### Defined in

main.ts:63798

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`datetime`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#datetime)

#### Defined in

main.ts:63803

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_video_info

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`item_types`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#item_types)

#### Defined in

main.ts:63811

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`items`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items)

#### Defined in

main.ts:63815

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`items_count`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#items_count)

#### Defined in

main.ts:63813

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`language_code`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#language_code)

#### Defined in

main.ts:63795

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`location_code`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#location_code)

#### Defined in

main.ts:63793

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`se_domain`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#se_domain)

#### Defined in

main.ts:63791

***

### spell?

> `optional` **spell**: [`SpellInfo`](SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`spell`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#spell)

#### Defined in

main.ts:63806

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Implementation of

[`ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md).[`video_id`](../interfaces/ISerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md#video_id)

#### Defined in

main.ts:63789

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:63828

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:63862

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SerpYoutubeVideoInfoTaskGetAdvancedResultInfo`](SerpYoutubeVideoInfoTaskGetAdvancedResultInfo.md)

#### Defined in

main.ts:63855
