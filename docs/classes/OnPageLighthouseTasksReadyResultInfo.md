[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / OnPageLighthouseTasksReadyResultInfo

# Class: OnPageLighthouseTasksReadyResultInfo

## Implements

- [`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseTasksReadyResultInfo()

> **new OnPageLighthouseTasksReadyResultInfo**(`data`?): [`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md)

#### Returns

[`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Defined in

main.ts:164085

## Properties

### endpoint\_json?

> `optional` **endpoint\_json**: `string`

URL for collecting the results of the OnPage Lighthouse JSON task

#### Implementation of

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[`endpoint_json`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#endpoint_json)

#### Defined in

main.ts:164081

***

### id?

> `optional` **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[`id`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#id)

#### Defined in

main.ts:164077

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier

#### Implementation of

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[`tag`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#tag)

#### Defined in

main.ts:164079

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:164094

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:164113

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Defined in

main.ts:164106
