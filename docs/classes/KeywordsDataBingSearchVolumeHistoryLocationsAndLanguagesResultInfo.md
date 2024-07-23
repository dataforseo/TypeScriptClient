**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo

# Class: KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo

## Implements

- [`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo(data)

> **new KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo**(`data`?): [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Source

main.ts:137170

## Properties

### available\_locations?

> **`optional`** **available\_locations**: [`AvailableLocations`](AvailableLocations.md)[]

array of available locations for a certain language

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md).[`available_locations`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md#available_locations)

#### Source

main.ts:137166

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code according to ISO 639-1

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md).[`language_code`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md#language_code)

#### Source

main.ts:137164

***

### language\_name?

> **`optional`** **language\_name**: `string`

language name

#### Implementation of

[`IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md).[`language_name`](../interfaces/IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md#language_name)

#### Source

main.ts:137162

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:137179

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:137202

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo`](KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.md)

#### Source

main.ts:137195
