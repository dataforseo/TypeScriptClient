[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataGoogleAppListTasksReadyResultInfo

# Class: AppDataGoogleAppListTasksReadyResultInfo

## Implements

- [`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListTasksReadyResultInfo()

> **new AppDataGoogleAppListTasksReadyResultInfo**(`data`?): [`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md)

#### Returns

[`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Defined in

main.ts:192893

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:192882

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Google App List task

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:192886

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Google App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:192889

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#id)

#### Defined in

main.ts:192876

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#se)

#### Defined in

main.ts:192878

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:192880

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:192884

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:192902

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:192925

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Defined in

main.ts:192918
