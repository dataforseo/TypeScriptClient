[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / ScreenshotItem

# Class: ScreenshotItem

## Implements

- [`IScreenshotItem`](../interfaces/IScreenshotItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ScreenshotItem.md#constructor)

### Properties

- [image](ScreenshotItem.md#image)

### Methods

- [init](ScreenshotItem.md#init)
- [toJSON](ScreenshotItem.md#tojson)
- [fromJS](ScreenshotItem.md#fromjs)

## Constructors

### constructor

• **new ScreenshotItem**(`data?`): [`ScreenshotItem`](ScreenshotItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IScreenshotItem`](../interfaces/IScreenshotItem.md) |

#### Returns

[`ScreenshotItem`](ScreenshotItem.md)

#### Defined in

[main.ts:23506](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23506)

## Properties

### image

• `Optional` **image**: `string`

screenshot of the requested page
URL of the page screenshot on the DataForSEO storage
note: the page screenshot saved on the DataForSEO storage only remains accessible for one day after making the request

#### Implementation of

[IScreenshotItem](../interfaces/IScreenshotItem.md).[image](../interfaces/IScreenshotItem.md#image)

#### Defined in

[main.ts:23502](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23502)

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

[main.ts:23515](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23515)

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

[main.ts:23532](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23532)

___


### fromJS

▸ **fromJS**(`data`): [`ScreenshotItem`](ScreenshotItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ScreenshotItem`](ScreenshotItem.md)

#### Defined in

[main.ts:23525](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23525)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")