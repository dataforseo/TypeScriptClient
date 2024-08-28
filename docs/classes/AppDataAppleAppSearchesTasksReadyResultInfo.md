[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AppDataAppleAppSearchesTasksReadyResultInfo

# Class: AppDataAppleAppSearchesTasksReadyResultInfo

## Implements

- [`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppSearchesTasksReadyResultInfo()

> **new AppDataAppleAppSearchesTasksReadyResultInfo**(`data`?): [`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Returns

[`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Defined in

main.ts:197741

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#date_posted)

#### Defined in

main.ts:197730

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

URL for collecting the results of the Apple App Searches task

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)

#### Defined in

main.ts:197734

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

URL for collecting the results of the Apple App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_html)

#### Defined in

main.ts:197737

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#id)

#### Defined in

main.ts:197724

***

### se?

> `optional` **se**: `string`

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#se)

#### Defined in

main.ts:197726

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#se_type)

#### Defined in

main.ts:197728

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:197732

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:197750

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:197773

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Defined in

main.ts:197766
