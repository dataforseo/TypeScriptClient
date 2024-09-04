[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / YoutubeSubtitlesSerpElementItem

# Class: YoutubeSubtitlesSerpElementItem

## Extends

- [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

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

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`constructor`](BaseYoutubeSerpElementItem.md#constructors)

#### Defined in

main.ts:63971

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`_discriminator`](BaseYoutubeSerpElementItem.md#_discriminator)

#### Defined in

main.ts:62255

***

### duration\_time?

> `optional` **duration\_time**: `number`

duration of subtitles in seconds

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`duration_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#duration_time)

#### Defined in

main.ts:63967

***

### end\_time?

> `optional` **end\_time**: `number`

the second subtitled text ends

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`end_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#end_time)

#### Defined in

main.ts:63965

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_absolute`](BaseYoutubeSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:62253

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_group`](BaseYoutubeSerpElementItem.md#rank_group)

#### Defined in

main.ts:62250

***

### start\_time?

> `optional` **start\_time**: `number`

the second subtitled text starts

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`start_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#start_time)

#### Defined in

main.ts:63963

***

### text?

> `optional` **text**: `string`

text translated in subtitles

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`text`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#text)

#### Defined in

main.ts:63961

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`type`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#type)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`type`](BaseYoutubeSerpElementItem.md#type)

#### Defined in

main.ts:62246

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`init`](BaseYoutubeSerpElementItem.md#init)

#### Defined in

main.ts:63976

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`toJSON`](BaseYoutubeSerpElementItem.md#tojson)

#### Defined in

main.ts:63997

***

### fromJS()

> `static` **fromJS**(`data`): [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`fromJS`](BaseYoutubeSerpElementItem.md#fromjs)

#### Defined in

main.ts:63990
