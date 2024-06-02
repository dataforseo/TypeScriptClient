**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

# Interface: ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category?

> **`optional`** **category**: `string`

the category the video belongs to

#### Source

main.ts:63983

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:63962

***

### datetime?

> **`optional`** **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:63967

***

### item\_types?

> **`optional`** **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Source

main.ts:63975

***

### items?

> **`optional`** **items**: [`BaseSerpElementItem`](../classes/BaseSerpElementItem.md)[]

elements of search results found in SERP

#### Source

main.ts:63991

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Source

main.ts:63989

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Source

main.ts:63959

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Source

main.ts:63957

***

### origin\_language?

> **`optional`** **origin\_language**: `string`

language code of original text

#### Source

main.ts:63981

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Source

main.ts:63955

***

### spell?

> **`optional`** **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Source

main.ts:63970

***

### subtitles\_count?

> **`optional`** **subtitles\_count**: `number`

number of subtitles in the video

#### Source

main.ts:63985

***

### title?

> **`optional`** **title**: `string`

title of the video

#### Source

main.ts:63987

***

### translate\_language?

> **`optional`** **translate\_language**: `string`

language code of translated text

#### Source

main.ts:63979

***

### unsupported\_language?

> **`optional`** **unsupported\_language**: `boolean`

indicates whether the language is unsupported by the system

#### Source

main.ts:63977

***

### video\_id?

> **`optional`** **video\_id**: `string`

ID of the video received in a POST array

#### Source

main.ts:63953
