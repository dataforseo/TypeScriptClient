[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageLighthouseTasksReadyResultInfo

# Class: OnPageLighthouseTasksReadyResultInfo

Defined in: main.ts:176128

## Implements

- [`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseTasksReadyResultInfo()

> **new OnPageLighthouseTasksReadyResultInfo**(`data`?): [`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

Defined in: main.ts:176139

#### Parameters

##### data?

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md)

#### Returns

[`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

## Properties

### endpoint\_json?

> `optional` **endpoint\_json**: `string`

Defined in: main.ts:176135

URL for collecting the results of the OnPage Lighthouse JSON task

#### Implementation of

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[`endpoint_json`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#endpoint_json)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:176131

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[`id`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#id)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:176133

user-defined task identifier

#### Implementation of

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[`tag`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:176148

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:176167

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

Defined in: main.ts:176160

#### Parameters

##### data

`any`

#### Returns

[`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)
