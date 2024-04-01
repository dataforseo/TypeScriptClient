[Documentation](../README.md) / [Exports](../modules.md) / StreamingQualityElement

# Class: StreamingQualityElement

## Implements

- [`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](StreamingQualityElement.md#constructor)

### Properties

- [bitrate](StreamingQualityElement.md#bitrate)
- [fps](StreamingQualityElement.md#fps)
- [height](StreamingQualityElement.md#height)
- [label](StreamingQualityElement.md#label)
- [mime\_type](StreamingQualityElement.md#mime_type)
- [type](StreamingQualityElement.md#type)
- [width](StreamingQualityElement.md#width)

### Methods

- [init](StreamingQualityElement.md#init)
- [toJSON](StreamingQualityElement.md#tojson)
- [fromJS](StreamingQualityElement.md#fromjs)

## Constructors

### constructor

• **new StreamingQualityElement**(`data?`): [`StreamingQualityElement`](StreamingQualityElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IStreamingQualityElement`](../interfaces/IStreamingQualityElement.md) |

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)

#### Defined in

main.ts:60887

## Properties

### bitrate

• `Optional` **bitrate**: `number`

bit rate of the video

#### Implementation of

[IStreamingQualityElement](../interfaces/IStreamingQualityElement.md).[bitrate](../interfaces/IStreamingQualityElement.md#bitrate)

#### Defined in

main.ts:60879

___

### fps

• `Optional` **fps**: `number`

frame rate of the video

#### Implementation of

[IStreamingQualityElement](../interfaces/IStreamingQualityElement.md).[fps](../interfaces/IStreamingQualityElement.md#fps)

#### Defined in

main.ts:60883

___

### height

• `Optional` **height**: `number`

video height in pixels

#### Implementation of

[IStreamingQualityElement](../interfaces/IStreamingQualityElement.md).[height](../interfaces/IStreamingQualityElement.md#height)

#### Defined in

main.ts:60877

___

### label

• `Optional` **label**: `string`

label of the quality element

#### Implementation of

[IStreamingQualityElement](../interfaces/IStreamingQualityElement.md).[label](../interfaces/IStreamingQualityElement.md#label)

#### Defined in

main.ts:60873

___

### mime\_type

• `Optional` **mime\_type**: `string`

media type of the video

#### Implementation of

[IStreamingQualityElement](../interfaces/IStreamingQualityElement.md).[mime_type](../interfaces/IStreamingQualityElement.md#mime_type)

#### Defined in

main.ts:60881

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IStreamingQualityElement](../interfaces/IStreamingQualityElement.md).[type](../interfaces/IStreamingQualityElement.md#type)

#### Defined in

main.ts:60871

___

### width

• `Optional` **width**: `number`

video width in pixels

#### Implementation of

[IStreamingQualityElement](../interfaces/IStreamingQualityElement.md).[width](../interfaces/IStreamingQualityElement.md#width)

#### Defined in

main.ts:60875

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:60896

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:60919

___

### fromJS

▸ **fromJS**(`data`): [`StreamingQualityElement`](StreamingQualityElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`StreamingQualityElement`](StreamingQualityElement.md)

#### Defined in

main.ts:60912
