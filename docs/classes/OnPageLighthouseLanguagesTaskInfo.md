[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / OnPageLighthouseLanguagesTaskInfo

# Class: OnPageLighthouseLanguagesTaskInfo

## Hierarchy

- [`BaseResponseTaskInfo`](BaseResponseTaskInfo.md)
  
  ↳ **`OnPageLighthouseLanguagesTaskInfo`**

## Implements

- [`IOnPageLighthouseLanguagesTaskInfo`](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](OnPageLighthouseLanguagesTaskInfo.md#constructor)

### Properties

- [cost](OnPageLighthouseLanguagesTaskInfo.md#cost)
- [data](OnPageLighthouseLanguagesTaskInfo.md#data)
- [id](OnPageLighthouseLanguagesTaskInfo.md#id)
- [path](OnPageLighthouseLanguagesTaskInfo.md#path)
- [result](OnPageLighthouseLanguagesTaskInfo.md#result)
- [result\_count](OnPageLighthouseLanguagesTaskInfo.md#result_count)
- [status\_code](OnPageLighthouseLanguagesTaskInfo.md#status_code)
- [status\_message](OnPageLighthouseLanguagesTaskInfo.md#status_message)
- [time](OnPageLighthouseLanguagesTaskInfo.md#time)

### Methods

- [init](OnPageLighthouseLanguagesTaskInfo.md#init)
- [toJSON](OnPageLighthouseLanguagesTaskInfo.md#tojson)
- [fromJS](OnPageLighthouseLanguagesTaskInfo.md#fromjs)

## Constructors

### constructor

• **new OnPageLighthouseLanguagesTaskInfo**(`data?`): [`OnPageLighthouseLanguagesTaskInfo`](OnPageLighthouseLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IOnPageLighthouseLanguagesTaskInfo`](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md) |

#### Returns

[`OnPageLighthouseLanguagesTaskInfo`](OnPageLighthouseLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[constructor](BaseResponseTaskInfo.md#constructor)

#### Defined in

[main.ts:153571](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153571)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Implementation of

[IOnPageLighthouseLanguagesTaskInfo](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md).[cost](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md#cost)

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

[IOnPageLighthouseLanguagesTaskInfo](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md).[data](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md#data)

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

[IOnPageLighthouseLanguagesTaskInfo](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md).[id](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md#id)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[id](BaseResponseTaskInfo.md#id)

#### Defined in

[main.ts:22591](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22591)

___


### path

• `Optional` **path**: `string`[]

URL path

#### Implementation of

[IOnPageLighthouseLanguagesTaskInfo](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md).[path](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md#path)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[path](BaseResponseTaskInfo.md#path)

#### Defined in

[main.ts:22606](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22606)

___


### result

• `Optional` **result**: [`OnPageLighthouseLanguagesResultInfo`](OnPageLighthouseLanguagesResultInfo.md)[]

array of results

#### Implementation of

[IOnPageLighthouseLanguagesTaskInfo](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md).[result](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md#result)

#### Defined in

[main.ts:153567](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153567)

___


### result\_count

• `Optional` **result\_count**: `number`

number of elements in the result array

#### Implementation of

[IOnPageLighthouseLanguagesTaskInfo](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md).[result_count](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md#result_count)

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

[IOnPageLighthouseLanguagesTaskInfo](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md).[status_code](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md#status_code)

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

[IOnPageLighthouseLanguagesTaskInfo](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md).[status_message](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md#status_message)

#### Inherited from

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[status_message](BaseResponseTaskInfo.md#status_message)

#### Defined in

[main.ts:22598](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22598)

___


### time

• `Optional` **time**: `string`

execution time, seconds

#### Implementation of

[IOnPageLighthouseLanguagesTaskInfo](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md).[time](../interfaces/IOnPageLighthouseLanguagesTaskInfo.md#time)

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

[main.ts:153575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153575)

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

[main.ts:153597](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153597)

___


### fromJS

▸ **fromJS**(`data`): [`OnPageLighthouseLanguagesTaskInfo`](OnPageLighthouseLanguagesTaskInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`OnPageLighthouseLanguagesTaskInfo`](OnPageLighthouseLanguagesTaskInfo.md)

#### Overrides

[BaseResponseTaskInfo](BaseResponseTaskInfo.md).[fromJS](BaseResponseTaskInfo.md#fromjs)

#### Defined in

[main.ts:153590](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L153590)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")