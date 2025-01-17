[**Documentation**](../README.md)

***

[Documentation](../README.md) / IYoutubeSubtitlesSerpElementItem

# Interface: IYoutubeSubtitlesSerpElementItem

Defined in: main.ts:72247

## Extends

- [`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:72255

duration of subtitles in seconds

***

### end\_time?

> `optional` **end\_time**: `number`

Defined in: main.ts:72253

the second subtitled text ends

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:70531

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_absolute`](IBaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:70528

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`rank_group`](IBaseYoutubeSerpElementItem.md#rank_group)

***

### start\_time?

> `optional` **start\_time**: `number`

Defined in: main.ts:72251

the second subtitled text starts

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:72249

text translated in subtitles

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70524

type of element

#### Inherited from

[`IBaseYoutubeSerpElementItem`](IBaseYoutubeSerpElementItem.md).[`type`](IBaseYoutubeSerpElementItem.md#type)
