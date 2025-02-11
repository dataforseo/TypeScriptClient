[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

# Interface: ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

Defined in: main.ts:72428

## Indexable

\[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

Defined in: main.ts:72463

the category the video belongs to

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:72439

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:72444

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:72455

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](../classes/BaseYoutubeSerpElementItem.md)[]

Defined in: main.ts:72471

elements of search results found in SERP

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:72469

the number of results returned in the items array

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:72436

language code in a POST array

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:72434

location code in a POST array

***

### origin\_language?

> `optional` **origin\_language**: `string`

Defined in: main.ts:72461

language code of original text

***

### refinement\_chips?

> `optional` **refinement\_chips**: [`RefinementChipsInfo`](../classes/RefinementChipsInfo.md)

Defined in: main.ts:72450

search refinement chips
equals null

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:72432

search engine domain in a POST array

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

Defined in: main.ts:72447

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

***

### subtitles\_count?

> `optional` **subtitles\_count**: `number`

Defined in: main.ts:72465

number of subtitles in the video

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:72467

title of the video

***

### translate\_language?

> `optional` **translate\_language**: `string`

Defined in: main.ts:72459

language code of translated text

***

### unsupported\_language?

> `optional` **unsupported\_language**: `boolean`

Defined in: main.ts:72457

indicates whether the language is unsupported by the system

***

### video\_id?

> `optional` **video\_id**: `string`

Defined in: main.ts:72430

ID of the video received in a POST array
