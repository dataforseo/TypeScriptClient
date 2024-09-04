[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / YoutubeSubtitlesSerpElementItem

# Class: YoutubeSubtitlesSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new YoutubeSubtitlesSerpElementItem()

> **new YoutubeSubtitlesSerpElementItem**(`data`?): [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Parameters

• **data?**: [`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md)

#### Returns

[`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:65236

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### duration\_time?

> `optional` **duration\_time**: `number`

duration of subtitles in seconds

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`duration_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#duration_time)

#### Defined in

main.ts:65232

***

### end\_time?

> `optional` **end\_time**: `number`

the second subtitled text ends

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`end_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#end_time)

#### Defined in

main.ts:65230

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:65224

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_group)

#### Defined in

main.ts:65221

***

### start\_time?

> `optional` **start\_time**: `number`

the second subtitled text starts

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`start_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#start_time)

#### Defined in

main.ts:65228

***

### text?

> `optional` **text**: `string`

text translated in subtitles

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`text`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#text)

#### Defined in

main.ts:65226

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:65241

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:65264

***

### fromJS()

> `static` **fromJS**(`data`): [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:65257
