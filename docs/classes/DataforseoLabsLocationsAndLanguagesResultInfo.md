[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsLocationsAndLanguagesResultInfo

# Class: DataforseoLabsLocationsAndLanguagesResultInfo

## Implements

- [`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsLocationsAndLanguagesResultInfo()

> **new DataforseoLabsLocationsAndLanguagesResultInfo**(`data`?): [`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Returns

[`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Defined in

main.ts:81701

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](AvailableLanguages.md)[]

supported languages
contains the languages which are supported for a specific location

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`available_languages`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#available_languages)

#### Defined in

main.ts:81697

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`country_iso_code`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#country_iso_code)

#### Defined in

main.ts:81690

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_code)

#### Defined in

main.ts:81683

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`location_code_parent`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_code_parent)

#### Defined in

main.ts:81688

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`location_name`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_name)

#### Defined in

main.ts:81685

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values:
Country

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`location_type`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_type)

#### Defined in

main.ts:81694

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:81710

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:81736

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Defined in

main.ts:81729
