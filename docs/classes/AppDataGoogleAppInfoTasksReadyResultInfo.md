[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataGoogleAppInfoTasksReadyResultInfo

# Class: AppDataGoogleAppInfoTasksReadyResultInfo

## Implements

- [`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTasksReadyResultInfo()

> **new AppDataGoogleAppInfoTasksReadyResultInfo**(`data`?): [`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Returns

[`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:193855

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:193844

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App Info task

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:193848

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:193851

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#id)

#### Defined in

main.ts:193838

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#se)

#### Defined in

main.ts:193840

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:193842

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:193846

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:193864

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:193887

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:193880
