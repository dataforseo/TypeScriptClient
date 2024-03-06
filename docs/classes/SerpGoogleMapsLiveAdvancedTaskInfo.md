[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleMapsLiveAdvancedTaskInfo

# Class: SerpGoogleMapsLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleMapsLiveAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleMapsLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleMapsLiveAdvancedTaskInfo.md#cost)
- [data](SerpGoogleMapsLiveAdvancedTaskInfo.md#data)
- [id](SerpGoogleMapsLiveAdvancedTaskInfo.md#id)
- [path](SerpGoogleMapsLiveAdvancedTaskInfo.md#path)
- [result](SerpGoogleMapsLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleMapsLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleMapsLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleMapsLiveAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleMapsLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleMapsLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleMapsLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleMapsLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleMapsLiveAdvancedTaskInfo**(`data?`): [`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleMapsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:39530](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39530)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleMapsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#cost)

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

[ISerpGoogleMapsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#data)

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

[ISerpGoogleMapsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleMapsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleMapsLiveAdvancedResultInfo`](SerpGoogleMapsLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleMapsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:39526](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39526)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleMapsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleMapsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleMapsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleMapsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleMapsLiveAdvancedTaskInfo.md#time)

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

[main.ts:39534](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39534)

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

[main.ts:39556](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39556)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleMapsLiveAdvancedTaskInfo`](SerpGoogleMapsLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:39549](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L39549)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")