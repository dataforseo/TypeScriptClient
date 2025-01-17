[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageForceStopRequestInfo

# Class: OnPageForceStopRequestInfo

Defined in: main.ts:163684

## Implements

- [`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageForceStopRequestInfo()

> **new OnPageForceStopRequestInfo**(`data`?): [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

Defined in: main.ts:163695

#### Parameters

##### data?

[`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md)

#### Returns

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:163691

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”
note: you can set up to 1000 id values as separate objects in the POST array

#### Implementation of

[`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md).[`id`](../interfaces/IOnPageForceStopRequestInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:163704

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:163721

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

Defined in: main.ts:163714

#### Parameters

##### data

`any`

#### Returns

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)
