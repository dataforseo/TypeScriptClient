[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IBusinessDataYelpReviewsTasksReadyResponseInfo

# Interface: IBusinessDataYelpReviewsTasksReadyResponseInfo

## Hierarchy

- [`IBaseResponseInfo`](IBaseResponseInfo.md)
  
  ↳ **`IBusinessDataYelpReviewsTasksReadyResponseInfo`**

## Implemented by

- [`BusinessDataYelpReviewsTasksReadyResponseInfo`](../classes/BusinessDataYelpReviewsTasksReadyResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IBusinessDataYelpReviewsTasksReadyResponseInfo.md#cost)
- [status\_code](IBusinessDataYelpReviewsTasksReadyResponseInfo.md#status_code)
- [status\_message](IBusinessDataYelpReviewsTasksReadyResponseInfo.md#status_message)
- [tasks](IBusinessDataYelpReviewsTasksReadyResponseInfo.md#tasks)
- [tasks\_count](IBusinessDataYelpReviewsTasksReadyResponseInfo.md#tasks_count)
- [tasks\_error](IBusinessDataYelpReviewsTasksReadyResponseInfo.md#tasks_error)
- [time](IBusinessDataYelpReviewsTasksReadyResponseInfo.md#time)
- [version](IBusinessDataYelpReviewsTasksReadyResponseInfo.md#version)

## Properties

### cost

• `Optional` **cost**: `number`

total tasks cost, USD

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[cost](IBaseResponseInfo.md#cost)

#### Defined in

[main.ts:22579](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22579)

___


### status\_code

• `Optional` **status\_code**: `number`

general status code
you can find the full list of the response codes here

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[status_code](IBaseResponseInfo.md#status_code)

#### Defined in

[main.ts:22572](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22572)

___


### status\_message

• `Optional` **status\_message**: `string`

general informational message
you can find the full list of general informational messages here

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[status_message](IBaseResponseInfo.md#status_message)

#### Defined in

[main.ts:22575](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22575)

___


### tasks

• `Optional` **tasks**: [`BusinessDataYelpReviewsTasksReadyTaskInfo`](../classes/BusinessDataYelpReviewsTasksReadyTaskInfo.md)[]

array of tasks

#### Defined in

[main.ts:205227](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L205227)

___


### tasks\_count

• `Optional` **tasks\_count**: `number`

the number of tasks in the tasks array

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[tasks_count](IBaseResponseInfo.md#tasks_count)

#### Defined in

[main.ts:22581](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22581)

___


### tasks\_error

• `Optional` **tasks\_error**: `number`

the number of tasks in the tasks array returned with an error

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[tasks_error](IBaseResponseInfo.md#tasks_error)

#### Defined in

[main.ts:22583](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22583)

___


### time

• `Optional` **time**: `string`

total execution time, seconds

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[time](IBaseResponseInfo.md#time)

#### Defined in

[main.ts:22577](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22577)

___


### version

• `Optional` **version**: `string`

the current version of the API

#### Inherited from

[IBaseResponseInfo](IBaseResponseInfo.md).[version](IBaseResponseInfo.md#version)

#### Defined in

[main.ts:22569](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L22569)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")