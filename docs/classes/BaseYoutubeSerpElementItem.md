[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseYoutubeSerpElementItem

# Class: BaseYoutubeSerpElementItem

## Extended by

- [`YoutubeVideoInfoSerpElementItem`](YoutubeVideoInfoSerpElementItem.md)
- [`YoutubeSubtitlesSerpElementItem`](YoutubeSubtitlesSerpElementItem.md)
- [`YoutubeCommentSerpElementItem`](YoutubeCommentSerpElementItem.md)

## Implements

- [`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md)

## Constructors

### new BaseYoutubeSerpElementItem()

> **new BaseYoutubeSerpElementItem**(`data`?): [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md)

#### Returns

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

#### Defined in

main.ts:62290

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:62288

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseYoutubeSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:62286

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`rank_group`](../interfaces/IBaseYoutubeSerpElementItem.md#rank_group)

#### Defined in

main.ts:62283

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseYoutubeSerpElementItem`](../interfaces/IBaseYoutubeSerpElementItem.md).[`type`](../interfaces/IBaseYoutubeSerpElementItem.md#type)

#### Defined in

main.ts:62279

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:62300

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:62330

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseYoutubeSerpElementItem`](BaseYoutubeSerpElementItem.md)

#### Defined in

main.ts:62308
