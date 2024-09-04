[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

# Interface: ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

the category the video belongs to

#### Defined in

main.ts:65918

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:65897

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:65902

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Defined in

main.ts:65910

***

### items?

> `optional` **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:65926

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:65924

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:65894

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:65892

***

### origin\_language?

> `optional` **origin\_language**: `string`

language code of original text

#### Defined in

main.ts:65916

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:65890

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:65905

***

### subtitles\_count?

> `optional` **subtitles\_count**: `number`

number of subtitles in the video

#### Defined in

main.ts:65920

***

### title?

> `optional` **title**: `string`

title of the video

#### Defined in

main.ts:65922

***

### translate\_language?

> `optional` **translate\_language**: `string`

language code of translated text

#### Defined in

main.ts:65914

***

### unsupported\_language?

> `optional` **unsupported\_language**: `boolean`

indicates whether the language is unsupported by the system

#### Defined in

main.ts:65912

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

main.ts:65888
