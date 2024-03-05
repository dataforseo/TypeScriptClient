[dataforseo-client](../README.md) / [Exports](../modules.md) / IMerchantGoogleProductSpecTaskGetHtmlResponseInfo

# Interface: IMerchantGoogleProductSpecTaskGetHtmlResponseInfo

## Hierarchy

- [`IBaseResponseInfo`](IBaseResponseInfo.md)

  ↳ **`IMerchantGoogleProductSpecTaskGetHtmlResponseInfo`**

## Implemented by

- [`MerchantGoogleProductSpecTaskGetHtmlResponseInfo`](../classes/MerchantGoogleProductSpecTaskGetHtmlResponseInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [cost](IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#cost)
- [status\_code](IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#status_code)
- [status\_message](IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#status_message)
- [tasks](IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#tasks)
- [tasks\_count](IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#tasks_count)
- [tasks\_error](IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#tasks_error)
- [time](IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#time)
- [version](IMerchantGoogleProductSpecTaskGetHtmlResponseInfo.md#version)

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

• `Optional` **tasks**: [`MerchantGoogleProductSpecTaskGetHtmlTaskInfo`](../classes/MerchantGoogleProductSpecTaskGetHtmlTaskInfo.md)[]

array of tasks

#### Defined in

[main.ts:168418](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L168418)

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
