[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

# Class: KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo

Defined in: main.ts:147574

## Implements

- [`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo()

> **new KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo**(`data`?): [`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

Defined in: main.ts:147594

#### Parameters

##### data?

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

#### Returns

[`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

## Properties

### available\_languages?

> `optional` **available\_languages**: [`AvailableLanguages`](AvailableLanguages.md)[]

Defined in: main.ts:147590

supported languages
contains the languages which are supported for a specific location

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`available_languages`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#available_languages)

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:147583

ISO country code of the location

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`country_iso_code`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#country_iso_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:147576

location code

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_code`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_code)

***

### location\_code\_parent?

> `optional` **location\_code\_parent**: `number`

Defined in: main.ts:147581

the code of the superordinate location
the value will be null as Country is the only supported location_type for this API

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_code_parent`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_code_parent)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:147578

full name of the location

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_name`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_name)

***

### location\_type?

> `optional` **location\_type**: `string`

Defined in: main.ts:147587

location type
possible values:
Country

#### Implementation of

[`IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md).[`location_type`](../interfaces/IKeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md#location_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:147603

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:147629

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)

Defined in: main.ts:147622

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo`](KeywordsDataClickstreamDataLocationsAndLanguagesResultInfo.md)
