[dataforseo-client](../README.md) / [Exports](../modules.md) / ImagesElement

# Class: ImagesElement

## Implements

- [`IImagesElement`](../interfaces/IImagesElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ImagesElement.md#constructor)

### Properties

- [alt](ImagesElement.md#alt)
- [image\_url](ImagesElement.md#image_url)
- [type](ImagesElement.md#type)
- [url](ImagesElement.md#url)

### Methods

- [init](ImagesElement.md#init)
- [toJSON](ImagesElement.md#tojson)
- [fromJS](ImagesElement.md#fromjs)

## Constructors

### constructor

• **new ImagesElement**(`data?`): [`ImagesElement`](ImagesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IImagesElement`](../interfaces/IImagesElement.md) |

#### Returns

[`ImagesElement`](ImagesElement.md)

#### Defined in

[main.ts:26879](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26879)

## Properties

### alt

• `Optional` **alt**: `string`

alt tag of the image

#### Implementation of

[IImagesElement](../interfaces/IImagesElement.md).[alt](../interfaces/IImagesElement.md#alt)

#### Defined in

[main.ts:26870](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26870)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[IImagesElement](../interfaces/IImagesElement.md).[image_url](../interfaces/IImagesElement.md#image_url)

#### Defined in

[main.ts:26875](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26875)

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IImagesElement](../interfaces/IImagesElement.md).[type](../interfaces/IImagesElement.md#type)

#### Defined in

[main.ts:26868](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26868)

___

### url

• `Optional` **url**: `string`

URL link

#### Implementation of

[IImagesElement](../interfaces/IImagesElement.md).[url](../interfaces/IImagesElement.md#url)

#### Defined in

[main.ts:26872](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26872)

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

[main.ts:26888](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26888)

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

[main.ts:26908](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26908)

___

### fromJS

▸ **fromJS**(`data`): [`ImagesElement`](ImagesElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ImagesElement`](ImagesElement.md)

#### Defined in

[main.ts:26901](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L26901)
