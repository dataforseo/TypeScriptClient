[Documentation](../README.md) / [Exports](../modules.md) / YoutubeSubtitlesSerpElementItem

# Class: YoutubeSubtitlesSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`YoutubeSubtitlesSerpElementItem`**

## Implements

- [`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](YoutubeSubtitlesSerpElementItem.md#constructor)

### Properties

- [\_discriminator](YoutubeSubtitlesSerpElementItem.md#_discriminator)
- [duration\_time](YoutubeSubtitlesSerpElementItem.md#duration_time)
- [end\_time](YoutubeSubtitlesSerpElementItem.md#end_time)
- [rank\_absolute](YoutubeSubtitlesSerpElementItem.md#rank_absolute)
- [rank\_group](YoutubeSubtitlesSerpElementItem.md#rank_group)
- [start\_time](YoutubeSubtitlesSerpElementItem.md#start_time)
- [text](YoutubeSubtitlesSerpElementItem.md#text)

### Methods

- [init](YoutubeSubtitlesSerpElementItem.md#init)
- [toJSON](YoutubeSubtitlesSerpElementItem.md#tojson)
- [fromJS](YoutubeSubtitlesSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new YoutubeSubtitlesSerpElementItem**(`data?`): [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md) |

#### Returns

[`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:60381

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19337

___

### duration\_time

• `Optional` **duration\_time**: `number`

duration of subtitles in seconds

#### Implementation of

[IYoutubeSubtitlesSerpElementItem](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[duration_time](../interfaces/IYoutubeSubtitlesSerpElementItem.md#duration_time)

#### Defined in

main.ts:60377

___

### end\_time

• `Optional` **end\_time**: `number`

the second subtitled text ends

#### Implementation of

[IYoutubeSubtitlesSerpElementItem](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[end_time](../interfaces/IYoutubeSubtitlesSerpElementItem.md#end_time)

#### Defined in

main.ts:60375

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[IYoutubeSubtitlesSerpElementItem](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[rank_absolute](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:60369

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IYoutubeSubtitlesSerpElementItem](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[rank_group](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_group)

#### Defined in

main.ts:60366

___

### start\_time

• `Optional` **start\_time**: `number`

the second subtitled text starts

#### Implementation of

[IYoutubeSubtitlesSerpElementItem](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[start_time](../interfaces/IYoutubeSubtitlesSerpElementItem.md#start_time)

#### Defined in

main.ts:60373

___

### text

• `Optional` **text**: `string`

text translated in subtitles

#### Implementation of

[IYoutubeSubtitlesSerpElementItem](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[text](../interfaces/IYoutubeSubtitlesSerpElementItem.md#text)

#### Defined in

main.ts:60371

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

main.ts:60386

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:60409

___

### fromJS

▸ **fromJS**(`data`): [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:60402
