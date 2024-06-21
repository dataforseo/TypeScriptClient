**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageLighthouseTasksReadyResultInfo

# Class: OnPageLighthouseTasksReadyResultInfo

## Implements

- [`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageLighthouseTasksReadyResultInfo(data)

> **new OnPageLighthouseTasksReadyResultInfo**(`data`?): [`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Parameters

• **data?**: [`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md)

#### Returns

[`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Source

main.ts:163382

## Properties

### endpoint\_json?

> **`optional`** **endpoint\_json**: `string`

URL for collecting the results of the OnPage Lighthouse JSON task

#### Implementation of

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[`endpoint_json`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#endpoint_json)

#### Source

main.ts:163378

***

### id?

> **`optional`** **id**: `string`

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[`id`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#id)

#### Source

main.ts:163374

***

### tag?

> **`optional`** **tag**: `string`

user-defined task identifier

#### Implementation of

[`IOnPageLighthouseTasksReadyResultInfo`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md).[`tag`](../interfaces/IOnPageLighthouseTasksReadyResultInfo.md#tag)

#### Source

main.ts:163376

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:163391

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:163410

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageLighthouseTasksReadyResultInfo`](OnPageLighthouseTasksReadyResultInfo.md)

#### Source

main.ts:163403
