**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / LocationInfo

# Class: LocationInfo

## Implements

- [`ILocationInfo`](../interfaces/ILocationInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocationInfo(data)

> **new LocationInfo**(`data`?): [`LocationInfo`](LocationInfo.md)

#### Parameters

• **data?**: [`ILocationInfo`](../interfaces/ILocationInfo.md)

#### Returns

[`LocationInfo`](LocationInfo.md)

#### Source

main.ts:46369

## Properties

### address?

> **`optional`** **address**: `string`

address of the event’s venue

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`address`](../interfaces/ILocationInfo.md#address)

#### Source

main.ts:46357

***

### cid?

> **`optional`** **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`cid`](../interfaces/ILocationInfo.md#cid)

#### Source

main.ts:46363

***

### feature\_id?

> **`optional`** **feature\_id**: `string`

the unique identifier of the element in SERP

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`feature_id`](../interfaces/ILocationInfo.md#feature_id)

#### Source

main.ts:46365

***

### name?

> **`optional`** **name**: `string`

name of the event’s venue

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`name`](../interfaces/ILocationInfo.md#name)

#### Source

main.ts:46355

***

### url?

> **`optional`** **url**: `string`

URL to the event’s venue on google maps

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`url`](../interfaces/ILocationInfo.md#url)

#### Source

main.ts:46359

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:46378

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:46399

***

### fromJS()

> **`static`** **fromJS**(`data`): [`LocationInfo`](LocationInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocationInfo`](LocationInfo.md)

#### Source

main.ts:46392
