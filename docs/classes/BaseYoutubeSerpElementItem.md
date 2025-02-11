[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseYoutubeSerpElementItem

# Class: BaseYoutubeSerpElementItem

Defined in: main.ts:70495

## Extended by

- [`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)
- [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)
- [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

## Implements

- [`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md)

## Constructors

### new BaseYoutubeSerpElementItem()

> **new BaseYoutubeSerpElementItem**(`data`?): [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

Defined in: main.ts:70508

#### Parameters

##### data?

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md)

#### Returns

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:70506

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:70504

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:70501

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`rank_group`](../interfaces/IBaseYoutubeSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70497

type of element

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`type`](../interfaces/IBaseYoutubeSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:70518

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:70548

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

Defined in: main.ts:70526

#### Parameters

##### data

`any`

#### Returns

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)
