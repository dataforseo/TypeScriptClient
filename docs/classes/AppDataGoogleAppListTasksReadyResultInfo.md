**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppListTasksReadyResultInfo

# Class: AppDataGoogleAppListTasksReadyResultInfo

## Implements

- [`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListTasksReadyResultInfo(data)

> **new AppDataGoogleAppListTasksReadyResultInfo**(`data`?): [`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md)

#### Returns

[`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Source

main.ts:186389

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:186378

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Google App List task

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:186382

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Google App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:186385

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#id)

#### Source

main.ts:186373

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#se)

#### Source

main.ts:186375

***

### se\_type?

> **`optional`** **se\_type**: `string`

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#se_type)

#### Source

main.ts:186376

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppListTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppListTasksReadyResultInfo.md#tag)

#### Source

main.ts:186380

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:186398

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:186421

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListTasksReadyResultInfo`](AppDataGoogleAppListTasksReadyResultInfo.md)

#### Source

main.ts:186414
