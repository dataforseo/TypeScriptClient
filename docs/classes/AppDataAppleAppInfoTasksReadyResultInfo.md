[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppleAppInfoTasksReadyResultInfo

# Class: AppDataAppleAppInfoTasksReadyResultInfo

## Implements

- [`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppInfoTasksReadyResultInfo()

> **new AppDataAppleAppInfoTasksReadyResultInfo**(`data`?): [`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md)

#### Returns

[`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:193972

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:193961

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Info task

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:193965

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:193968

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#id)

#### Defined in

main.ts:193955

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#se)

#### Defined in

main.ts:193957

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:193959

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:193963

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:193981

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:194004

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppInfoTasksReadyResultInfo`](AppDataAppleAppInfoTasksReadyResultInfo.md)

#### Defined in

main.ts:193997
