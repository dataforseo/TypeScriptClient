[**Documentation**](../README.md)

***

[Documentation](../README.md) / JobsElement

# Class: JobsElement

## Implements

- [`IJobsElement`](../interfaces/IJobsElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new JobsElement()

> **new JobsElement**(`data`?): [`JobsElement`](JobsElement.md)

#### Parameters

##### data?

[`IJobsElement`](../interfaces/IJobsElement.md)

#### Returns

[`JobsElement`](JobsElement.md)

#### Defined in

main.ts:32528

## Properties

### author?

> `optional` **author**: `string`

author

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`author`](../interfaces/IJobsElement.md#author)

#### Defined in

main.ts:32511

***

### contract\_type?

> `optional` **contract\_type**: `string`

contract type

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`contract_type`](../interfaces/IJobsElement.md#contract_type)

#### Defined in

main.ts:32520

***

### description?

> `optional` **description**: `string`

description

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`description`](../interfaces/IJobsElement.md#description)

#### Defined in

main.ts:32509

***

### job\_posted\_time?

> `optional` **job\_posted\_time**: `string`

the time when the job was posted

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`job_posted_time`](../interfaces/IJobsElement.md#job_posted_time)

#### Defined in

main.ts:32513

***

### salary?

> `optional` **salary**: `string`

salary

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`salary`](../interfaces/IJobsElement.md#salary)

#### Defined in

main.ts:32522

***

### timestamp?

> `optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`timestamp`](../interfaces/IJobsElement.md#timestamp)

#### Defined in

main.ts:32518

***

### title?

> `optional` **title**: `string`

title of a given link element

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`title`](../interfaces/IJobsElement.md#title)

#### Defined in

main.ts:32507

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`type`](../interfaces/IJobsElement.md#type)

#### Defined in

main.ts:32505

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IJobsElement`](../interfaces/IJobsElement.md).[`url`](../interfaces/IJobsElement.md#url)

#### Defined in

main.ts:32524

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:32537

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:32562

***

### fromJS()

> `static` **fromJS**(`data`): [`JobsElement`](JobsElement.md)

#### Parameters

##### data

`any`

#### Returns

[`JobsElement`](JobsElement.md)

#### Defined in

main.ts:32555
