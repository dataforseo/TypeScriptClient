[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppInfoTasksReadyResultInfo

# Class: AppDataAppleAppInfoTasksReadyResultInfo

Defined in: main.ts:206864

## Implements

- [`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppInfoTasksReadyResultInfo()

> **new AppDataAppleAppInfoTasksReadyResultInfo**(`data`?): [`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

Defined in: main.ts:206884

#### Parameters

##### data?

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md)

#### Returns

[`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:206873

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:206877

URL for collecting the results of the Apple App Info task

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:206880

URL for collecting the results of the Apple App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:206867

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:206869

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:206871

search engine type

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:206875

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:206893

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:206916

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

Defined in: main.ts:206909

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)
