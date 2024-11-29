[**Documentation**](../README.md)

***

[Documentation](../README.md) / StreamingQualityElement

# Class: StreamingQualityElement

## Implements

- [`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new StreamingQualityElement()

> **new StreamingQualityElement**(`data`?): [`StreamingQualityElement`](StreamingQualityElement.md)

#### Parameters

##### data?

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md)

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)

#### Defined in

main.ts:70391

## Properties

### bitrate?

> `optional` **bitrate**: `number`

bit rate of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`bitrate`](../interfaces/IStreamingQualityElement.md#bitrate)

#### Defined in

main.ts:70383

***

### fps?

> `optional` **fps**: `number`

frame rate of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`fps`](../interfaces/IStreamingQualityElement.md#fps)

#### Defined in

main.ts:70387

***

### height?

> `optional` **height**: `number`

video height in pixels

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`height`](../interfaces/IStreamingQualityElement.md#height)

#### Defined in

main.ts:70381

***

### label?

> `optional` **label**: `string`

label of the quality element

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`label`](../interfaces/IStreamingQualityElement.md#label)

#### Defined in

main.ts:70377

***

### mime\_type?

> `optional` **mime\_type**: `string`

media type of the video

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`mime_type`](../interfaces/IStreamingQualityElement.md#mime_type)

#### Defined in

main.ts:70385

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`type`](../interfaces/IStreamingQualityElement.md#type)

#### Defined in

main.ts:70375

***

### width?

> `optional` **width**: `number`

video width in pixels

#### Implementation of

[`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md).[`width`](../interfaces/IStreamingQualityElement.md#width)

#### Defined in

main.ts:70379

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:70400

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:70423

***

### fromJS()

> `static` **fromJS**(`data`): [`StreamingQualityElement`](StreamingQualityElement.md)

#### Parameters

##### data

`any`

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)

#### Defined in

main.ts:70416
