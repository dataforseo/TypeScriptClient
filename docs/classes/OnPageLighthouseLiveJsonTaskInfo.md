[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageLighthouseLiveJsonTaskInfo

# Class: OnPageLighthouseLiveJsonTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`OnPageLighthouseLiveJsonTaskInfo`**

## Implements

- [`IOnPageLighthouseLiveJsonTaskInfo`](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseLiveJsonTaskInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseLiveJsonTaskInfo.md#cost)
- [data](OnPageLighthouseLiveJsonTaskInfo.md#data)
- [id](OnPageLighthouseLiveJsonTaskInfo.md#id)
- [path](OnPageLighthouseLiveJsonTaskInfo.md#path)
- [result](OnPageLighthouseLiveJsonTaskInfo.md#result)
- [result\_count](OnPageLighthouseLiveJsonTaskInfo.md#result_count)
- [status\_code](OnPageLighthouseLiveJsonTaskInfo.md#status_code)
- [status\_message](OnPageLighthouseLiveJsonTaskInfo.md#status_message)
- [time](OnPageLighthouseLiveJsonTaskInfo.md#time)

### Methods

- [init](OnPageLighthouseLiveJsonTaskInfo.md#init)
- [toJSON](OnPageLighthouseLiveJsonTaskInfo.md#tojson)
- [fromJS](OnPageLighthouseLiveJsonTaskInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseLiveJsonTaskInfo**(`data?`): [`OnPageLighthouseLiveJsonTaskInfo`](OnPageLighthouseLiveJsonTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseLiveJsonTaskInfo`](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md) |

#### Returns

[`OnPageLighthouseLiveJsonTaskInfo`](OnPageLighthouseLiveJsonTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:154899](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154899)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseLiveJsonTaskInfo](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md).[cost](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md#cost)

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

[IOnPageLighthouseLiveJsonTaskInfo](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md).[data](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md#data)

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

[IOnPageLighthouseLiveJsonTaskInfo](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md).[id](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IOnPageLighthouseLiveJsonTaskInfo](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md).[path](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: \{ `[key: string]`: `any`;  }[]

results of Lighthouse audit
this array will include data according to the parameters you specified when setting a task;
all fields and their descriptions are available in the official documentation by this link.

#### Implementation of

[IOnPageLighthouseLiveJsonTaskInfo](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md).[result](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md#result)

#### Defined in

[main.ts:154895](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154895)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IOnPageLighthouseLiveJsonTaskInfo](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md).[result_count](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md#result_count)

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

[IOnPageLighthouseLiveJsonTaskInfo](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md).[status_code](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md#status_code)

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

[IOnPageLighthouseLiveJsonTaskInfo](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md).[status_message](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IOnPageLighthouseLiveJsonTaskInfo](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md).[time](../interfaces/IOnPageLighthouseLiveJsonTaskInfo.md#time)

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

[main.ts:154903](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154903)

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

[main.ts:154925](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154925)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseLiveJsonTaskInfo`](OnPageLighthouseLiveJsonTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseLiveJsonTaskInfo`](OnPageLighthouseLiveJsonTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:154918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L154918)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")