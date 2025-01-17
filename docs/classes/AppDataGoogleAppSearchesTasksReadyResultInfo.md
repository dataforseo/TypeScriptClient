[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppSearchesTasksReadyResultInfo

# Class: AppDataGoogleAppSearchesTasksReadyResultInfo

Defined in: main.ts:199624

## Implements

- [`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppSearchesTasksReadyResultInfo()

> **new AppDataGoogleAppSearchesTasksReadyResultInfo**(`data`?): [`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

Defined in: main.ts:199644

#### Parameters

##### data?

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md)

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:199633

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:199637

URL for collecting the results of the Google App Searches task

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:199640

URL for collecting the results of the Google App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:199627

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:199629

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:199631

search engine type

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:199635

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppSearchesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:199653

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:199676

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)

Defined in: main.ts:199669

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppSearchesTasksReadyResultInfo`](AppDataGoogleAppSearchesTasksReadyResultInfo.md)
