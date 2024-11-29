[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageForceStopRequestInfo

# Class: OnPageForceStopRequestInfo

## Implements

- [`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageForceStopRequestInfo()

> **new OnPageForceStopRequestInfo**(`data`?): [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Parameters

##### data?

[`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md)

#### Returns

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Defined in

main.ts:163627

## Properties

### id?

> `optional` **id**: `string`

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”
note: you can set up to 1000 id values as separate objects in the POST array

#### Implementation of

[`IOnPageForceStopRequestInfo`](../interfaces/IOnPageForceStopRequestInfo.md).[`id`](../interfaces/IOnPageForceStopRequestInfo.md#id)

#### Defined in

main.ts:163623

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:163636

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:163653

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`OnPageForceStopRequestInfo`](OnPageForceStopRequestInfo.md)

#### Defined in

main.ts:163646
