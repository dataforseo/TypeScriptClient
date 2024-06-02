**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageForceStopRequestInfo

# Class: OnPageForceStopRequestInfo

## Implements

- [`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageForceStopRequestInfo(data)

> **new OnPageForceStopRequestInfo**(`data`?): [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Parameters

• **data?**: [`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md)

#### Returns

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Source

main.ts:149432

## Properties

### id?

> **`optional`** **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”
note: you can set up to 1000 id values as separate objects in the POST array

#### Implementation of

[`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md).[`id`](../interfaces/IOnPageForceStopRequestInfo.md#id)

#### Source

main.ts:149428

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:149441

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:149458

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Source

main.ts:149451
