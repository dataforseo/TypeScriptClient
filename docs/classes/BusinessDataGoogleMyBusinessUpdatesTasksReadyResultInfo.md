[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

Defined in: main.ts:215496

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo()

> **new BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

Defined in: main.ts:215514

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:215506

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:215510

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:215499

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:215502

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:215504

search engine type

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:215508

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:215523

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:215545

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

Defined in: main.ts:215538

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)
