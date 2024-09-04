[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IYoutubeSubtitlesSerpElementItem

# Interface: IYoutubeSubtitlesSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### duration\_time?

> `optional` **duration\_time**: `number`

duration of subtitles in seconds

#### Defined in

main.ts:65296

***

### end\_time?

> `optional` **end\_time**: `number`

the second subtitled text ends

#### Defined in

main.ts:65294

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

main.ts:65288

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:65285

***

### start\_time?

> `optional` **start\_time**: `number`

the second subtitled text starts

#### Defined in

main.ts:65292

***

### text?

> `optional` **text**: `string`

text translated in subtitles

#### Defined in

main.ts:65290
