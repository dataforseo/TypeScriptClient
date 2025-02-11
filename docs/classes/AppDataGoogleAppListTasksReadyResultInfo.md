[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppListTasksReadyResultInfo

# Class: AppDataGoogleAppListTasksReadyResultInfo

Defined in: main.ts:201340

## Implements

- [`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListTasksReadyResultInfo()

> **new AppDataGoogleAppListTasksReadyResultInfo**(`data`?): [`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

Defined in: main.ts:201360

#### Parameters

##### data?

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md)

#### Returns

[`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:201349

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:201353

URL for collecting the results of the Google App List task

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:201356

URL for collecting the results of the Google App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:201343

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:201345

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:201347

search engine type

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:201351

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:201369

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:201392

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

Defined in: main.ts:201385

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)
