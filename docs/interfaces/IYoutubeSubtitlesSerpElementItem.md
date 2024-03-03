[Documentation](../README.md) / [Exports](../modules.md) / IYoutubeSubtitlesSerpElementItem

# Interface: IYoutubeSubtitlesSerpElementItem

## Hierarchy

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

  ↳ **`IYoutubeSubtitlesSerpElementItem`**

## Implemented by

- [`YoutubeSubtitlesSerpElementItem`](../classes/YoutubeSubtitlesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [duration\_time](IYoutubeSubtitlesSerpElementItem.md#duration_time)
- [end\_time](IYoutubeSubtitlesSerpElementItem.md#end_time)
- [rank\_absolute](IYoutubeSubtitlesSerpElementItem.md#rank_absolute)
- [rank\_group](IYoutubeSubtitlesSerpElementItem.md#rank_group)
- [start\_time](IYoutubeSubtitlesSerpElementItem.md#start_time)
- [text](IYoutubeSubtitlesSerpElementItem.md#text)

## Properties

### duration\_time

• `Optional` **duration\_time**: `number`

duration of subtitles in seconds

#### Defined in

main.ts:60441

___

### end\_time

• `Optional` **end\_time**: `number`

the second subtitled text ends

#### Defined in

main.ts:60439

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Defined in

main.ts:60433

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Defined in

main.ts:60430

___

### start\_time

• `Optional` **start\_time**: `number`

the second subtitled text starts

#### Defined in

main.ts:60437

___

### text

• `Optional` **text**: `string`

text translated in subtitles

#### Defined in

main.ts:60435
