[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleImagesLiveHtmlTaskInfo

# Class: SerpGoogleImagesLiveHtmlTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleImagesLiveHtmlTaskInfo`**

## Implements

- [`ISerpGoogleImagesLiveHtmlTaskInfo`](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleImagesLiveHtmlTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleImagesLiveHtmlTaskInfo.md#cost)
- [data](SerpGoogleImagesLiveHtmlTaskInfo.md#data)
- [id](SerpGoogleImagesLiveHtmlTaskInfo.md#id)
- [path](SerpGoogleImagesLiveHtmlTaskInfo.md#path)
- [result](SerpGoogleImagesLiveHtmlTaskInfo.md#result)
- [result\_count](SerpGoogleImagesLiveHtmlTaskInfo.md#result_count)
- [status\_code](SerpGoogleImagesLiveHtmlTaskInfo.md#status_code)
- [status\_message](SerpGoogleImagesLiveHtmlTaskInfo.md#status_message)
- [time](SerpGoogleImagesLiveHtmlTaskInfo.md#time)

### Methods

- [init](SerpGoogleImagesLiveHtmlTaskInfo.md#init)
- [toJSON](SerpGoogleImagesLiveHtmlTaskInfo.md#tojson)
- [fromJS](SerpGoogleImagesLiveHtmlTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleImagesLiveHtmlTaskInfo**(`data?`): [`SerpGoogleImagesLiveHtmlTaskInfo`](SerpGoogleImagesLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleImagesLiveHtmlTaskInfo`](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md) |

#### Returns

[`SerpGoogleImagesLiveHtmlTaskInfo`](SerpGoogleImagesLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:47048](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47048)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleImagesLiveHtmlTaskInfo](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md).[cost](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md#cost)

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

[ISerpGoogleImagesLiveHtmlTaskInfo](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md).[data](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md#data)

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

[ISerpGoogleImagesLiveHtmlTaskInfo](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md).[id](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleImagesLiveHtmlTaskInfo](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md).[path](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleImagesLiveHtmlResultInfo`](SerpGoogleImagesLiveHtmlResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleImagesLiveHtmlTaskInfo](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md).[result](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md#result)

#### Defined in

[main.ts:47044](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47044)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleImagesLiveHtmlTaskInfo](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md).[result_count](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md#result_count)

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

[ISerpGoogleImagesLiveHtmlTaskInfo](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md).[status_code](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md#status_code)

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

[ISerpGoogleImagesLiveHtmlTaskInfo](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md).[status_message](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleImagesLiveHtmlTaskInfo](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md).[time](../interfaces/ISerpGoogleImagesLiveHtmlTaskInfo.md#time)

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

[main.ts:47052](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47052)

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

[main.ts:47074](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47074)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleImagesLiveHtmlTaskInfo`](SerpGoogleImagesLiveHtmlTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleImagesLiveHtmlTaskInfo`](SerpGoogleImagesLiveHtmlTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:47067](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L47067)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")