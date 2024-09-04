[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBaseYoutubeSerpElementItem

# Interface: IBaseYoutubeSerpElementItem

## Extended by

- [`IYoutubeVideoInfoSerpElementItem`](IYoutubeVideoInfoSerpElementItem.md)
- [`IYoutubeSubtitlesSerpElementItem`](IYoutubeSubtitlesSerpElementItem.md)
- [`IYoutubeCommentSerpElementItem`](IYoutubeCommentSerpElementItem.md)

## Properties

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

main.ts:62316

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:62313

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:62309
