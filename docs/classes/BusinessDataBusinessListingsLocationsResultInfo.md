[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BusinessDataBusinessListingsLocationsResultInfo

# Class: BusinessDataBusinessListingsLocationsResultInfo

## Implements

- [`IBusinessDataBusinessListingsLocationsResultInfo`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataBusinessListingsLocationsResultInfo()

> **new BusinessDataBusinessListingsLocationsResultInfo**(`data`?): [`BusinessDataBusinessListingsLocationsResultInfo`](BusinessDataBusinessListingsLocationsResultInfo.md)

#### Parameters

• **data?**: [`IBusinessDataBusinessListingsLocationsResultInfo`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md)

#### Returns

[`BusinessDataBusinessListingsLocationsResultInfo`](BusinessDataBusinessListingsLocationsResultInfo.md)

#### Defined in

main.ts:202245

## Properties

### business\_count?

> `optional` **business\_count**: `number`

number of businesses in this location in our database

#### Implementation of

[`IBusinessDataBusinessListingsLocationsResultInfo`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md).[`business_count`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md#business_count)

#### Defined in

main.ts:202241

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IBusinessDataBusinessListingsLocationsResultInfo`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md).[`country_iso_code`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:202239

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IBusinessDataBusinessListingsLocationsResultInfo`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md).[`location_name`](../interfaces/IBusinessDataBusinessListingsLocationsResultInfo.md#location_name)

#### Defined in

main.ts:202237

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:202254

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:202273

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataBusinessListingsLocationsResultInfo`](BusinessDataBusinessListingsLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataBusinessListingsLocationsResultInfo`](BusinessDataBusinessListingsLocationsResultInfo.md)

#### Defined in

main.ts:202266
