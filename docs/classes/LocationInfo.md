[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / LocationInfo

# Class: LocationInfo

## Implements

- [`ILocationInfo`](../interfaces/ILocationInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new LocationInfo()

> **new LocationInfo**(`data`?): [`LocationInfo`](LocationInfo.md)

#### Parameters

• **data?**: [`ILocationInfo`](../interfaces/ILocationInfo.md)

#### Returns

[`LocationInfo`](LocationInfo.md)

#### Defined in

main.ts:46005

## Properties

### address?

> `optional` **address**: `string`

address of the event’s venue

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`address`](../interfaces/ILocationInfo.md#address)

#### Defined in

main.ts:45993

***

### cid?

> `optional` **cid**: `string`

google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`cid`](../interfaces/ILocationInfo.md#cid)

#### Defined in

main.ts:45999

***

### feature\_id?

> `optional` **feature\_id**: `string`

the unique identifier of the element in SERP

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`feature_id`](../interfaces/ILocationInfo.md#feature_id)

#### Defined in

main.ts:46001

***

### name?

> `optional` **name**: `string`

name of the event’s venue

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`name`](../interfaces/ILocationInfo.md#name)

#### Defined in

main.ts:45991

***

### url?

> `optional` **url**: `string`

URL to the event’s venue on google maps

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`url`](../interfaces/ILocationInfo.md#url)

#### Defined in

main.ts:45995

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:46014

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:46035

***

### fromJS()

> `static` **fromJS**(`data`): [`LocationInfo`](LocationInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`LocationInfo`](LocationInfo.md)

#### Defined in

main.ts:46028
