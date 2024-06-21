**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BaseAppDataSerpElementItem

# Class: BaseAppDataSerpElementItem

## Extended by

- [`AppDataGooglePlaySearchOrganicSerpElementItem`](AppDataGooglePlaySearchOrganicSerpElementItem.md)
- [`AppDataAppStoreSearchOrganicSerpElementItem`](AppDataAppStoreSearchOrganicSerpElementItem.md)
- [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)
- [`AppDataGooglePlayReviewsSearchSerpElementItem`](AppDataGooglePlayReviewsSearchSerpElementItem.md)
- [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)
- [`AppDataAppStoreReviewsSearchSerpElementItem`](AppDataAppStoreReviewsSearchSerpElementItem.md)

## Implements

- [`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BaseAppDataSerpElementItem(data)

> **new BaseAppDataSerpElementItem**(`data`?): [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md)

#### Returns

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Source

main.ts:21194

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Source

main.ts:21192

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21204

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21250

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Source

main.ts:21213
