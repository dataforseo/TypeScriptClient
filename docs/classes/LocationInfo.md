[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocationInfo

# Class: LocationInfo

Defined in: main.ts:48839

## Implements

- [`ILocationInfo`](../interfaces/ILocationInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new LocationInfo()

> **new LocationInfo**(`data`?): [`LocationInfo`](LocationInfo.md)

Defined in: main.ts:48854

#### Parameters

##### data?

[`ILocationInfo`](../interfaces/ILocationInfo.md)

#### Returns

[`LocationInfo`](LocationInfo.md)

## Properties

### address?

> `optional` **address**: `string`

Defined in: main.ts:48843

address of the event’s venue

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`address`](../interfaces/ILocationInfo.md#address)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:48848

google-defined client id
can be used with Google Reviews API to get a full list of reviews

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`cid`](../interfaces/ILocationInfo.md#cid)

***

### feature\_id?

> `optional` **feature\_id**: `string`

Defined in: main.ts:48850

the unique identifier of the element in SERP

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`feature_id`](../interfaces/ILocationInfo.md#feature_id)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:48841

name of the event’s venue

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`name`](../interfaces/ILocationInfo.md#name)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:48845

search URL with refinement parameters

#### Implementation of

[`ILocationInfo`](../interfaces/ILocationInfo.md).[`url`](../interfaces/ILocationInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:48863

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:48884

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`LocationInfo`](LocationInfo.md)

Defined in: main.ts:48877

#### Parameters

##### data

`any`

#### Returns

[`LocationInfo`](LocationInfo.md)
