**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataAppleLocationsResultInfo

# Class: AppDataAppleLocationsResultInfo

## Implements

- [`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleLocationsResultInfo(data)

> **new AppDataAppleLocationsResultInfo**(`data`?): [`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md)

#### Returns

[`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Source

main.ts:190560

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IAppDataAppleLocationsResultInfo.md#country_iso_code)

#### Source

main.ts:190554

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_code`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_code)

#### Source

main.ts:190541

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_name`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_name)

#### Source

main.ts:190543

***

### location\_name\_parent?

> **`optional`** **location\_name\_parent**: `number`

the name of the superordinate location
example:
"location_code": 1006473,
"location_name": "Altrincham,England,United Kingdom",
"location_name_parent": "England,United Kingdom", where location_name_parent corresponds to:
"location_code": 20339,
"location_name": "England,United Kingdom"
note: Apple App Data API currently supports countries only, that is why this value will always be null

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_name_parent`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_name_parent)

#### Source

main.ts:190552

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_type`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_type)

#### Source

main.ts:190556

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:190569

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:190590

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Source

main.ts:190583
