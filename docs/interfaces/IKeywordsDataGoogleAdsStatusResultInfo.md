[Documentation](../README.md) / [Exports](../modules.md) / IKeywordsDataGoogleAdsStatusResultInfo

# Interface: IKeywordsDataGoogleAdsStatusResultInfo

## Implemented by

- [`KeywordsDataGoogleAdsStatusResultInfo`](../classes/KeywordsDataGoogleAdsStatusResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [actual\_data](IKeywordsDataGoogleAdsStatusResultInfo.md#actual_data)
- [date\_update](IKeywordsDataGoogleAdsStatusResultInfo.md#date_update)
- [last\_month\_in\_monthly\_searches](IKeywordsDataGoogleAdsStatusResultInfo.md#last_month_in_monthly_searches)
- [last\_year\_in\_monthly\_searches](IKeywordsDataGoogleAdsStatusResultInfo.md#last_year_in_monthly_searches)

## Properties

### actual\_data

• `Optional` **actual\_data**: `boolean`

indicates whether Google updated keyword data for the previous month
generally, Google updates keyword data in the middle of the month
if the value is true, Google currently provides up-to-date data for the previous month
if the value is false, we are not able to provide data for the previous month

#### Defined in

main.ts:113118

___

### date\_update

• `Optional` **date\_update**: `string`

date of the latest update of Google Ads data
indicates the latest date when Google updated search volume, CPC, and other keyword metrics
example:
2020-05-15

#### Defined in

main.ts:113123

___

### last\_month\_in\_monthly\_searches

• `Optional` **last\_month\_in\_monthly\_searches**: `number`

the latest month for which search volume data is available

#### Defined in

main.ts:113127

___

### last\_year\_in\_monthly\_searches

• `Optional` **last\_year\_in\_monthly\_searches**: `number`

the latest year for which search volume data is available

#### Defined in

main.ts:113125
