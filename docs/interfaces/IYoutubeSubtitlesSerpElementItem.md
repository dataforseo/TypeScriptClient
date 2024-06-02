**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IYoutubeSubtitlesSerpElementItem

# Interface: IYoutubeSubtitlesSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### duration\_time?

> **`optional`** **duration\_time**: `number`

duration of subtitles in seconds

#### Source

main.ts:63819

***

### end\_time?

> **`optional`** **end\_time**: `number`

the second subtitled text ends

#### Source

main.ts:63817

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Source

main.ts:63811

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:63808

***

### start\_time?

> **`optional`** **start\_time**: `number`

the second subtitled text starts

#### Source

main.ts:63815

***

### text?

> **`optional`** **text**: `string`

text translated in subtitles

#### Source

main.ts:63813
