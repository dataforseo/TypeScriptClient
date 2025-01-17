[**Documentation**](../README.md)

***

[Documentation](../README.md) / GpsCoordinatesLocationInfo

# Class: GpsCoordinatesLocationInfo

Defined in: main.ts:216912

## Implements

- [`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GpsCoordinatesLocationInfo()

> **new GpsCoordinatesLocationInfo**(`data`?): [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

Defined in: main.ts:216924

#### Parameters

##### data?

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md)

#### Returns

[`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

## Properties

### latitude?

> `optional` **latitude**: `number`

Defined in: main.ts:216916

latitude coordinate of the hotel in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md).[`latitude`](../interfaces/IGpsCoordinatesLocationInfo.md#latitude)

***

### longitude?

> `optional` **longitude**: `number`

Defined in: main.ts:216920

longitude coordinate of the hotel in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md).[`longitude`](../interfaces/IGpsCoordinatesLocationInfo.md#longitude)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:216933

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:216951

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

Defined in: main.ts:216944

#### Parameters

##### data

`any`

#### Returns

[`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)
