[**Documentation**](../README.md)

***

[Documentation](../README.md) / GpsCoordinatesLocationInfo

# Class: GpsCoordinatesLocationInfo

## Implements

- [`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GpsCoordinatesLocationInfo()

> **new GpsCoordinatesLocationInfo**(`data`?): [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Parameters

##### data?

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md)

#### Returns

[`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Defined in

main.ts:216856

## Properties

### latitude?

> `optional` **latitude**: `number`

latitude coordinate of the hotel in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md).[`latitude`](../interfaces/IGpsCoordinatesLocationInfo.md#latitude)

#### Defined in

main.ts:216848

***

### longitude?

> `optional` **longitude**: `number`

longitude coordinate of the hotel in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md).[`longitude`](../interfaces/IGpsCoordinatesLocationInfo.md#longitude)

#### Defined in

main.ts:216852

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:216865

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:216883

***

### fromJS()

> `static` **fromJS**(`data`): [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Defined in

main.ts:216876
