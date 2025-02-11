[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsLocationsAndLanguagesResultInfo

# Class: DataforseoLabsLocationsAndLanguagesResultInfo

Defined in: main.ts:91462

## Implements

- [`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsLocationsAndLanguagesResultInfo()

> **new DataforseoLabsLocationsAndLanguagesResultInfo**(`data`?): [`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

Defined in: main.ts:91482

#### Parameters

##### data?

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md)

#### Returns

[`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](AvailableLanguages.md)[]

Defined in: main.ts:91478

supported languages
contains the languages which are supported for a specific location

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`available_languages`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#available_languages)

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:91471

ISO country code of the location

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`country_iso_code`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:91464

location code

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:91469

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`location_code_parent`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:91466

full name of the location

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`location_name`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:91475

location type
possible values:
Country

#### Implementation of

[`IDataforseoLabsLocationsAndLanguagesResultInfo`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md).[`location_type`](../interfaces/IDataforseoLabsLocationsAndLanguagesResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:91491

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:91517

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)

Defined in: main.ts:91510

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsLocationsAndLanguagesResultInfo`](DataforseoLabsLocationsAndLanguagesResultInfo.md)
