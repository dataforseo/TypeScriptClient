[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / SerpGoogleNewsLiveAdvancedTaskInfo

# Class: SerpGoogleNewsLiveAdvancedTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`SerpGoogleNewsLiveAdvancedTaskInfo`**

## Implements

- [`ISerpGoogleNewsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SerpGoogleNewsLiveAdvancedTaskInfo.md#constructor)

### Properties

- [cost](SerpGoogleNewsLiveAdvancedTaskInfo.md#cost)
- [data](SerpGoogleNewsLiveAdvancedTaskInfo.md#data)
- [id](SerpGoogleNewsLiveAdvancedTaskInfo.md#id)
- [path](SerpGoogleNewsLiveAdvancedTaskInfo.md#path)
- [result](SerpGoogleNewsLiveAdvancedTaskInfo.md#result)
- [result\_count](SerpGoogleNewsLiveAdvancedTaskInfo.md#result_count)
- [status\_code](SerpGoogleNewsLiveAdvancedTaskInfo.md#status_code)
- [status\_message](SerpGoogleNewsLiveAdvancedTaskInfo.md#status_message)
- [time](SerpGoogleNewsLiveAdvancedTaskInfo.md#time)

### Methods

- [init](SerpGoogleNewsLiveAdvancedTaskInfo.md#init)
- [toJSON](SerpGoogleNewsLiveAdvancedTaskInfo.md#tojson)
- [fromJS](SerpGoogleNewsLiveAdvancedTaskInfo.md#fromjs)

## Constructors

### constructor

• **new SerpGoogleNewsLiveAdvancedTaskInfo**(`data?`): [`SerpGoogleNewsLiveAdvancedTaskInfo`](SerpGoogleNewsLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISerpGoogleNewsLiveAdvancedTaskInfo`](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md) |

#### Returns

[`SerpGoogleNewsLiveAdvancedTaskInfo`](SerpGoogleNewsLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:43250](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43250)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[ISerpGoogleNewsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md).[cost](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md#cost)

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

[ISerpGoogleNewsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md).[data](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md#data)

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

[ISerpGoogleNewsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md).[id](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[ISerpGoogleNewsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md).[path](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`SerpGoogleNewsLiveAdvancedResultInfo`](SerpGoogleNewsLiveAdvancedResultInfo.md)[]

array of results

#### Implementation of

[ISerpGoogleNewsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md).[result](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md#result)

#### Defined in

[main.ts:43246](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43246)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[ISerpGoogleNewsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md).[result_count](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md#result_count)

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

[ISerpGoogleNewsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md).[status_code](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md#status_code)

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

[ISerpGoogleNewsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md).[status_message](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[ISerpGoogleNewsLiveAdvancedTaskInfo](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md).[time](../interfaces/ISerpGoogleNewsLiveAdvancedTaskInfo.md#time)

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

[main.ts:43254](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43254)

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

[main.ts:43276](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43276)

___


### fromJS

▸ **fromJS**(`data`): [`SerpGoogleNewsLiveAdvancedTaskInfo`](SerpGoogleNewsLiveAdvancedTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SerpGoogleNewsLiveAdvancedTaskInfo`](SerpGoogleNewsLiveAdvancedTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:43269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L43269)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")