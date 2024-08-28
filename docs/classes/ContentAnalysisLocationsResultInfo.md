[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ContentAnalysisLocationsResultInfo

# Class: ContentAnalysisLocationsResultInfo

## Implements

- [`IContentAnalysisLocationsResultInfo`](../interfaces/IContentAnalysisLocationsResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentAnalysisLocationsResultInfo()

> **new ContentAnalysisLocationsResultInfo**(`data`?): [`ContentAnalysisLocationsResultInfo`](ContentAnalysisLocationsResultInfo.md)

#### Parameters

• **data?**: [`IContentAnalysisLocationsResultInfo`](../interfaces/IContentAnalysisLocationsResultInfo.md)

#### Returns

[`ContentAnalysisLocationsResultInfo`](ContentAnalysisLocationsResultInfo.md)

#### Defined in

main.ts:169256

## Properties

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

ISO country code of the location

#### Implementation of

[`IContentAnalysisLocationsResultInfo`](../interfaces/IContentAnalysisLocationsResultInfo.md).[`country_iso_code`](../interfaces/IContentAnalysisLocationsResultInfo.md#country_iso_code)

#### Defined in

main.ts:169252

***

### location\_name?

> `optional` **location\_name**: `string`

full name of the location

#### Implementation of

[`IContentAnalysisLocationsResultInfo`](../interfaces/IContentAnalysisLocationsResultInfo.md).[`location_name`](../interfaces/IContentAnalysisLocationsResultInfo.md#location_name)

#### Defined in

main.ts:169250

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:169265

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:169283

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentAnalysisLocationsResultInfo`](ContentAnalysisLocationsResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentAnalysisLocationsResultInfo`](ContentAnalysisLocationsResultInfo.md)

#### Defined in

main.ts:169276
