**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / GpsCoordinatesLocationInfo

# Class: GpsCoordinatesLocationInfo

## Implements

- [`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new GpsCoordinatesLocationInfo(data)

> **new GpsCoordinatesLocationInfo**(`data`?): [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Parameters

• **data?**: [`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md)

#### Returns

[`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Source

main.ts:203522

## Properties

### latitude?

> **`optional`** **latitude**: `number`

latitude coordinate of the hotel in google maps
example:
"latitude": 51.584091

#### Implementation of

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md).[`latitude`](../interfaces/IGpsCoordinatesLocationInfo.md#latitude)

#### Source

main.ts:203514

***

### longitude?

> **`optional`** **longitude**: `number`

longitude coordinate of the hotel in google maps
example:
"longitude": -0.31365919999999997

#### Implementation of

[`IGpsCoordinatesLocationInfo`](../interfaces/IGpsCoordinatesLocationInfo.md).[`longitude`](../interfaces/IGpsCoordinatesLocationInfo.md#longitude)

#### Source

main.ts:203518

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:203531

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:203549

***

### fromJS()

> **`static`** **fromJS**(`data`): [`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`GpsCoordinatesLocationInfo`](GpsCoordinatesLocationInfo.md)

#### Source

main.ts:203542
