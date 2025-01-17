[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseYoutubeSerpElementItem

# Class: BaseYoutubeSerpElementItem

Defined in: main.ts:70459

## Extended by

- [`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)
- [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)
- [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

## Implements

- [`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md)

## Constructors

### new BaseYoutubeSerpElementItem()

> **new BaseYoutubeSerpElementItem**(`data`?): [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

Defined in: main.ts:70472

#### Parameters

##### data?

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md)

#### Returns

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:70470

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:70468

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseYoutubeSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:70465

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`rank_group`](../interfaces/IBaseYoutubeSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70461

type of element

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`type`](../interfaces/IBaseYoutubeSerpElementItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:70482

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:70512

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

Defined in: main.ts:70490

#### Parameters

##### data

`any`

#### Returns

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)
