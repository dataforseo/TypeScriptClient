[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBaseYoutubeSerpElementItem

# Interface: IBaseYoutubeSerpElementItem

Defined in: main.ts:70558

## Extended by

- [`IYoutubeVideoInfoSerpElementItem`](IYoutubeVideoInfoSerpElementItem.md)
- [`IYoutubeSubtitlesSerpElementItem`](IYoutubeSubtitlesSerpElementItem.md)
- [`IYoutubeCommentSerpElementItem`](IYoutubeCommentSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:70567

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:70564

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70560

type of element
