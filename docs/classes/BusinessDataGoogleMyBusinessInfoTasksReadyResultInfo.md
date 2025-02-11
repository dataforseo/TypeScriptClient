[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

Defined in: main.ts:213840

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo()

> **new BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

Defined in: main.ts:213858

#### Parameters

##### data?

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:213850

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:213854

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:213843

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:213846

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:213848

search engine specified when setting the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:213852

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:213867

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:213889

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

Defined in: main.ts:213882

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)
