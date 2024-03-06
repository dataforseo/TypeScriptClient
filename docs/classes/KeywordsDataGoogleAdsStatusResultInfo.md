[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / KeywordsDataGoogleAdsStatusResultInfo

# Class: KeywordsDataGoogleAdsStatusResultInfo

## Implements

- [`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](KeywordsDataGoogleAdsStatusResultInfo.md#constructor)

### Properties

- [actual\_data](KeywordsDataGoogleAdsStatusResultInfo.md#actual_data)
- [date\_update](KeywordsDataGoogleAdsStatusResultInfo.md#date_update)
- [last\_month\_in\_monthly\_searches](KeywordsDataGoogleAdsStatusResultInfo.md#last_month_in_monthly_searches)
- [last\_year\_in\_monthly\_searches](KeywordsDataGoogleAdsStatusResultInfo.md#last_year_in_monthly_searches)

### Methods

- [init](KeywordsDataGoogleAdsStatusResultInfo.md#init)
- [toJSON](KeywordsDataGoogleAdsStatusResultInfo.md#tojson)
- [fromJS](KeywordsDataGoogleAdsStatusResultInfo.md#fromjs)

## Constructors

### constructor

• **new KeywordsDataGoogleAdsStatusResultInfo**(`data?`): [`KeywordsDataGoogleAdsStatusResultInfo`](KeywordsDataGoogleAdsStatusResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IKeywordsDataGoogleAdsStatusResultInfo`](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md) |

#### Returns

[`KeywordsDataGoogleAdsStatusResultInfo`](KeywordsDataGoogleAdsStatusResultInfo.md)

#### Defined in

[main.ts:112926](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112926)

## Properties

### actual\_data

• `Optional` **actual\_data**: `boolean`

indicates whether Google updated keyword data for the previous month
generally, Google updates keyword data in the middle of the month
if the value is true, Google currently provides up-to-date data for the previous month
if the value is false, we are not able to provide data for the previous month

#### Implementation of

[IKeywordsDataGoogleAdsStatusResultInfo](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[actual_data](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#actual_data)

#### Defined in

[main.ts:112913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112913)

___


### date\_update

• `Optional` **date\_update**: `string`

date of the latest update of Google Ads data
indicates the latest date when Google updated search volume, CPC, and other keyword metrics
example:
2020-05-15

#### Implementation of

[IKeywordsDataGoogleAdsStatusResultInfo](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[date_update](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#date_update)

#### Defined in

[main.ts:112918](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112918)

___


### last\_month\_in\_monthly\_searches

• `Optional` **last\_month\_in\_monthly\_searches**: `number`

the latest month for which search volume data is available

#### Implementation of

[IKeywordsDataGoogleAdsStatusResultInfo](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[last_month_in_monthly_searches](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#last_month_in_monthly_searches)

#### Defined in

[main.ts:112922](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112922)

___


### last\_year\_in\_monthly\_searches

• `Optional` **last\_year\_in\_monthly\_searches**: `number`

the latest year for which search volume data is available

#### Implementation of

[IKeywordsDataGoogleAdsStatusResultInfo](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md).[last_year_in_monthly_searches](../interfaces/IKeywordsDataGoogleAdsStatusResultInfo.md#last_year_in_monthly_searches)

#### Defined in

[main.ts:112920](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112920)

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

[main.ts:112935](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112935)

___


### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

[main.ts:112955](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112955)

___


### fromJS

▸ **fromJS**(`data`): [`KeywordsDataGoogleAdsStatusResultInfo`](KeywordsDataGoogleAdsStatusResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`KeywordsDataGoogleAdsStatusResultInfo`](KeywordsDataGoogleAdsStatusResultInfo.md)

#### Defined in

[main.ts:112948](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112948)

[root](./../../ "root") / [docs](./../ "docs") / [classes](./ "classes")

[[Back to README.md]](./../../README.md "[Back to README.md]")