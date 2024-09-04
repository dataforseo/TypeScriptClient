[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / StreamingQualityElement

# Class: StreamingQualityElement

## Implements

- [`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StreamingQualityElement()

> **new StreamingQualityElement**(`data`?): [`StreamingQualityElement`](StreamingQualityElement.md)

#### Parameters

• **data?**: [`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md)

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)

#### Defined in

main.ts:63497

## Properties

### bitrate?

> `optional` **bitrate**: `number`

bit rate of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`bitrate`](../interfaces/IStreamingQualityElement.md#bitrate)

#### Defined in

main.ts:63489

***

### fps?

> `optional` **fps**: `number`

frame rate of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`fps`](../interfaces/IStreamingQualityElement.md#fps)

#### Defined in

main.ts:63493

***

### height?

> `optional` **height**: `number`

video height in pixels

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`height`](../interfaces/IStreamingQualityElement.md#height)

#### Defined in

main.ts:63487

***

### label?

> `optional` **label**: `string`

label of the quality element

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`label`](../interfaces/IStreamingQualityElement.md#label)

#### Defined in

main.ts:63483

***

### mime\_type?

> `optional` **mime\_type**: `string`

media type of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`mime_type`](../interfaces/IStreamingQualityElement.md#mime_type)

#### Defined in

main.ts:63491

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`type`](../interfaces/IStreamingQualityElement.md#type)

#### Defined in

main.ts:63481

***

### width?

> `optional` **width**: `number`

video width in pixels

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`width`](../interfaces/IStreamingQualityElement.md#width)

#### Defined in

main.ts:63485

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:63506

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:63529

***

### fromJS()

> `static` **fromJS**(`data`): [`StreamingQualityElement`](StreamingQualityElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)

#### Defined in

main.ts:63522
