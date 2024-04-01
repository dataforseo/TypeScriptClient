[Documentation](../README.md) / [Exports](../modules.md) / MerchantGoogleSellersAdUrlResultInfo

# Class: MerchantGoogleSellersAdUrlResultInfo

## Implements

- [`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](MerchantGoogleSellersAdUrlResultInfo.md#constructor)

### Properties

- [ad\_aclk](MerchantGoogleSellersAdUrlResultInfo.md#ad_aclk)
- [ad\_url](MerchantGoogleSellersAdUrlResultInfo.md#ad_url)
- [ad\_url\_redirects](MerchantGoogleSellersAdUrlResultInfo.md#ad_url_redirects)

### Methods

- [init](MerchantGoogleSellersAdUrlResultInfo.md#init)
- [toJSON](MerchantGoogleSellersAdUrlResultInfo.md#tojson)
- [fromJS](MerchantGoogleSellersAdUrlResultInfo.md#fromjs)

## Constructors

### constructor

• **new MerchantGoogleSellersAdUrlResultInfo**(`data?`): [`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IMerchantGoogleSellersAdUrlResultInfo`](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md) |

#### Returns

[`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Defined in

main.ts:175029

## Properties

### ad\_aclk

• `Optional` **ad\_aclk**: `string`

unique ad click referral parameter

#### Implementation of

[IMerchantGoogleSellersAdUrlResultInfo](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[ad_aclk](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_aclk)

#### Defined in

main.ts:175020

___

### ad\_url

• `Optional` **ad\_url**: `string`

full URL of the advertisement

#### Implementation of

[IMerchantGoogleSellersAdUrlResultInfo](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[ad_url](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url)

#### Defined in

main.ts:175022

___

### ad\_url\_redirects

• `Optional` **ad\_url\_redirects**: `string`[]

URLs where the link from Google Shopping redirects before reaching a final URL
includes up to 10 URLs of the ad’s redirect path to the seller’s ad_url

#### Implementation of

[IMerchantGoogleSellersAdUrlResultInfo](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md).[ad_url_redirects](../interfaces/IMerchantGoogleSellersAdUrlResultInfo.md#ad_url_redirects)

#### Defined in

main.ts:175025

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

main.ts:175038

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

main.ts:175061

___

### fromJS

▸ **fromJS**(`data`): [`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`MerchantGoogleSellersAdUrlResultInfo`](MerchantGoogleSellersAdUrlResultInfo.md)

#### Defined in

main.ts:175054
