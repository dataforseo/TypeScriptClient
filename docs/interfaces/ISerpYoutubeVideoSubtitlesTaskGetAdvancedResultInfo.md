[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

# Interface: ISerpYoutubeVideoSubtitlesTaskGetAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### category?

> `optional` **category**: `string`

the category the video belongs to

#### Defined in

main.ts:64184

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:64163

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:64168

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_subtitles

#### Defined in

main.ts:64176

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](../classes/BaseYoutubeSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:64192

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:64190

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:64160

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:64158

***

### origin\_language?

> `optional` **origin\_language**: `string`

language code of original text

#### Defined in

main.ts:64182

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:64156

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:64171

***

### subtitles\_count?

> `optional` **subtitles\_count**: `number`

number of subtitles in the video

#### Defined in

main.ts:64186

***

### title?

> `optional` **title**: `string`

title of the video

#### Defined in

main.ts:64188

***

### translate\_language?

> `optional` **translate\_language**: `string`

language code of translated text

#### Defined in

main.ts:64180

***

### unsupported\_language?

> `optional` **unsupported\_language**: `boolean`

indicates whether the language is unsupported by the system

#### Defined in

main.ts:64178

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

main.ts:64154
