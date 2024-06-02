**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / YoutubeSubtitlesSerpElementItem

# Class: YoutubeSubtitlesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new YoutubeSubtitlesSerpElementItem(data)

> **new YoutubeSubtitlesSerpElementItem**(`data`?): [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Parameters

• **data?**: [`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md)

#### Returns

[`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Source

main.ts:63759

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Source

main.ts:19668

***

### duration\_time?

> **`optional`** **duration\_time**: `number`

duration of subtitles in seconds

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`duration_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#duration_time)

#### Source

main.ts:63755

***

### end\_time?

> **`optional`** **end\_time**: `number`

the second subtitled text ends

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`end_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#end_time)

#### Source

main.ts:63753

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_absolute)

#### Source

main.ts:63747

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_group)

#### Source

main.ts:63744

***

### start\_time?

> **`optional`** **start\_time**: `number`

the second subtitled text starts

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`start_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#start_time)

#### Source

main.ts:63751

***

### text?

> **`optional`** **text**: `string`

text translated in subtitles

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`text`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#text)

#### Source

main.ts:63749

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Source

main.ts:63764

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Source

main.ts:63787

***

### fromJS()

> **`static`** **fromJS**(`data`): [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Source

main.ts:63780
