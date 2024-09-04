[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataTasksReadyResultInfo

# Class: AppDataTasksReadyResultInfo

## Implements

- [`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataTasksReadyResultInfo()

> **new AppDataTasksReadyResultInfo**(`data`?): [`AppDataTasksReadyResultInfo`](AppDataTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md)

#### Returns

[`AppDataTasksReadyResultInfo`](AppDataTasksReadyResultInfo.md)

#### Defined in

main.ts:191879

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:191868

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Reviews task

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:191872

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:191875

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataTasksReadyResultInfo.md#id)

#### Defined in

main.ts:191862

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataTasksReadyResultInfo.md#se)

#### Defined in

main.ts:191864

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:191866

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:191870

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:191888

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:191911

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataTasksReadyResultInfo`](AppDataTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataTasksReadyResultInfo`](AppDataTasksReadyResultInfo.md)

#### Defined in

main.ts:191904
