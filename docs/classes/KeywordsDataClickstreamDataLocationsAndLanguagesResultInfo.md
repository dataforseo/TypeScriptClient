[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

# Class: KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

## Implements

- [`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo()

> **new KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo**(`data`?): [`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

#### Returns

[`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

#### Defined in

main.ts:147362

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](AvailableLanguages.md)[]

supported languages
contains the languages which are supported for a specific location

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`available_languages`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#available_languages)

#### Defined in

main.ts:147358

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#country_iso_code)

#### Defined in

main.ts:147351

***

### location\_code?

> `optional` **location\_code**: `number`

location code

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_code)

#### Defined in

main.ts:147344

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_code_parent)

#### Defined in

main.ts:147349

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_name`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_name)

#### Defined in

main.ts:147346

***

### location\_type?

> `optional` **location\_type**: `string`

location type
possible values:
Country

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_type`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_type)

#### Defined in

main.ts:147355

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:147371

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:147397

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

#### Defined in

main.ts:147390
