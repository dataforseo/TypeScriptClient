**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / VideoElement

# Class: VideoElement

## Implements

- [`IVideoElement`](../interfaces/IVideoElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new VideoElement(data)

> **new VideoElement**(`data`?): [`VideoElement`](VideoElement.md)

#### Parameters

• **data?**: [`IVideoElement`](../interfaces/IVideoElement.md)

#### Returns

[`VideoElement`](VideoElement.md)

#### Source

main.ts:30915

## Properties

### preview?

> **`optional`** **preview**: `string`

URL to the video preview image

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`preview`](../interfaces/IVideoElement.md#preview)

#### Source

main.ts:30911

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`source`](../interfaces/IVideoElement.md#source)

#### Source

main.ts:30900

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`timestamp`](../interfaces/IVideoElement.md#timestamp)

#### Source

main.ts:30907

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`title`](../interfaces/IVideoElement.md#title)

#### Source

main.ts:30902

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`type`](../interfaces/IVideoElement.md#type)

#### Source

main.ts:30897

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IVideoElement`](../interfaces/IVideoElement.md).[`url`](../interfaces/IVideoElement.md#url)

#### Source

main.ts:30909

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:30924

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:30946

***

### fromJS()

> **`static`** **fromJS**(`data`): [`VideoElement`](VideoElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`VideoElement`](VideoElement.md)

#### Source

main.ts:30939
