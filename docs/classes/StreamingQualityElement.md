[**Documentation**](../README.md)

***

[Documentation](../README.md) / StreamingQualityElement

# Class: StreamingQualityElement

Defined in: main.ts:70409

## Implements

- [`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new StreamingQualityElement()

> **new StreamingQualityElement**(`data`?): [`StreamingQualityElement`](StreamingQualityElement.md)

Defined in: main.ts:70427

#### Parameters

##### data?

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md)

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)

## Properties

### bitrate?

> `optional` **bitrate**: `number`

Defined in: main.ts:70419

bit rate of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`bitrate`](../interfaces/IStreamingQualityElement.md#bitrate)

***

### fps?

> `optional` **fps**: `number`

Defined in: main.ts:70423

frame rate of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`fps`](../interfaces/IStreamingQualityElement.md#fps)

***

### height?

> `optional` **height**: `number`

Defined in: main.ts:70417

video height in pixels

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`height`](../interfaces/IStreamingQualityElement.md#height)

***

### label?

> `optional` **label**: `string`

Defined in: main.ts:70413

label of the quality element

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`label`](../interfaces/IStreamingQualityElement.md#label)

***

### mime\_type?

> `optional` **mime\_type**: `string`

Defined in: main.ts:70421

media type of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`mime_type`](../interfaces/IStreamingQualityElement.md#mime_type)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:70411

type of element

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`type`](../interfaces/IStreamingQualityElement.md#type)

***

### width?

> `optional` **width**: `number`

Defined in: main.ts:70415

video width in pixels

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`width`](../interfaces/IStreamingQualityElement.md#width)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:70436

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:70459

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`StreamingQualityElement`](StreamingQualityElement.md)

Defined in: main.ts:70452

#### Parameters

##### data

`any`

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)
