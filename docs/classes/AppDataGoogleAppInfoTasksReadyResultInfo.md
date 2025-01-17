[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppInfoTasksReadyResultInfo

# Class: AppDataGoogleAppInfoTasksReadyResultInfo

Defined in: main.ts:201800

## Implements

- [`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppInfoTasksReadyResultInfo()

> **new AppDataGoogleAppInfoTasksReadyResultInfo**(`data`?): [`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

Defined in: main.ts:201820

#### Parameters

##### data?

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md)

#### Returns

[`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:201809

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:201813

URL for collecting the results of the Google App Info task

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:201816

URL for collecting the results of the Google App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:201803

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:201805

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:201807

search engine type

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:201811

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppInfoTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:201829

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:201852

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)

Defined in: main.ts:201845

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppInfoTasksReadyResultInfo`](AppDataGoogleAppInfoTasksReadyResultInfo.md)
