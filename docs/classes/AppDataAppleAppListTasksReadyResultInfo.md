[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListTasksReadyResultInfo

# Class: AppDataAppleAppListTasksReadyResultInfo

## Implements

- [`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListTasksReadyResultInfo()

> **new AppDataAppleAppListTasksReadyResultInfo**(`data`?): [`AppDataAppleAppListTasksReadyResultInfo`](AppDataAppleAppListTasksReadyResultInfo.md)

#### Parameters

##### data?

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md)

#### Returns

[`AppDataAppleAppListTasksReadyResultInfo`](AppDataAppleAppListTasksReadyResultInfo.md)

#### Defined in

main.ts:207344

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:207333

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App List task

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:207337

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:207340

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#id)

#### Defined in

main.ts:207327

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#se)

#### Defined in

main.ts:207329

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:207331

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:207335

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:207353

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:207376

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListTasksReadyResultInfo`](AppDataAppleAppListTasksReadyResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppListTasksReadyResultInfo`](AppDataAppleAppListTasksReadyResultInfo.md)

#### Defined in

main.ts:207369
