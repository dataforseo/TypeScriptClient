[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo

# Class: KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo()

> **new KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Defined in

main.ts:133895

## Properties

### available\_locations?

> `optional` **available\_locations**: [`AvailableLocations`](AvailableLocations.md)[]

array of available locations for a certain language

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md).[`available_locations`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md#available_locations)

#### Defined in

main.ts:133891

***

### language\_code?

> `optional` **language\_code**: `string`

language code according to ISO 639-1

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md#language_code)

#### Defined in

main.ts:133889

***

### language\_name?

> `optional` **language\_name**: `string`

language name

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md).[`language_name`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md#language_name)

#### Defined in

main.ts:133887

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:133904

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:133927

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Defined in

main.ts:133920
