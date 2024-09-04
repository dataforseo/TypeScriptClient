[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppleLocationsResultInfo

# Class: AppDataAppleLocationsResultInfo

## Implements

- [`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleLocationsResultInfo()

> **new AppDataAppleLocationsResultInfo**(`data`?): [`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Parameters

• **data?**: [`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md)

#### Returns

[`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Defined in

main.ts:192488

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`country_iso_code`](../interfaces/IAppDataAppleLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:192482

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_code`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_code)

#### Defined in

main.ts:192469

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_name`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_name)

#### Defined in

main.ts:192471

***

### location\_name\_parent?

> `optional` **location\_name\_parent**: `number`

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

#### Defined in

main.ts:192480

***

### location\_type?

> `optional` **location\_type**: `string`

location type

#### Implementation of

[`IAppDataAppleLocationsResultInfo`](../interfaces/IAppDataAppleLocationsResultInfo.md).[`location_type`](../interfaces/IAppDataAppleLocationsResultInfo.md#location_type)

#### Defined in

main.ts:192484

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:192497

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:192518

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleLocationsResultInfo`](AppDataAppleLocationsResultInfo.md)

#### Defined in

main.ts:192511
