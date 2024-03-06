[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpScreenshotRequestInfo

# Class: SerpScreenshotRequestInfo

## Implements

- [`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpScreenshotRequestInfo.md#constructor)

### Properties

- [browser\_preset](SerpScreenshotRequestInfo.md#browser_preset)
- [browser\_screen\_height](SerpScreenshotRequestInfo.md#browser_screen_height)
- [browser\_screen\_scale\_factor](SerpScreenshotRequestInfo.md#browser_screen_scale_factor)
- [browser\_screen\_width](SerpScreenshotRequestInfo.md#browser_screen_width)
- [task\_id](SerpScreenshotRequestInfo.md#task_id)

### Methods

- [init](SerpScreenshotRequestInfo.md#init)
- [toJSON](SerpScreenshotRequestInfo.md#tojson)
- [fromJS](SerpScreenshotRequestInfo.md#fromjs)

## Constructors

### constructor

• **new SerpScreenshotRequestInfo**(`data?`): [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpScreenshotRequestInfo`](../interfaces/ISerpScreenshotRequestInfo.md) |

#### Returns

[`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Defined in

[main.ts:23425](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23425)

## Properties

### browser\_preset

• `Optional` **browser\_preset**: `string`

browser resolution preset
optional field
browser preset associated with a certain device type
can take the following values: desktop, tablet, mobile
note: by default, browser preset corresponds to the device type specified in the POST request

#### Implementation of

[ISerpScreenshotRequestInfo](../interfaces/ISerpScreenshotRequestInfo.md).[browser_preset](../interfaces/ISerpScreenshotRequestInfo.md#browser_preset)

#### Defined in

[main.ts:23409](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23409)

___


### browser\_screen\_height

• `Optional` **browser\_screen\_height**: `number`

height of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Implementation of

[ISerpScreenshotRequestInfo](../interfaces/ISerpScreenshotRequestInfo.md).[browser_screen_height](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_height)

#### Defined in

[main.ts:23417](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23417)

___


### browser\_screen\_scale\_factor

• `Optional` **browser\_screen\_scale\_factor**: `number`

browser scale factor
optional field
can be specified in the following range: 0.5-3

#### Implementation of

[ISerpScreenshotRequestInfo](../interfaces/ISerpScreenshotRequestInfo.md).[browser_screen_scale_factor](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_scale_factor)

#### Defined in

[main.ts:23421](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23421)

___


### browser\_screen\_width

• `Optional` **browser\_screen\_width**: `number`

width of the browser resolution
optional field
can be specified in the following range: 240-9999

#### Implementation of

[ISerpScreenshotRequestInfo](../interfaces/ISerpScreenshotRequestInfo.md).[browser_screen_width](../interfaces/ISerpScreenshotRequestInfo.md#browser_screen_width)

#### Defined in

[main.ts:23413](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23413)

___


### task\_id

• `Optional` **task\_id**: `string`

task identifier
required field
unique identifier of the associated task in the UUID format
you will be able to use it within 7 days to request the results of the task at any time

#### Implementation of

[ISerpScreenshotRequestInfo](../interfaces/ISerpScreenshotRequestInfo.md).[task_id](../interfaces/ISerpScreenshotRequestInfo.md#task_id)

#### Defined in

[main.ts:23403](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23403)

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

[main.ts:23434](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23434)

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

[main.ts:23455](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23455)

___


### fromJS

▸ **fromJS**(`data`): [`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpScreenshotRequestInfo`](SerpScreenshotRequestInfo.md)

#### Defined in

[main.ts:23448](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L23448)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")