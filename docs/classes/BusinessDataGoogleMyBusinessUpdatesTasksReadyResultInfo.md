[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo

Defined in: main.ts:215998

## Implements

- [`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo()

> **new BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

Defined in: main.ts:216016

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:216008

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:216012

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:216001

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:216004

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:216006

search engine type

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:216010

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:216025

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:216047

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)

Defined in: main.ts:216040

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo`](BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.md)
