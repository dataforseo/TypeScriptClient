[**Documentation**](../README.md)

***

[Documentation](../README.md) / JobsElement

# Class: JobsElement

Defined in: main.ts:32511

## Implements

- [`IJobsElement`](../interfaces/IJobsElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new JobsElement()

> **new JobsElement**(`data`?): [`JobsElement`](JobsElement.md)

Defined in: main.ts:32536

#### Parameters

##### data?

[`IJobsElement`](../interfaces/IJobsElement.md)

#### Returns

[`JobsElement`](JobsElement.md)

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:32519

author

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`author`](../interfaces/IJobsElement.md#author)

***

### contract\_type?

> `optional` **contract\_type**: `string`

Defined in: main.ts:32528

contract type

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`contract_type`](../interfaces/IJobsElement.md#contract_type)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:32517

description

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`description`](../interfaces/IJobsElement.md#description)

***

### job\_posted\_time?

> `optional` **job\_posted\_time**: `string`

Defined in: main.ts:32521

the time when the job was posted

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`job_posted_time`](../interfaces/IJobsElement.md#job_posted_time)

***

### salary?

> `optional` **salary**: `string`

Defined in: main.ts:32530

salary

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`salary`](../interfaces/IJobsElement.md#salary)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:32526

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`timestamp`](../interfaces/IJobsElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32515

title of a given link element

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`title`](../interfaces/IJobsElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:32513

type of element

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`type`](../interfaces/IJobsElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:32532

URL

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`url`](../interfaces/IJobsElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32545

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:32570

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`JobsElement`](JobsElement.md)

Defined in: main.ts:32563

#### Parameters

##### data

`any`

#### Returns

[`JobsElement`](JobsElement.md)
