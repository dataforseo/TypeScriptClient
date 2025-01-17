[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

# Interface: ISerpYoutubeVideoSubtitlesLiveAdvancedResultInfo

Defined in: main.ts:72858

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:72893

the category the video belongs to

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:72869

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:72874

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:72885

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](../classes/BaseYoutubeSerpElementItem.md)[]

Defined in: main.ts:72901

elements of search results found in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:72899

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:72866

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:72864

location code in a POST array

***

### origin\_language?

> `optional` **origin\_language**: `string`

Defined in: main.ts:72891

language code of original text

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:72880

search refinement chips
equals null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:72862

search engine domain in a POST array

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:72877

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### subtitles\_count?

> `optional` **subtitles\_count**: `number`

Defined in: main.ts:72895

number of subtitles in the video

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:72897

title of the video

***

### translate\_language?

> `optional` **translate\_language**: `string`

Defined in: main.ts:72889

language code of translated text

***

### unsupported\_language?

> `optional` **unsupported\_language**: `boolean`

Defined in: main.ts:72887

indicates whether the language is unsupported by the system

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:72860

ID of the video received in a POST array
