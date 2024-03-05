[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesTaskGetHtmlTaskInfo

# Class: SerpGoogleImagesTaskGetHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)

  ↳ **`SerpGoogleImagesTaskGetHtmlTaskInfo`**

## Implements

- [`ISerpGoogleImagesTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesTaskGetHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesTaskGetHtmlTaskInfo.md#cost)
- [data](SerpGoogleImagesTaskGetHtmlTaskInfo.md#data)
- [id](SerpGoogleImagesTaskGetHtmlTaskInfo.md#id)
- [path](SerpGoogleImagesTaskGetHtmlTaskInfo.md#path)
- [result](SerpGoogleImagesTaskGetHtmlTaskInfo.md#result)
- [result\_count](SerpGoogleImagesTaskGetHtmlTaskInfo.md#result_count)
- [status\_code](SerpGoogleImagesTaskGetHtmlTaskInfo.md#status_code)
- [status\_message](SerpGoogleImagesTaskGetHtmlTaskInfo.md#status_message)
- [time](SerpGoogleImagesTaskGetHtmlTaskInfo.md#time)

### Methods

- [init](SerpGoogleImagesTaskGetHtmlTaskInfo.md#init)
- [toJSON](SerpGoogleImagesTaskGetHtmlTaskInfo.md#tojson)
- [fromJS](SerpGoogleImagesTaskGetHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesTaskGetHtmlTaskInfo**(`data?`): [`SerpGoogleImagesTaskGetHtmlTaskInfo`](SerpGoogleImagesTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesTaskGetHtmlTaskInfo`](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md) |

#### Returns

[`SerpGoogleImagesTaskGetHtmlTaskInfo`](SerpGoogleImagesTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:46570](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46570)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md).[cost](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md#cost)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[cost](BaseResponseTaskInfo.md#cost)

#### Defined in

[main.ts:22602](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22602)

___

### data

• `Optional` **data**: `Object`

contains the same parameters that you specified in the POST request

#### Index signature

▪ [key: `string`]: `any`

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md).[data](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md#data)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[data](BaseResponseTaskInfo.md#data)

#### Defined in

[main.ts:22608](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22608)

___

### id

• `Optional` **id**: `string`

task identifier
unique task identifier in our system in the UUID format

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md).[id](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___

### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md).[path](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___

### result

• `Optional` **result**: [`SerpGoogleImagesTaskGetHtmlResultInfo`](SerpGoogleImagesTaskGetHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md).[result](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md#result)

#### Defined in

[main.ts:46566](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46566)

___

### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md).[result_count](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md#result_count)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[result_count](BaseResponseTaskInfo.md#result_count)

#### Defined in

[main.ts:22604](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22604)

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the task
generated by DataForSEO, can be within the following range: 10000-60000
you can find the full list of the response codes here

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md).[status_code](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md#status_code)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_code](BaseResponseTaskInfo.md#status_code)

#### Defined in

[main.ts:22595](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22595)

___

### status\_message

• `Optional` **status\_message**: `string`

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md).[status_message](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___

### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleImagesTaskGetHtmlTaskInfo](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md).[time](../interfaces/ISerpGoogleImagesTaskGetHtmlTaskInfo.md#time)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[time](BaseResponseTaskInfo.md#time)

#### Defined in

[main.ts:22600](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22600)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[init](BaseResponseTaskInfo.md#init)

#### Defined in

[main.ts:46574](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46574)

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[toJSON](BaseResponseTaskInfo.md#tojson)

#### Defined in

[main.ts:46596](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46596)

___

### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesTaskGetHtmlTaskInfo`](SerpGoogleImagesTaskGetHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesTaskGetHtmlTaskInfo`](SerpGoogleImagesTaskGetHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:46589](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L46589)
