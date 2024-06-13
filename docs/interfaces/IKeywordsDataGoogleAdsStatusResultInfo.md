**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IKeywordsDataGoogleAdsStatusResultInfo

# Interface: IKeywordsDataGoogleAdsStatusResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### actual\_data?

> **`optional`** **actual\_data**: `boolean`

indicates whether Google updated keyword data for the previous month
generally, Google updates keyword data in the middle of the month
if the value is true, Google currently provides up-to-date data for the previous month
if the value is false, we are not able to provide data for the previous month

#### Source

main.ts:116980

***

### date\_update?

> **`optional`** **date\_update**: `string`

date of the latest update of Google Ads data
indicates the latest date when Google updated search volume, CPC, and other keyword metrics
example:
2020-05-15

#### Source

main.ts:116985

***

### last\_month\_in\_monthly\_searches?

> **`optional`** **last\_month\_in\_monthly\_searches**: `number`

the latest month for which search volume data is available

#### Source

main.ts:116989

***

### last\_year\_in\_monthly\_searches?

> **`optional`** **last\_year\_in\_monthly\_searches**: `number`

the latest year for which search volume data is available

#### Source

main.ts:116987
