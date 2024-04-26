**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / StreamingQualityElement

# Class: StreamingQualityElement

## Implements

- [`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StreamingQualityElement(data)

> **new StreamingQualityElement**(`data`?): [`StreamingQualityElement`](StreamingQualityElement.md)

#### Parameters

• **data?**: [`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md)

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)

#### Source

main.ts:61037

## Properties

### bitrate?

> **`optional`** **bitrate**: `number`

bit rate of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`bitrate`](../interfaces/IStreamingQualityElement.md#bitrate)

#### Source

main.ts:61029

***

### fps?

> **`optional`** **fps**: `number`

frame rate of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`fps`](../interfaces/IStreamingQualityElement.md#fps)

#### Source

main.ts:61033

***

### height?

> **`optional`** **height**: `number`

video height in pixels

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`height`](../interfaces/IStreamingQualityElement.md#height)

#### Source

main.ts:61027

***

### label?

> **`optional`** **label**: `string`

label of the quality element

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`label`](../interfaces/IStreamingQualityElement.md#label)

#### Source

main.ts:61023

***

### mime\_type?

> **`optional`** **mime\_type**: `string`

media type of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`mime_type`](../interfaces/IStreamingQualityElement.md#mime_type)

#### Source

main.ts:61031

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`type`](../interfaces/IStreamingQualityElement.md#type)

#### Source

main.ts:61021

***

### width?

> **`optional`** **width**: `number`

video width in pixels

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`width`](../interfaces/IStreamingQualityElement.md#width)

#### Source

main.ts:61025

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:61046

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:61069

***

### fromJS()

> **`static`** **fromJS**(`data`): [`StreamingQualityElement`](StreamingQualityElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)

#### Source

main.ts:61062
