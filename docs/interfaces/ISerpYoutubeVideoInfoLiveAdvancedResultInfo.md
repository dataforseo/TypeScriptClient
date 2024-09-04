[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ISerpYoutubeVideoInfoLiveAdvancedResultInfo

# Interface: ISerpYoutubeVideoInfoLiveAdvancedResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

main.ts:63047

***

### datetime?

> `optional` **datetime**: `string`

date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:63052

***

### item\_types?

> `optional` **item\_types**: `string`[]

types of search results in SERP
contains types of search results (items) found in SERP.
possible item:
youtube_video_info

#### Defined in

main.ts:63060

***

### items?

> `optional` **items**: [`BaseYoutubeSerpElementItem`](../classes/BaseYoutubeSerpElementItem.md)[]

elements of search results found in SERP

#### Defined in

main.ts:63064

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

main.ts:63062

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Defined in

main.ts:63044

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Defined in

main.ts:63042

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

main.ts:63040

***

### spell?

> `optional` **spell**: [`SpellInfo`](../classes/SpellInfo.md)

autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection

#### Defined in

main.ts:63055

***

### video\_id?

> `optional` **video\_id**: `string`

ID of the video received in a POST array

#### Defined in

main.ts:63038
