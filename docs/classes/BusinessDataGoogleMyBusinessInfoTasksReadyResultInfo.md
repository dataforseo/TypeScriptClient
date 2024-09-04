[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

# Class: BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo

## Implements

- [`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo()

> **new BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo**(`data`?): [`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:205277

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:205269

***

### endpoint?

> `optional` **endpoint**: `string`

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#endpoint)

#### Defined in

main.ts:205273

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#id)

#### Defined in

main.ts:205262

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se)

#### Defined in

main.ts:205265

***

### se\_type?

> `optional` **se\_type**: `string`

search engine specified when setting the task

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:205267

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:205271

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:205286

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:205308

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo`](BusinessDataGoogleMyBusinessInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:205301
