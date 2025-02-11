[**Documentation**](../README.md)

***

[Documentation](../README.md) / YoutubeSubtitlesSerpElementItem

# Class: YoutubeSubtitlesSerpElementItem

Defined in: main.ts:72230

## Extends

- [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

## Implements

- [`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new YoutubeSubtitlesSerpElementItem()

> **new YoutubeSubtitlesSerpElementItem**(`data`?): [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

Defined in: main.ts:72242

#### Parameters

##### data?

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md)

#### Returns

[`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`constructor`](BaseYoutubeSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:70506

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`_discriminator`](BaseYoutubeSerpElementItem.md#_discriminator)

***

### duration\_time?

> `optional` **duration\_time**: `number`

Defined in: main.ts:72238

duration of subtitles in seconds

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`duration_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#duration_time)

***

### end\_time?

> `optional` **end\_time**: `number`

Defined in: main.ts:72236

the second subtitled text ends

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`end_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#end_time)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:70504

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`rank_absolute`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_absolute`](BaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:70501

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`rank_group`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`rank_group`](BaseYoutubeSerpElementItem.md#rank_group)

***

### start\_time?

> `optional` **start\_time**: `number`

Defined in: main.ts:72234

the second subtitled text starts

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`start_time`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#start_time)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:72232

text translated in subtitles

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`text`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70497

type of element

#### Implementation of

[`IYoutubeSubtitlesSerpElementItem`](../interfaces/IYoutubeSubtitlesSerpElementItem.md).[`type`](../interfaces/IYoutubeSubtitlesSerpElementItem.md#type)

#### Inherited from

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`type`](BaseYoutubeSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:72247

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`init`](BaseYoutubeSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:72268

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`toJSON`](BaseYoutubeSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

Defined in: main.ts:72261

#### Parameters

##### data

`any`

#### Returns

[`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)

#### Overrides

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md).[`fromJS`](BaseYoutubeSerpElementItem.md#fromjs)
