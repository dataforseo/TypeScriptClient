[Documentation](../README.md) / [Exports](../modules.md) / JobsElement

# Class: JobsElement

## Implements

- [`IJobsElement`](../interfaces/IJobsElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](JobsElement.md#constructor)

### Properties

- [author](JobsElement.md#author)
- [contract\_type](JobsElement.md#contract_type)
- [description](JobsElement.md#description)
- [job\_posted\_time](JobsElement.md#job_posted_time)
- [salary](JobsElement.md#salary)
- [timestamp](JobsElement.md#timestamp)
- [title](JobsElement.md#title)
- [type](JobsElement.md#type)
- [url](JobsElement.md#url)

### Methods

- [init](JobsElement.md#init)
- [toJSON](JobsElement.md#tojson)
- [fromJS](JobsElement.md#fromjs)

## Constructors

### constructor

• **new JobsElement**(`data?`): [`JobsElement`](JobsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IJobsElement`](../interfaces/IJobsElement.md) |

#### Returns

[`JobsElement`](JobsElement.md)

#### Defined in

main.ts:30096

## Properties

### author

• `Optional` **author**: `string`

author

#### Implementation of

[IJobsElement](../interfaces/IJobsElement.md).[author](../interfaces/IJobsElement.md#author)

#### Defined in

main.ts:30079

___

### contract\_type

• `Optional` **contract\_type**: `string`

contract type

#### Implementation of

[IJobsElement](../interfaces/IJobsElement.md).[contract_type](../interfaces/IJobsElement.md#contract_type)

#### Defined in

main.ts:30088

___

### description

• `Optional` **description**: `string`

description

#### Implementation of

[IJobsElement](../interfaces/IJobsElement.md).[description](../interfaces/IJobsElement.md#description)

#### Defined in

main.ts:30077

___

### job\_posted\_time

• `Optional` **job\_posted\_time**: `string`

the time when the job was posted

#### Implementation of

[IJobsElement](../interfaces/IJobsElement.md).[job_posted_time](../interfaces/IJobsElement.md#job_posted_time)

#### Defined in

main.ts:30081

___

### salary

• `Optional` **salary**: `string`

salary

#### Implementation of

[IJobsElement](../interfaces/IJobsElement.md).[salary](../interfaces/IJobsElement.md#salary)

#### Defined in

main.ts:30090

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IJobsElement](../interfaces/IJobsElement.md).[timestamp](../interfaces/IJobsElement.md#timestamp)

#### Defined in

main.ts:30086

___

### title

• `Optional` **title**: `string`

title of a given link element

#### Implementation of

[IJobsElement](../interfaces/IJobsElement.md).[title](../interfaces/IJobsElement.md#title)

#### Defined in

main.ts:30075

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IJobsElement](../interfaces/IJobsElement.md).[type](../interfaces/IJobsElement.md#type)

#### Defined in

main.ts:30073

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IJobsElement](../interfaces/IJobsElement.md).[url](../interfaces/IJobsElement.md#url)

#### Defined in

main.ts:30092

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

main.ts:30105

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

main.ts:30130

___

### fromJS

▸ **fromJS**(`data`): [`JobsElement`](JobsElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`JobsElement`](JobsElement.md)

#### Defined in

main.ts:30123
