[Documentation](../README.md) / [Exports](../modules.md) / ResourceMetaInfo

# Class: ResourceMetaInfo

## Implements

- [`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ResourceMetaInfo.md#constructor)

### Properties

- [alternative\_text](ResourceMetaInfo.md#alternative_text)
- [height](ResourceMetaInfo.md#height)
- [original\_height](ResourceMetaInfo.md#original_height)
- [original\_width](ResourceMetaInfo.md#original_width)
- [title](ResourceMetaInfo.md#title)
- [width](ResourceMetaInfo.md#width)

### Methods

- [init](ResourceMetaInfo.md#init)
- [toJSON](ResourceMetaInfo.md#tojson)
- [fromJS](ResourceMetaInfo.md#fromjs)

## Constructors

### constructor

• **new ResourceMetaInfo**(`data?`): [`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IResourceMetaInfo`](../interfaces/IResourceMetaInfo.md) |

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Defined in

main.ts:146090

## Properties

### alternative\_text

• `Optional` **alternative\_text**: `string`

content of the image alt attribute
the value depends on the resource_type

#### Implementation of

[IResourceMetaInfo](../interfaces/IResourceMetaInfo.md).[alternative_text](../interfaces/IResourceMetaInfo.md#alternative_text)

#### Defined in

main.ts:146076

___

### height

• `Optional` **height**: `number`

image height in px

#### Implementation of

[IResourceMetaInfo](../interfaces/IResourceMetaInfo.md).[height](../interfaces/IResourceMetaInfo.md#height)

#### Defined in

main.ts:146086

___

### original\_height

• `Optional` **original\_height**: `number`

original image height in px

#### Implementation of

[IResourceMetaInfo](../interfaces/IResourceMetaInfo.md).[original_height](../interfaces/IResourceMetaInfo.md#original_height)

#### Defined in

main.ts:146082

___

### original\_width

• `Optional` **original\_width**: `number`

original image width in px

#### Implementation of

[IResourceMetaInfo](../interfaces/IResourceMetaInfo.md).[original_width](../interfaces/IResourceMetaInfo.md#original_width)

#### Defined in

main.ts:146080

___

### title

• `Optional` **title**: `string`

title

#### Implementation of

[IResourceMetaInfo](../interfaces/IResourceMetaInfo.md).[title](../interfaces/IResourceMetaInfo.md#title)

#### Defined in

main.ts:146078

___

### width

• `Optional` **width**: `number`

image width in px

#### Implementation of

[IResourceMetaInfo](../interfaces/IResourceMetaInfo.md).[width](../interfaces/IResourceMetaInfo.md#width)

#### Defined in

main.ts:146084

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

main.ts:146099

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

main.ts:146121

___

### fromJS

▸ **fromJS**(`data`): [`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ResourceMetaInfo`](ResourceMetaInfo.md)

#### Defined in

main.ts:146114
