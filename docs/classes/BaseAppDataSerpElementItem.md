[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseAppDataSerpElementItem

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

### new BaseAppDataSerpElementItem()

> **new BaseAppDataSerpElementItem**(`data`?): [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseAppDataSerpElementItem`](../interfaces/IBaseAppDataSerpElementItem.md)

#### Returns

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Defined in

main.ts:21703

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:21701

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21713

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21759

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Defined in

main.ts:21722
