**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / JobsElement

# Class: JobsElement

## Implements

- [`IJobsElement`](../interfaces/IJobsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new JobsElement(data)

> **new JobsElement**(`data`?): [`JobsElement`](JobsElement.md)

#### Parameters

• **data?**: [`IJobsElement`](../interfaces/IJobsElement.md)

#### Returns

[`JobsElement`](JobsElement.md)

#### Source

main.ts:30866

## Properties

### author?

> **`optional`** **author**: `string`

author

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`author`](../interfaces/IJobsElement.md#author)

#### Source

main.ts:30849

***

### contract\_type?

> **`optional`** **contract\_type**: `string`

contract type

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`contract_type`](../interfaces/IJobsElement.md#contract_type)

#### Source

main.ts:30858

***

### description?

> **`optional`** **description**: `string`

description

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`description`](../interfaces/IJobsElement.md#description)

#### Source

main.ts:30847

***

### job\_posted\_time?

> **`optional`** **job\_posted\_time**: `string`

the time when the job was posted

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`job_posted_time`](../interfaces/IJobsElement.md#job_posted_time)

#### Source

main.ts:30851

***

### salary?

> **`optional`** **salary**: `string`

salary

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`salary`](../interfaces/IJobsElement.md#salary)

#### Source

main.ts:30860

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`timestamp`](../interfaces/IJobsElement.md#timestamp)

#### Source

main.ts:30856

***

### title?

> **`optional`** **title**: `string`

title of a given link element

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`title`](../interfaces/IJobsElement.md#title)

#### Source

main.ts:30845

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`type`](../interfaces/IJobsElement.md#type)

#### Source

main.ts:30843

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`url`](../interfaces/IJobsElement.md#url)

#### Source

main.ts:30862

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:30875

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:30900

***

### fromJS()

> **`static`** **fromJS**(`data`): [`JobsElement`](JobsElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`JobsElement`](JobsElement.md)

#### Source

main.ts:30893
