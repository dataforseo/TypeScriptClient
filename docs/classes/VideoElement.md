[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / VideoElement

# Class: VideoElement

## Implements

- [`IVideoElement`](../interfaces/IVideoElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new VideoElement()

> **new VideoElement**(`data`?): [`VideoElement`](VideoElement.md)

#### Parameters

• **data?**: [`IVideoElement`](../interfaces/IVideoElement.md)

#### Returns

[`VideoElement`](VideoElement.md)

#### Defined in

main.ts:31881

## Properties

### preview?

> `optional` **preview**: `string`

URL to the video preview image

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`preview`](../interfaces/IVideoElement.md#preview)

#### Defined in

main.ts:31877

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`source`](../interfaces/IVideoElement.md#source)

#### Defined in

main.ts:31866

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`timestamp`](../interfaces/IVideoElement.md#timestamp)

#### Defined in

main.ts:31873

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`title`](../interfaces/IVideoElement.md#title)

#### Defined in

main.ts:31868

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`type`](../interfaces/IVideoElement.md#type)

#### Defined in

main.ts:31863

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`url`](../interfaces/IVideoElement.md#url)

#### Defined in

main.ts:31875

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:31890

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:31912

***

### fromJS()

> `static` **fromJS**(`data`): [`VideoElement`](VideoElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`VideoElement`](VideoElement.md)

#### Defined in

main.ts:31905
