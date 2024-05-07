**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataYelpLocationsResultInfo

# Class: BusinessDataYelpLocationsResultInfo

## Implements

- [`IBusinessDataYelpLocationsResultInfo`](../interfaces/IBusinessDataYelpLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataYelpLocationsResultInfo(data)

> **new BusinessDataYelpLocationsResultInfo**(`data`?): [`BusinessDataYelpLocationsResultInfo`](BusinessDataYelpLocationsResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataYelpLocationsResultInfo`](../interfaces/IBusinessDataYelpLocationsResultInfo.md)

#### Returns

[`BusinessDataYelpLocationsResultInfo`](BusinessDataYelpLocationsResultInfo.md)

#### Source

main.ts:211622

## Properties

### country\_iso\_code?

> **`optional`** **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IBusinessDataYelpLocationsResultInfo`](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataYelpLocationsResultInfo.md#country_iso_code)

#### Source

main.ts:211616

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code

#### Implementation of

[`IBusinessDataYelpLocationsResultInfo`](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[`location_code`](../interfaces/IBusinessDataYelpLocationsResultInfo.md#location_code)

#### Source

main.ts:211606

***

### location\_name?

> **`optional`** **location\_name**: `string`

full name of the location

#### Implementation of

[`IBusinessDataYelpLocationsResultInfo`](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[`location_name`](../interfaces/IBusinessDataYelpLocationsResultInfo.md#location_name)

#### Source

main.ts:211608

***

### location\_name\_parent?

> **`optional`** **location\_name\_parent**: `string`

the name of the superordinate location
example:
"location_code": 9041134,
"location_name": "Vienna International Airport,Lower Austria,Austria",
"location_name_parent": "Lower Austria,Austria"

#### Implementation of

[`IBusinessDataYelpLocationsResultInfo`](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[`location_name_parent`](../interfaces/IBusinessDataYelpLocationsResultInfo.md#location_name_parent)

#### Source

main.ts:211614

***

### location\_type?

> **`optional`** **location\_type**: `string`

location type

#### Implementation of

[`IBusinessDataYelpLocationsResultInfo`](../interfaces/IBusinessDataYelpLocationsResultInfo.md).[`location_type`](../interfaces/IBusinessDataYelpLocationsResultInfo.md#location_type)

#### Source

main.ts:211618

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:211631

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:211652

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataYelpLocationsResultInfo`](BusinessDataYelpLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataYelpLocationsResultInfo`](BusinessDataYelpLocationsResultInfo.md)

#### Source

main.ts:211645
