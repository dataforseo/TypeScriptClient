**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsStatusResultInfo

# Class: KeywordsDataGoogleAdsStatusResultInfo

## Implements

- [`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsStatusResultInfo(data)

> **new KeywordsDataGoogleAdsStatusResultInfo**(`data`?): [`KeywordsDataGoogleAdsStatusResultInfo`](KeywordsDataGoogleAdsStatusResultInfo.md)

#### Parameters

• **data?**: [`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md)

#### Returns

[`KeywordsDataGoogleAdsStatusResultInfo`](KeywordsDataGoogleAdsStatusResultInfo.md)

#### Source

main.ts:115461

## Properties

### actual\_data?

> **`optional`** **actual\_data**: `boolean`

indicates whether Google updated keyword data for the previous month
generally, Google updates keyword data in the middle of the month
if the value is true, Google currently provides up-to-date data for the previous month
if the value is false, we are not able to provide data for the previous month

#### Implementation of

[`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[`actual_data`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#actual_data)

#### Source

main.ts:115448

***

### date\_update?

> **`optional`** **date\_update**: `string`

date of the latest update of Google Ads data
indicates the latest date when Google updated search volume, CPC, and other keyword metrics
example:
2020-05-15

#### Implementation of

[`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[`date_update`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#date_update)

#### Source

main.ts:115453

***

### last\_month\_in\_monthly\_searches?

> **`optional`** **last\_month\_in\_monthly\_searches**: `number`

the latest month for which search volume data is available

#### Implementation of

[`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[`last_month_in_monthly_searches`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#last_month_in_monthly_searches)

#### Source

main.ts:115457

***

### last\_year\_in\_monthly\_searches?

> **`optional`** **last\_year\_in\_monthly\_searches**: `number`

the latest year for which search volume data is available

#### Implementation of

[`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[`last_year_in_monthly_searches`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#last_year_in_monthly_searches)

#### Source

main.ts:115455

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:115470

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:115490

***

### fromJS()

> **`static`** **fromJS**(`data`): [`KeywordsDataGoogleAdsStatusResultInfo`](KeywordsDataGoogleAdsStatusResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`KeywordsDataGoogleAdsStatusResultInfo`](KeywordsDataGoogleAdsStatusResultInfo.md)

#### Source

main.ts:115483
