**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataTasksReadyResultInfo

# Class: AppDataTasksReadyResultInfo

## Implements

- [`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataTasksReadyResultInfo(data)

> **new AppDataTasksReadyResultInfo**(`data`?): [`AppDataTasksReadyResultInfo`](AppDataTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md)

#### Returns

[`AppDataTasksReadyResultInfo`](AppDataTasksReadyResultInfo.md)

#### Source

main.ts:186924

## Properties

### date\_posted?

> **`optional`** **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataTasksReadyResultInfo.md#date_posted)

#### Source

main.ts:186913

***

### endpoint\_advanced?

> **`optional`** **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Reviews task

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataTasksReadyResultInfo.md#endpoint_advanced)

#### Source

main.ts:186917

***

### endpoint\_html?

> **`optional`** **endpoint\_html**: `string`

URL for collecting the results of the Apple App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataTasksReadyResultInfo.md#endpoint_html)

#### Source

main.ts:186920

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataTasksReadyResultInfo.md#id)

#### Source

main.ts:186907

***

### se?

> **`optional`** **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataTasksReadyResultInfo.md#se)

#### Source

main.ts:186909

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataTasksReadyResultInfo.md#se_type)

#### Source

main.ts:186911

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataTasksReadyResultInfo.md#tag)

#### Source

main.ts:186915

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:186933

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:186956

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataTasksReadyResultInfo`](AppDataTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataTasksReadyResultInfo`](AppDataTasksReadyResultInfo.md)

#### Source

main.ts:186949
