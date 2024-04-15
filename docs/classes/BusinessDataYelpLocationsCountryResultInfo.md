**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataYelpLocationsCountryResultInfo

# Class: BusinessDataYelpLocationsCountryResultInfo

## Implements

- [`IBusinessDataYelpLocationsCountryResultInfo`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataYelpLocationsCountryResultInfo(data)

> **new BusinessDataYelpLocationsCountryResultInfo**(`data`?): [`BusinessDataYelpLocationsCountryResultInfo`](BusinessDataYelpLocationsCountryResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataYelpLocationsCountryResultInfo`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md)

#### Returns

[`BusinessDataYelpLocationsCountryResultInfo`](BusinessDataYelpLocationsCountryResultInfo.md)

#### Source

main.ts:208605

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IBusinessDataYelpLocationsCountryResultInfo`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#country_iso_code)

#### Source

main.ts:208599

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IBusinessDataYelpLocationsCountryResultInfo`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[`location_code`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#location_code)

#### Source

main.ts:208589

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IBusinessDataYelpLocationsCountryResultInfo`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[`location_name`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#location_name)

#### Source

main.ts:208591

***

### location\_name\_parent?

> **`optional`** **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataYelpLocationsCountryResultInfo`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#location_name_parent)

#### Source

main.ts:208597

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`IBusinessDataYelpLocationsCountryResultInfo`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md).[`location_type`](../interfaces/IBusinessDataYelpLocationsCountryResultInfo.md#location_type)

#### Source

main.ts:208601

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:208614

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:208635

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataYelpLocationsCountryResultInfo`](BusinessDataYelpLocationsCountryResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataYelpLocationsCountryResultInfo`](BusinessDataYelpLocationsCountryResultInfo.md)

#### Source

main.ts:208628
